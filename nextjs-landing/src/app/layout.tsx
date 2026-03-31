import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OfferMatch — Умная адаптация резюме",
  description: "Отправь резюме и вакансию боту — ИИ оценит соответствие, усилит резюме и напишет сопроводительное за 30 секунд.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "OfferMatch — Умная адаптация резюме",
    description: "Отправь резюме и вакансию боту — ИИ оценит соответствие, усилит резюме и напишет сопроводительное за 30 секунд.",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary",
    title: "OfferMatch — Умная адаптация резюме",
    description: "Отправь резюме и вакансию боту — ИИ оценит соответствие, усилит резюме и напишет сопроводительное за 30 секунд.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=108295793','ym');
              ym(108295793,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/108295793" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        {/* Top.Mail.Ru counter */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var _tmr = window._tmr || (window._tmr = []);
              _tmr.push({id: "3753843", type: "pageView", start: (new Date()).getTime()});
              (function (d, w, id) {
                if (d.getElementById(id)) return;
                var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
                ts.src = "https://top-fwz1.mail.ru/js/code.js";
                var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
                if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
              })(document, window, "tmr-code");
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://top-fwz1.mail.ru/counter?id=3753843;js=na" style={{ position: "absolute", left: "-9999px" }} alt="Top.Mail.Ru" />
          </div>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
