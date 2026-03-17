"use client";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/sections/footer";
import { CTASection } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import {
  MegaphoneIcon,
  CogIcon,
  BarChart3Icon,
  ArrowRightIcon,
} from "lucide-react";

const services = [
  {
    id: "revenue-capture",
    icon: MegaphoneIcon,
    title: "Revenue Capture & Pipeline Systems",
    subtitle: "Close more of the leads you already have",
    description:
      "Most contractors close 20-30% of their estimates — not because the work isn't there, but because revenue leaks out between 'lead comes in' and 'contract signed.' We fix speed-to-lead, follow-up automation, and pipeline visibility so you capture the revenue you're already earning.",
    features: [
      "Speed-to-lead automation — respond in under 5 minutes, every time",
      "Estimate follow-up sequences that close the 30-50% you're losing",
      "Pipeline visibility — know where every open estimate stands",
      "Post-job review and referral automation",
      "Marketing attribution — know which channels drive actual signed contracts",
    ],
  },
  {
    id: "sales-automation",
    icon: CogIcon,
    title: "Sales & Operations Automation",
    subtitle: "Never lose another lead to a slow follow-up",
    description:
      "Most service businesses lose 40% of their leads because nobody called back fast enough. We build the systems that respond instantly, follow up automatically, and turn every completed job into a review and a referral — without adding headcount.",
    features: [
      "Speed-to-lead automation — instant response to every new inquiry",
      "Automated estimate and proposal follow-up sequences",
      "CRM setup your team will actually use (built for field service)",
      "Post-job review request and referral triggers",
      "Re-engagement campaigns for past customers and lost estimates",
    ],
  },
  {
    id: "growth-reporting",
    icon: BarChart3Icon,
    title: "Growth Strategy & Reporting",
    subtitle: "Know exactly what's working — and what's wasting money",
    description:
      "Stop guessing where your marketing dollars go. We build real-time dashboards that show cost-per-lead by channel, close rates by source, and customer lifetime value — so every growth decision is backed by data.",
    features: [
      "Real-time revenue and pipeline dashboards",
      "Full marketing attribution — know which channels drive actual jobs",
      "Customer lifetime value and repeat business analysis",
      "Capacity planning tied to marketing spend",
      "Quarterly business reviews with actionable growth recommendations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="grow">
        <section className="mx-auto w-full max-w-5xl px-4 pt-24 pb-16 md:px-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Services
          </p>
          <h1 className="mb-4 text-4xl tracking-tight md:text-5xl">
            The systems your service business is missing
          </h1>
          <p className="max-w-xl text-lg text-foreground/70">
            Three integrated service lines that fix your process first, then
            scale what works — so growth is predictable, not chaotic.
          </p>
        </section>

        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className="mx-auto w-full max-w-5xl border-t px-4 py-16 md:px-8"
          >
            <div
              className={`grid items-start gap-12 md:grid-cols-2 ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div>
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                  <s.icon className="size-6 text-primary" />
                </div>
                <h2 className="mb-1 text-2xl font-semibold tracking-tight md:text-3xl">
                  {s.title}
                </h2>
                <p className="mb-4 text-primary">{s.subtitle}</p>
                <p className="mb-6 text-foreground/70 leading-relaxed">
                  {s.description}
                </p>
                <Button className="rounded-full" size="lg">
                  Get Started
                  <ArrowRightIcon className="ml-2 size-4" />
                </Button>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  What&apos;s included
                </p>
                <ul className="space-y-3">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
