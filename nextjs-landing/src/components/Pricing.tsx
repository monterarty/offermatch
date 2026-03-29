import { BotLinkButton } from "./BotLink";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 md:px-6 bg-bg">
      <div className="max-w-[900px] mx-auto text-center">
        <div className="text-[11px] font-semibold tracking-[1.5px] uppercase text-blue mb-3">
          Тарифы
        </div>
        <h2 className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-navy mb-4 leading-[1.1]">
          Начни бесплатно
        </h2>
        <p className="text-[15px] text-t2 leading-relaxed max-w-[520px] mx-auto mb-10 md:mb-14 font-normal">
          Простой старт в&nbsp;Telegram-боте
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {/* Free / Starter (FEATURED) */}
          <div className="bg-white border-[1.5px] border-blue rounded-[28px] p-6 md:p-8 relative transition-all shadow-[0_8px_32px_rgba(59,126,248,0.1)] flex flex-col hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(59,126,248,0.15)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue text-white text-[10px] font-bold py-1 px-3.5 rounded-full whitespace-nowrap tracking-wide">
              ДОСТУПНО СЕЙЧАС
            </div>
            <div className="flex-1 flex flex-col">
              <div className="text-base font-bold mb-1 text-navy">Старт</div>
              <div className="text-[12.5px] text-t3 mb-5 font-normal">Попробуй</div>
              <div className="text-[40px] font-extrabold leading-none mb-1 tracking-tight text-blue">
                Бесплатно
              </div>
              <div className="text-[12.5px] text-t3 mb-6 font-normal">1 бесплатная генерация</div>

              <ul className="list-none flex flex-col gap-2.5 mb-6 flex-1">
                <PricingFeature>Анализ резюме относительно вакансии</PricingFeature>
                <PricingFeature>Адаптация резюме под конкретную позицию</PricingFeature>
                <PricingFeature>Подробный match-отчёт</PricingFeature>
                <PricingFeature>Простой старт в&nbsp;Telegram-боте</PricingFeature>
              </ul>

              <BotLinkButton
                section="site_pricing"
                className="w-full py-3 px-4 rounded-xl text-[13.5px] font-semibold cursor-pointer transition-all border-[1.5px] border-blue bg-blue text-white mt-auto text-center no-underline block hover:-translate-y-0.5 hover:bg-blue-d"
              >
                Попробовать бесплатно
              </BotLinkButton>
            </div>
          </div>

          {/* Week */}
          <div className="bg-white border-[1.5px] border-[#D4E4FF] rounded-[28px] p-6 md:p-8 relative transition-all flex flex-col hover:-translate-y-1 hover:border-blue-side hover:shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-t3 text-white text-[10px] font-bold py-1 px-3.5 rounded-full whitespace-nowrap tracking-wide">
              СКОРО
            </div>
            <div className="flex-1 flex flex-col">
              <div className="text-base font-bold mb-1 text-navy">Неделя</div>
              <div className="text-[12.5px] text-t3 mb-5 font-normal">10 качественных откликов</div>
              <div className="text-[40px] font-extrabold leading-none mb-1 tracking-tight text-[#76A5FA]">
                399 ₽
              </div>
              <div className="text-[12.5px] text-t3 mb-6 font-normal">без автопродления · доступ 7 дней</div>

              <ul className="list-none flex flex-col gap-2.5 mb-6 flex-1">
                <PricingFeature side>10 полноценных откликов с&nbsp;адаптацией и&nbsp;сопроводительным</PricingFeature>
                <PricingFeature side>Анализ резюме по&nbsp;8 критериям</PricingFeature>
                <PricingFeature side>Адаптация резюме под вакансию — 10&nbsp;генераций</PricingFeature>
                <PricingFeature side>Интервью с&nbsp;ИИ-ассистентом</PricingFeature>
                <PricingFeature side>Мэтч-механика — подбор вакансий + свайп</PricingFeature>
              </ul>

              <div className="text-[12px] text-t3 font-medium text-center mb-3">39 ₽ / отклик</div>

              <button
                disabled
                className="w-full py-3 px-4 rounded-xl text-[13.5px] font-semibold transition-all border-[1.5px] border-border bg-bg2 text-t3 mt-auto cursor-not-allowed"
              >
                Скоро
              </button>
            </div>
          </div>

          {/* Month */}
          <div className="bg-white border-[1.5px] border-[#D4E4FF] rounded-[28px] p-6 md:p-8 relative transition-all flex flex-col hover:-translate-y-1 hover:border-blue-side hover:shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-t3 text-white text-[10px] font-bold py-1 px-3.5 rounded-full whitespace-nowrap tracking-wide">
              СКОРО
            </div>
            <div className="flex-1 flex flex-col">
              <div className="text-base font-bold mb-1 text-navy">Месяц</div>
              <div className="text-[12.5px] text-t3 mb-5 font-normal">40 качественных откликов</div>
              <div className="text-[40px] font-extrabold leading-none mb-1 tracking-tight text-[#76A5FA]">
                1 190 ₽
              </div>
              <div className="text-[12.5px] text-t3 mb-6 font-normal">без автопродления · доступ 30 дней · <span className="text-green font-semibold">−25%</span></div>

              <ul className="list-none flex flex-col gap-2.5 mb-6 flex-1">
                <PricingFeature side>40 полноценных откликов с&nbsp;адаптацией и&nbsp;сопроводительным</PricingFeature>
                <PricingFeature side>Анализ резюме по&nbsp;8 критериям</PricingFeature>
                <PricingFeature side>Адаптация резюме под вакансию — 40&nbsp;генераций</PricingFeature>
                <PricingFeature side>Интервью с&nbsp;ИИ-ассистентом</PricingFeature>
                <PricingFeature side>Мэтч-механика — подбор вакансий + свайп</PricingFeature>
              </ul>

              <div className="text-[12px] text-t3 font-medium text-center mb-3">29 ₽ / отклик</div>

              <button
                disabled
                className="w-full py-3 px-4 rounded-xl text-[13.5px] font-semibold transition-all border-[1.5px] border-border bg-bg2 text-t3 mt-auto cursor-not-allowed"
              >
                Скоро
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingFeature({ children, side = false }: { children: React.ReactNode; side?: boolean }) {
  return (
    <li className="text-[13px] text-navy3 flex items-start gap-2 font-normal leading-snug">
      <span className={`flex-shrink-0 mt-0.5 w-4 h-4 flex items-center justify-center ${side ? "text-blue-side" : "text-blue"}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      {children}
    </li>
  );
}