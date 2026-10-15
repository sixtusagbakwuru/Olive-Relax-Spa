"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { greeting, whatsappLink } from "@/lib/whatsapp";
import { ChatIcon } from "./ui/Icons";

/** A round WhatsApp button that slides in once the visitor scrolls past the top. */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(greeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      tabIndex={visible ? undefined : -1}
      className={cn(
        "fixed right-4 bottom-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-action text-on-action shadow-lg transition-all duration-500 hover:bg-action-hover sm:right-6 sm:bottom-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <ChatIcon className="size-7" />
    </a>
  );
}
