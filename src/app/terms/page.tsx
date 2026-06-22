import LegalPageLayout from "@/components/LegalPageLayout";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | PlayerNation",
  description: "Terms and conditions for using PlayerNation.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="June 19, 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of Player
        Nation, including our website, mobile applications, and related services
        (collectively, the &quot;Service&quot;), operated by Statmagic (&quot;we&quot;,
        &quot;us&quot;, or &quot;our&quot;).
      </p>
      <p>
        By accessing or using the Service, you agree to be bound by these Terms. If you
        do not agree, you may not use the Service.
      </p>

      <section>
        <h2>1. Eligibility</h2>
        <p>
          You must be at least 13 years old to use PlayerNation. If you are under 18, you
          represent that you have permission from a parent or legal guardian to use the
          Service. Parents and guardians are responsible for supervising minors&apos; use
          of the platform.
        </p>
      </section>

      <section>
        <h2>2. Your account</h2>
        <ul>
          <li>You are responsible for maintaining the confidentiality of your account credentials</li>
          <li>You agree to provide accurate and complete registration information</li>
          <li>You are responsible for all activity that occurs under your account</li>
          <li>Notify us immediately if you suspect unauthorized access to your account</li>
        </ul>
      </section>

      <section>
        <h2>3. Use of the Service</h2>
        <p>You agree to use PlayerNation only for lawful purposes. You may not:</p>
        <ul>
          <li>Upload content you do not have the right to share, including copyrighted match footage without permission</li>
          <li>Harass, abuse, or harm other users</li>
          <li>Attempt to reverse engineer, scrape, or disrupt the Service</li>
          <li>Use the Service to distribute malware or engage in fraudulent activity</li>
          <li>Misrepresent your identity or affiliation with a club, team, or organization</li>
        </ul>
      </section>

      <section>
        <h2>4. Content you upload</h2>
        <p>
          You retain ownership of match videos, images, and other content you upload
          (&quot;User Content&quot;). By uploading User Content, you grant us a
          non-exclusive, worldwide, royalty-free license to use, process, store, display,
          and distribute that content solely to operate and improve the Service — including
          generating stats, ratings, highlights, and insights.
        </p>
        <p>
          You represent that you have all necessary rights to upload User Content and that
          it does not violate any third-party rights or applicable laws.
        </p>
      </section>

      <section>
        <h2>5. Our intellectual property</h2>
        <p>
          The Service, including its design, software, branding, analytics models, and
          generated outputs (except your User Content), is owned by Statmagic and protected
          by intellectual property laws. You may not copy, modify, or distribute our
          proprietary materials without prior written consent.
        </p>
      </section>

      <section>
        <h2>6. Subscriptions and payments</h2>
        <p>
          Some features may require a paid subscription. Fees, billing cycles, and refund
          policies will be disclosed at the point of purchase. We reserve the right to
          change pricing with reasonable notice where required by law.
        </p>
      </section>

      <section>
        <h2>7. Disclaimers</h2>
        <p>
          The Service is provided &quot;as is&quot; and &quot;as available&quot; without
          warranties of any kind, whether express or implied. We do not guarantee that
          stats, ratings, or insights will be error-free or suitable for professional
          scouting decisions. PlayerNation is a development and engagement tool, not a
          substitute for professional coaching or official league statistics.
        </p>
      </section>

      <section>
        <h2>8. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Statmagic shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages arising from
          your use of the Service. Our total liability for any claim shall not exceed the
          amount you paid us in the twelve months preceding the claim, or one hundred
          dollars (USD), whichever is greater.
        </p>
      </section>

      <section>
        <h2>9. Termination</h2>
        <p>
          We may suspend or terminate your access to the Service at any time if you violate
          these Terms or if we discontinue the Service. You may delete your account at any
          time. Provisions that by their nature should survive termination will remain in
          effect.
        </p>
      </section>

      <section>
        <h2>10. Governing law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with applicable
          laws, without regard to conflict of law principles. Any disputes shall be
          resolved in the courts of the jurisdiction in which Statmagic is established,
          unless otherwise required by mandatory local law.
        </p>
      </section>

      <section>
        <h2>11. Changes to these Terms</h2>
        <p>
          We may modify these Terms at any time. We will post the updated Terms on this
          page and update the &quot;Last updated&quot; date. Your continued use of the
          Service after changes take effect constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2>12. Contact us</h2>
        <p>
          For questions about these Terms, contact us at{" "}
          <a
            href="mailto:play@statmagic.xyz"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            play@statmagic.xyz
          </a>
          . See also our{" "}
          <Link
            href="/privacy"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
