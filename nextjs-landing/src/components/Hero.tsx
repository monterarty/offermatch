import Widget from "./Widget";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-60px)] flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-center bg-gradient-to-b from-[#3E80F8] via-[#6B9FFA] to-bg relative overflow-hidden">
      {/* Floating logos - hidden on mobile */}
      <div className="hidden lg:block hero-float absolute top-20 left-[6%] z-[1]" style={{ animationDelay: "0s" }}>
        <img src="/logos/ozon.png" alt="" className="w-[72px] h-[72px] object-contain opacity-85" />
      </div>
      <div className="hidden lg:block hero-float absolute top-[100px] right-[8%] z-[1]" style={{ animationDelay: "1.5s" }}>
        <img src="/logos/sber.png" alt="" className="w-24 h-24 object-contain opacity-85" />
      </div>
      <div className="hidden xl:block hero-float absolute top-[200px] left-[3%] z-[1]" style={{ animationDelay: "3s" }}>
        <img src="/logos/yandex.png" alt="" className="w-20 h-20 object-contain opacity-85" />
      </div>
      <div className="hidden xl:block hero-float absolute top-40 right-[4%] z-[1]" style={{ animationDelay: "2.2s" }}>
        <img src="/logos/alfa.png" alt="" className="w-14 h-14 object-contain opacity-85" />
      </div>
      <div className="hidden lg:block hero-float absolute top-[280px] right-[12%] z-[1]" style={{ animationDelay: "0.8s" }}>
        <img src="/logos/wb.png" alt="" className="w-[88px] h-[88px] object-contain opacity-85" />
      </div>

      {/* Floating chips - hidden on mobile */}
      <div className="hidden lg:block hero-float absolute top-[130px] left-[15%] z-[1] rounded-full bg-white/15 backdrop-blur-[8px] border border-white/20 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.06)]" style={{ animationDelay: "0.5s" }}>
        Оффер
      </div>
      <div className="hidden lg:block hero-float absolute top-[180px] right-[12%] z-[1] rounded-full bg-white/15 backdrop-blur-[8px] border border-white/20 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.06)]" style={{ animationDelay: "2s" }}>
        CV готово
      </div>
      <div className="hidden xl:block hero-float absolute top-[320px] left-[5%] z-[1] rounded-full bg-white/15 backdrop-blur-[8px] border border-white/20 px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.06)]" style={{ animationDelay: "3.5s" }}>
        Match 87%
      </div>

      {/* Content */}
      <div className="relative z-[5]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full py-1.5 pl-2 pr-3.5 text-[12.5px] text-white mb-6 md:mb-8 font-medium">
          <span className="bg-white text-blue text-[10px] font-bold py-0.5 px-2.5 rounded-full tracking-wide">NEW</span>
          <span className="hidden sm:inline">Умная адаптация резюме под&nbsp;каждую вакансию</span>
          <span className="sm:hidden">Адаптация резюме под вакансию</span>
        </div>

        {/* Heading */}
        <h1 className="text-[clamp(36px,7vw,76px)] font-extrabold leading-[1.05] tracking-tight text-white max-w-[820px] mb-5">
          Получи работу,<br />
          <span>которую хочешь</span>
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-[17px] text-white/80 leading-relaxed max-w-[480px] mx-auto mb-10 md:mb-12 font-normal px-4">
          Загрузи резюме и&nbsp;вакансию&nbsp;— ИИ оценит соответствие, усилит резюме и&nbsp;напишет сопроводительное за&nbsp;30&nbsp;секунд.
        </p>
      </div>

      {/* Widget */}
      <Widget />

      {/* Social Proof */}
      <div className="relative z-[5] mt-7 text-[12.5px] text-t3 flex items-center gap-2.5 font-normal">
        <div className="flex">
          {[
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=56&h=56&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=56&h=56&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=56&h=56&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=56&h=56&fit=crop&crop=face",
          ].map((src, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-[0_1px_3px_rgba(15,23,42,0.1)]"
              style={{ marginLeft: i > 0 ? "-7px" : 0 }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="w-px h-3.5 bg-border2" />
        <span className="hidden sm:inline">Более 12&nbsp;000 пользователей уже нашли работу быстрее</span>
        <span className="sm:hidden">12 000+ пользователей</span>
      </div>
    </section>
  );
}
