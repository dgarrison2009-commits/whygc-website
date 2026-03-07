"use client";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/sections/footer";
import { CTASection } from "@/components/sections/cta";
import { ArrowRightIcon } from "lucide-react";

const caseStudies = [
  {
    title: "Atlanta Roofing Company",
    industry: "Roofing · Home Services",
    metric: "3x booked jobs in 90 days",
    description:
      "Built a full lead generation system with Google Ads tracked to booked appointments, automated review requests, and a CRM pipeline that gave the owner visibility into every lead for the first time.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Southeast HVAC Group",
    industry: "HVAC · Multi-Location",
    metric: "40% lower cost per lead",
    description:
      "Unified marketing and sales operations across three locations. Implemented speed-to-lead automation, estimate follow-up sequences, and a real-time dashboard — cutting cost per lead by 40% in the first quarter.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Regional Plumbing Franchise",
    industry: "Plumbing · Franchise",
    metric: "$500K pipeline in 6 months",
    description:
      "Designed a repeatable growth engine for a 5-location franchise — including local SEO, review automation, and capacity-based ad spend controls that scaled marketing with technician availability.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format&fit=crop",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="grow">
        <section className="mx-auto w-full max-w-5xl px-4 pt-24 pb-16 md:px-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Case Studies
          </p>
          <h1 className="mb-4 text-4xl tracking-tight md:text-5xl">
            Real results for real service businesses
          </h1>
          <p className="max-w-xl text-lg text-foreground/70">
            See how we&apos;ve helped service companies build predictable
            revenue systems that scale.
          </p>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 pb-16 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((cs) => (
              <a
                key={cs.title}
                href="#"
                className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
                    {cs.industry}
                  </p>
                  <h3 className="mb-1 text-lg font-semibold">{cs.title}</h3>
                  <p className="mb-3 text-2xl font-bold tracking-tight text-primary">
                    {cs.metric}
                  </p>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {cs.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Read more
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
