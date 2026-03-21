"use client";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon,
  PhoneCallIcon,
  ArrowRightIcon,
  ClockIcon,
  ZapIcon,
  TrendingUpIcon,
} from "lucide-react";

export default function RoofingSpeedToLeadPage() {
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
            Roofing · Residential
          </p>
          <h1 className="mb-4 text-3xl tracking-tight md:text-4xl">
            Roofing Company Recaptures Lost Leads
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            A mid-size residential roofing company was spending thousands on lead
            generation — but losing most of those leads before anyone picked up
            the phone.
          </p>
        </section>

        {/* Featured image */}
        <section className="mx-auto w-full max-w-3xl px-4 pb-12 md:px-8">
          <div className="overflow-hidden rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async"
              loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop"
              alt="Roofing work in progress"
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
              This scenario is common across the roofing industry: a company
              investing in paid ads and referral channels, generating a steady
              flow of inbound leads — but with no system to respond quickly or
              track what happens after a form is filled out. The office team
              checks messages between jobs, sometimes hours after submission.
              By then, the homeowner has already called someone else.
            </p>

            <h2 className="mb-3 text-2xl tracking-tight">
              Why This Matters — The Data
            </h2>
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-5">
                <ClockIcon className="mb-2 size-5 text-primary" />
                <p className="text-2xl font-bold tracking-tight">78%</p>
                <p className="text-sm text-muted-foreground">
                  of buyers choose the first company to respond
                </p>
              </div>
              <div className="rounded-lg border bg-card p-5">
                <ZapIcon className="mb-2 size-5 text-primary" />
                <p className="text-2xl font-bold tracking-tight">21x</p>
                <p className="text-sm text-muted-foreground">
                  more likely to convert when contacted within 5 minutes vs. 30
                </p>
              </div>
              <div className="rounded-lg border bg-card p-5">
                <TrendingUpIcon className="mb-2 size-5 text-primary" />
                <p className="text-2xl font-bold tracking-tight">80%</p>
                <p className="text-sm text-muted-foreground">
                  drop in lead qualification odds between 5 and 10 minutes
                </p>
              </div>
            </div>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              According to industry research, the average business takes over 47
              hours to respond to a new lead. In a 2024 study of over 1,000
              companies, more than 63% never responded at all. In roofing,
              where exclusive leads can cost upward of $200 each, every
              unanswered inquiry is real money left on the table.
            </p>

            <h2 className="mb-3 text-2xl tracking-tight">
              What a RevOps System Changes
            </h2>
            <p className="mb-4 text-foreground/80 leading-relaxed">
              The fix is not about working harder — it is about building a
              system that responds before the team even sees the lead. A
              revenue operations approach to this problem typically includes:
            </p>
            <ul className="mb-6 space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Automated lead acknowledgment within seconds of form
                  submission — via text, email, or both — so the homeowner knows
                  someone is on it.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Lead routing that assigns inbound requests to available team
                  members in real time, with escalation if no one responds
                  within a defined window.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  CRM tracking so every lead has a status, a next action, and
                  a clear owner — eliminating the &ldquo;I thought you called
                  them back&rdquo; problem.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Reporting that connects ad spend to booked jobs, so the
                  company knows which channels produce revenue — not just
                  clicks.
                </span>
              </li>
            </ul>

            <h2 className="mb-3 text-2xl tracking-tight">The Outcome</h2>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              Companies that implement speed-to-lead systems consistently report
              higher contact rates, more booked estimates, and better ROI on
              existing ad spend — without increasing their marketing budget.
              The leads were already there. The system just was not catching
              them.
            </p>

            <p className="text-sm text-muted-foreground">
              Industry data referenced from Verse.ai, LeadAngel, RevenueHero
              (2024), and Drift lead response studies. Scenario is illustrative
              and based on common patterns observed across home service
              companies.
            </p>
          </div>
        </article>

        {/* CTA */}
        <section className="mx-auto w-full max-w-3xl px-4 pb-20 md:px-8">
          <div className="rounded-2xl border bg-card p-8 text-center shadow-sm md:p-12">
            <h2 className="mb-3 text-2xl tracking-tight">
              Wondering how fast your team responds to leads?
            </h2>
            <p className="mx-auto mb-6 max-w-md text-foreground/80">
              We can audit your current lead flow in a 15-minute call and show
              you exactly where the gaps are.
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
                <a href="/services">
                  Explore Our Services
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
