"use client";

import { useState } from "react";

export default function ProductLanding() {
  const [rOk, setROk] = useState(false);
  const [vOk, setVOk] = useState(false);
  const [rTab, setRTab] = useState<"file" | "text">("file");
  const [vTab, setVTab] = useState<"text" | "url">("text");
  const [vacText, setVacText] = useState("");
  const [parsed, setParsed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const doFetch = () => {
    setVTab("text");
    setParsed(true);
    setVacText("Яндекс — Data Analyst\n\nТребования:\n— Python, SQL от 2 лет\n— Apache Spark и Airflow\n— Power BI / Tableau");
    setVOk(true);
  };

  const ready = rOk && vOk;

  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center px-4 md:px-8 gap-5 border-b border-border bg-[rgba(246,247,251,0.95)] backdrop-blur-[16px]">
        <a href="/" className="flex items-center no-underline">
          <img src="/logos/offer_match_2.png" alt="OfferMatch" className="h-6 w-auto" />
        </a>
        <div className="hidden md:flex gap-0.5 ml-4">
          <button onClick={() => document.getElementById("s-how")?.scrollIntoView({ behavior: "smooth" })} className="px-3 py-1.5 text-[13.5px] text-t2 bg-transparent border-none cursor-pointer rounded-lg transition-all hover:text-navy hover:bg-blue/5">Как работает</button>
          <button onClick={() => document.getElementById("s-feat")?.scrollIntoView({ behavior: "smooth" })} className="px-3 py-1.5 text-[13.5px] text-t2 bg-transparent border-none cursor-pointer rounded-lg transition-all hover:text-navy hover:bg-blue/5">Возможности</button>
          <button onClick={() => document.getElementById("s-pricing")?.scrollIntoView({ behavior: "smooth" })} className="px-3 py-1.5 text-[13.5px] text-t2 bg-transparent border-none cursor-pointer rounded-lg transition-all hover:text-navy hover:bg-blue/5">Тарифы</button>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <a href="/screens/07-dashboard.html" className="hidden sm:block px-4 py-[7px] text-[13.5px] font-medium text-navy3 bg-transparent border border-border2 cursor-pointer rounded-lg transition-all hover:border-navy3 hover:text-navy no-underline">Войти</a>
          <a href="/screens/02-loading.html" className="px-5 py-2 text-[13.5px] font-semibold text-white bg-blue border-none cursor-pointer rounded-lg transition-all hover:bg-blue-d hover:-translate-y-px no-underline">Попробовать бесплатно</a>
        </div>
      </nav>

      <main className="relative z-[2] pt-[60px]">
        {/* Hero */}
        <section className="min-h-[calc(100vh-60px)] flex flex-col items-center justify-center px-4 md:px-6 py-16 md:py-20 text-center bg-[linear-gradient(180deg,#3E80F8_0%,#6B9FFA_45%,#A8C8FC_65%,#D6E4FD_78%,#EDF1FB_88%,#F6F7FB_96%)] relative overflow-hidden">
          {/* Floating logos */}
          <div className="hidden lg:block hero-float absolute top-20 left-[6%] z-[1]"><img src="/logos/ozon.png" alt="" className="w-[72px] h-[72px] object-contain opacity-85" /></div>
          <div className="hidden lg:block hero-float absolute top-[100px] right-[8%] z-[1]" style={{ animationDelay: "1.5s" }}><img src="/logos/sber.png" alt="" className="w-24 h-24 object-contain opacity-85" /></div>
          <div className="hidden xl:block hero-float absolute top-[200px] left-[3%] z-[1]" style={{ animationDelay: "3s" }}><img src="/logos/yandex.png" alt="" className="w-20 h-20 object-contain opacity-85" /></div>
          <div className="hidden xl:block hero-float absolute top-40 right-[4%] z-[1]" style={{ animationDelay: "2.2s" }}><img src="/logos/alfa.png" alt="" className="w-14 h-14 object-contain opacity-85" /></div>
          <div className="hidden lg:block hero-float absolute top-[280px] right-[12%] z-[1]" style={{ animationDelay: "0.8s" }}><img src="/logos/wb.png" alt="" className="w-[88px] h-[88px] object-contain opacity-85" /></div>

          {/* Floating chips */}
          <div className="hidden lg:block hero-float absolute top-[130px] left-[15%] z-[1] rounded-full bg-white/15 backdrop-blur-[8px] border border-white/20 px-4 py-2 text-xs font-semibold text-white" style={{ animationDelay: "0.5s" }}>Оффер</div>
          <div className="hidden lg:block hero-float absolute top-[180px] right-[12%] z-[1] rounded-full bg-white/15 backdrop-blur-[8px] border border-white/20 px-4 py-2 text-xs font-semibold text-white" style={{ animationDelay: "2s" }}>CV готово</div>
          <div className="hidden xl:block hero-float absolute top-[320px] left-[5%] z-[1] rounded-full bg-white/15 backdrop-blur-[8px] border border-white/20 px-4 py-2 text-xs font-semibold text-white" style={{ animationDelay: "3.5s" }}>Match 87%</div>

          <div className="relative z-[5]">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full py-1.5 pl-2 pr-3.5 text-[12.5px] text-white mb-6 md:mb-8 font-medium">
              <span className="bg-white text-blue text-[10px] font-bold py-0.5 px-2.5 rounded-full tracking-wide">NEW</span>
              1&nbsp;бесплатная генерация — резюме и&nbsp;сопроводительное
            </div>

            <h1 className="text-[clamp(36px,7vw,76px)] font-extrabold leading-[1.05] tracking-tight text-white max-w-[820px] mb-5">
              Получи работу,<br />которую хочешь
            </h1>

            <p className="text-base md:text-[17px] text-white/90 leading-relaxed max-w-[480px] mx-auto mb-12 font-normal px-4">
              Загрузи резюме и&nbsp;вакансию&nbsp;— ИИ оценит соответствие, усилит резюме и&nbsp;напишет сопроводительное за&nbsp;30&nbsp;секунд.
            </p>

            {/* Widget */}
            <div className="w-full max-w-[900px] bg-white border border-border rounded-[28px] overflow-hidden text-left">
              <div className="px-7 pt-6 flex items-start justify-between gap-5">
                <div>
                  <div className="text-xl font-bold tracking-tight text-navy mb-1">Загрузи вакансию</div>
                  <div className="text-[13px] text-t2">Выбери резюме&nbsp;— мы&nbsp;проверим соответствие и&nbsp;поможем повысить шансы</div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0 mt-1">
                  <div className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-blue border-[1.5px] border-blue text-white">1</div><span className="text-[11px] font-semibold text-navy">Загрузка</span></div>
                  <div className="w-5 h-px bg-border" />
                  <div className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border-[1.5px] border-border2 text-t3">2</div><span className="text-[11px] text-t3">Анализ</span></div>
                  <div className="w-5 h-px bg-border" />
                  <div className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border-[1.5px] border-border2 text-t3">3</div><span className="text-[11px] text-t3">Результат</span></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 p-5 px-7">
                {/* Resume panel */}
                <div className={`bg-bg border-[1.5px] rounded-[20px] overflow-hidden transition-colors min-h-[320px] ${rOk ? "border-green bg-[rgba(22,163,74,0.02)]" : "border-border"}`}>
                  <div className="px-4 pt-3.5 flex items-center justify-between">
                    <div className="text-[13px] font-semibold text-navy flex items-center gap-2">Резюме <span className="text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-full bg-blue-l text-blue border border-blue-m">Шаг 1</span></div>
                  </div>
                  <div className="flex gap-0.5 px-3.5 pt-2.5">
                    <button onClick={() => setRTab("file")} className={`px-3 py-1.5 text-xs font-medium rounded-lg border-none cursor-pointer transition-all ${rTab === "file" ? "bg-white text-navy border border-border" : "bg-transparent text-t3 hover:text-navy hover:bg-surface2"}`}>Файл</button>
                    <button onClick={() => setRTab("text")} className={`px-3 py-1.5 text-xs font-medium rounded-lg border-none cursor-pointer transition-all ${rTab === "text" ? "bg-white text-navy border border-border" : "bg-transparent text-t3 hover:text-navy hover:bg-surface2"}`}>Текст</button>
                  </div>
                  <div className="p-3.5 min-h-[180px]">
                    {rTab === "file" && !rOk && (
                      <div onClick={() => setROk(true)} className="border-[1.5px] border-dashed border-border2 rounded-2xl py-9 px-5 text-center cursor-pointer transition-all hover:border-blue hover:bg-blue-l group">
                        <div className="w-11 h-11 bg-surface2 border border-border rounded-xl flex items-center justify-center mx-auto mb-3 text-t3 transition-all group-hover:-translate-y-0.5 group-hover:bg-blue-l group-hover:border-blue-m group-hover:text-blue">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                        </div>
                        <div className="text-[13px] font-medium text-navy mb-1">Перетащите файл или <span className="text-blue font-medium">выберите</span></div>
                        <div className="text-[11px] text-t3">PDF, DOC, DOCX</div>
                        <div className="text-[10px] text-t4 mt-1.5">до 10 МБ</div>
                      </div>
                    )}
                    {rTab === "file" && rOk && (
                      <div className="flex items-center gap-2.5 bg-green-l border border-green-m rounded-xl py-2.5 px-3.5">
                        <svg className="w-5 h-5 text-green flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                        <span className="text-xs font-medium text-navy flex-1">Резюме_Иванова_Анна.pdf</span>
                        <span className="text-[11px] text-t3">342 КБ</span>
                        <button onClick={() => setROk(false)} className="bg-transparent border-none text-t3 cursor-pointer p-0.5 rounded hover:text-coral transition-colors"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button>
                      </div>
                    )}
                    {rTab === "text" && (
                      <div className="bg-white border-[1.5px] border-border rounded-xl p-3 transition-colors focus-within:border-blue">
                        <textarea className="w-full min-h-[150px] bg-transparent border-none outline-none resize-none text-[13px] text-navy leading-relaxed placeholder:text-t4" placeholder="Вставьте текст резюме..." />
                      </div>
                    )}
                  </div>
                </div>

                {/* Vacancy panel */}
                <div className={`bg-bg border-[1.5px] rounded-[20px] overflow-hidden transition-colors min-h-[320px] ${vOk ? "border-green bg-[rgba(22,163,74,0.02)]" : "border-border"}`}>
                  <div className="px-4 pt-3.5 flex items-center justify-between">
                    <div className="text-[13px] font-semibold text-navy flex items-center gap-2">Вакансия <span className="text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded-full bg-blue-l text-blue border border-blue-m">Шаг 2</span></div>
                  </div>
                  <div className="flex gap-0.5 px-3.5 pt-2.5 items-center justify-between">
                    <div className="flex gap-0.5">
                      <button onClick={() => setVTab("text")} className={`px-3 py-1.5 text-xs font-medium rounded-lg border-none cursor-pointer transition-all ${vTab === "text" ? "bg-white text-navy border border-border" : "bg-transparent text-t3 hover:text-navy hover:bg-surface2"}`}>Текст</button>
                      <button onClick={() => setVTab("url")} className={`px-3 py-1.5 text-xs font-medium rounded-lg border-none cursor-pointer transition-all ${vTab === "url" ? "bg-white text-navy border border-border" : "bg-transparent text-t3 hover:text-navy hover:bg-surface2"}`}>По ссылке</button>
                    </div>
                    {parsed && <div className="inline-flex items-center gap-1.5 bg-green-l border border-green-m rounded-full px-2.5 py-0.5 text-[11px] text-green font-semibold"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>Загружено</div>}
                  </div>
                  <div className="p-3.5 min-h-[180px]">
                    {vTab === "text" && (
                      <>
                        <div className="bg-white border-[1.5px] border-border rounded-xl p-3 transition-colors focus-within:border-blue">
                          <textarea className="w-full min-h-[130px] bg-transparent border-none outline-none resize-none text-[13px] text-navy leading-relaxed placeholder:text-t4" placeholder={"Вставьте текст вакансии...\n\nНапример: «Ищем Data Analyst с опытом\nPython, SQL, Power BI...»"} value={vacText} onChange={(e) => { setVacText(e.target.value); setVOk(e.target.value.length > 10); }} />
                        </div>
                        <div className="flex items-center justify-between px-0.5 pt-1.5 text-[11px] text-t3">{vacText.length} символов</div>
                      </>
                    )}
                    {vTab === "url" && (
                      <>
                        <div className="flex gap-2 mb-2.5">
                          <input className="flex-1 bg-white border-[1.5px] border-border rounded-xl px-3.5 py-2.5 text-[13px] text-navy outline-none transition-colors focus:border-blue placeholder:text-t4" type="url" placeholder="https://hh.ru/vacancy/12345678" />
                          <button onClick={doFetch} className="px-4 bg-navy border-none rounded-xl text-xs font-semibold text-white cursor-pointer transition-all hover:bg-blue whitespace-nowrap min-h-[42px]">Загрузить</button>
                        </div>
                        <div className="text-[11px] text-t3">hh.ru · SuperJob · Работа.ру</div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Widget footer */}
              <div className="px-7 py-4 pb-6 flex items-center gap-5 border-t border-border bg-bg">
                <div className="flex-1">
                  <div className="text-[13px] font-semibold text-navy mb-0.5">Готовность к&nbsp;анализу</div>
                  <div className="text-[11px] text-t3">Заполните оба поля для&nbsp;проверки соответствия</div>
                </div>
                <div className="hidden sm:flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-xs"><div className={`w-[7px] h-[7px] rounded-full transition-all ${rOk ? "bg-green" : "bg-border2"}`} /><span className={rOk ? "text-navy2" : "text-t3"}>Резюме</span></div>
                  <div className="flex items-center gap-1.5 text-xs"><div className={`w-[7px] h-[7px] rounded-full transition-all ${vOk ? "bg-green" : "bg-border2"}`} /><span className={vOk ? "text-navy2" : "text-t3"}>Вакансия</span></div>
                </div>
                <a href={ready ? "/screens/02-loading.html" : undefined} onClick={(e) => { if (!ready) e.preventDefault(); }} className={`flex items-center gap-2 px-7 py-3.5 rounded-2xl text-[15px] font-semibold tracking-tight transition-all no-underline ${ready ? "bg-blue text-white hover:-translate-y-0.5 hover:bg-blue-d cursor-pointer" : "bg-border2 text-t3 cursor-not-allowed"}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 1l2.59 7.76L22 12l-7.41 3.24L12 23l-2.59-7.76L2 12l7.41-3.24L12 1z" /></svg>
                  Анализировать резюме
                </a>
              </div>
            </div>

            {/* Proof */}
            <div className="mt-7 flex items-center gap-2.5 text-[12.5px] text-t3 justify-center">
              <div className="flex">
                {["photo-1494790108377-be9c29b29330", "photo-1539571696357-5a69c17a67c6", "photo-1438761681033-6461ffad8d80", "photo-1500648767791-00dcc994a43e"].map((id, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-sm" style={{ marginLeft: i > 0 ? "-7px" : 0 }}>
                    <img src={`https://images.unsplash.com/${id}?w=56&h=56&fit=crop&crop=face`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="w-px h-3.5 bg-border2" />
              <span>Более 12&nbsp;000 пользователей уже нашли работу быстрее</span>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 px-6" id="s-how">
          <div className="max-w-[1080px] mx-auto text-center">
            <div className="text-[11px] font-semibold tracking-[1.5px] uppercase text-blue mb-3">Как это работает</div>
            <div className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-navy mb-4 leading-tight">Три шага до&nbsp;сильного отклика</div>
            <div className="text-[15px] text-t2 max-w-[520px] mx-auto mb-14">Минимум действий&nbsp;— максимум результата</div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { num: "01", title: "Загрузи резюме и вакансию", desc: "Добавь файл, текст или\u00a0ссылку\u00a0— сервис сам всё распознает и\u00a0подготовит к\u00a0анализу.", tag: "30 секунд" },
                { num: "02", title: "Ответь на пару вопросов", desc: "ИИ уточнит детали твоего опыта и\u00a0поможет усилить резюме за\u00a0счёт реальных кейсов.", tag: "Match растёт на 10–15%" },
                { num: "03", title: "Получи готовый отклик", desc: "Скачай обновлённое резюме, получи сопроводительное и\u00a0сохрани вакансию в\u00a0трекер.", tag: "Трекер + история откликов" },
              ].map((c) => (
                <div key={c.num} className="bg-white rounded-[20px] p-8 text-left flex flex-col transition-all hover:-translate-y-1 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="text-[56px] font-extrabold text-blue opacity-[.07] leading-none mb-5 tracking-tight">{c.num}</div>
                  <div className="text-[17px] font-bold text-navy mb-2.5 tracking-tight">{c.title}</div>
                  <div className="text-[13.5px] text-t2 leading-relaxed flex-1">{c.desc}</div>
                  <div className="inline-flex items-center gap-1.5 mt-5 self-center bg-blue-l border border-blue-m rounded-full px-3 py-1 text-[11px] text-blue font-semibold">{c.tag}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6" id="s-feat">
          <div className="max-w-[1080px] mx-auto">
            <div className="text-center mb-12">
              <div className="text-[11px] font-semibold tracking-[1.5px] uppercase text-blue mb-3">Инструменты</div>
              <div className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-navy mb-4 leading-tight">Всё для умного поиска работы</div>
              <div className="text-[15px] text-t2 max-w-[520px] mx-auto">Один сервис заменяет карьерного консультанта, дизайнера резюме и&nbsp;менеджер откликов</div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Match report - wide */}
              <div className="bg-white rounded-[20px] p-7 md:col-span-2 border-[1.5px] border-blue-m transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-blue-l flex items-center justify-center text-blue mb-4"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="18" y="3" width="4" height="18" rx="1" /><rect x="10" y="8" width="4" height="13" rx="1" /><rect x="2" y="13" width="4" height="8" rx="1" /></svg></div>
                <div className="text-[15px] font-bold text-navy mb-2 tracking-tight">Match-отчёт</div>
                <div className="text-[13px] text-t2 leading-relaxed mb-4">Сравните резюме с&nbsp;требованиями вакансии по&nbsp;навыкам, опыту и&nbsp;ключевым словам. Поймите, где не&nbsp;хватает соответствия.</div>
                <div className="bg-bg border border-border rounded-xl p-3.5 flex gap-4">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <div className="flex items-baseline gap-1.5"><span className="text-[28px] font-extrabold text-navy tracking-tight">78%</span><span className="text-[11px] text-blue-side font-semibold">+12%</span></div>
                    <div className="text-[10px] text-t3 mb-1">Общий Match-скор</div>
                    <div className="flex items-end gap-[3px] h-10">{[45, 60, 50, 80, 100, 90].map((h, i) => (<div key={i} className="flex-1 rounded-[3px]" style={{ height: `${h}%`, background: `rgba(143,183,255,${0.3 + i * 0.14})` }} />))}</div>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="flex-1 flex flex-col gap-2">
                    {[{ l: "Hard Skills", v: 92 }, { l: "Soft Skills", v: 68 }, { l: "Ключевые слова", v: 74 }].map((s) => (<div key={s.l}><div className="flex justify-between items-center mb-1"><span className="text-[11px] text-navy3 font-medium">{s.l}</span><span className="text-[11px] font-bold text-blue-side">{s.v}%</span></div><div className="h-1.5 rounded-full bg-[#8FB7FF20]"><div className="h-full rounded-full bg-blue-side" style={{ width: `${s.v}%` }} /></div></div>))}
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[20px] p-7 transition-all hover:-translate-y-1"><div className="w-10 h-10 rounded-lg bg-blue-l flex items-center justify-center text-blue mb-4"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg></div><div className="text-[15px] font-bold text-navy mb-2 tracking-tight">Рекрут-хакер</div><div className="text-[13px] text-t2 leading-relaxed">Сервис задаёт точечные вопросы и&nbsp;дополняет резюме вашими реальными ответами&nbsp;— без&nbsp;выдуманных фактов.</div></div>
              <div className="bg-white rounded-[20px] p-7 transition-all hover:-translate-y-1"><div className="w-10 h-10 rounded-lg bg-blue-l flex items-center justify-center text-blue mb-4"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg></div><div className="text-[15px] font-bold text-navy mb-2 tracking-tight">Сопроводительное</div><div className="text-[13px] text-t2 leading-relaxed">Создавайте письма под&nbsp;конкретную вакансию с&nbsp;возможностью выбрать тон и&nbsp;стиль.</div></div>
              <div className="bg-white rounded-[20px] p-7 transition-all hover:-translate-y-1"><div className="w-10 h-10 rounded-lg bg-blue-l flex items-center justify-center text-blue mb-4"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z" /></svg></div><div className="text-[15px] font-bold text-navy mb-2 tracking-tight">Шаблоны и&nbsp;экспорт</div><div className="text-[13px] text-t2 leading-relaxed">Скачивайте резюме в&nbsp;формате PDF, DOCX. Храните несколько версий под&nbsp;разные вакансии.</div></div>
              <div className="bg-white rounded-[20px] p-7 border-[1.5px] border-blue-m transition-all hover:-translate-y-1"><div className="w-10 h-10 rounded-lg bg-blue-l flex items-center justify-center text-blue mb-4"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg></div><div className="text-[15px] font-bold text-navy mb-2 tracking-tight">Вакансии с&nbsp;Match-анализом</div><div className="text-[13px] text-t2 leading-relaxed">Сервис подбирает вакансии с&nbsp;учётом вашего резюме. Свайпайте карточки, сохраняйте подходящие и&nbsp;сразу адаптируйте резюме.</div></div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 px-6 bg-bg" id="s-pricing">
          <div className="max-w-[900px] mx-auto text-center">
            <div className="text-[11px] font-semibold tracking-[1.5px] uppercase text-blue mb-3">Тарифы</div>
            <div className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-navy mb-4 leading-tight">Начни бесплатно</div>
            <div className="text-[15px] text-t2 max-w-[520px] mx-auto mb-14">1&nbsp;бесплатная генерация — резюме и&nbsp;сопроводительное</div>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="bg-white border-[1.5px] border-blue rounded-[28px] p-8 relative flex flex-col transition-all hover:-translate-y-1">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue text-white text-[10px] font-bold px-3.5 py-1 rounded-full tracking-wide whitespace-nowrap">ДОСТУПНО СЕЙЧАС</div>
                <div className="text-base font-bold text-navy mb-1">Старт</div>
                <div className="text-[12.5px] text-t3 mb-5">Попробуй</div>
                <div className="text-[40px] font-extrabold leading-none mb-1 tracking-tight text-blue">Бесплатно</div>
                <div className="text-[12.5px] text-t3 mb-6">1 бесплатная генерация</div>
                <ul className="flex flex-col gap-2.5 mb-6 flex-1 list-none p-0">
                  {["Анализ резюме относительно вакансии", "Адаптация резюме под конкретную позицию", "Подробный match-отчёт", "Сопроводительное письмо"].map((f) => (<li key={f} className="text-[13px] text-navy3 flex items-start gap-2 leading-snug"><svg className="w-4 h-4 text-blue flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>{f}</li>))}
                </ul>
                <a href="/screens/02-loading.html" className="block text-center w-full py-3 px-4 rounded-xl text-[13.5px] font-semibold text-white bg-blue border-[1.5px] border-blue transition-all hover:bg-blue-d hover:-translate-y-px no-underline mt-auto">Попробовать бесплатно</a>
              </div>
              <div className="bg-white border-[1.5px] border-[#D4E4FF] rounded-[28px] p-8 relative flex flex-col transition-all hover:-translate-y-1 hover:border-blue-side">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-t3 text-white text-[10px] font-bold px-3.5 py-1 rounded-full tracking-wide whitespace-nowrap">СКОРО</div>
                <div className="text-base font-bold text-navy mb-1">Неделя</div>
                <div className="text-[12.5px] text-t3 mb-5">10 качественных откликов</div>
                <div className="text-[40px] font-extrabold leading-none mb-1 tracking-tight text-[#76A5FA]">399 ₽</div>
                <div className="text-[12.5px] text-t3 mb-6">без автопродления · 7 дней</div>
                <ul className="flex flex-col gap-2.5 mb-6 flex-1 list-none p-0">
                  {["10 откликов с\u00a0адаптацией", "Анализ по\u00a08 критериям", "Сопроводительное письмо", "Интервью с\u00a0ИИ-ассистентом", "Мэтч-механика"].map((f) => (<li key={f} className="text-[13px] text-navy3 flex items-start gap-2 leading-snug"><svg className="w-4 h-4 text-blue-side flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>{f}</li>))}
                </ul>
                <div className="text-xs text-t3 font-medium text-center mb-3">39 ₽ / отклик</div>
                <button disabled className="w-full py-3 px-4 rounded-xl text-[13.5px] font-semibold bg-bg2 border-[1.5px] border-border text-t3 cursor-not-allowed mt-auto">Скоро</button>
              </div>
              <div className="bg-white border-[1.5px] border-[#D4E4FF] rounded-[28px] p-8 relative flex flex-col transition-all hover:-translate-y-1 hover:border-blue-side">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-t3 text-white text-[10px] font-bold px-3.5 py-1 rounded-full tracking-wide whitespace-nowrap">СКОРО</div>
                <div className="text-base font-bold text-navy mb-1">Месяц</div>
                <div className="text-[12.5px] text-t3 mb-5">40 качественных откликов</div>
                <div className="text-[40px] font-extrabold leading-none mb-1 tracking-tight text-[#76A5FA]">1 190 ₽</div>
                <div className="text-[12.5px] text-t3 mb-6">без автопродления · 30 дней · <span className="text-green font-semibold">−25%</span></div>
                <ul className="flex flex-col gap-2.5 mb-6 flex-1 list-none p-0">
                  {["40 откликов с\u00a0адаптацией", "Анализ по\u00a08 критериям", "Сопроводительное письмо", "Интервью с\u00a0ИИ-ассистентом", "Мэтч-механика"].map((f) => (<li key={f} className="text-[13px] text-navy3 flex items-start gap-2 leading-snug"><svg className="w-4 h-4 text-blue-side flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>{f}</li>))}
                </ul>
                <div className="text-xs text-t3 font-medium text-center mb-3">29 ₽ / отклик</div>
                <button disabled className="w-full py-3 px-4 rounded-xl text-[13.5px] font-semibold bg-bg2 border-[1.5px] border-border text-t3 cursor-not-allowed mt-auto">Скоро</button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6">
          <div className="max-w-[680px] mx-auto">
            <div className="text-center"><div className="text-[11px] font-semibold tracking-[1.5px] uppercase text-blue mb-3">FAQ</div><div className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-navy leading-tight">Частые вопросы</div></div>
            <div className="mt-12 flex flex-col gap-2">
              {[
                { q: "Как ИИ адаптирует моё резюме?", a: "Система сравнивает резюме с\u00a0требованиями вакансии, выявляет недостающие навыки, задаёт вопросы и\u00a0дополняет текст на\u00a0основе ваших ответов\u00a0— без\u00a0выдуманных фактов." },
                { q: "Мои данные в\u00a0безопасности?", a: "Да. Данные не\u00a0передаются третьим лицам. Хранятся в\u00a0зашифрованном виде, доступны только вам." },
                { q: "Сколько можно использовать бесплатно?", a: "На\u00a0старте вы\u00a0получаете 1\u00a0полную генерацию: анализ + адаптация + сопроводительное\u00a0— без\u00a0ввода карты." },
                { q: "Работает ли автопарсинг вакансий?", a: "Да. Вставьте ссылку с\u00a0hh.ru, SuperJob, Работа.ру\u00a0— система загрузит описание автоматически." },
                { q: "В\u00a0каком формате скачивать резюме?", a: "PDF и\u00a0Word (DOCX). Можно хранить несколько версий под\u00a0разные вакансии." },
              ].map((f, i) => (
                <div key={i} className={`bg-white rounded-xl overflow-hidden transition-all ${openFaq === i ? "border border-blue-m" : ""}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex items-center justify-between w-full px-5 py-[18px] gap-3 text-sm font-medium text-navy bg-transparent border-none cursor-pointer text-left transition-colors hover:bg-bg">
                    {f.q}
                    <span className={`w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0 transition-all ${openFaq === i ? "bg-blue-l text-blue rotate-180" : "bg-surface2 text-t3"}`}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></span>
                  </button>
                  <div className={`overflow-hidden transition-all ${openFaq === i ? "max-h-[200px] px-5 pb-[18px]" : "max-h-0"}`}>
                    <div className="text-[13.5px] text-t2 leading-relaxed">{f.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-16 px-6 bg-white">
          <div className="max-w-[1080px] mx-auto">
            <div className="grid md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 mb-12">
              <div><div className="mb-3"><img src="/logos/offer_match_2.png" alt="OfferMatch" className="h-7 w-auto" /></div><div className="text-[12.5px] text-t3 leading-relaxed max-w-[210px]">ИИ-сервис для&nbsp;умного поиска работы. Адаптация резюме, трекер откликов.</div></div>
              <div><div className="text-[11px] font-semibold tracking-[1px] uppercase text-t4 mb-4">Продукт</div><div className="flex flex-col gap-2.5"><a className="text-[13px] text-t2 no-underline cursor-pointer hover:text-navy transition-colors">Анализ резюме</a><a className="text-[13px] text-t2 no-underline cursor-pointer hover:text-navy transition-colors">Адаптация</a><a className="text-[13px] text-t2 no-underline cursor-pointer hover:text-navy transition-colors">Сопроводительное</a><a className="text-[13px] text-t2 no-underline cursor-pointer hover:text-navy transition-colors">Трекер откликов</a></div></div>
              <div><div className="text-[11px] font-semibold tracking-[1px] uppercase text-t4 mb-4">Компания</div><div className="flex flex-col gap-2.5"><a className="text-[13px] text-t2 no-underline cursor-pointer hover:text-navy transition-colors">О нас</a><a className="text-[13px] text-t2 no-underline cursor-pointer hover:text-navy transition-colors">Блог</a><a className="text-[13px] text-t2 no-underline cursor-pointer hover:text-navy transition-colors">Карьера</a></div></div>
              <div><div className="text-[11px] font-semibold tracking-[1px] uppercase text-t4 mb-4">Поддержка</div><div className="flex flex-col gap-2.5"><a className="text-[13px] text-t2 no-underline cursor-pointer hover:text-navy transition-colors">Справка</a><a className="text-[13px] text-t2 no-underline cursor-pointer hover:text-navy transition-colors">Контакты</a><a className="text-[13px] text-t2 no-underline cursor-pointer hover:text-navy transition-colors">Конфиденциальность</a></div></div>
            </div>
            <div className="border-t border-border pt-6 flex items-center justify-between text-xs text-t3"><span>© 2026 OfferMatch</span><span>Сделано с ♥ для тех, кто ищет работу</span></div>
          </div>
        </footer>
      </main>
    </>
  );
}
