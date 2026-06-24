"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Which sports does PlayerNation support?",
    answer:
      "PlayerNation currently supports football (soccer), with more sports coming soon.",
  },
  {
    question: "What kind of videos can I upload?",
    answer:
      "Upload footage from an AI camera, a phone camera or almost any other video source. If you can record it, we can analyze it.",
  },
  {
    question: "Do I need special cameras, wearables or GPS trackers?",
    answer:
      "No. PlayerNation works with the video you already have, with no expensive equipment, sensors or wearables required.",
  },
  {
    question: "How much does PlayerNation cost?",
    answer:
      "Your first game analysis is completely free. After that, pricing depends on the features and analysis you need.",
  },
  {
    question: "Who is PlayerNation for?",
    answer:
      "PlayerNation is built for players, parents, coaches, teams, clubs and academies. If you're part of an athlete's journey, PlayerNation is built for you.",
  },
  {
    question: "How long does game analysis take?",
    answer: "Games are processed within 24 hours.",
  },
  {
    question: "Who owns my videos and data?",
    answer:
      "You own your videos and data. We take privacy seriously, never sell your data to third parties and are fully GDPR compliant.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7.5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Got questions?
          </h2>
          
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
