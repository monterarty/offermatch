import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OfferMatch — Веб-приложение",
  description:
    "Загрузи резюме и вакансию — ИИ проанализирует, адаптирует CV и напишет сопроводительное. 1 полная генерация бесплатно.",
};

export default function AppLanding() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center px-4 md:px-8 gap-5 border-b border-border bg-[rgba(246,247,251,0.95)] backdrop-blur-[16px]">
        <a href="/" className="flex items-center no-underline">
          <img
            src="/logos/offer_match_2.png"
            alt="OfferMatch"
            className="h-6 w-auto"
          />
        </a>
        <div className="hidden md:flex gap-0.5 ml-4">
          <a
            href="#how"
            className="px-3 py-1.5 text-[13.5px] text-t2 rounded-lg transition-all hover:text-navy hover:bg-blue/5 no-underline"
          >
            Как работает
          </a>
          <a
            href="#features"
            className="px-3 py-1.5 text-[13.5px] text-t2 rounded-lg transition-all hover:text-navy hover:bg-blue/5 no-underline"
          >
            Возможности
          </a>
          <a
            href="#pricing"
            className="px-3 py-1.5 text-[13.5px] text-t2 rounded-lg transition-all hover:text-navy hover:bg-blue/5 no-underline"
          >
            Тарифы
          </a>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <a
            href="/screens/02-loading.html"
            className="px-5 py-2 text-[13.5px] font-semibold text-white bg-blue border-none cursor-pointer rounded-xl transition-all hover:bg-blue-d hover:-translate-y-px no-underline"
          >
            Попробовать
          </a>
        </div>
      </nav>

      <main className="relative z-[2] pt-[60px]">
        {/* Hero */}
        <section className="min-h-[calc(100vh-60px)] flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-center bg-[linear-gradient(180deg,#3E80F8_0%,#6B9FFA_45%,#A8C8FC_65%,#D6E4FD_78%,#EDF1FB_88%,#F6F7FB_96%)] relative overflow-hidden">
          {/* Floating chips */}
          <div className="hidden lg:block hero-float absolute top-[130px] left-[15%] z-[1] rounded-full bg-white/15 backdrop-blur-[8px] border border-white/20 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap">
            Match 91%
          </div>
          <div className="hidden lg:block hero-float absolute top-[180px] right-[12%] z-[1] rounded-full bg-white/15 backdrop-blur-[8px] border border-white/20 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap" style={{ animationDelay: "2s" }}>
            CV адаптировано
          </div>
          <div className="hidden xl:block hero-float absolute top-[320px] left-[5%] z-[1] rounded-full bg-white/15 backdrop-blur-[8px] border border-white/20 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap" style={{ animationDelay: "3.5s" }}>
            Письмо готово
          </div>

          <div className="relative z-[5] max-w-[860px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full py-1.5 pl-2 pr-3.5 text-[12.5px] text-white mb-6 md:mb-8 font-medium">
              <span className="bg-white text-blue text-[10px] font-bold py-0.5 px-2.5 rounded-full tracking-wide">
                NEW
              </span>
              1&nbsp;полная генерация бесплатно
            </div>

            <h1 className="text-[clamp(36px,7vw,72px)] font-extrabold leading-[1.05] tracking-tight text-white max-w-[780px] mx-auto mb-5">
              Адаптируй резюме<br />
              под&nbsp;каждую вакансию
            </h1>

            <p className="text-base md:text-[17px] text-white/90 leading-relaxed max-w-[500px] mx-auto mb-12 font-normal px-4">
              Загрузи резюме и&nbsp;вакансию — ИИ покажет процент совпадения, усилит CV и&nbsp;напишет сопроводительное письмо
            </p>

            {/* CTA */}
            <a
              href="/screens/02-loading.html"
              className="inline-flex items-center gap-2.5 px-9 py-4 bg-white text-blue rounded-2xl text-[17px] font-bold tracking-tight no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.3)]"
            >
              Попробовать бесплатно
            </a>

            {/* Mini interface preview */}
            <div className="mt-14 bg-white rounded-[20px] border border-white/30 shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden max-w-[700px] mx-auto">
              <div className="flex items-center gap-3 px-5 py-3 border-b border-border/50 bg-[#FAFBFE]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E4E6F0]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E4E6F0]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E4E6F0]" />
                </div>
                <div className="text-[11px] text-t3 font-medium">
                  offermatch.ru
                </div>
              </div>
              <div className="p-6 flex gap-6 text-left">
                {/* Left: resume snippet */}
                <div className="flex-1 space-y-3">
                  <div className="text-[10px] font-semibold text-t3 uppercase tracking-wider">
                    Ваше резюме
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2.5 bg-[#E4E6F0] rounded-full w-[80%]" />
                    <div className="h-2.5 bg-[#E4E6F0] rounded-full w-[65%]" />
                    <div className="h-2.5 bg-blue-l rounded-full w-[90%] border border-blue-m" />
                    <div className="h-2.5 bg-[#E4E6F0] rounded-full w-[50%]" />
                    <div className="h-2.5 bg-green-l rounded-full w-[75%] border border-green-m" />
                    <div className="h-2.5 bg-[#E4E6F0] rounded-full w-[60%]" />
                  </div>
                </div>
                {/* Right: match result */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center gap-2 px-6">
                  <div className="text-[32px] font-extrabold text-blue tracking-tight leading-none">
                    91%
                  </div>
                  <div className="text-[9px] font-semibold text-t3 uppercase tracking-wider">
                    Match
                  </div>
                  <div className="flex gap-1 mt-1">
                    <span className="text-[9px] font-semibold text-green bg-green-l border border-green-m px-2 py-0.5 rounded-full">
                      8/11 hard
                    </span>
                    <span className="text-[9px] font-semibold text-blue bg-blue-l border border-blue-m px-2 py-0.5 rounded-full">
                      73% слов
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-20 px-6">
          <div className="max-w-[1080px] mx-auto text-center">
            <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-blue mb-3">
              Как это работает
            </p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-navy mb-4">
              Три шага до&nbsp;идеального отклика
            </h2>
            <p className="text-[15px] text-t2 max-w-[520px] mx-auto mb-14">
              Загрузите резюме, получите анализ и&nbsp;адаптированное CV за&nbsp;минуту
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-[20px] p-6 text-left">
                <div className="w-10 h-10 rounded-lg bg-blue-l flex items-center justify-center text-blue font-bold text-sm mb-4">
                  1
                </div>
                <h3 className="text-[17px] font-bold text-navy mb-2 tracking-tight">
                  Загрузите данные
                </h3>
                <p className="text-[13px] text-t2 leading-relaxed">
                  Резюме в&nbsp;PDF и&nbsp;ссылку на&nbsp;вакансию. ИИ проанализирует соответствие за&nbsp;секунды.
                </p>
              </div>
              <div className="bg-white rounded-[20px] p-6 text-left">
                <div className="w-10 h-10 rounded-lg bg-blue-l flex items-center justify-center text-blue font-bold text-sm mb-4">
                  2
                </div>
                <h3 className="text-[17px] font-bold text-navy mb-2 tracking-tight">
                  Ответьте на&nbsp;вопросы
                </h3>
                <p className="text-[13px] text-t2 leading-relaxed">
                  ИИ задаст 2-3 вопроса о&nbsp;вашем опыте чтобы закрыть пробелы в&nbsp;резюме.
                </p>
              </div>
              <div className="bg-white rounded-[20px] p-6 text-left">
                <div className="w-10 h-10 rounded-lg bg-blue-l flex items-center justify-center text-blue font-bold text-sm mb-4">
                  3
                </div>
                <h3 className="text-[17px] font-bold text-navy mb-2 tracking-tight">
                  Скачайте результат
                </h3>
                <p className="text-[13px] text-t2 leading-relaxed">
                  Адаптированное резюме и&nbsp;сопроводительное письмо готовы к&nbsp;отправке.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 px-6 bg-white">
          <div className="max-w-[1080px] mx-auto text-center">
            <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-blue mb-3">
              Возможности
            </p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-navy mb-4">
              Всё для успешного отклика
            </h2>
            <p className="text-[15px] text-t2 max-w-[520px] mx-auto mb-14">
              Один сервис заменяет часы ручной работы
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Анализ соответствия",
                  desc: "Построчное сравнение резюме и\u00a0вакансии. Видите что совпадает, а\u00a0что нужно добавить.",
                },
                {
                  title: "Адаптация резюме",
                  desc: "ИИ перефразирует опыт под требования вакансии. Вы\u00a0контролируете каждую правку.",
                },
                {
                  title: "Сопроводительное",
                  desc: "Генерация письма на\u00a0основе CV и\u00a0вакансии. Выбор тона и\u00a0длины.",
                },
                {
                  title: "Мэтч-механика",
                  desc: "Свайпайте вакансии как в\u00a0Tinder. Сохраняйте лучшие и\u00a0адаптируйте CV.",
                },
                {
                  title: "Дашборд откликов",
                  desc: "Все отклики в\u00a0одном месте. Статусы, PDF, письма — всё под рукой.",
                },
                {
                  title: "1 генерация бесплатно",
                  desc: "Полный цикл: анализ + адаптация + письмо. Без карты и\u00a0ограничений.",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="bg-bg rounded-[20px] p-6 text-left transition-all hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-l flex items-center justify-center text-blue mb-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M3 9L7.5 13.5L15 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                  <h3 className="text-[15px] font-bold text-navy mb-2 tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-[13px] text-t2 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 px-6">
          <div className="max-w-[900px] mx-auto text-center">
            <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-blue mb-3">
              Тарифы
            </p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-navy mb-4">
              Начните бесплатно
            </h2>
            <p className="text-[15px] text-t2 max-w-[520px] mx-auto mb-14">
              Первая полная генерация — бесплатно, без карты
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-[640px] mx-auto">
              <div className="bg-white rounded-[28px] border border-border p-7 text-left">
                <div className="text-[13px] font-semibold text-t2 mb-1">
                  Бесплатно
                </div>
                <div className="text-[32px] font-extrabold text-navy tracking-tight mb-4">
                  0 ₽
                </div>
                <ul className="space-y-2.5 text-[13px] text-navy mb-6">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /></svg>
                    1&nbsp;полная генерация (резюме + письмо)
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /></svg>
                    Анализ соответствия
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /></svg>
                    Мэтч-механика
                  </li>
                </ul>
                <a
                  href="/screens/02-loading.html"
                  className="block text-center px-5 py-3 text-[13px] font-semibold text-navy bg-transparent border border-border2 rounded-xl transition-all hover:border-blue hover:text-blue no-underline"
                >
                  Начать бесплатно
                </a>
              </div>

              <div className="bg-white rounded-[28px] border-[1.5px] border-blue p-7 text-left relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide">
                  ПОПУЛЯРНЫЙ
                </div>
                <div className="text-[13px] font-semibold text-blue mb-1">
                  Про
                </div>
                <div className="text-[32px] font-extrabold text-navy tracking-tight mb-4">
                  499 ₽<span className="text-[14px] font-medium text-t3 ml-1">/мес</span>
                </div>
                <ul className="space-y-2.5 text-[13px] text-navy mb-6">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /></svg>
                    Безлимитные генерации
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /></svg>
                    Все тоны сопроводительных
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /></svg>
                    Архив откликов и&nbsp;статистика
                  </li>
                </ul>
                <a
                  href="/screens/02-loading.html"
                  className="block text-center px-5 py-3 text-[13px] font-semibold text-white bg-blue rounded-xl transition-all hover:bg-blue-d hover:-translate-y-px no-underline"
                >
                  Начать с&nbsp;Про
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-[560px] mx-auto">
            <h2 className="text-[clamp(24px,4vw,36px)] font-bold tracking-tight text-navy mb-4">
              Готовы получить работу мечты?
            </h2>
            <p className="text-[15px] text-t2 mb-8">
              Первая генерация бесплатно. Без карты, без подписки.
            </p>
            <a
              href="/screens/02-loading.html"
              className="inline-flex items-center px-8 py-4 bg-blue text-white rounded-2xl text-[16px] font-bold no-underline transition-all hover:bg-blue-d hover:-translate-y-0.5"
            >
              Попробовать бесплатно
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 border-t border-border">
          <div className="max-w-[1080px] mx-auto flex items-center justify-between">
            <a href="/" className="flex items-center no-underline">
              <img
                src="/logos/offer_match_2.png"
                alt="OfferMatch"
                className="h-5 w-auto opacity-60"
              />
            </a>
            <div className="text-[12px] text-t3">
              © 2026 OfferMatch
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
