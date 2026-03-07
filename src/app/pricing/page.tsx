"use client";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2Icon, PhoneCallIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Foundation",
    price: "$5,000",
    period: "/month",
    description:
      "For service businesses ready to stop losing leads and start building a real marketing system.",
    features: [
      "Google Ads campaign managed for booked jobs",
      "Google Business Profile optimization",
      "Automated review request sequences",
      "CRM setup and lead pipeline configuration",
      "Speed-to-lead automation (instant response)",
      "Monthly performance report",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth Engine",
    price: "$8,500",
    period: "/month",
    description:
      "Full marketing + sales automation for companies scaling past $3M and ready to systemize growth.",
    features: [
      "Everything in Foundation",
      "Local SEO and content strategy",
      "Estimate follow-up and re-engagement sequences",
      "Post-job review and referral automation",
      "Real-time revenue dashboard",
      "Dedicated growth strategist",
      "Bi-weekly strategy calls",
    ],
    cta: "Book a Call",
    featured: true,
  },
  {
    name: "Full RevOps",
    price: "$12,000",
    period: "/month",
    description:
      "End-to-end revenue operations for service companies scaling multiple locations or markets.",
    features: [
      "Everything in Growth Engine",
      "Full marketing attribution by channel",
      "Customer lifetime value analysis",
      "Capacity planning tied to ad spend",
      "Multi-location or multi-market support",
      "Quarterly business reviews with growth roadmap",
      "Priority support and on-demand requests",
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
            Invest in systems, not guesswork
          </h1>
          <p className="mx-auto max-w-xl text-lg text-foreground/70">
            Transparent pricing built for service businesses. No setup fees.
            Month-to-month after the first 90 days.
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
                    Most Popular
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
