import LegalPageLayout from "@/components/LegalPageLayout";
import { CONTACT_EMAIL } from "@/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | PlayerNation",
  description:
    "Terms and conditions for the Player Nation video upload and analysis service.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout title="Terms and Conditions" lastUpdated="June 22, 2026">
      <p className="text-base font-medium text-foreground sm:text-lg">
        Player Nation – Video Upload Service
      </p>

      <section>
        <h2>1. Acceptance of terms</h2>
        <p>
          By accessing and using the Player Nation video upload service, you accept and agree
          to be bound by these terms. If you do not agree, please do not use this service.
        </p>
      </section>

      <section>
        <h2>2. Service description</h2>
        <p>
          Player Nation provides a sports-focused video upload and analysis platform that
          allows users to:
        </p>
        <ul>
          <li>Upload video files up to 20GB in size</li>
          <li>Share video URLs from external platforms</li>
          <li>Store and manage sports-related video content</li>
          <li>Access uploaded content through our platform</li>
        </ul>
      </section>

      <section>
        <h2>3. User responsibilities</h2>
        <h3>3.1 Content ownership</h3>
        <p>
          You must own or have the necessary rights to upload video content and ensure it
          does not violate third-party rights.
        </p>
        <h3>3.2 Appropriate content</h3>
        <p>Uploaded content must be:</p>
        <ul>
          <li>Sports-related and appropriate</li>
          <li>Free from illegal or offensive material</li>
          <li>Compliant with applicable laws</li>
          <li>Free of personal data uploaded without consent</li>
        </ul>
        <h3>3.3 Technical requirements</h3>
        <ul>
          <li>Stable internet connection during uploads</li>
          <li>Do not leave the page during uploads</li>
          <li>Provide accurate file details</li>
          <li>Maintain account security</li>
        </ul>
      </section>

      <section>
        <h2>4. Upload guidelines</h2>
        <p>
          <strong>Important:</strong> Do not leave the page while uploading videos.
          Interruptions may cause data loss.
        </p>
        <h3>4.1 File requirements</h3>
        <ul>
          <li>Maximum file size: 20GB</li>
          <li>Supported formats: MP4, AVI, MOV</li>
          <li>Sports match recordings only</li>
          <li>Reasonable quality and duration</li>
        </ul>
        <h3>4.2 Upload process</h3>
        <ul>
          <li>Chunk-based uploads for reliability</li>
          <li>Real-time progress display</li>
          <li>Cancelable uploads</li>
          <li>Success confirmation after completion</li>
        </ul>
      </section>

      <section>
        <h2>5. Privacy and data protection</h2>
        <h3>5.1 Data collection</h3>
        <ul>
          <li>Authentication tokens (JWT)</li>
          <li>Match identification data</li>
          <li>Video metadata</li>
          <li>Upload progress and status</li>
        </ul>
        <h3>5.2 Data security</h3>
        <ul>
          <li>Encrypted uploads</li>
          <li>Secure data transmission</li>
          <li>Access control and authentication</li>
          <li>Regular security updates</li>
        </ul>
        <h3>5.3 Data retention</h3>
        <p>
          Uploaded data is retained per our retention policy. Users may request deletion
          where legally applicable. For more information, see our{" "}
          <Link
            href="/privacypolicy"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>6. Service availability</h2>
        <p>
          We strive for high availability but do not guarantee uninterrupted service due to
          maintenance or updates.
        </p>
      </section>

      <section>
        <h2>7. Limitation of liability</h2>
        <p>
          Player Nation is not liable for indirect or consequential damages, including loss
          of data or profits.
        </p>
      </section>

      <section>
        <h2>8. Intellectual property</h2>
        <p>
          Users retain ownership of uploaded content. By uploading, you grant us permission
          to store and process content to deliver the service.
        </p>
      </section>

      <section>
        <h2>9. Termination</h2>
        <p>
          We may suspend or terminate accounts that violate these terms. Users may stop using
          the service at any time.
        </p>
      </section>

      <section>
        <h2>10. Changes to terms</h2>
        <p>
          These terms may be updated periodically. Continued use constitutes acceptance of
          the revised terms.
        </p>
      </section>

      <section>
        <h2>Contact information</h2>
        <p>
          Email:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
        <p>Support hours: Monday – Friday, 9:00 AM – 6:00 PM</p>
      </section>
    </LegalPageLayout>
  );
}
