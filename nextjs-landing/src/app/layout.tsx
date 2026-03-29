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
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary",
    title: "OfferMatch — Умная адаптация резюме",
    description: "Отправь резюме и вакансию боту — ИИ оценит соответствие, усилит резюме и напишет сопроводительное за 30 секунд.",
    images: ["/og-image.png"],
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
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
