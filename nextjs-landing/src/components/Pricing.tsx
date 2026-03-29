"use client";

export default function Pricing() {
  const scrollToWidget = () => {
    document.getElementById("widget")?.scrollIntoView({ behavior: "smooth" });
  };

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
          Никаких скрытых списаний. Месячная подписка, отмена в любой момент.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {/* Free / Starter */}
          <div className="bg-white border-[1.5px] border-[#D4E4FF] rounded-[28px] p-6 md:p-8 relative transition-all flex flex-col hover:-translate-y-1 hover:border-blue-side hover:shadow-md">
            <div className="pc-body flex-1 flex flex-col">
              <div className="text-base font-bold mb-1 text-navy">Старт</div>
              <div className="text-[12.5px] text-t3 mb-5 font-normal">Попробуй без риска</div>
              <div className="text-[40px] font-extrabold leading-none mb-1 tracking-tight text-[#76A5FA]">
                Бесплатно
              </div>
              <div className="text-[12.5px] text-t3 mb-6 font-normal">3 генерации · карта не нужна</div>

              <ul className="list-none flex flex-col gap-2.5 mb-6 flex-1">
                <PricingFeature side>3 полных цикла: анализ + улучшение резюме + сопроводительное</PricingFeature>
                <PricingFeature side>Подробный match-отчёт</PricingFeature>
                <PricingFeature side>Скачать резюме в PDF / DOCX</PricingFeature>
                <PricingFeature side>Оплата только после исчерпания лимита</PricingFeature>
              </ul>

              <button
                onClick={scrollToWidget}
                className="w-full py-3 px-4 rounded-xl text-[13.5px] font-semibold cursor-pointer transition-all border-[1.5px] border-[#C5D9FF] bg-transparent text-navy3 mt-auto hover:border-blue-side hover:text-navy"
              >
                Начать бесплатно
              </button>
            </div>
          </div>

          {/* Pro (featured) */}
          <div className="bg-white border-[1.5px] border-blue rounded-[28px] p-6 md:p-8 relative transition-all shadow-[0_8px_32px_rgba(59,126,248,0.1)] flex flex-col hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(59,126,248,0.15)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue text-white text-[10px] font-bold py-1 px-3.5 rounded-full whitespace-nowrap tracking-wide">
              ПОПУЛЯРНЫЙ
            </div>
            <div className="pc-body flex-1 flex flex-col">
              <div className="text-base font-bold mb-1 text-navy">Профи</div>
              <div className="text-[12.5px] text-t3 mb-5 font-normal">Неделя активного поиска</div>
              <div className="text-[40px] font-extrabold leading-none mb-1 tracking-tight text-blue">
                399 ₽
              </div>
              <div className="text-[12.5px] text-t3 mb-6 font-normal">за 7 дней · без автопродления</div>

              <ul className="list-none flex flex-col gap-2.5 mb-6 flex-1">
                <PricingFeature>Безлимитный анализ и адаптация резюме</PricingFeature>
                <PricingFeature>Безлимитные сопроводительные письма</PricingFeature>
                <PricingFeature>Детальный отчёт с графиками</PricingFeature>
                <PricingFeature>Лента вакансий — свайп и мгновенная адаптация</PricingFeature>
                <PricingFeature>Трекер откликов без лимитов</PricingFeature>
              </ul>

              <button
                onClick={scrollToWidget}
                className="w-full py-3 px-4 rounded-xl text-[13.5px] font-semibold cursor-pointer transition-all border-[1.5px] border-blue bg-blue text-white mt-auto hover:-translate-y-0.5 hover:bg-blue-d"
              >
                Попробовать за 399 ₽
              </button>
            </div>
          </div>

          {/* Career / Monthly */}
          <div className="bg-white border-[1.5px] border-[#D4E4FF] rounded-[28px] p-6 md:p-8 relative transition-all flex flex-col hover:-translate-y-1 hover:border-blue-side hover:shadow-md">
            <div className="pc-body flex-1 flex flex-col">
              <div className="text-base font-bold mb-1 text-navy">Карьерный</div>
              <div className="text-[12.5px] text-t3 mb-5 font-normal">Месяц без ограничений</div>
              <div className="text-[40px] font-extrabold leading-none mb-1 tracking-tight text-[#76A5FA]">
                999 ₽
              </div>
              <div className="text-[12.5px] text-t3 mb-6 font-normal">в месяц · отмена в любой момент</div>

              <ul className="list-none flex flex-col gap-2.5 mb-6 flex-1">
                <PricingFeature side>Всё из «Профи» — без ограничений по времени</PricingFeature>
                <PricingFeature side>Симулятор собеседования с ИИ</PricingFeature>
                <PricingFeature side>2 консультации с карьерным экспертом</PricingFeature>
                <PricingFeature side>Карьерная аналитика и приоритетная поддержка</PricingFeature>
              </ul>

              <button className="w-full py-3 px-4 rounded-xl text-[13.5px] font-semibold cursor-pointer transition-all border-[1.5px] border-[#C5D9FF] bg-transparent text-navy3 mt-auto hover:border-blue-side hover:text-navy">
                Выбрать
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
