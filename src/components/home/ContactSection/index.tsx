"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import shared from "../shared/SharedLayout.module.scss";
import type { LocalizedContent } from "../types";
import styles from "./ContactSection.module.scss";

type ContactSectionProps = {
  content: LocalizedContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();

    setStatus("submitting");
    setFeedback("");

    try {
      const endpoint =
        process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ?? "/contact.php";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          company,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "Failed to send message.");
      }

      setStatus("success");
      setFeedback("Message sent successfully. We will get back to you soon.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section id="contact" className={`${shared.section} ${shared.sectionDark}`}>
      <div className={shared.container}>
        <h2>{content.contact.title}</h2>
        <p className={styles.contactLead}>{content.contact.subtitle}</p>
        <a className={styles.contactEmail} href={`mailto:${content.contact.email}`}>
          {content.contact.email}
        </a>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className={styles.honeypot}
            aria-hidden
          />
          <label>
            {content.labels.name}
            <input
              type="text"
              name="name"
              placeholder={content.contact.namePlaceholder}
              required
            />
          </label>
          <label>
            {content.labels.email}
            <input
              type="email"
              name="email"
              placeholder={content.contact.emailPlaceholder}
              required
            />
          </label>
          <label>
            {content.labels.message}
            <textarea
              name="message"
              rows={5}
              placeholder={content.contact.messagePlaceholder}
              required
            />
          </label>
          <button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : content.labels.submit}
          </button>
          {feedback ? (
            <p
              className={`${styles.formFeedback} ${
                status === "success" ? styles.formFeedbackSuccess : styles.formFeedbackError
              }`}
              role="status"
            >
              {feedback}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
