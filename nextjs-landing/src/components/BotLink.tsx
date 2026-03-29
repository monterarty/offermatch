"use client";

import { useEffect, useState } from "react";
import { getBotLink } from "@/lib/botLink";

export function BotLinkButton({ section, className, children }: {
  section: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [link, setLink] = useState(`https://t.me/OfferMatch_resume_helper_bot?start=${section}`);

  useEffect(() => {
    setLink(getBotLink(section));
  }, [section]);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}