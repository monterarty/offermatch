export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Открой бот в Telegram",
      desc: "Отправь резюме и вакансию боту — он сам всё распознает и подготовит к анализу.",
      tag: "30 секунд",
    },
    {
      num: "02",
      title: "Получи полную аналитику",
      desc: "Пойми свои сильные и слабые стороны относительно вакансии — и адаптируй резюме под конкретную позицию.",
      tag: "Match растёт на 10–15%",
    },
    {
      num: "03",
      title: "Получи готовый отклик",
      desc: "Скачай адаптированное резюме под вакансию — готовое к отправке работодателю.",
      tag: "PDF / DOCX",
    },
  ];

  return (
    <section id="how" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[1080px] mx-auto text-center">
        <div className="text-[11px] font-semibold tracking-[1.5px] uppercase text-blue mb-3">
          Как это работает
        </div>
        <h2 className="text-[clamp(28px,4vw,42px)] font-bold tracking-tight text-navy mb-4 leading-[1.1]">
          Три шага до сильного отклика
        </h2>
        <p className="text-[15px] text-t2 leading-relaxed max-w-[520px] mx-auto mb-10 md:mb-14 font-normal">
          Минимум действий — максимум результата
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] p-6 md:p-8 transition-all relative overflow-hidden group hover:-translate-y-1 hover:shadow-md flex flex-col"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="text-[56px] font-extrabold text-blue opacity-[0.15] leading-none mb-5 tracking-[-2px]">
                {step.num}
              </div>
              <div className="text-[17px] font-bold mb-2.5 text-navy tracking-tight">
                {step.title}
              </div>
              <div className="text-[13.5px] text-t2 leading-relaxed font-normal flex-1">
                {step.desc}
              </div>
              <div className="inline-flex items-center gap-1.5 mt-5 self-center bg-blue-l border border-blue-m rounded-full py-1 px-3 text-[11px] text-blue font-semibold whitespace-nowrap">
                {step.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
