export default function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3 flex items-center">
              <img src="/logos/offer_match_2.png" alt="OfferMatch" className="h-7 w-auto" />
            </div>
            <div className="text-[12.5px] text-t3 leading-relaxed font-normal max-w-[210px]">
              ИИ-сервис для умного поиска работы. Адаптация резюме, трекер откликов, симулятор собеседований.
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-t4 mb-4">
              Продукт
            </div>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="text-[13px] text-t2 no-underline font-normal cursor-pointer transition-colors hover:text-navy">
                Анализ резюме
              </a>
              <a href="#" className="text-[13px] text-t2 no-underline font-normal cursor-pointer transition-colors hover:text-navy">
                Адаптация
              </a>
              <a href="#" className="text-[13px] text-t2 no-underline font-normal cursor-pointer transition-colors hover:text-navy">
                Сопроводительное
              </a>
              <a href="#" className="text-[13px] text-t2 no-underline font-normal cursor-pointer transition-colors hover:text-navy">
                Трекер откликов
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-t4 mb-4">
              Компания
            </div>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="text-[13px] text-t2 no-underline font-normal cursor-pointer transition-colors hover:text-navy">
                О нас
              </a>
              <a href="#" className="text-[13px] text-t2 no-underline font-normal cursor-pointer transition-colors hover:text-navy">
                Блог
              </a>
              <a href="#" className="text-[13px] text-t2 no-underline font-normal cursor-pointer transition-colors hover:text-navy">
                Карьера
              </a>
            </div>
          </div>

          {/* Support */}
          <div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-t4 mb-4">
              Поддержка
            </div>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="text-[13px] text-t2 no-underline font-normal cursor-pointer transition-colors hover:text-navy">
                Справка
              </a>
              <a href="#" className="text-[13px] text-t2 no-underline font-normal cursor-pointer transition-colors hover:text-navy">
                Контакты
              </a>
              <a href="#" className="text-[13px] text-t2 no-underline font-normal cursor-pointer transition-colors hover:text-navy">
                Конфиденциальность
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-t3 font-normal">
          <span>© 2026 OfferMatch</span>
          <span>Сделано с ♥ для тех, кто ищет работу</span>
        </div>
      </div>
    </footer>
  );
}
