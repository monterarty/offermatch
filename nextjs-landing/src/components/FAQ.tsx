"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Как ИИ адаптирует моё резюме?",
    a: "Система сравнивает резюме с требованиями вакансии, выявляет недостающие навыки, задаёт вопросы и дополняет текст на основе ваших ответов — без выдуманных фактов.",
  },
  {
    q: "Мои данные в безопасности?",
    a: "Да. Данные не передаются третьим лицам. Хранятся в зашифрованном виде, доступны только вам. Можно удалить всё в настройках аккаунта.",
  },
  {
    q: "Сколько можно использовать бесплатно?",
    a: "На старте вы получаете 3 полных генерации: анализ резюме под вакансию, адаптация и сопроводительное письмо — без ввода карты. Платить нужно только когда лимит исчерпан.",
  },
  {
    q: "Работает ли автопарсинг вакансий?",
    a: "Да. Вставьте ссылку с hh.ru, SuperJob, Работа.ру — система загрузит описание автоматически.",
  },
  {
    q: "В каком формате скачивать резюме?",
    a: "PDF и Word (DOCX). В тарифе «Профи» и «Карьерный» доступен выбор шаблона вёрстки для разных отраслей.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[680px] mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <div className="text-[11px] font-semibold tracking-[1.5px] uppercase text-blue mb-3">
            FAQ
          </div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-navy leading-[1.1]">
            Частые вопросы
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl overflow-hidden transition-all ${
                openIndex === i ? "border-blue-m shadow-[0_4px_16px_rgba(59,126,248,0.07)]" : ""
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="flex items-center justify-between w-full p-4 md:p-5 gap-3 text-sm font-medium text-navy bg-transparent border-none cursor-pointer text-left transition-colors hover:bg-blue-l/40"
              >
                {faq.q}
                <span
                  className={`w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0 transition-all ${
                    openIndex === i ? "bg-blue-l text-blue rotate-180" : "bg-surface2 text-t3"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-[200px] pb-4 px-4 md:px-5" : "max-h-0"
                }`}
              >
                <div className="text-[13.5px] text-t2 leading-relaxed font-normal">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
