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

/* ─── Cornerstone Palette ─── */
const C = {
  primary: "#00615F",
  primaryLight: "#007D7A",
  accent: "#1A3C5E",
  bg: "#F5F7F8",
  textPrimary: "#1A2B3C",
  textMuted: "#5C6B7A",
  card: "#FFFFFF",
  border: "#DDE3E8",
  darkBg: "#1A3C5E",
  darkCard: "#234A6E",
  toolPill: "#EDF2F7",
  ctaHover: "#007D7A",
};

const CAL_LINK = "https://calendly.com/davegarrison/15min";

/* ─── Client-facing tools only ─── */
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

const stats = [
  { value: "23%", label: "Average revenue recovered from process gaps" },
  { value: "4.2x", label: "Faster quote-to-close cycle after integration" },
  { value: "<5 min", label: "Average response time post-implementation" },
];

const services = [
  {
    icon: BarChart3,
    title: "Pipeline Visibility",
    desc: "See every dollar from first call to final invoice. No more guessing which jobs closed or why they didn\u2019t.",
  },
  {
    icon: Zap,
    title: "Speed-to-Response",
    desc: "Automated routing and alerts so your team responds in minutes, not hours. Speed wins in home services.",
  },
  {
    icon: Wrench,
    title: "Tech Stack Integration",
    desc: "Your CRM, accounting, and field tools finally talking to each other. One connected system instead of twelve silos.",
  },
  {
    icon: Shield,
    title: "Revenue Operations",
    desc: "End-to-end process design from marketing spend to collected revenue. Built to scale with your business.",
  },
];

const primeSteps = [
  { letter: "P", word: "Profile", desc: "Audit your current systems, gaps, and revenue leaks." },
  { letter: "R", word: "Reveal", desc: "Surface the hidden friction costing you money." },
  { letter: "I", word: "Implement", desc: "Deploy connected workflows across your stack." },
  { letter: "M", word: "Measure", desc: "Track KPIs that tie directly to revenue." },
  { letter: "E", word: "Expand", desc: "Scale what works. Cut what doesn\u2019t." },
];

const whyPoints = [
  "We\u2019re operators, not agencies. We\u2019ve run the systems we build.",
  "Every engagement starts with process\u2014never with a tool pitch.",
  "We measure success in collected revenue, not vanity metrics.",
  "Home services is the only vertical we serve.",
  "Our retainers include ongoing optimization, not just setup.",
];

/* ─── Component ─── */
export default function PreviewC() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          color: C.textPrimary,
          backgroundColor: C.bg,
          minHeight: "100vh",
        }}
      >
        {/* ── 1. Preview Banner ── */}
        <div
          style={{
            backgroundColor: C.darkBg,
            padding: "10px 0",
            textAlign: "center",
            fontSize: "13px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
        >
          <span style={{ color: C.primary }}>Preview C</span>
          <span style={{ color: "#ffffff80", margin: "0 8px" }}>&mdash;</span>
          <span style={{ color: "#ffffffcc" }}>Cornerstone</span>
        </div>

        {/* ── 2. Sticky Nav ── */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
            transition: "all 0.3s ease",
            padding: "0 24px",
          }}
        >
          <div
            className="flex items-center justify-between"
            style={{ maxWidth: 1120, margin: "0 auto", height: 64 }}
          >
            <a
              href="#"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "1.5rem",
                color: C.textPrimary,
                textDecoration: "none",
              }}
            >
              WHY
              <span style={{ color: C.primary }}>G</span>C
            </a>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              style={{
                backgroundColor: C.primary,
                color: "#fff",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                padding: "10px 22px",
                borderRadius: 999,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.style.backgroundColor = C.ctaHover);
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,97,95,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.style.backgroundColor = C.primary);
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book a Call
            </a>
          </div>
        </nav>

        {/* ── 3. Hero ── */}
        <section style={{ padding: "80px 24px 64px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: C.primary,
                marginBottom: 20,
              }}
            >
              Revenue Operations for Home Services
            </p>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                lineHeight: 1.12,
                color: C.textPrimary,
                maxWidth: 720,
                marginBottom: 24,
              }}
            >
              Stop guessing where
              <br />
              the money goes.
              <br />
              <span style={{ color: C.primary }}>Start commanding it.</span>
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: C.textMuted,
                maxWidth: 560,
                marginBottom: 36,
              }}
            >
              We connect your field tools, automate your follow-ups, and build
              the systems that turn every call into collected revenue. No more
              spreadsheets. No more dropped jobs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                style={{
                  backgroundColor: C.primary,
                  color: "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "14px 28px",
                  borderRadius: 999,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget.style.backgroundColor = C.ctaHover);
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,97,95,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.style.backgroundColor = C.primary);
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Book a Strategy Call <ArrowRight size={18} />
              </a>
              <a
                href="#method"
                className="inline-flex items-center gap-2"
                style={{
                  border: `2px solid ${C.border}`,
                  color: C.textPrimary,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "14px 28px",
                  borderRadius: 999,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.primary;
                  e.currentTarget.style.color = C.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.color = C.textPrimary;
                }}
              >
                See How It Works
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. Client Tools ── */}
        <section style={{ padding: "64px 24px", backgroundColor: C.card }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: C.primary,
                marginBottom: 12,
              }}
            >
              Integrations
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: C.textPrimary,
                marginBottom: 40,
                maxWidth: 560,
              }}
            >
              We integrate with the platforms your team relies on.
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-3"
                  style={{
                    backgroundColor: C.toolPill,
                    borderRadius: 12,
                    padding: "14px 16px",
                    transition: "all 0.2s ease",
                    border: `1px solid transparent`,
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.primary;
                    e.currentTarget.style.boxShadow = `0 0 0 1px ${C.primary}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      backgroundColor: `${C.primary}15`,
                      color: C.primary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      flexShrink: 0,
                    }}
                  >
                    {tool[0]}
                  </div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: C.textPrimary,
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

        {/* ── 5. The Math ── */}
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: C.primary,
                marginBottom: 12,
              }}
            >
              The Math
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: C.textPrimary,
                marginBottom: 48,
              }}
            >
              The numbers most contractors miss.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div
                  key={s.value}
                  style={{
                    backgroundColor: C.card,
                    border: `1px solid ${C.border}`,
                    borderRadius: 16,
                    padding: "36px 32px",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.primary;
                    e.currentTarget.style.boxShadow = `0 8px 30px ${C.primary}12`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: "2.75rem",
                      color: C.primary,
                      marginBottom: 12,
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </p>
                  <p style={{ color: C.textMuted, fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Services (Dark) ── */}
        <section style={{ backgroundColor: C.darkBg, padding: "80px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: C.primary,
                marginBottom: 12,
              }}
            >
              What We Build
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "#fff",
                marginBottom: 48,
              }}
            >
              Systems that run without you.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    style={{
                      backgroundColor: C.darkCard,
                      borderRadius: 16,
                      padding: "36px 32px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${C.primary}66`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 8px 30px rgba(0,0,0,0.2)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        backgroundColor: `${C.primary}22`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 20,
                      }}
                    >
                      <Icon size={22} style={{ color: C.primary }} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        color: "#fff",
                        marginBottom: 10,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        fontSize: "0.925rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 7. PRIME Method ── */}
        <section id="method" style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: C.primary,
                marginBottom: 12,
              }}
            >
              Our Process
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: C.textPrimary,
                marginBottom: 48,
              }}
            >
              The PRIME Method&mdash;Our proven process.
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {primeSteps.map((step, i) => (
                <div key={step.letter} style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 800,
                      fontSize: "2.5rem",
                      color: C.primary,
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {step.letter}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: C.textPrimary,
                      marginBottom: 8,
                    }}
                  >
                    {step.word}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: C.textMuted, lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. Why WHYGC ── */}
        <section style={{ padding: "80px 24px", backgroundColor: C.card }}>
          <div
            style={{ maxWidth: 1120, margin: "0 auto" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: C.primary,
                  marginBottom: 12,
                }}
              >
                Why Us
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: C.textPrimary,
                  marginBottom: 32,
                  lineHeight: 1.25,
                }}
              >
                We fix the process first.
                <br />
                Then we scale it.
              </h2>
              <ul className="flex flex-col gap-4">
                {whyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      style={{ color: C.primary, flexShrink: 0, marginTop: 2 }}
                    />
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: C.textMuted,
                        lineHeight: 1.6,
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: `1px solid ${C.border}`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Team collaborating on operations strategy"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </section>

        {/* ── 9. CTA (Dark) ── */}
        <section style={{ backgroundColor: C.darkBg, padding: "80px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                color: "#fff",
                marginBottom: 16,
                lineHeight: 1.25,
              }}
            >
              Ready to build your revenue engine?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 520,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              15 minutes. No pitch deck. Just an honest look at where your
              revenue is leaking and how to fix it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
                style={{
                  backgroundColor: C.primary,
                  color: "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "14px 32px",
                  borderRadius: 999,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget.style.backgroundColor = C.ctaHover);
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,97,95,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.style.backgroundColor = C.primary);
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Book a Strategy Call <ArrowRight size={18} />
              </a>
              <a
                href="#method"
                className="inline-flex items-center gap-2"
                style={{
                  border: "2px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  padding: "14px 28px",
                  borderRadius: 999,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.primary;
                  e.currentTarget.style.color = C.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  e.currentTarget.style.color = "#fff";
                }}
              >
                See Our Process
              </a>
            </div>
          </div>
        </section>

        {/* ── 10. Footer ── */}
        <footer
          style={{
            padding: "40px 24px",
            borderTop: `1px solid ${C.border}`,
            backgroundColor: C.bg,
          }}
        >
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ maxWidth: 1120, margin: "0 auto" }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: C.textPrimary,
              }}
            >
              WHY<span style={{ color: C.primary }}>G</span>C
            </p>
            <p style={{ fontSize: "0.8rem", color: C.textMuted }}>
              &copy; {new Date().getFullYear()} WHYGC. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: C.textMuted, textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: C.textMuted, textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
              >
                Twitter
              </a>
              <a
                href="mailto:dave@whygc.com"
                style={{ color: C.textMuted, textDecoration: "none", fontSize: "0.8rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.primary)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.textMuted)}
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
