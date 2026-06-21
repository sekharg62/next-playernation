"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What is Player Nation?",
    answer:
      "Player Nation turns your match video into pro-level stats, ratings, and share-ready highlights. Upload footage from your phone and get insights built for players, coaches, and parents — not just elite clubs.",
  },
  {
    question: "How do I upload a match?",
    answer:
      "Download the app, record or import your match video, and upload it from your gallery. Our system processes the full game and delivers stats, ratings, and highlights when analysis is complete.",
  },
  {
    question: "How long does analysis take?",
    answer:
      "Most matches are processed within a few hours depending on video length and demand. You'll get a notification when your stats, rating, and highlights are ready to view and share.",
  },
  {
    question: "Who is Player Nation for?",
    answer:
      "Players tracking their development, parents following progress, coaches giving clearer feedback, and clubs or academies managing squads. Everyone in the football journey can use the same platform.",
  },
  {
    question: "Is Player Nation free?",
    answer:
      "Player Nation offers free features to get started. Premium plans unlock deeper stats, unlimited uploads, and advanced tools. Check the app for current pricing in your region.",
  },
  {
    question: "Is my match footage private?",
    answer:
      "Your videos are used to generate your stats and highlights. You control what you share publicly. See our Privacy Policy for full details on how we store and protect your data.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7.5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted">
            Everything you need to know about Player Nation. Can&apos;t find an
            answer?{" "}
            <a
              href="mailto:play@statmagic.xyz"
              className="text-primary underline underline-offset-2 hover:text-primary/80"
            >
              Contact us
            </a>
            .
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card/30">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-primary/5 sm:px-6 sm:py-6"
                >
                  <span
                    className={`text-base font-semibold leading-snug sm:text-lg ${
                      isOpen ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {question}
                  </span>
                  <span
                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border text-muted"
                    }`}
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:pb-6 sm:text-base">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
