"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2Icon,
  PhoneCallIcon,
  ClockIcon,
  BarChart3Icon,
  ZapIcon,
  ShieldCheckIcon,
} from "lucide-react";

const auditIncludes = [
  "CRM and pipeline health diagnostic",
  "Speed-to-lead analysis across all channels",
  "Revenue leakage identification",
  "Tech stack evaluation and consolidation plan",
  "Competitor benchmarking for your market",
  "Prioritized 30-day action plan with quick wins",
];

const stats = [
  { value: "23%", label: "Average revenue recovered from pipeline leaks" },
  { value: "4.2x", label: "Faster speed-to-lead after implementation" },
  { value: "$2.1M", label: "Revenue influenced across our clients" },
];

const painPoints = [
  {
    icon: BarChart3Icon,
    title: "Leads are coming in, but revenue isn't growing",
    description:
      "You're spending on marketing but can't tell which channels actually produce booked jobs.",
  },
  {
    icon: ClockIcon,
    title: "Follow-ups fall through the cracks",
    description:
      "Your team is busy, but estimates sit unsent and callbacks happen days late.",
  },
  {
    icon: ZapIcon,
    title: "Your CRM is a graveyard",
    description:
      "You're paying for tools that nobody uses correctly. Data is scattered across 5 systems.",
  },
  {
    icon: ShieldCheckIcon,
    title: "You can't see what's working",
    description:
      "No dashboards, no attribution, no idea which tech or which rep is actually driving revenue.",
  },
];

function AuditContent() {
  const searchParams = useSearchParams();
  const isAdTraffic = searchParams.has("utm_source");

  return (
    <div className="flex w-full flex-col">
      {!isAdTraffic && <Header />}
      {isAdTraffic && (
        <div className="flex items-center justify-center border-b py-3">
          <a href="/" className="text-lg font-extrabold tracking-tight">
            WHYGC
          </a>
        </div>
      )}
      <main id="main-content" className="grow">
        {/* Hero */}
        <section className="mx-auto w-full max-w-5xl px-4 pt-24 pb-12 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Free Revenue Operations Review
              </p>
              <h1 className="mb-4 text-4xl tracking-tight md:text-5xl">
                Find out exactly where your revenue is leaking
              </h1>
              <p className="mb-6 text-lg text-foreground/80 leading-relaxed">
                In 15 minutes, we&apos;ll walk through your pipeline and show
                you the gaps between your marketing spend and your booked jobs.
                No pitch. No obligation. Just clarity.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button className="rounded-full" size="lg" asChild>
                  <a
                    href="https://calendly.com/davegarrison/15min?utm_source=whygc&utm_medium=website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PhoneCallIcon className="mr-2 size-4" />
                    Book Your Free Review
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  15 min &middot; No commitment &middot; 100% free
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop"
                  alt="Revenue dashboard showing pipeline metrics"
                  className="size-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-y bg-muted/30">
          <div className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-4 px-4 py-10 text-center md:px-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pain Points */}
        <section className="mx-auto w-full max-w-5xl px-4 py-20 md:px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Sound familiar?
            </p>
            <h2 className="text-3xl tracking-tight md:text-4xl">
              The problems we solve every week
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-xl border bg-card p-6 shadow-sm"
              >
                <point.icon className="mb-3 size-6 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="border-t bg-muted/30">
          <div className="mx-auto w-full max-w-5xl px-4 py-20 md:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                  What you get
                </p>
                <h2 className="mb-4 text-3xl tracking-tight md:text-4xl">
                  A complete revenue operations diagnostic
                </h2>
                <p className="mb-8 text-foreground/80 leading-relaxed">
                  This isn&apos;t a generic checklist. We look at your actual
                  systems, your actual data, and your actual pipeline — then
                  tell you exactly what to fix first.
                </p>
                <ul className="space-y-4">
                  {auditIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border bg-card p-8 text-center shadow-sm">
                <p className="mb-1 text-sm font-medium uppercase tracking-widest text-primary">
                  Ready to see your gaps?
                </p>
                <h3 className="mb-2 text-2xl font-bold tracking-tight">
                  Free 15-Minute Review
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  We&apos;ll walk through your pipeline live and show you
                  where the revenue is hiding.
                </p>
                <Button className="w-full rounded-full" size="lg" asChild>
                  <a
                    href="https://calendly.com/davegarrison/15min?utm_source=whygc&utm_medium=website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PhoneCallIcon className="mr-2 size-4" />
                    Claim Your Spot
                  </a>
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">
                  Limited to 5 reviews per week
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {!isAdTraffic && <Footer />}
    </div>
  );
}

export default function AuditPage() {
  return (
    <Suspense>
      <AuditContent />
    </Suspense>
  );
}
