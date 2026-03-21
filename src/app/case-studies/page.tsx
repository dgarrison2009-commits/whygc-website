"use client";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/sections/footer";
import { CTASection } from "@/components/sections/cta";
import { ArrowRightIcon } from "lucide-react";

const caseStudies = [
  {
    slug: "roofing-speed-to-lead",
    title: "Roofing Company Recaptures Lost Leads",
    industry: "Roofing · Residential",
    metric: "From 6-hour response time to under 5 minutes",
    description:
      "A mid-size roofing company was losing jobs to competitors who responded faster. By implementing automated lead routing and instant follow-up, they stopped leaving money on the table — and started winning the calls they were already paying for.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "hvac-pipeline-visibility",
    title: "HVAC Group Gets Full Pipeline Visibility",
    industry: "HVAC · Multi-Location",
    metric: "Zero visibility to real-time revenue tracking",
    description:
      "A three-location HVAC company had no way to track which marketing dollars were producing booked jobs. A CRM implementation and unified reporting layer gave them the data to cut underperforming spend and double down on what worked.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80&auto=format&fit=crop",
  },
  {
    slug: "plumbing-automated-follow-up",
    title: "Plumbing Company Stops Losing Estimates",
    industry: "Plumbing · Commercial & Residential",
    metric: "Estimate follow-up rate doubled",
    description:
      "Half of this plumbing company's estimates went unfollowed. Automated sequences and a structured follow-up process turned forgotten quotes into booked work — without adding headcount.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format&fit=crop",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main id="main-content" className="grow">
        <section className="mx-auto w-full max-w-5xl px-4 pt-24 pb-16 md:px-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Case Studies
          </p>
          <h1 className="mb-4 text-4xl tracking-tight md:text-5xl">
            What revenue operations looks like in practice
          </h1>
          <p className="max-w-xl text-lg text-foreground/80">
            Illustrative scenarios based on the operational challenges we see
            most often in home service companies — and the systems that solve
            them.
          </p>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 pb-16 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <a
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
                    {cs.industry}
                  </p>
                  <h2 className="mb-1 text-lg font-semibold">{cs.title}</h2>
                  <p className="mb-3 text-sm font-semibold tracking-tight text-primary">
                    {cs.metric}
                  </p>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {cs.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Read the full scenario
                    <ArrowRightIcon className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
