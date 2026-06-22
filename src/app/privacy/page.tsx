import LegalPageLayout from "@/components/LegalPageLayout";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | PlayerNation",
  description: "How PlayerNation collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="June 19, 2026">
      <p>
        PlayerNation (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is operated by
        Statmagic. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you use our website, mobile applications, and
        related services (collectively, the &quot;Service&quot;).
      </p>
      <p>
        By using PlayerNation, you agree to the collection and use of information in
        accordance with this policy. If you do not agree, please do not use the Service.
      </p>

      <section>
        <h2>1. Information we collect</h2>
        <h3>Information you provide</h3>
        <ul>
          <li>Account details such as name, email address, and profile information</li>
          <li>Match videos and related content you upload for analysis</li>
          <li>Communications you send to us, including support requests</li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>Device information, browser type, and operating system</li>
          <li>Usage data such as pages viewed, features used, and session duration</li>
          <li>IP address and general location data</li>
          <li>Cookies and similar tracking technologies (see Section 6)</li>
        </ul>
      </section>

      <section>
        <h2>2. How we use your information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide match analysis, stats, ratings, highlights, and other core features</li>
          <li>Create and maintain your account and player profile</li>
          <li>Improve, personalize, and develop the Service</li>
          <li>Communicate with you about updates, support, and promotional content</li>
          <li>Monitor usage, detect fraud, and maintain security</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>3. How we share your information</h2>
        <p>
          We do not sell your personal information. We may share information with:
        </p>
        <ul>
          <li>
            Service providers who help us operate the platform (hosting, analytics,
            payment processing, and customer support)
          </li>
          <li>
            Other users when you choose to share profiles, highlights, or stats publicly
          </li>
          <li>Coaches, clubs, or parents you explicitly connect with through the app</li>
          <li>Authorities when required by law or to protect our rights and users</li>
        </ul>
      </section>

      <section>
        <h2>4. Data retention</h2>
        <p>
          We retain your information for as long as your account is active or as needed
          to provide the Service. Match footage and generated stats may be stored
          according to your account settings. You may request deletion of your account
          and associated data by contacting us.
        </p>
      </section>

      <section>
        <h2>5. Your rights and choices</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access, correct, or delete your personal information</li>
          <li>Object to or restrict certain processing activities</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Request a copy of your data in a portable format</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a
            href="mailto:play@statmagic.xyz"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            play@statmagic.xyz
          </a>
          .
        </p>
      </section>

      <section>
        <h2>6. Cookies and tracking</h2>
        <p>
          We use cookies and similar technologies to enhance site navigation, analyze
          usage, and support marketing efforts. You can manage cookie preferences through
          our cookie banner or your browser settings. For more details, see our cookie
          notice when you first visit the site.
        </p>
      </section>

      <section>
        <h2>7. Children&apos;s privacy</h2>
        <p>
          PlayerNation may be used by young athletes with parental or guardian consent.
          We do not knowingly collect personal information from children under 13 without
          appropriate consent. If you believe we have collected such information, please
          contact us so we can take appropriate action.
        </p>
      </section>

      <section>
        <h2>8. Security</h2>
        <p>
          We implement reasonable technical and organizational measures to protect your
          information. However, no method of transmission over the internet is 100%
          secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>9. International transfers</h2>
        <p>
          Your information may be processed in countries other than your own. We take
          steps to ensure appropriate safeguards are in place when data is transferred
          internationally.
        </p>
      </section>

      <section>
        <h2>10. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the revised
          policy on this page and update the &quot;Last updated&quot; date. Continued use
          of the Service after changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2>11. Contact us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a
            href="mailto:play@statmagic.xyz"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            play@statmagic.xyz
          </a>{" "}
          or review our{" "}
          <Link
            href="/terms"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            Terms of Service
          </Link>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
}
