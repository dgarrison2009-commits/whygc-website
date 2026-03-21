"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Zap,
  Wrench,
  Phone,
} from "lucide-react";

/* ─── Color Palette ─── */
const C = {
  primary: "#0A2240",
  accent: "#B8860B",
  bg: "#F7F8FA",
  text: "#1A1A2E",
  muted: "#6B7280",
  card: "#FFFFFF",
  border: "#E5E7EB",
  darkBg: "#0A2240",
  darkCard: "#132D54",
};

const CAL_LINK = "https://calendly.com/davegarrison/15min";

/* ─── Client Tools ─── */
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

/* ─── PRIME Steps ─── */
const PRIME = [
  {
    letter: "P",
    word: "Profile",
    desc: "Audit your current tech stack, pipeline stages, and revenue bottlenecks.",
  },
  {
    letter: "R",
    word: "Reveal",
    desc: "Surface the hidden gaps between marketing spend and closed revenue.",
  },
  {
    letter: "I",
    word: "Implement",
    desc: "Wire your systems together so data flows without manual handoffs.",
  },
  {
    letter: "M",
    word: "Measure",
    desc: "Build dashboards that show real revenue metrics, not vanity numbers.",
  },
  {
    letter: "E",
    word: "Expand",
    desc: "Scale what works. Cut what doesn't. Compound your gains quarter over quarter.",
  },
];

/* ─── Services ─── */
const SERVICES = [
  {
    icon: BarChart3,
    title: "Pipeline Visibility",
    desc: "See every job from first touch to final invoice. Know exactly where revenue stalls and why deals go dark.",
  },
  {
    icon: Zap,
    title: "Speed-to-Response Automation",
    desc: "Route inbound calls and form fills to the right rep in under 5 minutes. Every time, automatically.",
  },
  {
    icon: Wrench,
    title: "Tech Stack Wiring",
    desc: "Connect your CRM, phone system, accounting, and field tools into one system that talks to itself.",
  },
  {
    icon: Phone,
    title: "Revenue Operations",
    desc: "Align Marketing, Operations, and Accounting around one number: revenue collected, not revenue promised.",
  },
];

/* ─── Stat Cards ─── */
const STATS = [
  { value: "23%", label: "average revenue recovered from pipeline leaks" },
  { value: "4.2x", label: "faster speed-to-response after automation" },
  { value: "<5 min", label: "average speed-to-response for inbound inquiries" },
];

/* ════════════════════════════════════════════════════════════════════ */
export default function PreviewA() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Source+Sans+3:wght@400;500;600;700;900&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          fontFamily: "'Source Sans 3', sans-serif",
          color: C.text,
          background: C.bg,
          minHeight: "100vh",
        }}
      >
        {/* ─── Preview Banner ─── */}
        <div
          style={{
            background: C.darkBg,
            color: "#FFFFFF",
            textAlign: "center",
            padding: "10px 0",
            fontFamily: "'Source Sans 3', sans-serif",
            fontWeight: 600,
            fontSize: "0.8rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Preview A &mdash; Executive Navy
        </div>

        {/* ─── Sticky Nav ─── */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
            transition: "all 0.3s ease",
            padding: scrolled ? "14px 0" : "20px 0",
          }}
        >
          <div className="mx-auto flex items-center justify-between" style={{ maxWidth: 1120, padding: "0 24px" }}>
            {/* Logo */}
            <div
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 900,
                fontSize: "1.5rem",
                color: C.primary,
                letterSpacing: "0.04em",
              }}
            >
              WHYG
              <span style={{ color: C.accent }}>C</span>
            </div>

            {/* CTA */}
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: C.accent,
                color: "#FFFFFF",
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                padding: "10px 24px",
                borderRadius: 999,
                textDecoration: "none",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(184,134,11,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book a Call
            </a>
          </div>
        </nav>

        {/* ─── Hero ─── */}
        <section style={{ padding: "100px 24px 80px" }}>
          <div className="mx-auto" style={{ maxWidth: 1120 }}>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: C.accent,
                marginBottom: 20,
              }}
            >
              Revenue Operations for Home Services
            </p>

            <h1
              style={{
                fontFamily: "'Libre Caslon Display', serif",
                fontWeight: 400,
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
                color: C.text,
                maxWidth: 720,
                marginBottom: 24,
              }}
            >
              Your pipeline is leaking revenue you can&rsquo;t see.
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.7,
                color: C.muted,
                maxWidth: 560,
                marginBottom: 40,
              }}
            >
              WHYGC connects Marketing, Operations, and Accounting into one
              revenue system &mdash; so nothing falls through the cracks between
              the first call and the final invoice.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                style={{
                  background: C.accent,
                  color: "#FFFFFF",
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "14px 32px",
                  borderRadius: 999,
                  textDecoration: "none",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(184,134,11,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Book a Strategy Call <ArrowRight size={18} />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2"
                style={{
                  background: "transparent",
                  color: C.primary,
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "14px 32px",
                  borderRadius: 999,
                  textDecoration: "none",
                  border: `2px solid ${C.primary}`,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = C.primary;
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = C.primary;
                }}
              >
                See How It Works
              </a>
            </div>
          </div>
        </section>

        {/* ─── Client Tools ─── */}
        <section style={{ padding: "60px 24px 80px" }}>
          <div className="mx-auto" style={{ maxWidth: 1120 }}>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: C.muted,
                marginBottom: 12,
              }}
            >
              Integrations
            </p>
            <h2
              style={{
                fontFamily: "'Libre Caslon Display', serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: C.text,
                marginBottom: 40,
                maxWidth: 560,
              }}
            >
              We integrate with the tools your team already uses.
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {CLIENT_TOOLS.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-3"
                  style={{
                    background: C.card,
                    border: `1px solid ${C.border}`,
                    borderRadius: 10,
                    padding: "12px 14px",
                    transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.accent;
                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(10,34,64,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 6,
                      background: C.primary,
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      flexShrink: 0,
                    }}
                  >
                    {tool.charAt(0)}
                  </div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: C.text,
                      lineHeight: 1.2,
                    }}
                  >
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── The Math ─── */}
        <section style={{ padding: "80px 24px" }}>
          <div className="mx-auto" style={{ maxWidth: 1120 }}>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: C.muted,
                marginBottom: 12,
              }}
            >
              The Math
            </p>
            <h2
              style={{
                fontFamily: "'Libre Caslon Display', serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: C.text,
                marginBottom: 48,
                maxWidth: 520,
              }}
            >
              The $400K most contractors don&rsquo;t see.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: C.card,
                    border: `1px solid ${C.border}`,
                    borderRadius: 14,
                    padding: "40px 32px",
                    transition: "box-shadow 0.25s ease, transform 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(10,34,64,0.1)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Libre Caslon Display', serif",
                      fontWeight: 400,
                      fontSize: "2.5rem",
                      color: C.accent,
                      marginBottom: 8,
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: C.muted,
                      lineHeight: 1.5,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Services (Dark) ─── */}
        <section
          id="how-it-works"
          style={{ background: C.darkBg, padding: "100px 24px" }}
        >
          <div className="mx-auto" style={{ maxWidth: 1120 }}>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: C.accent,
                marginBottom: 12,
              }}
            >
              What We Build
            </p>
            <h2
              style={{
                fontFamily: "'Libre Caslon Display', serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "#FFFFFF",
                marginBottom: 48,
                maxWidth: 480,
              }}
            >
              Systems that run without you.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={i}
                    style={{
                      background: C.darkCard,
                      borderRadius: 14,
                      padding: "36px 32px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      transition: "border-color 0.25s ease, transform 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(184,134,11,0.4)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: "rgba(184,134,11,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20,
                      }}
                    >
                      <Icon size={22} style={{ color: C.accent }} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        color: "#FFFFFF",
                        marginBottom: 10,
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: 1.65,
                      }}
                    >
                      {svc.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── PRIME Method ─── */}
        <section style={{ padding: "100px 24px" }}>
          <div className="mx-auto" style={{ maxWidth: 1120 }}>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: C.muted,
                marginBottom: 12,
              }}
            >
              Our Methodology
            </p>
            <h2
              style={{
                fontFamily: "'Libre Caslon Display', serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: C.text,
                marginBottom: 56,
                maxWidth: 480,
              }}
            >
              The PRIME Method.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {PRIME.map((step, i) => (
                <div key={i} style={{ textAlign: "left" }}>
                  <div
                    style={{
                      fontFamily: "'Libre Caslon Display', serif",
                      fontWeight: 400,
                      fontSize: "2.5rem",
                      color: C.accent,
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {step.letter}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: C.text,
                      marginBottom: 8,
                    }}
                  >
                    {step.word}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: C.muted,
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Ways to Work Together ─── */}
        <section style={{ padding: "0 24px 100px" }}>
          <div className="mx-auto" style={{ maxWidth: 1120 }}>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: C.muted,
                marginBottom: 12,
              }}
            >
              Engagement
            </p>
            <h2
              style={{
                fontFamily: "'Libre Caslon Display', serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: C.text,
                marginBottom: 48,
                maxWidth: 480,
              }}
            >
              Ways to work together.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Engagement */}
              <div
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: "40px 36px",
                  transition: "box-shadow 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(10,34,64,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.35rem",
                    color: C.text,
                    marginBottom: 14,
                  }}
                >
                  Let&rsquo;s build it.
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: C.muted,
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  A scoped project engagement where we audit your pipeline, wire
                  your tech stack, and build the dashboards your team needs to
                  operate on real numbers. Typical engagements run 6&ndash;12 weeks.
                </p>
                <a
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                  style={{
                    color: C.accent,
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    transition: "gap 0.2s ease",
                  }}
                >
                  Schedule a strategy call <ArrowRight size={16} />
                </a>
              </div>

              {/* Pipeline Review */}
              <div
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  borderRadius: 14,
                  padding: "40px 36px",
                  transition: "box-shadow 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(10,34,64,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.35rem",
                    color: C.text,
                    marginBottom: 14,
                  }}
                >
                  15-minute pipeline review.
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: C.muted,
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  A free, no-obligation look at your current revenue operations.
                  We&rsquo;ll identify the top 2&ndash;3 places revenue is leaking and
                  give you a concrete plan to fix them &mdash; whether you hire us or not.
                </p>
                <a
                  href="/audit"
                  className="inline-flex items-center gap-2"
                  style={{
                    color: C.accent,
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    transition: "gap 0.2s ease",
                  }}
                >
                  Start your free audit <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Final CTA (Dark) ─── */}
        <section style={{ background: C.darkBg, padding: "100px 24px" }}>
          <div
            className="mx-auto"
            style={{ maxWidth: 1120, textAlign: "center" }}
          >
            <h2
              style={{
                fontFamily: "'Libre Caslon Display', serif",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                color: "#FFFFFF",
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              Ready to see where revenue is hiding?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.55)",
                marginBottom: 40,
                maxWidth: 480,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.6,
              }}
            >
              Most contractors leave 15&ndash;25% of earned revenue on the table.
              Let&rsquo;s find yours.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                style={{
                  background: C.accent,
                  color: "#FFFFFF",
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "14px 32px",
                  borderRadius: 999,
                  textDecoration: "none",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(184,134,11,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Book a Call <ArrowRight size={18} />
              </a>

              <a
                href="/audit"
                className="inline-flex items-center gap-2"
                style={{
                  background: "transparent",
                  color: "#FFFFFF",
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  padding: "14px 32px",
                  borderRadius: 999,
                  textDecoration: "none",
                  border: "2px solid rgba(255,255,255,0.25)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                See Results First
              </a>
            </div>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer
          style={{
            padding: "40px 24px",
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <div
            className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ maxWidth: 1120 }}
          >
            <p style={{ fontSize: "0.8rem", color: C.muted }}>
              &copy; 2026 WHYGC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/company/whygc"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.8rem",
                  color: C.muted,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.text)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
              >
                LinkedIn
              </a>
              <a
                href="mailto:dave@whygc.com"
                style={{
                  fontSize: "0.8rem",
                  color: C.muted,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.text)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
