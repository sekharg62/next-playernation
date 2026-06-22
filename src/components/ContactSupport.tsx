import { CONTACT_EMAIL } from "@/constants";

type ContactSupportProps = {
  mailtoSubject?: string;
};

export default function ContactSupport({
  mailtoSubject = "Player Nation - Support",
}: ContactSupportProps) {
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailtoSubject)}`;

  return (
    <div className="mx-auto mb-10 max-w-lg rounded-2xl border border-border bg-card/40 px-8 py-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] sm:mb-12 sm:px-12 sm:py-14">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-7 w-7 text-foreground"
          aria-hidden
        >
          <path
            d="M4 7.5l8 5.25L20 7.5M5.5 19h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0018.5 7h-13A1.5 1.5 0 004 8.5v9A1.5 1.5 0 005.5 19z"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2 className="mt-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Contact Support
      </h2>

      <p className="mx-auto mt-4 max-w-sm text-base leading-relaxed text-muted sm:text-lg">
        For support or questions, please email us directly. We&apos;re here to help.
      </p>

      <a
        href={mailtoHref}
        className="mt-8 inline-block text-lg font-semibold text-foreground underline underline-offset-4 transition-colors hover:text-primary sm:text-xl"
      >
        {CONTACT_EMAIL}
      </a>
    </div>
  );
}
