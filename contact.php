<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'message' => 'Method not allowed.',
    ]);
    exit;
}

$rawInput = file_get_contents('php://input');
$json = json_decode($rawInput ?? '', true);

$data = is_array($json) ? $json : $_POST;

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Please fill all required fields.',
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Please provide a valid email address.',
    ]);
    exit;
}

$to = 'info@noctuatech.org';
$subject = 'Noctua Tech website inquiry';

$safeName = strip_tags($name);
$safeEmail = strip_tags($email);
$safeMessage = strip_tags($message);
$submittedAt = date('Y-m-d H:i:s');
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';

$body = "New contact form submission\n\n";
$body .= "Name: {$safeName}\n";
$body .= "Email: {$safeEmail}\n";
$body .= "Submitted at: {$submittedAt}\n";
$body .= "IP: {$ip}\n";
$body .= "User-Agent: {$userAgent}\n\n";
$body .= "Message:\n{$safeMessage}\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: Noctua Tech <no-reply@noctuatech.org>';
$headers[] = "Reply-To: {$safeEmail}";
$headersString = implode("\r\n", $headers);

$sent = mail($to, $subject, $body, $headersString);

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Failed to send message. Please try again later.',
    ]);
    exit;
}

echo json_encode([
    'ok' => true,
    'message' => 'Message sent successfully.',
]);
