import type { Treatment } from "@/content/treatments";

/** Treatments laid out like a printed spa menu: name, dotted leader, price. */
export function TreatmentList({ items }: { items: Treatment[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <li key={item.name} className="py-6">
          <div className="flex items-baseline gap-4">
            <h3 className="text-heading">{item.name}</h3>
            <span
              aria-hidden="true"
              className="min-w-6 flex-1 border-b border-dotted border-line"
            />
            <p className="shrink-0 text-body">AED {item.price}</p>
          </div>
          <p className="mt-2 max-w-prose text-body text-muted">
            {item.description}
          </p>
          <p className="mt-1 text-small text-muted">{item.duration}</p>
        </li>
      ))}
    </ul>
  );
}
