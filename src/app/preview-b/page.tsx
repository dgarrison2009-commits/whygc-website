"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Zap,
  Wrench,
  Phone,
  Shield,
} from "lucide-react";

const COLORS = {
  primary: "#1B2A4A",
  accent: "#8B6914",
  accentLight: "#C49B2A",
  bg: "#FAF9F7",
  textPrimary: "#1C1C1C",
  textMuted: "#6B6459",
  card: "#FFFFFF",
  border: "#E8E4DC",
  darkBg: "#1B2A4A",
  darkCard: "#263A5A",
  highlight: "#F0EDE6",
};

const CALENDLY = "https://calendly.com/davegarrison/15min";

const CLIENT_TOOLS = [
  "ServiceTitan",
  "JobNimbus",
  "Housecall Pro",
  "QuickBooks",
  "Jobber",
  "Google LSA",
  "CallRail",
  "CompanyCam",
  "EagleView",
  "Podium",
  "AccuLynx",
  "Roofr",
];

const SERVICES = [
  {
    icon: BarChart3,
    title: "Pipeline Visibility",
    desc: "See every dollar in your pipeline — from first call to final invoice. No more guessing where revenue stands.",
  },
  {
    icon: Zap,
    title: "Speed-to-Response Automation",
    desc: "Automated follow-ups that fire in under 60 seconds. Because the first contractor to respond wins the job.",
  },
  {
    icon: Wrench,
    title: "Tech Stack Integration",
    desc: "We connect your CRM, accounting, and field tools into one unified system. No more double-entry or lost data.",
  },
  {
    icon: Shield,
    title: "Revenue Operations",
    desc: "End-to-end visibility from marketing spend to collected revenue. Every department aligned to one number.",
  },
];

const PRIME_STEPS = [
  {
    letter: "P",
    word: "Profile",
    desc: "We audit your current systems, identify revenue leaks, and map your entire customer journey.",
  },
  {
    letter: "R",
    word: "Reveal",
    desc: "Data analysis uncovers exactly where money is falling through the cracks — and how much.",
  },
  {
    letter: "I",
    word: "Implement",
    desc: "We build and connect the systems that close those gaps. No disruption to daily operations.",
  },
  {
    letter: "M",
    word: "Measure",
    desc: "Real-time dashboards show the impact. You see recovered revenue in weeks, not months.",
  },
  {
    letter: "E",
    word: "Expand",
    desc: "Once the foundation is solid, we scale what works — new channels, new markets, compounding returns.",
  },
];

const STATS = [
  {
    number: "23%",
    label: "Average revenue leakage in home service companies with disconnected systems.",
  },
  {
    number: "4.2x",
    label: "Return on investment our clients see within the first 12 months of engagement.",
  },
  {
    number: "<5 min",
    label: "Average speed-to-response after implementing our automation systems.",
  },
];

export default function PreviewBPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{ backgroundColor: COLORS.bg, color: COLORS.textPrimary }}
      className="min-h-screen"
    >
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <style>{`
        * { font-family: 'Inter', sans-serif; }
        h1, h2, h3, h4, h5, h6, .font-headline { font-family: 'Space Grotesk', sans-serif; }
        .gold-glow:hover { box-shadow: 0 0 0 2px ${COLORS.accentLight}40, 0 8px 24px ${COLORS.primary}12; transform: translateY(-2px); }
        .btn-lift:hover { transform: translateY(-1px); box-shadow: 0 4px 16px ${COLORS.accent}30; }
        .fade-in { animation: fadeIn 0.6s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* Preview Banner */}
      <div
        style={{ backgroundColor: COLORS.primary }}
        className="w-full py-2 text-center"
      >
        <span
          style={{ color: COLORS.accent, fontFamily: "'Space Grotesk', sans-serif" }}
          className="text-sm font-semibold tracking-widest uppercase"
        >
          Preview B — Heritage
        </span>
      </div>

      {/* Sticky Nav */}
      <nav
        style={{
          backgroundColor: scrolled ? `${COLORS.bg}F2` : COLORS.bg,
          borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
        }}
        className="sticky top-0 z-50 w-full"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: COLORS.primary }}
            className="text-2xl font-extrabold tracking-tight select-none"
          >
            WHYG
            <span style={{ color: COLORS.accent }}>C</span>
          </div>

          {/* Book a Call */}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: COLORS.accent,
              color: COLORS.card,
              fontFamily: "'Space Grotesk', sans-serif",
              transition: "all 0.2s ease",
            }}
            className="btn-lift px-5 py-2.5 rounded-full text-sm font-semibold"
          >
            Book a Call
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="max-w-3xl fade-in">
          <p
            style={{
              color: COLORS.accent,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.15em",
            }}
            className="text-xs font-bold uppercase mb-6"
          >
            Revenue Operations for Home Services
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: COLORS.primary,
              lineHeight: 1.12,
              fontSize: "3.5rem",
            }}
            className="font-extrabold mb-8"
          >
            We build the systems that stop revenue from leaking.
          </h1>
          <p
            style={{ color: COLORS.textMuted, lineHeight: 1.75 }}
            className="text-lg mb-10 max-w-2xl"
          >
            Revenue operations consulting for home service companies. We connect
            Marketing, Operations, and Accounting into one system — so your
            revenue stops leaking and starts compounding.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: COLORS.accent,
                color: COLORS.card,
                fontFamily: "'Space Grotesk', sans-serif",
                transition: "all 0.2s ease",
              }}
              className="btn-lift inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold"
            >
              Book a Strategy Call
              <ArrowRight size={16} />
            </a>
            <a
              href="#prime"
              style={{
                border: `1.5px solid ${COLORS.primary}`,
                color: COLORS.primary,
                fontFamily: "'Space Grotesk', sans-serif",
                transition: "all 0.2s ease",
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-80"
            >
              See Our Process
            </a>
          </div>
        </div>
      </section>

      {/* Client Tools */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div style={{ borderTop: `1px solid ${COLORS.border}` }} className="pt-16">
          <p
            style={{ color: COLORS.textMuted }}
            className="text-sm mb-10 text-center"
          >
            We work with the tools your team already uses
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {CLIENT_TOOLS.map((tool) => (
              <div
                key={tool}
                style={{
                  backgroundColor: COLORS.highlight,
                  transition: "all 0.2s ease",
                }}
                className="gold-glow flex items-center gap-3 px-4 py-3 rounded-lg cursor-default"
              >
                <div
                  style={{
                    backgroundColor: COLORS.card,
                    color: COLORS.accent,
                    fontFamily: "'Space Grotesk', sans-serif",
                    border: `1px solid ${COLORS.border}`,
                  }}
                  className="w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold shrink-0"
                >
                  {tool[0]}
                </div>
                <span
                  style={{ color: COLORS.textPrimary }}
                  className="text-xs font-medium leading-tight"
                >
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Math */}
      <section
        style={{ backgroundColor: COLORS.card, borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}` }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: COLORS.primary,
            }}
            className="text-3xl font-bold mb-14"
          >
            The revenue most contractors don&apos;t see.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {STATS.map((stat) => (
              <div
                key={stat.number}
                style={{
                  borderLeft: `3px solid ${COLORS.accent}`,
                }}
                className="pl-6"
              >
                <p
                  style={{
                    color: COLORS.accent,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "2.75rem",
                  }}
                  className="font-extrabold mb-3"
                >
                  {stat.number}
                </p>
                <p
                  style={{ color: COLORS.textMuted, lineHeight: 1.65 }}
                  className="text-sm"
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — Dark Section */}
      <section style={{ backgroundColor: COLORS.darkBg }} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: COLORS.card,
            }}
            className="text-3xl font-bold mb-4"
          >
            Systems that run without you.
          </h2>
          <p style={{ color: `${COLORS.card}99` }} className="text-base mb-14 max-w-xl">
            We design, build, and maintain the operational infrastructure that
            lets you scale without adding headcount.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  style={{
                    backgroundColor: COLORS.darkCard,
                    border: `1px solid ${COLORS.primary}`,
                    transition: "all 0.25s ease",
                  }}
                  className="gold-glow p-8 rounded-xl"
                >
                  <Icon
                    size={28}
                    style={{ color: COLORS.accentLight }}
                    className="mb-5"
                  />
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: COLORS.card,
                    }}
                    className="text-lg font-bold mb-3"
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{ color: `${COLORS.card}99`, lineHeight: 1.7 }}
                    className="text-sm"
                  >
                    {svc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRIME Method */}
      <section
        id="prime"
        style={{ backgroundColor: COLORS.bg }}
        className="py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            style={{
              color: COLORS.accent,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.15em",
            }}
            className="text-xs font-bold uppercase mb-4"
          >
            Our Framework
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: COLORS.primary,
            }}
            className="text-3xl font-bold mb-16"
          >
            The PRIME Method
          </h2>
          <div className="space-y-0">
            {PRIME_STEPS.map((step, i) => (
              <div
                key={step.letter}
                style={{
                  borderBottom:
                    i < PRIME_STEPS.length - 1
                      ? `1px solid ${COLORS.border}`
                      : "none",
                }}
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-8"
              >
                <div className="flex items-baseline gap-3 shrink-0 sm:w-48">
                  <span
                    style={{
                      color: COLORS.accent,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2.5rem",
                    }}
                    className="font-extrabold leading-none"
                  >
                    {step.letter}
                  </span>
                  <span
                    style={{
                      color: COLORS.primary,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                    className="text-lg font-bold"
                  >
                    {step.word}
                  </span>
                </div>
                <p
                  style={{ color: COLORS.textMuted, lineHeight: 1.7 }}
                  className="text-sm sm:pt-2"
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Work Together */}
      <section
        style={{
          backgroundColor: COLORS.card,
          borderTop: `1px solid ${COLORS.border}`,
          borderBottom: `1px solid ${COLORS.border}`,
        }}
        className="py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: COLORS.primary,
            }}
            className="text-3xl font-bold mb-14"
          >
            Ways to work together
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Engagement */}
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                transition: "all 0.25s ease",
              }}
              className="gold-glow p-10 rounded-xl"
            >
              <p
                style={{
                  color: COLORS.accent,
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.1em",
                }}
                className="text-xs font-bold uppercase mb-4"
              >
                Full Engagement
              </p>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: COLORS.primary,
                }}
                className="text-xl font-bold mb-4"
              >
                Project Engagement
              </h3>
              <p
                style={{ color: COLORS.textMuted, lineHeight: 1.75 }}
                className="text-sm mb-8"
              >
                A complete revenue operations build-out. We audit your systems,
                design the architecture, implement integrations, and hand you a
                turnkey operation with dashboards, automations, and documentation.
                Typical engagement: 8–12 weeks.
              </p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: COLORS.accent,
                  color: COLORS.card,
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: "all 0.2s ease",
                }}
                className="btn-lift inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              >
                Schedule a Consultation
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Pipeline Review */}
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                transition: "all 0.25s ease",
              }}
              className="gold-glow p-10 rounded-xl"
            >
              <p
                style={{
                  color: COLORS.accent,
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "0.1em",
                }}
                className="text-xs font-bold uppercase mb-4"
              >
                Complimentary
              </p>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: COLORS.primary,
                }}
                className="text-xl font-bold mb-4"
              >
                Complimentary Pipeline Review
              </h3>
              <p
                style={{ color: COLORS.textMuted, lineHeight: 1.75 }}
                className="text-sm mb-8"
              >
                A focused 15-minute call where we review your current tech stack,
                identify the biggest revenue leak in your pipeline, and give you
                one actionable fix you can implement this week. No pitch, no
                pressure.
              </p>
              <a
                href="/audit"
                style={{
                  border: `1.5px solid ${COLORS.primary}`,
                  color: COLORS.primary,
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: "all 0.2s ease",
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold hover:opacity-80"
              >
                Start Your Audit
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — Dark */}
      <section style={{ backgroundColor: COLORS.darkBg }} className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: COLORS.card,
              fontSize: "2.5rem",
            }}
            className="font-bold mb-6"
          >
            Ready to build your revenue engine?
          </h2>
          <p
            style={{ color: `${COLORS.card}88` }}
            className="text-base mb-10 max-w-lg mx-auto"
          >
            Most contractors are leaving 20%+ of their revenue on the table. Let&apos;s
            find yours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: COLORS.accent,
                color: COLORS.card,
                fontFamily: "'Space Grotesk', sans-serif",
                transition: "all 0.2s ease",
              }}
              className="btn-lift inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold"
            >
              Book a Strategy Call
              <ArrowRight size={16} />
            </a>
            <a
              href="/audit"
              style={{
                border: `1.5px solid ${COLORS.card}50`,
                color: COLORS.card,
                fontFamily: "'Space Grotesk', sans-serif",
                transition: "all 0.2s ease",
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold hover:opacity-80"
            >
              See Results First
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: COLORS.bg,
          borderTop: `1px solid ${COLORS.border}`,
        }}
        className="py-12"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: COLORS.primary,
            }}
            className="text-xl font-extrabold tracking-tight"
          >
            WHYG
            <span style={{ color: COLORS.accent }}>C</span>
          </div>
          <p style={{ color: COLORS.textMuted }} className="text-xs">
            &copy; 2026 WHYGC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: COLORS.textMuted, transition: "color 0.2s" }}
              className="text-xs font-medium hover:opacity-70"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: COLORS.textMuted, transition: "color 0.2s" }}
              className="text-xs font-medium hover:opacity-70"
            >
              Twitter
            </a>
            <a
              href="mailto:dave@whygc.com"
              style={{ color: COLORS.textMuted, transition: "color 0.2s" }}
              className="text-xs font-medium hover:opacity-70"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
