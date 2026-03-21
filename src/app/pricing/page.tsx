"use client";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/sections/footer";
import { CTASection } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2Icon,
  PhoneCallIcon,
  ArrowRightIcon,
  SearchIcon,
  WrenchIcon,
  BarChart3Icon,
  TrendingUpIcon,
} from "lucide-react";

const engagements = [
  {
    icon: SearchIcon,
    title: "PRIME Audit",
    subtitle: "Profile & Reveal",
    duration: "2–3 weeks",
    description:
      "A full revenue operations diagnostic. We map your pipeline end-to-end, identify where revenue is leaking, and deliver a prioritized action plan — so you know exactly what to fix first.",
    deliverables: [
      "Complete pipeline and tech stack assessment",
      "Speed-to-response and follow-up analysis",
      "Revenue leakage identification with dollar estimates",
      "CRM health audit and consolidation plan",
      "Prioritized action plan with quick wins",
    ],
  },
  {
    icon: WrenchIcon,
    title: "RevOps Buildout",
    subtitle: "Implement & Measure",
    duration: "90-day engagement",
    description:
      "For companies ready to implement real systems — not just diagnose problems. We build your revenue engine: CRM automation, speed-to-response workflows, dashboards, and the processes that tie them together.",
    deliverables: [
      "Everything in the PRIME Audit",
      "CRM buildout and pipeline automation",
      "Speed-to-response and follow-up sequences",
      "Estimate-to-close workflow optimization",
      "Real-time revenue dashboard",
      "Bi-weekly strategy calls throughout",
    ],
  },
  {
    icon: TrendingUpIcon,
    title: "Ongoing Partnership",
    subtitle: "Measure & Expand",
    duration: "Monthly retainer",
    description:
      "A RevOps partner on retainer. We continuously monitor your pipeline, optimize what's working, build new automations as you scale, and run quarterly business reviews with a growth roadmap.",
    deliverables: [
      "Continuous pipeline monitoring and optimization",
      "Monthly performance reviews with action items",
      "New automation builds as you scale",
      "Multi-location or multi-market expansion support",
      "Priority response and on-demand requests",
      "Quarterly business reviews with growth roadmap",
    ],
  },
];

const primeSteps = [
  { letter: "P", word: "Profile", desc: "Map your revenue operations end-to-end" },
  { letter: "R", word: "Reveal", desc: "Find where revenue is leaking" },
  { letter: "I", word: "Implement", desc: "Build the systems that plug the gaps" },
  { letter: "M", word: "Measure", desc: "Track every dollar with real dashboards" },
  { letter: "E", word: "Expand", desc: "Scale what works, cut what doesn't" },
];

export default function HowWeWorkPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main id="main-content" className="grow">
        {/* Hero */}
        <section className="mx-auto w-full max-w-5xl px-4 pt-24 pb-16 md:px-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            How We Work
          </p>
          <h1 className="mb-4 max-w-2xl text-4xl tracking-tight md:text-5xl">
            A proven process — not a pitch deck.
          </h1>
          <p className="max-w-xl text-lg text-foreground/80">
            Every engagement follows the PRIME Method. We start by understanding
            your business, then build systems scoped to your specific revenue gaps.
            Investment is based on scope — not a one-size-fits-all package.
          </p>
        </section>

        {/* PRIME Method Visual */}
        <section className="mx-auto w-full max-w-5xl border-t px-4 py-16 md:px-8">
          <h2 className="mb-2 text-2xl tracking-tight md:text-3xl">
            The PRIME Method
          </h2>
          <p className="mb-10 max-w-lg text-foreground/80">
            Five phases. Each engagement maps to one or more phases
            depending on where you are and what you need.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {primeSteps.map((step) => (
              <div
                key={step.letter}
                className="rounded-xl border bg-card p-5 text-center"
              >
                <p className="mb-1 text-3xl font-bold text-primary">
                  {step.letter}
                </p>
                <p className="mb-1 text-sm font-semibold">{step.word}</p>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement Types */}
        <section className="mx-auto w-full max-w-5xl px-4 pb-16 md:px-8">
          <h2 className="mb-2 text-2xl tracking-tight md:text-3xl">
            Three ways to work together
          </h2>
          <p className="mb-10 max-w-lg text-foreground/80">
            Start with a diagnostic. Build your systems. Then scale with ongoing
            support. Most clients begin with the PRIME Audit.
          </p>

          <div className="space-y-6">
            {engagements.map((eng, i) => (
              <div
                key={eng.title}
                className="grid items-start gap-8 rounded-xl border bg-card p-8 md:grid-cols-2"
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <eng.icon className="size-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{eng.title}</h3>
                      <p className="text-xs text-muted-foreground">
                        {eng.subtitle} &middot; {eng.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {eng.description}
                  </p>
                  <div className="mt-6">
                    <Button
                      className="rounded-full"
                      variant={i === 0 ? "default" : "outline"}
                      size="lg"
                      asChild
                    >
                      <a
                        href={`https://calendly.com/davegarrison/15min?utm_source=whygc&utm_medium=website&utm_campaign=how-we-work-${eng.title.toLowerCase().replace(/\s+/g, "-")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {i === 0 ? (
                          <>
                            <PhoneCallIcon className="mr-2 size-4" />
                            Start with a PRIME Audit
                          </>
                        ) : (
                          <>
                            Discuss scope
                            <ArrowRightIcon className="ml-2 size-4" />
                          </>
                        )}
                      </a>
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    What&apos;s included
                  </p>
                  <ul className="space-y-3">
                    {eng.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm leading-relaxed"
                      >
                        <CheckCircle2Icon
                          className="mt-0.5 size-4 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Note */}
        <section className="mx-auto w-full max-w-5xl px-4 pb-16 md:px-8">
          <div className="rounded-xl border bg-secondary/5 p-8 text-center">
            <h2 className="mb-3 text-xl tracking-tight md:text-2xl">
              Investment is based on scope, not a fixed menu.
            </h2>
            <p className="mx-auto mb-6 max-w-lg text-sm text-foreground/80 leading-relaxed">
              Every service business is different — your tech stack, team size,
              pipeline complexity, and growth goals all factor into the right
              engagement. We&apos;ll scope it together on a 15-minute call.
            </p>
            <Button className="rounded-full" size="lg" asChild>
              <a
                href="https://calendly.com/davegarrison/15min?utm_source=whygc&utm_medium=website&utm_campaign=how-we-work"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneCallIcon className="mr-2 size-4" />
                Book a Scoping Call
              </a>
            </Button>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
