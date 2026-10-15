"use client";

import { useId, useState, type FormEvent, type ReactNode } from "react";
import { treatments } from "@/content/treatments";
import { cn } from "@/lib/cn";
import { formBookingMessage, treatmentLine, whatsappLink } from "@/lib/whatsapp";
import { ChatIcon } from "./ui/Icons";

type Fields = {
  name: string;
  treatment: string;
  minutes: string;
  date: string;
  time: string;
  area: string;
  notes: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  treatment: "",
  minutes: "",
  date: "",
  time: "",
  area: "",
  notes: "",
};

const control =
  "mt-2 block min-h-12 w-full rounded-none border border-line bg-canvas px-4 text-body text-fg transition-colors duration-300 placeholder:text-muted hover:border-fg focus:border-accent focus:outline-none aria-[invalid=true]:border-accent";

function todayISO() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

function readableDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Enter your name.";
  if (!f.treatment) e.treatment = "Choose a treatment.";
  if (!f.minutes) e.minutes = "Choose a length.";
  if (!f.date) e.date = "Choose a date.";
  else if (f.date < todayISO()) e.date = "Choose today or a later date.";
  if (!f.time) e.time = "Choose a time.";
  if (!f.area.trim()) e.area = "Enter your area or address so we can confirm we cover it.";
  return e;
}

/**
 * Booking request form. On submit it opens WhatsApp with the details
 * written as a message; the visitor presses send there to book.
 */
export function BookingForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sentLink, setSentLink] = useState<string | null>(null);
  const id = useId();

  const treatment = treatments.find((t) => t.id === fields.treatment);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({
      ...f,
      [key]: value,
      ...(key === "treatment" ? { minutes: "" } : {}),
    }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setSentLink(null);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(`${id}-${firstError}`)?.focus();
      return;
    }

    const option = treatment!.options.find((o) => String(o.minutes) === fields.minutes)!;
    const link = whatsappLink(
      formBookingMessage({
        name: fields.name.trim(),
        treatment: treatmentLine(treatment!, option),
        date: readableDate(fields.date),
        time: fields.time,
        area: fields.area.trim(),
        notes: fields.notes.trim(),
      }),
    );
    setSentLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  function field(key: keyof Fields, label: string, input: ReactNode, wide = false) {
    return (
      <div className={cn(wide && "sm:col-span-2")}>
        <label htmlFor={`${id}-${key}`} className="text-small text-muted">
          {label}
        </label>
        {input}
        {errors[key] ? (
          <p id={`${id}-${key}-error`} className="mt-2 text-small text-fg">
            {errors[key]}
          </p>
        ) : null}
      </div>
    );
  }

  const a11y = (key: keyof Fields) => ({
    id: `${id}-${key}`,
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${id}-${key}-error` : undefined,
  });

  return (
    <form noValidate onSubmit={submit} className="[color-scheme:dark]">
      <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
        {field(
          "name",
          "Your name",
          <input
            {...a11y("name")}
            type="text"
            autoComplete="name"
            className={control}
            value={fields.name}
            onChange={(e) => update("name", e.target.value)}
          />,
          true,
        )}
        {field(
          "treatment",
          "Treatment",
          <select
            {...a11y("treatment")}
            className={control}
            value={fields.treatment}
            onChange={(e) => update("treatment", e.target.value)}
          >
            <option value="">Choose a treatment</option>
            {treatments.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>,
        )}
        {field(
          "minutes",
          "Length",
          <select
            {...a11y("minutes")}
            className={control}
            value={fields.minutes}
            onChange={(e) => update("minutes", e.target.value)}
            disabled={!treatment}
          >
            <option value="">{treatment ? "Choose a length" : "Choose a treatment first"}</option>
            {treatment?.options.map((o) => (
              <option key={o.minutes} value={o.minutes}>
                {o.minutes} minutes, AED {o.price.toLocaleString("en-US")}
              </option>
            ))}
          </select>,
        )}
        {field(
          "date",
          "Date",
          <input
            {...a11y("date")}
            type="date"
            className={control}
            value={fields.date}
            onChange={(e) => update("date", e.target.value)}
          />,
        )}
        {field(
          "time",
          "Time",
          <input
            {...a11y("time")}
            type="time"
            className={control}
            value={fields.time}
            onChange={(e) => update("time", e.target.value)}
          />,
        )}
        {field(
          "area",
          "Area or address",
          <input
            {...a11y("area")}
            type="text"
            autoComplete="street-address"
            className={control}
            value={fields.area}
            onChange={(e) => update("area", e.target.value)}
          />,
          true,
        )}
        {field(
          "notes",
          "Anything we should know (optional)",
          <textarea
            {...a11y("notes")}
            rows={3}
            className={cn(control, "py-3")}
            value={fields.notes}
            onChange={(e) => update("notes", e.target.value)}
          />,
          true,
        )}
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-control bg-action px-7 text-body font-medium text-on-action transition-colors duration-300 hover:bg-action-hover sm:w-auto"
      >
        <ChatIcon className="size-5" />
        Send booking on WhatsApp
      </button>

      <div role="status" aria-live="polite">
        {sentLink ? (
          <p className="mt-6 max-w-prose text-body text-muted">
            WhatsApp is opening with your booking message. Press send there to
            book. If it didn&apos;t open,{" "}
            <a
              href={sentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg underline decoration-accent underline-offset-4"
            >
              open WhatsApp
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
