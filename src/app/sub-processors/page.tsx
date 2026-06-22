import LegalPageLayout from "@/components/LegalPageLayout";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sub-processors | PlayerNation",
  description:
    "Current list of sub-processors used by StatMagic to deliver the PlayerNation platform and services.",
};

type ContactInfo = {
  href: string;
  label: string;
  suffix?: string;
};

type SubProcessor = {
  name: string;
  location: string;
  contact: ContactInfo;
  purpose: string;
};

const contactLinkClass =
  "text-primary underline underline-offset-2 hover:text-primary/80";

const subProcessors: SubProcessor[] = [
  {
    name: "Amazon Web Services",
    location: "U.S.A / E.U. / Bengaluru",
    contact: {
      href: "https://aws.amazon.com/contact-us/compliance-support/",
      label: "AWS Compliance – Contact Us",
      suffix: "410 Terry Avenue North, Seattle, WA 98109-5210, USA",
    },
    purpose: "Cloud hosting and infrastructure for the Platform",
  },
  {
    name: "Supabase",
    location: "U.S.A",
    contact: {
      href: "mailto:privacy@supabase.com",
      label: "privacy@supabase.com",
      suffix: "3500 S Dupont Hwy, Camden, DE, USA",
    },
    purpose: "Manage database services for Platform data",
  },
  {
    name: "Google — Suite of Products",
    location: "U.S.A",
    contact: {
      href: "mailto:data-access-requests@google.com",
      label: "data-access-requests@google.com",
      suffix: "1600 Amphitheatre Parkway Mountain View, CA 94043, USA",
    },
    purpose:
      "API and productivity tools supporting internal operations, App store, video hosting or embedding (where enabled by customer configuration)",
  },
  {
    name: "Zoho Suite of Products",
    location: "India",
    contact: {
      href: "mailto:sales@zohocorp.com",
      label: "sales@zohocorp.com",
      suffix:
        "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri Chengalpattu District - 603202, India",
    },
    purpose:
      "Customer relationship management (CRM), Support ticketing and customer communications, Internal business operations and workflow management",
  },
  {
    name: "PayU",
    location: "India, EU, U.S.A (dependent on Customer choice)",
    contact: {
      href: "https://corporate.payu.com/data-subject-request/",
      label: "Contact our Privacy Team - PayU Global",
      suffix:
        "2nd Floor, P&G Plaza, Cardinal Gracious Road, Chakala, Andheri (East) Mumbai, Maharashtra 400099, India",
    },
    purpose: "Payment processing for subscriptions and service fees",
  },
  {
    name: "RazorPay",
    location: "India",
    contact: {
      href: "mailto:dpo@razorpay.com",
      label: "dpo@razorpay.com",
      suffix:
        "1st Floor, SJR Cyber, 22, Laskar Hosur Road, Adugodi, Bangalore, Karnataka - 560030",
    },
    purpose: "Payment processing for subscriptions and service fees",
  },
  {
    name: "MSG91",
    location: "India",
    contact: {
      href: "mailto:hello@msg91.com",
      label: "hello@msg91.com",
      suffix:
        "5th Floor, Wing B, LIC Tower, 28-29-30, PU - 03, Scheme No. 54, Indore, Madhya Pradesh, 452011",
    },
    purpose: "One-time passwords (OTP) and authentication messages",
  },
  {
    name: "Vercel",
    location: "U.S.A",
    contact: {
      href: "mailto:privacy@vercel.com",
      label: "privacy@vercel.com",
      suffix: "440 N Barranca Avenue #4133 Covina, CA 91723 United States",
    },
    purpose: "Frontend hosting and deployment of the Platform interface",
  },
  {
    name: "Apple (App Store)",
    location: "U.S.A",
    contact: {
      href: "https://www.apple.com/legal/privacy/contact/",
      label: "Legal - Privacy - Apple",
      suffix: "1 Apple Park Way, Cupertino, California 95014, United States",
    },
    purpose: "Distribution of mobile applications",
  },
  {
    name: "Twilio (SendGrid)",
    location: "U.S.A",
    contact: {
      href: "mailto:dpo@twilio.com",
      label: "dpo@twilio.com",
      suffix: "101 Spear Street, 1st Floor San Francisco, California 94105, USA",
    },
    purpose: "Transactional and service-related email communications",
  },
  {
    name: "Meta",
    location: "U.S.A",
    contact: {
      href: "https://help.meta.com/support/privacy",
      label: "Privacy rights requests",
      suffix: "Meta Platforms, Inc., 1 Meta Way, Menlo Park, CA",
    },
    purpose:
      "Platform analytics and engagement insights (where enabled), Marketing, attribution, and audience measurement",
  },
  {
    name: "YouTube",
    location: "U.S.A",
    contact: {
      href: "mailto:data-access-requests@google.com",
      label: "data-access-requests@google.com",
      suffix: "1600 Amphitheatre Parkway Mountain View, CA 94043, USA",
    },
    purpose: "Hosting and delivery of video content (where integrated)",
  },
  {
    name: "JarvisLabs",
    location: "India",
    contact: {
      href: "mailto:support@jarvislabs.ai",
      label: "support@jarvislabs.ai",
      suffix:
        "Uppal's Genesis A-32, Block B, Mohan Cooperative Industrial Estate, Badarpur, New Delhi 110044, India",
    },
    purpose: "GPU and compute resources for video processing workloads",
  },
  {
    name: "Payoneer",
    location: "India, U.S.A",
    contact: {
      href: "https://payoneer.custhelp.com/app/ask",
      label: "Ask a Question",
      suffix: "Payoneer Inc. 195 Broadway, New York, NY 10007",
    },
    purpose: "Payment processing for subscriptions and service fees",
  },
];

function ContactCell({ contact }: { contact: ContactInfo }) {
  const isExternal = !contact.href.startsWith("mailto:");

  return (
    <>
      <a
        href={contact.href}
        className={contactLinkClass}
        {...(isExternal ? { rel: "noopener noreferrer", target: "_blank" } : {})}
      >
        {contact.label}
      </a>
      {contact.suffix ? `, ${contact.suffix}` : null}
    </>
  );
}

export default function SubProcessorsPage() {
  return (
    <LegalPageLayout title="Sub-processors" lastUpdated="June 14, 2026" wide>
      <p>
        This list forms part of, and should be read together with, our{" "}
        <Link
          href="/privacypolicy"
          className={contactLinkClass}
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href="/dataprocessingagreement"
          className={contactLinkClass}
        >
          Data Processing Agreement
        </Link>
        , and identifies our current sub-processors used to support delivery of the Services
        and/or operation of the Platform in compliance with applicable data protection laws.
        This list may be updated from time to time.
      </p>

      <section>
        <div className="max-md:-mx-4 max-md:overflow-x-auto md:overflow-visible">
          <table className="w-full table-fixed border-collapse text-sm max-md:min-w-[48rem]">
            <thead>
              <tr className="border-b border-border bg-card/40">
                <th className="w-[4%] px-3 py-3 text-left font-semibold text-foreground">
                  Sr. No.
                </th>
                <th className="w-[14%] px-3 py-3 text-left font-semibold text-foreground">
                  Sub-processor name
                </th>
                <th className="w-[12%] px-3 py-3 text-left font-semibold text-foreground">
                  Location
                </th>
                <th className="w-[35%] px-3 py-3 text-left font-semibold text-foreground">
                  Contact information
                </th>
                <th className="w-[35%] px-3 py-3 text-left font-semibold text-foreground">
                  Purposes of processing
                </th>
              </tr>
            </thead>
            <tbody>
              {subProcessors.map((processor, index) => (
                <tr
                  key={processor.name}
                  className="border-b border-border align-top even:bg-card/20"
                >
                  <td className="px-3 py-4 font-medium text-foreground">{index + 1}</td>
                  <td className="break-words px-3 py-4 font-medium text-foreground">
                    {processor.name}
                  </td>
                  <td className="break-words px-3 py-4">{processor.location}</td>
                  <td className="break-words px-3 py-4">
                    <ContactCell contact={processor.contact} />
                  </td>
                  <td className="break-words px-3 py-4">{processor.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </LegalPageLayout>
  );
}
