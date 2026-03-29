"use client";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center px-4 md:px-8 gap-4 md:gap-5 border-b border-border bg-[rgba(246,247,251,0.95)] backdrop-blur-[16px]">
      <a href="#" className="flex items-center gap-2 text-lg font-bold text-navy tracking-tight no-underline">
        <div className="w-2 h-2 rounded-full bg-blue flex-shrink-0" />
        OfferMatch
      </a>

      {/* Desktop nav links */}
      <div className="hidden md:flex gap-0.5 ml-4">
        <button
          onClick={() => scrollTo("how")}
          className="px-3 py-1.5 text-[13.5px] font-normal text-t2 bg-transparent border-none cursor-pointer rounded-lg transition-all hover:text-navy hover:bg-blue/5"
        >
          Как работает
        </button>
        <button
          onClick={() => scrollTo("features")}
          className="px-3 py-1.5 text-[13.5px] font-normal text-t2 bg-transparent border-none cursor-pointer rounded-lg transition-all hover:text-navy hover:bg-blue/5"
        >
          Возможности
        </button>
        <button
          onClick={() => scrollTo("pricing")}
          className="px-3 py-1.5 text-[13.5px] font-normal text-t2 bg-transparent border-none cursor-pointer rounded-lg transition-all hover:text-navy hover:bg-blue/5"
        >
          Тарифы
        </button>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <button className="hidden sm:block px-4 py-[7px] text-[13.5px] font-medium text-navy3 bg-transparent border border-border2 cursor-pointer rounded-lg transition-all leading-none hover:border-navy3 hover:text-navy">
          Войти
        </button>
        <button
          onClick={() => scrollTo("widget")}
          className="px-4 md:px-5 py-2 text-[13.5px] font-semibold text-white bg-blue border-none cursor-pointer rounded-lg transition-all leading-none hover:bg-blue-d hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(59,126,248,0.32)]"
        >
          <span className="hidden sm:inline">Попробовать бесплатно</span>
          <span className="sm:hidden">Начать</span>
        </button>
      </div>
    </nav>
  );
}
