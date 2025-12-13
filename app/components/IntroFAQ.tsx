'use client';

import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface FaqItem {
  id: string;
  text: string;
  icon: string;
  gradient: string;
}

export default function IntroFAQ() {
  const { language } = useLanguage();
  const faq = translations[language].home.faq;

  const items: (FaqItem & { answer: string })[] = [
    { id: 'line1', text: faq.questions.line1, answer: faq.answers.line1, icon: '💬', gradient: 'from-lime-400/25 to-green-700/25' },
    { id: 'line2', text: faq.questions.line2, answer: faq.answers.line2, icon: '💡', gradient: 'from-fuchsia-400/20 to-purple-600/20' },
    { id: 'line3', text: faq.questions.line3, answer: faq.answers.line3, icon: '⏱️', gradient: 'from-emerald-400/20 to-green-600/20' },
    { id: 'line4', text: faq.questions.line4, answer: faq.answers.line4, icon: '🎁', gradient: 'from-cyan-400/20 to-blue-600/20' },
    { id: 'line5', text: faq.questions.line5, answer: faq.answers.line5, icon: '🌿', gradient: 'from-amber-400/25 to-orange-600/25' },
  ];

  const [open, setOpen] = useState<string | null>(items[0].id);

  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-12 bg-gradient-to-r from-teal-600 to-cyan-600 text-transparent bg-clip-text">
          FAQ
        </h2>
        <div className="space-y-4">
          {items.map(item => {
            const isOpen = open === item.id;
            let toggleLabel: string;
            if (isOpen) {
              toggleLabel = language === 'fr' ? 'Fermer' : 'Close';
            } else {
              toggleLabel = language === 'fr' ? 'Ouvrir' : 'Open';
            }
            return (
              <div
                key={item.id}
                className={`rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition ${isOpen ? 'shadow-lg ring-2 ring-green-500/40' : 'hover:shadow-md'}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className={`w-full text-left flex items-center gap-4 px-6 py-5 bg-gradient-to-r ${item.gradient} backdrop-blur-sm transition hover:opacity-90`}
                >
                  <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                  <span className="flex-1 font-semibold text-gray-800">{item.text}</span>
                  <span className="text-sm text-gray-700 font-medium select-none">{toggleLabel}</span>
                </button>
                <section
                  id={`panel-${item.id}`}
                  aria-label={item.text}
                  className={`px-6 pt-0 pb-6 text-sm text-gray-700 bg-white transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-56' : 'max-h-0'} overflow-hidden`}
                >
                  {isOpen && (
                    <div className="mt-4 leading-relaxed">
                      <p className="font-medium mb-2">{item.answer}</p>
                    </div>
                  )}
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
