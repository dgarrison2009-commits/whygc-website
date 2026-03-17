"use client";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2Icon, PhoneCallIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "PRIME Audit",
    price: "$2,500",
    period: "one-time",
    description:
      "A full revenue operations diagnostic for service companies that know something's broken but can't pinpoint where.",
    features: [
      "Complete Profile & Reveal assessment (PRIME phases 1–2)",
      "CRM and pipeline health audit",
      "Lead flow and speed-to-lead analysis",
      "Tech stack evaluation and consolidation plan",
      "Revenue leakage identification",
      "Prioritized action plan with quick wins",
    ],
    cta: "Book Your Audit",
    featured: false,
  },
  {
    name: "RevOps Buildout",
    price: "$5,000",
    period: "/month",
    description:
      "For companies ready to implement real systems — not just diagnose problems. We build your revenue engine over 90 days.",
    features: [
      "Everything in the PRIME Audit",
      "CRM buildout and pipeline automation",
      "Speed-to-lead and follow-up sequences",
      "Estimate-to-close workflow optimization",
      "Real-time revenue dashboard",
      "Bi-weekly strategy calls",
      "90-day implementation roadmap (PRIME phases 3–4)",
    ],
    cta: "Book a Call",
    featured: true,
  },
  {
    name: "Ongoing Partnership",
    price: "$3,000",
    period: "/month",
    description:
      "Post-buildout support for companies that want a RevOps partner on retainer — not just a one-time project.",
    features: [
      "Continuous pipeline monitoring and optimization",
      "Monthly performance reviews with action items",
      "New automation builds as you scale",
      "Multi-location or multi-market expansion support",
      "Priority response and on-demand requests",
      "Quarterly business reviews with growth roadmap",
      "Full PRIME cycle management (Measure & Expand)",
    ],
    cta: "Talk to Us",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="grow">
        <section className="mx-auto w-full max-w-5xl px-4 pt-24 pb-16 text-center md:px-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h1 className="mb-4 text-4xl tracking-tight md:text-5xl">
            Revenue operations, not random tactics
          </h1>
          <p className="mx-auto max-w-xl text-lg text-foreground/70">
            Transparent pricing built for home service companies. Start with an
            audit, build your systems, then grow with ongoing support.
          </p>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 pb-20 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={cn(
                  "relative flex flex-col rounded-xl border bg-card p-6 shadow-sm",
                  tier.featured &&
                    "border-primary shadow-md ring-1 ring-primary/20"
                )}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                    Recommended
                  </span>
                )}
                <h3 className="mb-1 text-lg font-semibold">{tier.name}</h3>
                <div className="mb-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {tier.period}
                  </span>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  {tier.description}
                </p>
                <ul className="mb-8 grow space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full rounded-full"
                  variant={tier.featured ? "default" : "outline"}
                  size="lg"
                >
                  {tier.featured && <PhoneCallIcon className="mr-2 size-4" />}
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
