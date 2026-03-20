"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  BarChart3,
  Zap,
  Wrench,
  Phone,
} from "lucide-react";

const tools = [
  "ServiceTitan",
  "Housecall Pro",
  "JobNimbus",
  "Jobber",
  "QuickBooks",
  "Google Calendar",
  "Angi",
  "Thumbtack",
  "FieldEdge",
  "GoHighLevel",
  "AccuLynx",
  "Roofr",
];

const services = [
  {
    icon: BarChart3,
    title: "Pipeline visibility",
    desc: "See every lead, every estimate, and every dollar — from first click to closed job.",
  },
  {
    icon: Zap,
    title: "Speed-to-lead automation",
    desc: "Your competitor calls back in 5 minutes. We make sure you call back in 2.",
  },
  {
    icon: Wrench,
    title: "Tech stack wiring",
    desc: "Your CRM, your marketing, your invoicing — connected into one system that actually talks to itself.",
  },
  {
    icon: CheckCircle2,
    title: "Revenue operations",
    desc: "Stop guessing where the money goes. Start seeing where it hides.",
  },
];

const caseStudies = [
  { name: "Roofing Company", type: "PIPELINE VISIBILITY", revenue: "$3.2M" },
  { name: "HVAC Contractor", type: "SPEED TO LEAD", revenue: "$4.8M" },
  { name: "Plumbing Service", type: "CRM AUTOMATION", revenue: "$2.1M" },
];

export default function LabPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#F8F6F1" }}>
      {/* Minimal Top Bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrollY > 50 ? "rgba(248,246,241,0.9)" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(12px)" : "none",
          borderBottom:
            scrollY > 50 ? "1px solid rgba(201,100,66,0.1)" : "none",
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/whygc-logo-light.svg"
              alt="WHYGC"
              className="h-6"
            />
          </a>
          <a
            href="https://calendly.com/davegarrison/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "#C96442",
              color: "#fff",
            }}
          >
            Book a call
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative mx-auto max-w-5xl px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#C96442" }}
          >
            Revenue Operations for Home Services
          </p>
          <h1
            className="mb-6 text-[2.75rem] leading-[1.1] font-extrabold tracking-tight md:text-[3.5rem]"
            style={{
              color: "#2A2520",
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
            }}
          >
            Your pipeline is leaking money you can&apos;t see.
          </h1>
          <p
            className="mb-10 text-lg leading-relaxed"
            style={{ color: "#6B6459" }}
          >
            Tell me what tools your team runs on — I&apos;ll show you exactly
            where revenue is hiding in your pipeline. No pitch. Just math.
          </p>

          {/* Conversational CTA */}
          <div className="mb-6">
            <a
              href="sms:+14049551234&body=Hey%20Dave%20-%20here%27s%20what%20we%20use%3A%20"
              className="group flex items-center gap-3 rounded-2xl border-2 px-5 py-4 transition-all duration-200 hover:shadow-lg"
              style={{
                background: "#fff",
                borderColor: "#E5E0D8",
                maxWidth: "480px",
              }}
            >
              <MessageCircle
                className="shrink-0"
                size={20}
                style={{ color: "#C96442" }}
              />
              <span style={{ color: "#A89E8E" }} className="text-base">
                Tell me what your team runs on...
              </span>
              <ArrowRight
                className="ml-auto shrink-0 transition-transform group-hover:translate-x-1"
                size={18}
                style={{ color: "#C96442" }}
              />
            </a>
          </div>

          {/* Tool Logos Ticker */}
          <div className="flex flex-wrap items-center gap-2">
            {tools.slice(0, 6).map((tool) => (
              <span
                key={tool}
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{
                  background: "#F0EDE6",
                  borderColor: "#E5E0D8",
                  color: "#6B6459",
                }}
              >
                {tool}
              </span>
            ))}
            <span
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{ color: "#C96442" }}
            >
              +500 more
            </span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="mx-auto max-w-5xl px-6"
        style={{ borderBottom: "1px solid #E5E0D8" }}
      />

      {/* The Math Section */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-16 max-w-xl">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#C96442" }}
          >
            The math
          </p>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
            style={{
              color: "#2A2520",
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
            }}
          >
            The $400K most contractors don&apos;t see.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6B6459" }}>
            500 estimates a year. $8,000 average job. Close 25% and
            that&apos;s $1M. Bump that to 35% by fixing your follow-up
            process? That&apos;s an extra $400K you&apos;re leaving on the
            table.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div
            className="rounded-2xl border p-8"
            style={{ background: "#fff", borderColor: "#E5E0D8" }}
          >
            <p
              className="mb-1 text-4xl font-bold"
              style={{
                color: "#C96442",
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
              }}
            >
              23%
            </p>
            <p className="text-sm" style={{ color: "#6B6459" }}>
              Average revenue recovered from pipeline leaks
            </p>
          </div>
          <div
            className="rounded-2xl border p-8"
            style={{ background: "#fff", borderColor: "#E5E0D8" }}
          >
            <p
              className="mb-1 text-4xl font-bold"
              style={{
                color: "#C96442",
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
              }}
            >
              4.2x
            </p>
            <p className="text-sm" style={{ color: "#6B6459" }}>
              Faster speed-to-lead after implementation
            </p>
          </div>
          <div
            className="rounded-2xl border p-8"
            style={{ background: "#fff", borderColor: "#E5E0D8" }}
          >
            <p
              className="mb-1 text-4xl font-bold"
              style={{
                color: "#C96442",
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
              }}
            >
              &lt;5 min
            </p>
            <p className="text-sm" style={{ color: "#6B6459" }}>
              Speed-to-lead target (industry avg is 47 hours)
            </p>
          </div>
        </div>
      </section>

      {/* Services — Card Style */}
      <section style={{ background: "#2A2520" }} className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#D97757" }}
          >
            What we build
          </p>
          <h2
            className="mb-12 text-3xl font-bold tracking-tight text-white md:text-4xl"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Systems that run without you.
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border p-8 transition-all duration-200 hover:border-[#C96442]/40"
                style={{
                  background: "#342F2A",
                  borderColor: "#3E3830",
                }}
              >
                <s.icon
                  className="mb-4"
                  size={24}
                  style={{ color: "#D97757" }}
                />
                <h3
                  className="mb-2 text-lg font-semibold text-white"
                  style={{
                    fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#A89E8E" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Work With */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p
          className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]"
          style={{ color: "#C96442" }}
        >
          We speak your language
        </p>
        <h2
          className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
          style={{
            color: "#2A2520",
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
          }}
        >
          Your tools. Connected.
        </h2>
        <p className="mb-12 max-w-lg text-base leading-relaxed" style={{ color: "#6B6459" }}>
          We don&apos;t sell software. We wire what you already have into a
          system that actually works together.
        </p>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="flex items-center gap-3 rounded-xl border px-4 py-3 transition-all hover:shadow-sm"
              style={{ background: "#fff", borderColor: "#E5E0D8" }}
            >
              <div
                className="flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold"
                style={{ background: "#F0EDE6", color: "#C96442" }}
              >
                {tool.charAt(0)}
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: "#2A2520" }}
              >
                {tool}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        className="mx-auto max-w-5xl px-6"
        style={{ borderBottom: "1px solid #E5E0D8" }}
      />

      {/* Ways to Work Together */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h2
          className="mb-12 text-3xl font-bold tracking-tight md:text-4xl"
          style={{
            color: "#2A2520",
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
          }}
        >
          Ways to work together.
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Option 1: Build */}
          <div
            className="flex flex-col justify-between rounded-2xl border p-8"
            style={{ background: "#fff", borderColor: "#E5E0D8" }}
          >
            <div>
              <h3
                className="mb-3 text-xl font-bold"
                style={{
                  color: "#2A2520",
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                }}
              >
                Let&apos;s build it.
              </h3>
              <p
                className="mb-8 text-sm leading-relaxed"
                style={{ color: "#6B6459" }}
              >
                I learn how your revenue team actually operates and build the
                systems around it. It starts with a specific problem — a leaky
                pipeline, slow follow-ups, disconnected tools. We figure out
                the scope in the first conversation.
              </p>
            </div>
            <a
              href="https://calendly.com/davegarrison/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
              style={{ color: "#C96442" }}
            >
              Start a conversation <ArrowRight size={16} />
            </a>
          </div>

          {/* Option 2: Audit */}
          <div
            className="flex flex-col justify-between rounded-2xl border p-8"
            style={{ background: "#fff", borderColor: "#E5E0D8" }}
          >
            <div>
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-[0.15em]"
                style={{ color: "#C96442" }}
              >
                Free
              </p>
              <h3
                className="mb-3 text-xl font-bold"
                style={{
                  color: "#2A2520",
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                }}
              >
                15-minute pipeline review.
              </h3>
              <p
                className="mb-8 text-sm leading-relaxed"
                style={{ color: "#6B6459" }}
              >
                Walk me through your pipeline for 15 minutes. I&apos;ll tell
                you where the revenue is hiding — what to fix first, what to
                ignore, and whether I can actually help. No pitch. Just clarity.
              </p>
            </div>
            <a
              href="/audit"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
              style={{ color: "#C96442" }}
            >
              Claim your spot <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ background: "#2A2520" }} className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-lg text-center">
            <h2
              className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              Prefer to talk? Tell me what&apos;s not working.
            </h2>
            <p className="mb-10 text-base" style={{ color: "#A89E8E" }}>
              Tell me what&apos;s happening in your business and I&apos;ll be
              honest about whether I can help.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://calendly.com/davegarrison/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "#C96442" }}
              >
                <Phone size={18} />
                Book a free 15-minute call
              </a>
              <a
                href="sms:+14049551234&body=Hey%20Dave%20-%20here%27s%20what%20we%20use%3A%20"
                className="flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-base font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{
                  borderColor: "#3E3830",
                  color: "#D97757",
                }}
              >
                <MessageCircle size={18} />
                Text me what your team runs on
              </a>
            </div>

            <p className="mt-6 text-xs" style={{ color: "#6B6459" }}>
              Usually responds within a few hours
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8" style={{ background: "#2A2520" }}>
        <div
          className="mx-auto flex max-w-5xl items-center justify-between px-6"
          style={{ borderTop: "1px solid #3E3830", paddingTop: "2rem" }}
        >
          <div className="flex items-center gap-2 text-xs" style={{ color: "#6B6459" }}>
            <span>&copy; 2026</span>
            <span>|</span>
            <span>WHYGC</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/whygc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "#6B6459" }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:dave@whygcfamily.com"
              className="text-xs transition-colors hover:text-white"
              style={{ color: "#6B6459" }}
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* Google Fonts */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
