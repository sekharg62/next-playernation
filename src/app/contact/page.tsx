import ContactSupport from "@/components/ContactSupport";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | PlayerNation",
  description:
    "Get in touch with Player ]Nation for support, questions, or general inquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <ContactSupport mailtoSubject="PlayerNation Inquiry" />
    </div>
  );
}
