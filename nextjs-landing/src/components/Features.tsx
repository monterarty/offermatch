export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <div className="text-[11px] font-semibold tracking-[1.5px] uppercase text-blue mb-3">
            Инструменты
          </div>
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-navy mb-4 leading-[1.1]">
            Всё для умного поиска работы
          </h2>
          <p className="text-[15px] text-t2 leading-relaxed max-w-[520px] mx-auto font-normal">
            Один сервис заменяет карьерного консультанта, дизайнера резюме и менеджер откликов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Match Report - Wide */}
          <div className="bg-white rounded-[20px] p-6 md:p-7 transition-all md:col-span-2 border-[1.5px] border-blue-m shadow-[0_4px_20px_rgba(59,126,248,0.1)] hover:border-blue hover:shadow-[0_8px_28px_rgba(59,126,248,0.16)] hover:-translate-y-0.5">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-blue-l text-blue flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <rect x="18" y="3" width="4" height="18" rx="1" />
                <rect x="10" y="8" width="4" height="13" rx="1" />
                <rect x="2" y="13" width="4" height="8" rx="1" />
              </svg>
            </div>
            <div className="text-[15px] font-bold mb-2 text-navy tracking-tight">Match-отчёт</div>
            <div className="text-[13px] text-t2 leading-relaxed font-normal mb-4">
              Сравните резюме с требованиями вакансии по навыкам, опыту и ключевым словам. Поймите, где не хватает соответствия — и что нужно усилить.
            </div>

            {/* Mini chart */}
            <div className="bg-bg border border-border rounded-xl p-3.5 flex flex-col sm:flex-row gap-4 items-stretch">
              <div className="flex-1 flex flex-col gap-1.5">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[28px] font-extrabold text-navy tracking-tight">78%</span>
                  <span className="text-[11px] text-blue-side font-semibold">+12%</span>
                </div>
                <div className="text-[10px] text-t3 mb-1">Общий Match-скор</div>
                <div className="flex items-end gap-0.5 h-10">
                  {[45, 60, 50, 80, 100, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-[3px]"
                      style={{
                        height: `${h}%`,
                        background: `rgba(143, 183, 255, ${0.3 + i * 0.14})`
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="hidden sm:block w-px bg-border" />
              <div className="flex-1 flex flex-col gap-2">
                <SkillBar label="Hard Skills" value={92} />
                <SkillBar label="Soft Skills" value={68} opacity={0.73} />
                <SkillBar label="Ключевые слова" value={74} opacity={0.53} />
              </div>
            </div>
          </div>

          {/* Templates */}
          <div className="bg-white rounded-[20px] p-6 transition-all hover:-translate-y-0.5 hover:shadow-md">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-blue-l text-blue flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z" />
              </svg>
            </div>
            <div className="text-[15px] font-bold mb-2 text-navy tracking-tight">Шаблоны и экспорт</div>
            <div className="text-[13px] text-t2 leading-relaxed font-normal">
              Скачивайте резюме в формате PDF, DOCX или TXT. Храните несколько версий под разные вакансии.
            </div>
          </div>

          {/* Cover Letter */}
          <div className="bg-white rounded-[20px] p-6 transition-all relative opacity-75">
            <span className="absolute top-4 right-4 bg-t3 text-white text-[10px] font-bold py-0.5 px-2.5 rounded-full tracking-wide">СКОРО</span>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-blue-l text-blue flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div className="text-[15px] font-bold mb-2 text-navy tracking-tight">Сопроводительное</div>
            <div className="text-[13px] text-t2 leading-relaxed font-normal">
              Создавайте письма под конкретную вакансию с возможностью выбрать тон и стиль.
            </div>
          </div>

          {/* Recruit Hacker */}
          <div className="bg-white rounded-[20px] p-6 transition-all relative opacity-75">
            <span className="absolute top-4 right-4 bg-t3 text-white text-[10px] font-bold py-0.5 px-2.5 rounded-full tracking-wide">СКОРО</span>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-blue-l text-blue flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <div className="text-[15px] font-bold mb-2 text-navy tracking-tight">Рекрут-хакер</div>
            <div className="text-[13px] text-t2 leading-relaxed font-normal">
              Сервис задаёт точечные вопросы и дополняет резюме вашими реальными ответами — без выдуманных фактов.
            </div>
          </div>

          {/* Vacancies with Match */}
          <div className="bg-white rounded-[20px] p-6 transition-all relative opacity-75">
            <span className="absolute top-4 right-4 bg-t3 text-white text-[10px] font-bold py-0.5 px-2.5 rounded-full tracking-wide">СКОРО</span>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-blue-l text-blue flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div className="text-[15px] font-bold mb-2 text-navy tracking-tight">Вакансии с Match-анализом</div>
            <div className="text-[13px] text-t2 leading-relaxed font-normal">
              Сервис подбирает вакансии с учётом вашего резюме и показывает уровень соответствия. Свайпайте карточки, сохраняйте подходящие и сразу адаптируйте резюме под отклик.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ label, value, opacity = 1 }: { label: string; value: number; opacity?: number }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <span className="text-[11px] text-navy3 font-medium">{label}</span>
        <span className="text-[11px] font-bold" style={{ color: `rgba(143, 183, 255, ${opacity})` }}>{value}%</span>
      </div>
      <div className="h-1.5 rounded-[3px] bg-[rgba(143,183,255,0.2)]">
        <div
          className="h-full rounded-[3px]"
          style={{ width: `${value}%`, background: `rgba(143, 183, 255, ${opacity})` }}
        />
      </div>
    </>
  );
}
