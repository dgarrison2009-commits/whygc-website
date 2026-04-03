"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Search, Building2, Palette, Rocket, CheckCircle2 } from "lucide-react";

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
  "https://calendly.com/whygc/discovery-call?utm_source=whygc-consulting&utm_medium=website";

// ─── Pain Points ────────────────────────────────────────────────────────────
const painPoints = [
  {
    title: "You\u2019ve Googled \u2018how to start an LLC\u2019 twelve times",
    desc: "The paperwork, decisions, and setup feel overwhelming when you\u2019re already working full-time.",
  },
  {
    title: "You don\u2019t know what business fits your life",
    desc: "Not every business model works for every schedule, budget, and risk tolerance.",
  },
  {
    title: "You need a plan, not just a filing",
    desc: "An LLC without a strategy, brand, or customer acquisition plan is just a piece of paper.",
  },
  {
    title: "You want to move, but you\u2019re stuck at step one",
    desc: "Analysis paralysis is real. You need someone to walk through it with you.",
  },
];

// ─── Phases ─────────────────────────────────────────────────────────────────
const phases = [
  {
    icon: Search,
    phase: "Phase 1",
    title: "Discovery & Direction",
    items: [
      "1-on-1 intake interview",
      "Business fit assessment",
      "Business Model Canvas",
    ],
  },
  {
    icon: Building2,
    phase: "Phase 2",
    title: "Entity & Foundation",
    items: [
      "LLC formation walkthrough",
      "EIN registration guidance",
      "Operating agreement doc prep",
      "Business bank account setup",
    ],
  },
  {
    icon: Palette,
    phase: "Phase 3",
    title: "Brand & Digital Presence",
    items: [
      "Business name & brand direction",
      "Logo + brand kit",
      "Website (landing page)",
      "Social media setup",
    ],
  },
  {
    icon: Rocket,
    phase: "Phase 4",
    title: "Go-to-Market",
    items: [
      "Marketing strategy",
      "30-60-90 day implementation plan",
      "Tech stack recommendations",
    ],
  },
];

// ─── Steps ──────────────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Book a Discovery Call",
    desc: "30-minute conversation about your goals, lifestyle, and vision.",
  },
  {
    number: "02",
    title: "Get Your Custom Plan",
    desc: "Business Model Canvas + implementation roadmap tailored to you.",
  },
  {
    number: "03",
    title: "We Build It Together",
    desc: "Entity, brand, website, and marketing \u2014 handled for you.",
  },
  {
    number: "04",
    title: "Launch Day",
    desc: "You open for business with everything in place.",
  },
];

// ─── Not Included ───────────────────────────────────────────────────────────
const exclusions = [
  "Legal advice (we prepare documents, you review with your attorney)",
  "Tax strategy (work with your tax professional)",
  "Ongoing management or retainer services",
  "Investor or funding applications",
];

// ─── Pricing Inclusions ─────────────────────────────────────────────────────
const pricingInclusions = [
  "Business fit assessment & model canvas",
  "LLC formation & EIN walkthrough",
  "Operating agreement doc prep",
  "Logo, brand kit & style guide",
  "Landing page website",
  "Social media setup",
  "Go-to-market strategy & 90-day plan",
  "Tech stack recommendations",
];

// ═══════════════════════════════════════════════════════════════════════════
// Component
// ═══════════════════════════════════════════════════════════════════════════
export default function Consulting() {
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
        scrollBehavior: "smooth",
      }}
    >
      {/* ── Sticky Nav ─────────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
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
        <a
          href="/"
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontWeight: 900,
            fontSize: "1.5rem",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            userSelect: "none",
            textDecoration: "none",
          }}
        >
          WHYG
          <span style={{ color: accent }}>C</span>
        </a>

        {/* Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {["Services", "Process", "Pricing", "Contact"].map((link) => (
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
            Book a Discovery Call
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
            Business Launch Consulting
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
            You know you need to start a business. We&rsquo;ll show you how.
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
            WHYGC Consulting takes you from idea to operating business in 90
            days &mdash; entity formation, brand identity, digital presence, and
            a go-to-market strategy, all in one flat-rate package.
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
              Book a Discovery Call
              <ArrowRight size={18} />
            </a>

            <a
              href="#services"
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
              See What&rsquo;s Included
            </a>
          </div>
        </div>
      </section>

      {/* ── LIGHT: The Problem ─────────────────────────────────────────── */}
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
            The Problem
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
            The gap between wanting a business and having one is bigger than it
            looks.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {painPoints.map((point, i) => (
              <div
                key={i}
                style={{
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
                    fontSize: "1.15rem",
                    color: light.text,
                    margin: "0 0 12px 0",
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    color: light.muted,
                    margin: 0,
                  }}
                >
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DARK: What's Included ──────────────────────────────────────── */}
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
            What&rsquo;s Included
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
            Everything you need to launch. Nothing you don&rsquo;t.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              const isHovered = hoveredCard === i;
              return (
                <div
                  key={i}
                  style={{
                    background: dark.card,
                    border: isHovered
                      ? "1px solid rgba(184,134,11,0.4)"
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
                  <p
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase" as const,
                      color: accent,
                      margin: "0 0 6px 0",
                    }}
                  >
                    {phase.phase}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      color: "#FFFFFF",
                      margin: "0 0 16px 0",
                    }}
                  >
                    {phase.title}
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {phase.items.map((item, j) => (
                      <li
                        key={j}
                        style={{
                          fontSize: "0.9rem",
                          lineHeight: 1.8,
                          color: dark.muted,
                          paddingLeft: "16px",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: accent,
                          }}
                        >
                          &bull;
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LIGHT: How It Works ────────────────────────────────────────── */}
      <section
        id="process"
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
            How It Works
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
            From idea to open for business in four steps.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            {steps.map((step, i) => (
              <div key={i} style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 800,
                    fontSize: "2.8rem",
                    color: accent,
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: light.text,
                    margin: "0 0 8px 0",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
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

      {/* ── LIGHT: What's NOT Included ─────────────────────────────────── */}
      <section
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
            Scope
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
            Clear scope. No surprises.
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: light.muted,
              maxWidth: "640px",
              margin: "0 0 32px 0",
            }}
          >
            To keep your investment focused, this package is about launch
            &mdash; not ongoing operations.
          </p>

          <div
            style={{
              background: light.card,
              border: `1px solid ${light.border}`,
              borderRadius: "14px",
              padding: "32px 36px",
              maxWidth: "640px",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {exclusions.map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: light.muted,
                    paddingLeft: "24px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: light.muted,
                      fontSize: "1.1rem",
                    }}
                  >
                    &times;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p
              style={{
                fontSize: "0.85rem",
                color: accent,
                fontWeight: 600,
                marginTop: "20px",
                marginBottom: 0,
              }}
            >
              Need ongoing support after launch? Add-on services are available.
            </p>
          </div>
        </div>
      </section>

      {/* ── DARK: Pricing ──────────────────────────────────────────────── */}
      <section
        id="pricing"
        style={{
          background: dark.bg,
          padding: "5rem clamp(24px, 8vw, 120px)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
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
            Pricing
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
            One package. One price. Everything included.
          </h2>

          <div
            style={{
              background: dark.card,
              border: `1px solid ${dark.border}`,
              borderRadius: "18px",
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "3.5rem",
                color: "#FFFFFF",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              $2,000
            </div>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: dark.muted,
                margin: "0 0 32px 0",
              }}
            >
              Business Launch Package
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 36px 0",
                textAlign: "left",
                maxWidth: "380px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {pricingInclusions.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: dark.text,
                    marginBottom: "4px",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    style={{
                      color: accent,
                      flexShrink: 0,
                      marginTop: "4px",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: hoveredBtn === "pricing" ? accentHover : accent,
                color: "#FFFFFF",
                padding: "14px 36px",
                borderRadius: "999px",
                fontSize: "1rem",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.25s ease",
                transform:
                  hoveredBtn === "pricing" ? "translateY(-2px)" : "none",
                boxShadow:
                  hoveredBtn === "pricing"
                    ? "0 6px 24px rgba(184,134,11,0.35)"
                    : "none",
              }}
              onMouseEnter={() => setHoveredBtn("pricing")}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              Book a Discovery Call
              <ArrowRight size={18} />
            </a>

            <p
              style={{
                fontSize: "0.8rem",
                color: dark.muted,
                marginTop: "20px",
                marginBottom: 0,
              }}
            >
              Add-on services available for ongoing support
            </p>
          </div>
        </div>
      </section>

      {/* ── LIGHT: About ───────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          background: light.bg,
          padding: "5rem clamp(24px, 8vw, 120px)",
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
              color: light.muted,
              marginBottom: "16px",
            }}
          >
            About
          </p>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              lineHeight: 1.2,
              color: light.text,
              margin: "0 0 24px 0",
            }}
          >
            Your business deserves an operator, not just a consultant.
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: light.muted,
              margin: "0 0 16px 0",
            }}
          >
            WHYGC Consulting is led by Dave Garrison &mdash; an operations
            professional with deep experience building revenue infrastructure
            for growing businesses. From CRM architecture and automation to
            brand identity and go-to-market strategy, Dave brings a systems
            thinking approach to every engagement.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: light.muted,
              margin: 0,
            }}
          >
            This isn&rsquo;t theory. It&rsquo;s hands-on, step-by-step
            execution &mdash; the same playbook used to launch and scale real
            businesses. You get a partner who builds alongside you, not someone
            who hands you a PDF and disappears.
          </p>
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
            Ready to stop planning and start building?
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: dark.muted,
              margin: "0 0 40px 0",
            }}
          >
            Book a free 30-minute discovery call. We&rsquo;ll talk through your
            idea, your goals, and whether this package is the right fit.
          </p>

          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: hoveredBtn === "final" ? accentHover : accent,
              color: "#FFFFFF",
              padding: "14px 36px",
              borderRadius: "999px",
              fontSize: "1rem",
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.25s ease",
              transform:
                hoveredBtn === "final" ? "translateY(-2px)" : "none",
              boxShadow:
                hoveredBtn === "final"
                  ? "0 6px 24px rgba(184,134,11,0.35)"
                  : "none",
            }}
            onMouseEnter={() => setHoveredBtn("final")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            Book a Discovery Call
            <ArrowRight size={18} />
          </a>
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
          WHYG<span style={{ color: accent }}>C</span>
          <span
            style={{
              fontWeight: 400,
              fontSize: "0.85rem",
              color: dark.muted,
              marginLeft: "8px",
            }}
          >
            Consulting
          </span>
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
            href="/"
            style={{ color: dark.muted, textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#FFFFFF")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = dark.muted)
            }
          >
            WHYGC Home
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
