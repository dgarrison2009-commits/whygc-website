"use client";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon,
  PhoneCallIcon,
  ArrowRightIcon,
  EyeIcon,
  DollarSignIcon,
  BarChart3Icon,
} from "lucide-react";

export default function HvacPipelineVisibilityPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="grow">
        {/* Hero */}
        <section className="mx-auto w-full max-w-3xl px-4 pt-24 pb-12 md:px-8">
          <a
            href="/case-studies"
            className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeftIcon className="mr-1 size-3" />
            All Case Studies
          </a>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            HVAC · Multi-Location
          </p>
          <h1 className="mb-4 text-3xl tracking-tight md:text-4xl">
            HVAC Group Gets Full Pipeline Visibility
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            A three-location HVAC company had marketing running across multiple
            channels — but no clear picture of which dollars were producing
            booked jobs.
          </p>
        </section>

        {/* Featured image */}
        <section className="mx-auto w-full max-w-3xl px-4 pb-12 md:px-8">
          <div className="overflow-hidden rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async"
              loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop"
              alt="HVAC technician at work"
              className="aspect-[2/1] w-full object-cover"
              decoding="async"
            />
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto w-full max-w-3xl px-4 pb-16 md:px-8">
          <div className="prose prose-neutral max-w-none">
            <h2 className="mb-3 text-2xl tracking-tight">The Situation</h2>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              This is a pattern we see regularly in multi-location home service
              companies: each location runs its own marketing, tracks leads
              differently (or not at all), and the owner makes growth decisions
              based on gut feel rather than data. Spreadsheets exist but are
              outdated by the time anyone looks at them. Nobody can answer the
              question: &ldquo;Which marketing channel produced the most booked
              jobs last month?&rdquo;
            </p>

            <h2 className="mb-3 text-2xl tracking-tight">
              Why This Matters — The Data
            </h2>
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-5">
                <DollarSignIcon className="mb-2 size-5 text-primary" />
                <p className="text-2xl font-bold tracking-tight">$8.71</p>
                <p className="text-sm text-muted-foreground">
                  average return for every $1 spent on CRM implementation
                </p>
              </div>
              <div className="rounded-lg border bg-card p-5">
                <BarChart3Icon className="mb-2 size-5 text-primary" />
                <p className="text-2xl font-bold tracking-tight">86%</p>
                <p className="text-sm text-muted-foreground">
                  more likely to exceed sales goals with a CRM vs. without
                </p>
              </div>
              <div className="rounded-lg border bg-card p-5">
                <EyeIcon className="mb-2 size-5 text-primary" />
                <p className="text-2xl font-bold tracking-tight">8–14 days</p>
                <p className="text-sm text-muted-foreground">
                  shorter average sales cycle after CRM adoption
                </p>
              </div>
            </div>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              Industry data consistently shows that companies using a CRM see
              revenue increases of 21–30% on average. For service companies
              specifically, response times improve by up to 80% once leads flow
              through a structured system rather than sticky notes and voicemail.
              Despite this, many home service businesses in the $2M–$15M range
              still operate without one.
            </p>

            <h2 className="mb-3 text-2xl tracking-tight">
              What a RevOps System Changes
            </h2>
            <p className="mb-4 text-foreground/80 leading-relaxed">
              Pipeline visibility is not about buying expensive software — it is
              about connecting the tools you already use so that data flows in
              one direction: from lead to booked job to revenue. A revenue
              operations approach typically includes:
            </p>
            <ul className="mb-6 space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  A CRM configured for your actual sales process — not a generic
                  template — with stages that match how your team sells
                  (lead → estimate → follow-up → booked → completed).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Marketing attribution that tracks each lead back to its source
                  (Google Ads, referral, organic) all the way through to whether
                  it became revenue.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  A unified dashboard across locations so the owner sees
                  real-time pipeline value, conversion rates, and cost per
                  booked job — not just cost per lead.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Automated reporting that replaces the weekly scramble to
                  build spreadsheets with data that is always current.
                </span>
              </li>
            </ul>

            <h2 className="mb-3 text-2xl tracking-tight">The Outcome</h2>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              When a company can see exactly which channels produce booked jobs
              and which produce noise, marketing decisions become straightforward.
              Underperforming channels get cut. High-performers get scaled.
              The marketing budget does not increase — it just starts working
              harder.
            </p>

            <p className="text-sm text-muted-foreground">
              Industry data referenced from Nutshell, CRM.org, DemandSage
              (2024–2025), and Freshworks CRM studies. Scenario is illustrative
              and based on common patterns observed across home service
              companies.
            </p>
          </div>
        </article>

        {/* CTA */}
        <section className="mx-auto w-full max-w-3xl px-4 pb-20 md:px-8">
          <div className="rounded-2xl border bg-card p-8 text-center shadow-sm md:p-12">
            <h2 className="mb-3 text-2xl tracking-tight">
              Not sure what your pipeline actually looks like?
            </h2>
            <p className="mx-auto mb-6 max-w-md text-foreground/80">
              We will map your current lead-to-revenue flow and identify
              where visibility breaks down — in a free 15-minute call.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button className="rounded-full" size="lg" asChild>
                <a
                  href="https://calendly.com/davegarrison/15min?utm_source=whygc&utm_medium=website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneCallIcon className="mr-2 size-4" />
                  Book a Strategy Call
                </a>
              </Button>
              <Button
                variant="outline"
                className="rounded-full"
                size="lg"
                asChild
              >
                <a href="/services#growth-reporting">
                  See Growth & Reporting Services
                  <ArrowRightIcon className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
