"use client";

import { useState, useEffect } from "react";
import { ArrowRight, BarChart3, Zap, Wrench, Phone } from "lucide-react";

// ─── Color Tokens ───────────────────────────────────────────────────────────
const dark = {
  bg: "#0A2240",
  card: "#132D54",
  text: "#E0E4EA",
  muted: "#8B9BB5",
  border: "rgba(255,255,255,0.08)",
};

const light = {
  bg: "#F7F8FA",
  card: "#FFFFFF",
  text: "#1A1A2E",
  muted: "#6B7280",
  border: "#E5E7EB",
};

const accent = "#B8860B";
const accentHover = "#D4A542";
const calendlyUrl =
  "https://calendly.com/davegarrison/15min?utm_source=whygc&utm_medium=website";

// ─── Tools List (client-facing only) ────────────────────────────────────────
const tools = [
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

// ─── Services ───────────────────────────────────────────────────────────────
const services = [
  {
    icon: BarChart3,
    title: "Pipeline Visibility",
    desc: "See every lead, estimate, and job in one view — from first touch to final invoice. No more guessing where deals stall.",
  },
  {
    icon: Zap,
    title: "Speed-to-Response Automation",
    desc: "Automated follow-ups, instant lead routing, and triggered workflows that keep prospects warm while your team stays in the field.",
  },
  {
    icon: Wrench,
    title: "Tech Stack Integration",
    desc: "Your CRM, accounting, scheduling, and marketing tools connected into a single revenue system — no more duct-tape workflows.",
  },
  {
    icon: Phone,
    title: "Revenue Operations",
    desc: "A unified operating layer across marketing, sales, and operations that eliminates revenue leaks and surfaces hidden profit.",
  },
];

// ─── PRIME Method ───────────────────────────────────────────────────────────
const prime = [
  {
    letter: "P",
    word: "Profile",
    desc: "Audit your current tech stack, processes, and revenue flow to map where money is leaking.",
  },
  {
    letter: "R",
    word: "Reveal",
    desc: "Surface the hidden bottlenecks, broken handoffs, and blind spots costing you revenue.",
  },
  {
    letter: "I",
    word: "Implement",
    desc: "Build and deploy the automations, integrations, and dashboards that close the gaps.",
  },
  {
    letter: "M",
    word: "Measure",
    desc: "Track speed-to-lead, close rate, and revenue per job with real-time reporting.",
  },
  {
    letter: "E",
    word: "Expand",
    desc: "Scale what works. Add channels, refine workflows, and compound your gains quarter over quarter.",
  },
];

// ─── Stats ──────────────────────────────────────────────────────────────────
const stats = [
  {
    number: "23%",
    label: "Average close-rate lift within 90 days",
  },
  {
    number: "4.2x",
    label: "Faster speed-to-lead after automation",
  },
  {
    number: "<5 min",
    label: "Average response time, down from 4+ hours",
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// Component
// ═══════════════════════════════════════════════════════════════════════════
export default function PreviewD() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "'Source Sans 3', sans-serif",
        fontWeight: 400,
        color: dark.text,
        background: dark.bg,
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* ── Preview Banner ─────────────────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "#070D18",
          color: accent,
          textAlign: "center",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase" as const,
          padding: "6px 0",
          fontFamily: "'Source Sans 3', sans-serif",
        }}
      >
        Preview D — Hybrid
      </div>

      {/* ── Sticky Nav ─────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 28,
          left: 0,
          right: 0,
          zIndex: 99,
          padding: "14px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.35s ease",
          background: scrolled ? "rgba(10,34,64,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? `1px solid ${dark.border}` : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontWeight: 900,
            fontSize: "1.5rem",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            userSelect: "none",
          }}
        >
          WHY
          <span style={{ color: accent }}>G</span>C
        </div>

        {/* Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {["Services", "Method", "Results", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: dark.muted,
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 600,
                letterSpacing: "0.02em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#FFFFFF")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = dark.muted)
              }
            >
              {link}
            </a>
          ))}
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: hoveredBtn === "nav" ? accentHover : accent,
              color: "#FFFFFF",
              padding: "10px 24px",
              borderRadius: "999px",
              fontSize: "0.875rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.2s ease",
              transform: hoveredBtn === "nav" ? "translateY(-1px)" : "none",
              boxShadow:
                hoveredBtn === "nav"
                  ? "0 4px 16px rgba(184,134,11,0.3)"
                  : "none",
            }}
            onMouseEnter={() => setHoveredBtn("nav")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            Book a Call
          </a>
        </div>
      </nav>

      {/* ── DARK: Hero ─────────────────────────────────────────────────── */}
      <section
        style={{
          background: dark.bg,
          paddingTop: "10rem",
          paddingBottom: "6rem",
          paddingLeft: "clamp(24px, 8vw, 120px)",
          paddingRight: "clamp(24px, 8vw, 120px)",
        }}
      >
        <div style={{ maxWidth: "720px" }}>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase" as const,
              color: accent,
              marginBottom: "20px",
            }}
          >
            Revenue Operations for Home Services
          </p>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
              lineHeight: 1.15,
              color: "#FFFFFF",
              margin: "0 0 24px 0",
            }}
          >
            Your pipeline is leaking revenue you can&rsquo;t see.
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.7,
              color: dark.muted,
              maxWidth: "600px",
              margin: "0 0 40px 0",
            }}
          >
            WHYGC connects Marketing, Operations, and Accounting into one
            revenue system — so nothing falls through the cracks between the
            first call and the final invoice.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: hoveredBtn === "hero1" ? accentHover : accent,
                color: "#FFFFFF",
                padding: "14px 32px",
                borderRadius: "999px",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.25s ease",
                transform:
                  hoveredBtn === "hero1" ? "translateY(-2px)" : "none",
                boxShadow:
                  hoveredBtn === "hero1"
                    ? "0 6px 24px rgba(184,134,11,0.35)"
                    : "none",
              }}
              onMouseEnter={() => setHoveredBtn("hero1")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              Book a Strategy Call
              <ArrowRight size={18} />
            </a>

            <a
              href="#method"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "#FFFFFF",
                padding: "14px 32px",
                borderRadius: "999px",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                border: hoveredBtn === "hero2"
                  ? `2px solid ${accentHover}`
                  : "2px solid rgba(255,255,255,0.25)",
                transition: "all 0.25s ease",
                transform:
                  hoveredBtn === "hero2" ? "translateY(-2px)" : "none",
              }}
              onMouseEnter={() => setHoveredBtn("hero2")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ── LIGHT: Tools Section ───────────────────────────────────────── */}
      <section
        style={{
          background: light.bg,
          borderTop: `1px solid ${light.border}`,
          padding: "5rem clamp(24px, 8vw, 120px)",
        }}
      >
        <div style={{ maxWidth: "960px" }}>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase" as const,
              color: light.muted,
              marginBottom: "16px",
            }}
          >
            Integrations
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
              color: light.text,
              margin: "0 0 40px 0",
            }}
          >
            We integrate with the tools your team already uses.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "12px",
            }}
          >
            {tools.map((tool) => (
              <div
                key={tool}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background: light.card,
                  border: `1px solid ${light.border}`,
                  borderRadius: "10px",
                  padding: "12px 16px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: light.text,
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: dark.bg,
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    flexShrink: 0,
                  }}
                >
                  {tool.charAt(0)}
                </div>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHT: The Math Section ────────────────────────────────────── */}
      <section
        id="results"
        style={{
          background: light.bg,
          padding: "2rem clamp(24px, 8vw, 120px) 5rem",
        }}
      >
        <div style={{ maxWidth: "960px" }}>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase" as const,
              color: light.muted,
              marginBottom: "16px",
            }}
          >
            The Math
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
              color: light.text,
              margin: "0 0 20px 0",
            }}
          >
            The $400K most contractors don&rsquo;t see.
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: light.muted,
              maxWidth: "640px",
              margin: "0 0 48px 0",
            }}
          >
            The average home service company runs 500+ estimates per year. If
            23% of those leads go cold because of slow follow-up, broken
            handoffs, or lost paperwork — that&rsquo;s 115 jobs left on the
            table. At an average ticket of $3,500, that&rsquo;s over $400,000
            in revenue your business never sees.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: light.card,
                  border: `1px solid ${light.border}`,
                  borderRadius: "12px",
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: "2.5rem",
                    color: accent,
                    marginBottom: "8px",
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    color: light.muted,
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK: Services Section ─────────────────────────────────────── */}
      <section
        id="services"
        style={{
          background: dark.bg,
          padding: "5rem clamp(24px, 8vw, 120px)",
        }}
      >
        <div style={{ maxWidth: "960px" }}>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase" as const,
              color: accent,
              marginBottom: "16px",
            }}
          >
            What We Build
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
              color: "#FFFFFF",
              margin: "0 0 48px 0",
            }}
          >
            Systems that run without you.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isHovered = hoveredCard === i;
              return (
                <div
                  key={i}
                  style={{
                    background: dark.card,
                    border: isHovered
                      ? `1px solid rgba(184,134,11,0.4)`
                      : `1px solid ${dark.border}`,
                    borderRadius: "14px",
                    padding: "36px 32px",
                    transition: "all 0.25s ease",
                    transform: isHovered ? "translateY(-4px)" : "none",
                    boxShadow: isHovered
                      ? "0 8px 32px rgba(0,0,0,0.3)"
                      : "none",
                  }}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Icon
                    size={28}
                    style={{ color: accent, marginBottom: "18px" }}
                  />
                  <h3
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      color: "#FFFFFF",
                      margin: "0 0 10px 0",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: dark.muted,
                      margin: 0,
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

      {/* ── LIGHT: PRIME Method ────────────────────────────────────────── */}
      <section
        id="method"
        style={{
          background: light.bg,
          padding: "5rem clamp(24px, 8vw, 120px)",
        }}
      >
        <div style={{ maxWidth: "960px" }}>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase" as const,
              color: light.muted,
              marginBottom: "16px",
            }}
          >
            Our Methodology
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
              color: light.text,
              margin: "0 0 48px 0",
            }}
          >
            The PRIME Method.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "16px",
            }}
          >
            {prime.map((step) => (
              <div key={step.letter} style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: "2.8rem",
                    color: accent,
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {step.letter}
                </div>
                <div
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: light.text,
                    marginBottom: "8px",
                  }}
                >
                  {step.word}
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    color: light.muted,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHT: Engagement ──────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          background: light.bg,
          padding: "2rem clamp(24px, 8vw, 120px) 5rem",
        }}
      >
        <div style={{ maxWidth: "960px" }}>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase" as const,
              color: light.muted,
              marginBottom: "16px",
            }}
          >
            Engagement
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
              color: light.text,
              margin: "0 0 40px 0",
            }}
          >
            Ways to work together.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Card 1 — Project */}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                background: light.card,
                border: `1px solid ${light.border}`,
                borderRadius: "14px",
                padding: "36px 32px",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(184,134,11,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = light.border;
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: light.text,
                  margin: "0 0 12px 0",
                }}
              >
                Let&rsquo;s build it.
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  color: light.muted,
                  margin: "0 0 20px 0",
                }}
              >
                A full RevOps engagement — we audit your systems, design the
                architecture, build the integrations, and hand you a revenue
                machine that runs without you. Typical projects run 6-12 weeks.
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: accent,
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                Book a strategy call <ArrowRight size={16} />
              </span>
            </a>

            {/* Card 2 — Free Audit */}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                background: light.card,
                border: `1px solid ${light.border}`,
                borderRadius: "14px",
                padding: "36px 32px",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(184,134,11,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = light.border;
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: light.text,
                  margin: "0 0 12px 0",
                }}
              >
                15-minute pipeline review.
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                  color: light.muted,
                  margin: "0 0 20px 0",
                }}
              >
                A quick, no-pressure conversation where we look at your current
                setup and identify the one or two changes that would have the
                biggest revenue impact. Free, no strings attached.
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: accent,
                  fontWeight: 700,
                  fontSize: "0.9rem",
                }}
              >
                Grab a time slot <ArrowRight size={16} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── DARK: Final CTA ────────────────────────────────────────────── */}
      <section
        style={{
          background: dark.bg,
          padding: "5rem clamp(24px, 8vw, 120px)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
              color: "#FFFFFF",
              margin: "0 0 20px 0",
            }}
          >
            Ready to see where revenue is hiding?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: dark.muted,
              margin: "0 0 40px 0",
            }}
          >
            Most contractors leave six figures on the table every year because
            of disconnected systems. Let&rsquo;s find yours.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: hoveredBtn === "cta1" ? accentHover : accent,
                color: "#FFFFFF",
                padding: "14px 32px",
                borderRadius: "999px",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.25s ease",
                transform:
                  hoveredBtn === "cta1" ? "translateY(-2px)" : "none",
                boxShadow:
                  hoveredBtn === "cta1"
                    ? "0 6px 24px rgba(184,134,11,0.35)"
                    : "none",
              }}
              onMouseEnter={() => setHoveredBtn("cta1")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              Book a Call
              <ArrowRight size={18} />
            </a>

            <a
              href="#results"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "#FFFFFF",
                padding: "14px 32px",
                borderRadius: "999px",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                border: hoveredBtn === "cta2"
                  ? `2px solid ${accentHover}`
                  : "2px solid rgba(255,255,255,0.25)",
                transition: "all 0.25s ease",
                transform:
                  hoveredBtn === "cta2" ? "translateY(-2px)" : "none",
              }}
              onMouseEnter={() => setHoveredBtn("cta2")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              See Results First
            </a>
          </div>
        </div>
      </section>

      {/* ── DARK: Footer ───────────────────────────────────────────────── */}
      <footer
        style={{
          background: dark.bg,
          borderTop: `1px solid ${dark.border}`,
          padding: "40px clamp(24px, 8vw, 120px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontWeight: 900,
            fontSize: "1.25rem",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
          }}
        >
          WHY<span style={{ color: accent }}>G</span>C
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "0.85rem",
            color: dark.muted,
          }}
        >
          <span>&copy; 2026 WHYGC. All rights reserved.</span>
          <a
            href="https://linkedin.com/company/whygc"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: dark.muted, textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#FFFFFF")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = dark.muted)
            }
          >
            LinkedIn
          </a>
          <a
            href="mailto:dave@whygc.com"
            style={{ color: dark.muted, textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#FFFFFF")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = dark.muted)
            }
          >
            Email
          </a>
        </div>
      </footer>

      {/* ── Google Fonts ───────────────────────────────────────────────── */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Source+Sans+3:wght@400;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
