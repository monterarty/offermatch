"use client";

import { useState } from "react";

export default function Widget() {
  const [resumeTab, setResumeTab] = useState<"file" | "text">("file");
  const [vacancyTab, setVacancyTab] = useState<"text" | "url">("text");
  const [resumeLoaded, setResumeLoaded] = useState(false);
  const [vacancyText, setVacancyText] = useState("");
  const [urlParsed, setUrlParsed] = useState(false);

  const isReady = resumeLoaded && vacancyText.length > 10;

  const handleLoadResume = () => {
    setResumeLoaded(true);
  };

  const handleClearResume = () => {
    setResumeLoaded(false);
  };

  const handleFetchUrl = () => {
    setVacancyTab("text");
    setUrlParsed(true);
    setVacancyText(`Яндекс — Data Analyst

Требования:
— Python, SQL от 2 лет
— Apache Spark и Airflow
— Power BI / Tableau`);
  };

  return (
    <div id="widget" className="relative z-[5] w-full max-w-[900px] bg-white border border-border rounded-[28px] shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-5 md:p-6 pb-0 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <div className="text-lg md:text-xl font-bold tracking-tight text-navy mb-1 text-left">
            Загрузи вакансию
          </div>
          <div className="text-[13px] text-t2 font-normal text-left">
            Выбери резюме — мы проверим соответствие и поможем повысить шансы
          </div>
        </div>
        {/* Steps - hidden on mobile */}
        <div className="hidden md:flex items-center gap-1.5 flex-shrink-0 mt-1">
          <Step number={1} label="Загрузка" active />
          <div className="w-5 h-px bg-border" />
          <Step number={2} label="Анализ" />
          <div className="w-5 h-px bg-border" />
          <Step number={3} label="Результат" />
        </div>
      </div>

      {/* Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 md:p-6">
        {/* Resume Panel */}
        <div className={`bg-bg border-[1.5px] rounded-[20px] overflow-hidden transition-colors ${resumeLoaded ? "border-green bg-green/5" : "border-border"}`}>
          <div className="p-3.5 pb-0 flex items-center justify-between">
            <div className="text-[13px] font-semibold text-navy flex items-center gap-2">
              Резюме
              <span className="text-[10px] font-semibold tracking-wide py-0.5 px-2 rounded-full border border-blue-m bg-blue-l text-blue">
                Шаг 1
              </span>
            </div>
          </div>
          <div className="flex gap-0.5 px-3.5 pt-2.5">
            <button
              onClick={() => setResumeTab("file")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg cursor-pointer border transition-all ${
                resumeTab === "file"
                  ? "bg-white text-navy shadow-sm border-border"
                  : "bg-transparent text-t3 border-transparent hover:text-navy hover:bg-surface2"
              }`}
            >
              Файл
            </button>
            <button
              onClick={() => setResumeTab("text")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg cursor-pointer border transition-all ${
                resumeTab === "text"
                  ? "bg-white text-navy shadow-sm border-border"
                  : "bg-transparent text-t3 border-transparent hover:text-navy hover:bg-surface2"
              }`}
            >
              Текст
            </button>
          </div>
          <div className="p-3 pt-3">
            {resumeTab === "file" && !resumeLoaded && (
              <div
                onClick={handleLoadResume}
                className="border-[1.5px] border-dashed border-border2 rounded-2xl py-8 md:py-9 px-5 text-center cursor-pointer transition-all hover:border-blue hover:bg-blue-l group"
              >
                <div className="w-11 h-11 bg-surface2 border border-border rounded-xl flex items-center justify-center mx-auto mb-3 transition-all text-t3 group-hover:-translate-y-0.5 group-hover:bg-blue-l group-hover:border-blue-m group-hover:text-blue">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                </div>
                <div className="text-[13px] font-medium text-navy mb-1">
                  Перетащите файл или <span className="text-blue font-medium">выберите</span>
                </div>
                <div className="text-[11px] text-t3">PDF, DOC, DOCX</div>
                <div className="text-[10px] text-t4 mt-1.5">до 10 МБ</div>
              </div>
            )}
            {resumeTab === "file" && resumeLoaded && (
              <div className="flex items-center gap-2.5 bg-green-l border border-green-m rounded-xl py-2.5 px-3">
                <div className="w-5 h-5 text-green flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className="text-xs font-medium text-navy flex-1">Резюме_Иванова_Анна.pdf</div>
                <div className="text-[11px] text-t3">342 КБ</div>
                <button
                  onClick={handleClearResume}
                  className="bg-transparent border-none text-t3 cursor-pointer flex items-center p-0.5 transition-colors rounded hover:text-coral"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            )}
            {resumeTab === "text" && (
              <div className="bg-white border-[1.5px] border-border rounded-xl p-3 transition-colors focus-within:border-blue">
                <textarea
                  className="w-full min-h-[130px] bg-transparent border-none outline-none resize-none text-[13px] text-navy leading-relaxed font-normal placeholder:text-t4"
                  placeholder="Вставьте текст резюме..."
                />
              </div>
            )}
          </div>
        </div>

        {/* Vacancy Panel */}
        <div className={`bg-bg border-[1.5px] rounded-[20px] overflow-hidden transition-colors ${vacancyText.length > 10 ? "border-green bg-green/5" : "border-border"}`}>
          <div className="p-3.5 pb-0 flex items-center justify-between">
            <div className="text-[13px] font-semibold text-navy flex items-center gap-2">
              Вакансия
              <span className="text-[10px] font-semibold tracking-wide py-0.5 px-2 rounded-full border border-blue-m bg-blue-l text-blue">
                Шаг 2
              </span>
            </div>
          </div>
          <div className="flex gap-0.5 px-3.5 pt-2.5">
            <button
              onClick={() => setVacancyTab("text")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg cursor-pointer border transition-all ${
                vacancyTab === "text"
                  ? "bg-white text-navy shadow-sm border-border"
                  : "bg-transparent text-t3 border-transparent hover:text-navy hover:bg-surface2"
              }`}
            >
              Текст
            </button>
            <button
              onClick={() => setVacancyTab("url")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg cursor-pointer border transition-all ${
                vacancyTab === "url"
                  ? "bg-white text-navy shadow-sm border-border"
                  : "bg-transparent text-t3 border-transparent hover:text-navy hover:bg-surface2"
              }`}
            >
              По ссылке
            </button>
          </div>
          <div className="p-3 pt-3">
            {vacancyTab === "text" && (
              <>
                {urlParsed && (
                  <div className="inline-flex items-center gap-1.5 bg-green-l border border-green-m rounded-full py-0.5 px-2.5 text-[11px] text-green mb-2 font-semibold">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Загружено автоматически
                  </div>
                )}
                <div className="bg-white border-[1.5px] border-border rounded-xl p-3 transition-colors focus-within:border-blue">
                  <textarea
                    className="w-full min-h-[130px] bg-transparent border-none outline-none resize-none text-[13px] text-navy leading-relaxed font-normal placeholder:text-t4"
                    placeholder={`Вставьте текст вакансии...

Например: «Ищем Data Analyst с опытом
Python, SQL, Power BI...»`}
                    value={vacancyText}
                    onChange={(e) => setVacancyText(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between px-0.5 pt-1.5 text-[11px] text-t3">
                  <span>{vacancyText.length} символов</span>
                </div>
              </>
            )}
            {vacancyTab === "url" && (
              <>
                <div className="flex gap-2 mb-2.5">
                  <input
                    type="url"
                    className="flex-1 bg-white border-[1.5px] border-border rounded-xl py-2.5 px-3 text-[13px] text-navy outline-none transition-colors placeholder:text-t4 focus:border-blue"
                    placeholder="https://hh.ru/vacancy/12345678"
                  />
                  <button
                    onClick={handleFetchUrl}
                    className="px-4 bg-navy border-none rounded-xl text-xs font-semibold text-white cursor-pointer transition-all whitespace-nowrap min-h-[42px] hover:bg-blue"
                  >
                    Загрузить
                  </button>
                </div>
                <div className="text-[11px] text-t3">hh.ru · SuperJob · Работа.ру</div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 md:p-6 pt-4 flex flex-col md:flex-row items-start md:items-center gap-4 border-t border-border bg-bg">
        <div className="flex-1">
          <div className="text-[13px] font-semibold text-navy mb-0.5 text-left">
            Готовность к анализу
          </div>
          <div className="text-[11px] text-t3 font-normal text-left">
            Заполните оба поля для проверки соответствия
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs">
            <div className={`w-[7px] h-[7px] rounded-full transition-all flex-shrink-0 ${resumeLoaded ? "bg-green" : "bg-border2"}`} />
            <span className={`font-normal transition-colors ${resumeLoaded ? "text-navy2" : "text-t3"}`}>Резюме</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <div className={`w-[7px] h-[7px] rounded-full transition-all flex-shrink-0 ${vacancyText.length > 10 ? "bg-green" : "bg-border2"}`} />
            <span className={`font-normal transition-colors ${vacancyText.length > 10 ? "text-navy2" : "text-t3"}`}>Вакансия</span>
          </div>
        </div>
        <button
          disabled={!isReady}
          className={`w-full md:w-auto py-3 px-6 md:px-7 rounded-2xl text-[15px] font-semibold cursor-pointer tracking-tight whitespace-nowrap transition-all flex items-center justify-center gap-2 ${
            isReady
              ? "bg-blue text-white border-none hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(59,126,248,0.36)] hover:bg-blue-d"
              : "bg-border2 text-t3 border-none cursor-not-allowed"
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 1l2.59 7.76L22 12l-7.41 3.24L12 23l-2.59-7.76L2 12l7.41-3.24L12 1z" />
          </svg>
          Анализировать резюме
        </button>
      </div>
    </div>
  );
}

function Step({ number, label, active = false }: { number: number; label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-1.5 text-[11px] ${active ? "text-navy font-semibold" : "text-t3 font-normal"}`}>
      <div
        className={`w-5 h-5 rounded-full border-[1.5px] flex items-center justify-center text-[10px] font-bold ${
          active ? "bg-blue border-blue text-white" : "border-border2 text-t3"
        }`}
      >
        {number}
      </div>
      <span>{label}</span>
    </div>
  );
}
