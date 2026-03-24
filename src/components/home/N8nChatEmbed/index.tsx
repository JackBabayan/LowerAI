"use client";

import { useEffect, useRef } from "react";

const DEFAULT_WEBHOOK =
  "https://n8anoobis.dedyn.io/webhook/52c88d13-f995-423a-8782-b8f633189263/chat";

const N8N_CHAT_STYLES_ID = "n8n-chat-styles";
const N8N_CHAT_STYLES_HREF = "/n8n-chat.css";

type N8nChatEmbedProps = {
  webhookUrl?: string;
  initialMessages: string[];
};

function ensureN8nChatStylesheet(): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();

  const existing = document.getElementById(N8N_CHAT_STYLES_ID) as HTMLLinkElement | null;
  if (existing?.sheet) return Promise.resolve();
  if (existing) {
    return new Promise((resolve) => {
      existing.addEventListener("load", () => resolve(), { once: true });
    });
  }

  return new Promise((resolve) => {
    const link = document.createElement("link");
    link.id = N8N_CHAT_STYLES_ID;
    link.rel = "stylesheet";
    link.href = N8N_CHAT_STYLES_HREF;
    link.addEventListener("load", () => resolve(), { once: true });
    document.head.appendChild(link);
  });
}

export function N8nChatEmbed({ webhookUrl, initialMessages }: N8nChatEmbedProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const url =
      webhookUrl ??
      process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL ??
      DEFAULT_WEBHOOK;

    let app: { unmount: () => void } | null = null;
    let cancelled = false;

    void (async () => {
      const [{ createChat }] = await Promise.all([
        import("@n8n/chat"),
        ensureN8nChatStylesheet(),
      ]);
      if (cancelled || !mountRef.current) return;
      app = createChat({
        webhookUrl: url,
        target: mountRef.current,
        mode: "fullscreen",
        loadPreviousSession: true,
        showWelcomeScreen: false,
        initialMessages,
        i18n: {
          en: {
            title: "",
            subtitle: "",
            footer: "",
            getStarted: "New Conversation",
            inputPlaceholder: "Type your question..",
            closeButtonTooltip: "Close chat",
          },
        },
      });
    })();

    return () => {
      cancelled = true;
      app?.unmount();
    };
  }, [webhookUrl, initialMessages]);

  return <div ref={mountRef} className="n8n-chat-root" />;
}
