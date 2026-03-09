"use client";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftIcon,
  PhoneCallIcon,
  ArrowRightIcon,
  PhoneOffIcon,
  MailIcon,
  RepeatIcon,
} from "lucide-react";

export default function PlumbingAutomatedFollowUpPage() {
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
            Plumbing · Commercial & Residential
          </p>
          <h1 className="mb-4 text-3xl tracking-tight md:text-4xl">
            Plumbing Company Stops Losing Estimates
          </h1>
          <p className="text-lg text-foreground/70 leading-relaxed">
            A growing plumbing company was sending out estimates — but had no
            system to follow up. Half their quotes disappeared into the void.
          </p>
        </section>

        {/* Featured image */}
        <section className="mx-auto w-full max-w-3xl px-4 pb-12 md:px-8">
          <div className="overflow-hidden rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80&auto=format&fit=crop"
              alt="Professional plumbing work"
              className="aspect-[2/1] w-full object-cover"
            />
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto w-full max-w-3xl px-4 pb-16 md:px-8">
          <div className="prose prose-neutral max-w-none">
            <h2 className="mb-3 text-2xl tracking-tight">The Situation</h2>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              This is one of the most common revenue leaks in home services: a
              company sends an estimate, the customer does not respond
              immediately, and nobody follows up. The office is busy dispatching
              techs, handling emergencies, and managing the day-to-day. Follow-up
              falls to the bottom of the list — or off the list entirely. The
              estimate sits in someone&apos;s inbox, and the job goes to a
              competitor who stayed in touch.
            </p>

            <h2 className="mb-3 text-2xl tracking-tight">
              Why This Matters — The Data
            </h2>
            <div className="mb-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-5">
                <PhoneOffIcon className="mb-2 size-5 text-primary" />
                <p className="text-2xl font-bold tracking-tight">50%</p>
                <p className="text-sm text-muted-foreground">
                  reduction in missed calls reported by plumbing companies after
                  implementing automation
                </p>
              </div>
              <div className="rounded-lg border bg-card p-5">
                <MailIcon className="mb-2 size-5 text-primary" />
                <p className="text-2xl font-bold tracking-tight">65%</p>
                <p className="text-sm text-muted-foreground">
                  of consumers cut ties after just one bad experience with a
                  company
                </p>
              </div>
              <div className="rounded-lg border bg-card p-5">
                <RepeatIcon className="mb-2 size-5 text-primary" />
                <p className="text-2xl font-bold tracking-tight">2x</p>
                <p className="text-sm text-muted-foreground">
                  estimate follow-up rate achieved by HVAC businesses using
                  automated sequences
                </p>
              </div>
            </div>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              Plumbing and water treatment services convert at 12–16% from lead
              to booked job — among the highest in home services. But that
              conversion rate assumes the lead gets proper follow-up. When
              estimates go unfollowed, the effective conversion rate drops
              significantly, and the cost per acquired customer climbs. For
              companies already spending on lead generation, this is the easiest
              place to recover revenue.
            </p>

            <h2 className="mb-3 text-2xl tracking-tight">
              What a RevOps System Changes
            </h2>
            <p className="mb-4 text-foreground/80 leading-relaxed">
              Automated follow-up does not mean impersonal. It means consistent.
              A revenue operations approach to estimate follow-up typically
              includes:
            </p>
            <ul className="mb-6 space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  A structured follow-up sequence triggered automatically when
                  an estimate is sent — starting with a check-in text or email
                  at 24 hours, then again at 3 days, then a final touchpoint
                  at 7 days.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  CRM pipeline stages that surface stale estimates so a manager
                  can see at a glance which quotes need attention — without
                  asking each tech individually.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Post-job review requests and referral prompts that turn
                  completed work into future leads — closing the loop on the
                  customer lifecycle.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  Capacity-aware scheduling so marketing spend scales with
                  technician availability — avoiding the problem of generating
                  leads that nobody can serve.
                </span>
              </li>
            </ul>

            <h2 className="mb-3 text-2xl tracking-tight">The Outcome</h2>
            <p className="mb-6 text-foreground/80 leading-relaxed">
              Companies that automate estimate follow-up typically see an
              immediate lift in close rate — not because the estimates are
              better, but because customers actually hear back. The work that
              was already being quoted starts getting booked. No additional
              marketing spend required.
            </p>

            <p className="text-sm text-muted-foreground">
              Industry data referenced from ServiceTitan, WebFX (2026 Home
              Services Benchmarks), LaunchSMS, and MyOutDesk industry reports.
              Scenario is illustrative and based on common patterns observed
              across home service companies.
            </p>
          </div>
        </article>

        {/* CTA */}
        <section className="mx-auto w-full max-w-3xl px-4 pb-20 md:px-8">
          <div className="rounded-2xl border bg-card p-8 text-center shadow-sm md:p-12">
            <h2 className="mb-3 text-2xl tracking-tight">
              How many estimates is your team sending without follow-up?
            </h2>
            <p className="mx-auto mb-6 max-w-md text-foreground/70">
              Let us look at your current process and show you where automated
              follow-up can recover lost revenue.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button className="rounded-full" size="lg" asChild>
                <a
                  href="https://calendly.com/davegarrison/15min"
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
                <a href="/services#sales-automation">
                  See Automation Services
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
