"use client";

import { useId, useState } from "react";
import { formatPrice, type Treatment } from "@/content/treatments";
import { cn } from "@/lib/cn";
import { menuBookingMessage, whatsappLink } from "@/lib/whatsapp";
import { Button } from "./ui/Button";
import { ChatIcon } from "./ui/Icons";

/**
 * One treatment on the spa menu. Visitors pick a length, and the button
 * opens WhatsApp with that treatment, length and price already written.
 */
export function MenuCard({ treatment }: { treatment: Treatment }) {
  const [minutes, setMinutes] = useState(treatment.options[0].minutes);
  const option =
    treatment.options.find((o) => o.minutes === minutes) ?? treatment.options[0];
  const group = useId();

  return (
    <article className="flex h-full flex-col border border-line p-6 transition-colors duration-500 hover:border-accent sm:p-8">
      <h3 className="text-heading">{treatment.name}</h3>
      <p className="mt-3 text-body text-muted">{treatment.description}</p>

      <fieldset className="mt-6">
        <legend className="sr-only">Length of {treatment.name}</legend>
        <div className="divide-y divide-line border-y border-line">
          {treatment.options.map((o) => {
            const checked = o.minutes === minutes;
            return (
              <label
                key={o.minutes}
                className={cn(
                  "flex min-h-12 cursor-pointer items-center gap-3 py-2 text-body transition-colors duration-300",
                  "outline-offset-2 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent",
                  checked ? "text-accent" : "text-muted hover:text-fg",
                )}
              >
                <input
                  type="radio"
                  name={group}
                  value={o.minutes}
                  checked={checked}
                  onChange={() => setMinutes(o.minutes)}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "size-3 shrink-0 rounded-full border border-current transition-colors duration-300",
                    checked && "bg-current",
                  )}
                />
                <span>{o.minutes} minutes</span>
                <span className="ms-auto tabular-nums">{formatPrice(o.price)}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-auto pt-8">
        <Button
          href={whatsappLink(menuBookingMessage(treatment, option))}
          className="w-full"
        >
          <ChatIcon className="size-5" />
          Book {option.minutes} minutes
        </Button>
      </div>
    </article>
  );
}
