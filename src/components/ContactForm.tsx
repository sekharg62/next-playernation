"use client";

import { TURNSTILE_SITE_KEY } from "@/constants";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { FormEvent, useRef, useState } from "react";

const CONTACT_EMAIL = "play@statmagic.xyz";

type ContactFormProps = {
  subject: string;
  heading?: string;
  description?: string;
};

const inputClassName =
  "mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-primary/50 focus:ring-1 focus:ring-primary/30";

export default function ContactForm({
  subject,
  heading = "Send us a message",
  description = "Fill out the form below and we'll get back to you as soon as we can.",
}: ContactFormProps) {
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    message.trim().length > 0 &&
    captchaToken !== null &&
    !isSubmitting;

  const resetCaptcha = () => {
    setCaptchaToken(null);
    turnstileRef.current?.reset();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!captchaToken) {
      setError("Please complete the captcha.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject,
          captchaToken,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        resetCaptcha();
        return;
      }

      setSubmitted(true);
      resetCaptcha();
    } catch {
      setError("Something went wrong. Please try again.");
      resetCaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
        <p className="font-semibold text-foreground">Thank you!</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          We&apos;ve received your message and will get back to you soon. You can
          also reach us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-foreground">{heading}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className={inputClassName}
            required
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell us a bit about what you're looking for..."
            className={`${inputClassName} resize-y min-h-[120px]`}
            required
          />
        </div>

        <div>
          {TURNSTILE_SITE_KEY ? (
            <Turnstile
              ref={turnstileRef}
              siteKey={TURNSTILE_SITE_KEY}
              onSuccess={setCaptchaToken}
              onExpire={resetCaptcha}
              onError={resetCaptcha}
              options={{
                theme: "dark",
                size: "normal",
                appearance: "always",
              }}
            />
          ) : (
            <p className="text-sm text-red-400" role="alert">
              Captcha is not configured. Set NEXT_PUBLIC_TURNSTILE_SITE_KEY.
            </p>
          )}
        </div>

        {error ? (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
