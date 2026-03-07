import { CheckCircle2Icon } from "lucide-react";

const points = [
  "End-to-end systems — marketing, sales automation, and reporting all connected",
  "Built specifically for service businesses (roofing, HVAC, plumbing, electrical)",
  "Speed-to-lead and follow-up automation that saves 20+ hours per week",
  "Real-time dashboards so you know exactly where every dollar goes",
  "Dedicated strategist who understands your market and growth stage",
];

export function WhyUs() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-20 md:px-8">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Why WHYGC
          </p>
          <h2 className="mb-4 text-3xl tracking-tight md:text-4xl">
            We fix the process first. Then we scale it.
          </h2>
          <p className="mb-8 text-foreground/70 leading-relaxed">
            Most agencies hand you leads and walk away. We build the entire
            system — from the ad click to the booked job to the 5-star review —
            so nothing falls through the cracks and growth compounds.
          </p>
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop"
              alt="Team collaborating on revenue strategy"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
