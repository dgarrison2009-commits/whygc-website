"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightIcon,
  PhoneCallIcon,
  CheckCircle2Icon,
  MegaphoneIcon,
  CogIcon,
  BarChart3Icon,
  TrendingUpIcon,
} from "lucide-react";

/* ─── Brand Fonts (Space Grotesk + Inter) via Google Fonts ─── */
function BrandFonts() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
}

/* ─── Color System ─── */
const colors = {
  terracotta: "#C96442",
  terracottaLight: "#D97757",
  terracottaGlow: "#E8845F",
  cream: "#FAF9F5",
  charcoal: "#2A2520",
  warmGray: "#A89E8E",
  stone: "#DAD9D4",
  cardBg: "#F5F3ED",
  offWhite: "#F0EDE6",
  accentGold: "#D4A574",
};

/* ─── Tech Stack (what clients use) ─── */
const clientTools = [
  { name: "ServiceTitan", color: "#0066FF" },
  { name: "JobNimbus", color: "#4CAF50" },
  { name: "Housecall Pro", color: "#FF6B35" },
  { name: "QuickBooks", color: "#2CA01C" },
  { name: "Jobber", color: "#00A3E0" },
  { name: "Google LSA", color: "#4285F4" },
  { name: "CallRail", color: "#0073E6" },
  { name: "CompanyCam", color: "#FF9500" },
];

const whygcTools = [
  { name: "Attio CRM", color: "#6366F1" },
  { name: "n8n", color: "#EA4B71" },
  { name: "Apollo.io", color: "#6E57E0" },
  { name: "Instantly", color: "#4F46E5" },
  { name: "Google Workspace", color: "#4285F4" },
  { name: "Cal.com", color: "#292929" },
];

const services = [
  {
    icon: MegaphoneIcon,
    title: "Revenue Capture & Pipeline",
    description:
      "Close the gap between inquiry and signed contract. Speed-to-response automation and pipeline visibility that recovers 15-30% of revenue currently falling through the cracks.",
    stat: "15-30%",
    statLabel: "revenue recovered",
  },
  {
    icon: CogIcon,
    title: "Sales & Ops Automation",
    description:
      "Instant inquiry response, automated estimate follow-ups, a CRM your team actually uses, and post-job sequences that turn every customer into a review and a referral.",
    stat: "20+",
    statLabel: "hours saved / week",
  },
  {
    icon: BarChart3Icon,
    title: "Growth Strategy & Reporting",
    description:
      "Real-time dashboards, full marketing attribution, and quarterly strategy reviews so you make growth decisions based on data — not gut feel.",
    stat: "100%",
    statLabel: "attribution clarity",
  },
];

const points = [
  "End-to-end systems — marketing, sales, and reporting all connected",
  "Built specifically for service businesses ($2M-$15M revenue)",
  "Speed-to-response and follow-up automation that saves 20+ hours per week",
  "Real-time dashboards so you know exactly where every dollar goes",
  "Dedicated strategist who understands your market and growth stage",
];

const primeSteps = [
  { letter: "P", word: "Profile", desc: "Map your current pipeline end-to-end" },
  { letter: "R", word: "Reveal", desc: "Find where revenue is leaking" },
  { letter: "I", word: "Implement", desc: "Build automation that plugs the gaps" },
  { letter: "M", word: "Measure", desc: "Track every dollar with real dashboards" },
  { letter: "E", word: "Expand", desc: "Scale what works, cut what doesn't" },
];

/* ─── Main Preview Page ─── */
export default function PreviewPage() {
  return (
    <div
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        background: colors.cream,
        color: colors.charcoal,
        minHeight: "100vh",
      }}
    >
      <BrandFonts />
      <PreviewBanner />
      <Header />
      <main>
        <HeroSection />
        <ClientToolsSection />
        <ServicesSection />
        <PRIMESection />
        <WhyUsSection />
        <OurToolsSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
}

/* ─── Preview Banner ─── */
function PreviewBanner() {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${colors.charcoal}, #3D3328)`,
        color: colors.terracottaLight,
        textAlign: "center",
        padding: "8px 16px",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "1px",
        textTransform: "uppercase" as const,
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      Preview — Homepage V2
    </div>
  );
}

/* ─── Header ─── */
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        borderBottom: scrolled ? `1px solid ${colors.stone}` : "1px solid transparent",
        background: scrolled ? "rgba(250,249,245,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <nav
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
          padding: "0 24px",
        }}
      >
        <a href="/preview" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 800,
              fontSize: "24px",
              letterSpacing: "-1px",
              color: colors.charcoal,
            }}
          >
            WHYG<span style={{ color: colors.terracotta }}>C</span>
          </span>
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: colors.charcoal,
                padding: "8px 14px",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = colors.offWhite)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/davegarrison/15min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: "12px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              color: "#fff",
              background: colors.terracotta,
              padding: "8px 20px",
              borderRadius: "999px",
              textDecoration: "none",
              transition: "all 0.2s",
              boxShadow: `0 2px 8px ${colors.terracotta}40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = colors.terracottaLight;
              e.currentTarget.style.boxShadow = `0 4px 16px ${colors.terracotta}50`;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = colors.terracotta;
              e.currentTarget.style.boxShadow = `0 2px 8px ${colors.terracotta}40`;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Book a Call
          </a>
        </div>
      </nav>
    </header>
  );
}

/* ─── Hero ─── */
function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = useMemo(() => ["Control", "Clarity", "Confidence"], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 80px",
        maxWidth: "1120px",
        margin: "0 auto",
      }}
    >
      {/* Subtle gradient accents */}
      <div
        style={{
          position: "absolute",
          top: "-40%",
          right: "-20%",
          width: "600px",
          height: "600px",
          background: `radial-gradient(circle, ${colors.terracotta}08 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "400px",
          height: "400px",
          background: `radial-gradient(circle, ${colors.accentGold}06 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ position: "relative", textAlign: "center" }}
      >
        {/* Pill badge */}
        <a
          href="/case-studies"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "6px 16px",
            borderRadius: "999px",
            border: `1px solid ${colors.stone}`,
            background: "#fff",
            fontSize: "13px",
            fontWeight: 500,
            color: colors.warmGray,
            textDecoration: "none",
            marginBottom: "32px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors.terracotta;
            e.currentTarget.style.color = colors.terracotta;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = colors.stone;
            e.currentTarget.style.color = colors.warmGray;
          }}
        >
          <TrendingUpIcon size={14} />
          <span>RevOps consulting for service businesses</span>
          <span style={{ width: "1px", height: "16px", background: colors.stone }} />
          <ArrowRightIcon size={14} />
        </a>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1.05,
            color: colors.charcoal,
            marginBottom: "24px",
          }}
        >
          We Help You Gain
          <br />
          <span style={{ position: "relative", display: "inline-flex", minWidth: "280px", justifyContent: "center" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={words[wordIndex]}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{
                  color: colors.terracotta,
                  background: `linear-gradient(135deg, ${colors.terracotta}, ${colors.terracottaGlow})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        {/* Subhead */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(16px, 2vw, 20px)",
            lineHeight: 1.7,
            color: colors.warmGray,
            maxWidth: "560px",
            margin: "0 auto 40px",
          }}
        >
          We connect Marketing, Operations, and Accounting into one
          system — so your revenue stops leaking and starts compounding.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
          <a
            href="https://calendly.com/davegarrison/15min"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "#fff",
              background: colors.terracotta,
              padding: "14px 28px",
              borderRadius: "999px",
              textDecoration: "none",
              boxShadow: `0 4px 16px ${colors.terracotta}35`,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = colors.terracottaLight;
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 8px 24px ${colors.terracotta}45`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = colors.terracotta;
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 4px 16px ${colors.terracotta}35`;
            }}
          >
            <PhoneCallIcon size={18} />
            Book a Strategy Call
          </a>
          <a
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: colors.charcoal,
              background: "#fff",
              padding: "14px 28px",
              borderRadius: "999px",
              textDecoration: "none",
              border: `1.5px solid ${colors.stone}`,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = colors.terracotta;
              e.currentTarget.style.color = colors.terracotta;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = colors.stone;
              e.currentTarget.style.color = colors.charcoal;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            See How It Works
            <ArrowRightIcon size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Client Tools Section ─── */
function ClientToolsSection() {
  return (
    <section
      style={{
        borderTop: `1px solid ${colors.stone}`,
        borderBottom: `1px solid ${colors.stone}`,
        padding: "48px 24px",
        background: `linear-gradient(180deg, #fff 0%, ${colors.cardBg} 100%)`,
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase" as const,
            color: colors.warmGray,
            marginBottom: "8px",
          }}
        >
          Your team already uses these tools
        </p>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "22px",
            fontWeight: 700,
            color: colors.charcoal,
            marginBottom: "32px",
          }}
        >
          We integrate with <span style={{ color: colors.terracotta }}>all of them</span>
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {clientTools.map((tool) => (
            <div
              key={tool.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "12px",
                background: "#fff",
                border: `1px solid ${colors.stone}`,
                fontSize: "14px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                color: colors.charcoal,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                transition: "all 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = tool.color;
                e.currentTarget.style.boxShadow = `0 2px 12px ${tool.color}15`;
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.stone;
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: tool.color,
                  flexShrink: 0,
                }}
              />
              {tool.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
function ServicesSection() {
  return (
    <section style={{ padding: "80px 24px", maxWidth: "1120px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase" as const,
            color: colors.terracotta,
            marginBottom: "12px",
          }}
        >
          What We Do
        </p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            letterSpacing: "-1px",
            color: colors.charcoal,
            marginBottom: "16px",
          }}
        >
          The systems your business is missing
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "17px",
            lineHeight: 1.7,
            color: colors.warmGray,
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          Your pipeline has gaps. Revenue is falling through.
          We find the leaks, build the systems, and scale what works.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{
              background: "#fff",
              border: `1px solid ${colors.stone}`,
              borderRadius: "16px",
              padding: "32px",
              transition: "all 0.3s ease",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = colors.terracotta + "40";
              e.currentTarget.style.boxShadow = `0 8px 32px ${colors.terracotta}10`;
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = colors.stone;
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: `linear-gradient(135deg, ${colors.terracotta}15, ${colors.terracotta}08)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <s.icon size={24} style={{ color: colors.terracotta }} />
            </div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                color: colors.charcoal,
                marginBottom: "12px",
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                lineHeight: 1.7,
                color: colors.warmGray,
                marginBottom: "24px",
              }}
            >
              {s.description}
            </p>
            <div
              style={{
                borderTop: `1px solid ${colors.offWhite}`,
                paddingTop: "16px",
                display: "flex",
                alignItems: "baseline",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "28px",
                  fontWeight: 800,
                  color: colors.terracotta,
                }}
              >
                {s.stat}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  color: colors.warmGray,
                  fontWeight: 500,
                }}
              >
                {s.statLabel}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── PRIME Methodology ─── */
function PRIMESection() {
  return (
    <section
      style={{
        background: colors.charcoal,
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase" as const,
              color: colors.terracottaLight,
              marginBottom: "12px",
            }}
          >
            Our Process
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            The PRIME Method
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            A proven 5-step process that finds your revenue leaks
            and plugs them — systematically.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          {primeSteps.map((step, i) => (
            <motion.div
              key={step.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                flex: "1 1 180px",
                maxWidth: "200px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "28px 20px",
                textAlign: "center",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = colors.terracotta + "60";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "32px",
                  fontWeight: 800,
                  background: `linear-gradient(135deg, ${colors.terracotta}, ${colors.terracottaGlow})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "8px",
                }}
              >
                {step.letter}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "8px",
                }}
              >
                {step.word}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {step.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Us ─── */
function WhyUsSection() {
  return (
    <section style={{ padding: "80px 24px", maxWidth: "1120px", margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "48px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase" as const,
              color: colors.terracotta,
              marginBottom: "12px",
            }}
          >
            Why WHYGC
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: colors.charcoal,
              marginBottom: "16px",
              lineHeight: 1.15,
            }}
          >
            We fix the process first.
            <br />
            Then we scale it.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              lineHeight: 1.7,
              color: colors.warmGray,
              marginBottom: "32px",
            }}
          >
            Most agencies hand you inquiries and walk away. We build the entire
            revenue operations system — from the ad click to the booked job to the 5-star review —
            so nothing falls through the cracks and growth compounds.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {points.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <CheckCircle2Icon
                  size={20}
                  style={{
                    color: colors.terracotta,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: colors.charcoal,
                  }}
                >
                  {p}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: `1px solid ${colors.stone}`,
            aspectRatio: "4/3",
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop"
            alt="Team collaborating on revenue strategy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, ${colors.terracotta}10, transparent)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Our Tools ─── */
function OurToolsSection() {
  return (
    <section
      style={{
        padding: "56px 24px",
        background: colors.cardBg,
        borderTop: `1px solid ${colors.stone}`,
        borderBottom: `1px solid ${colors.stone}`,
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase" as const,
            color: colors.warmGray,
            marginBottom: "8px",
          }}
        >
          Powered by
        </p>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            color: colors.charcoal,
            marginBottom: "28px",
          }}
        >
          Best-in-class <span style={{ color: colors.terracotta }}>operations tools</span>
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {whygcTools.map((tool) => (
            <div
              key={tool.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 18px",
                borderRadius: "10px",
                background: "#fff",
                border: `1px solid ${colors.stone}`,
                fontSize: "13px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                color: colors.charcoal,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = tool.color;
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.stone;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: tool.color,
                }}
              />
              {tool.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section style={{ padding: "80px 24px", maxWidth: "1120px", margin: "0 auto" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "24px",
          padding: "64px 32px",
          textAlign: "center",
          background: `linear-gradient(135deg, ${colors.charcoal} 0%, #3D3328 50%, ${colors.charcoal} 100%)`,
        }}
      >
        {/* Glow line */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${colors.terracotta}80, transparent)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "400px",
            height: "400px",
            background: `radial-gradient(circle, ${colors.terracotta}12, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative" }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            Ready to build your revenue engine?
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "17px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)",
              maxWidth: "480px",
              margin: "0 auto 32px",
            }}
          >
            Book a free 15-minute strategy call. We&apos;ll map your current
            pipeline and show you exactly where the gaps are.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <a
              href="https://calendly.com/davegarrison/15min"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "#fff",
                background: colors.terracotta,
                padding: "14px 28px",
                borderRadius: "999px",
                textDecoration: "none",
                boxShadow: `0 4px 20px ${colors.terracotta}40`,
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.terracottaLight;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 8px 28px ${colors.terracotta}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = colors.terracotta;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 4px 20px ${colors.terracotta}40`;
              }}
            >
              <PhoneCallIcon size={18} />
              Book a Strategy Call
            </a>
            <a
              href="/case-studies"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.8)",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "14px 28px",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              See Results First
              <ArrowRightIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function FooterSection() {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Revenue Capture & Pipeline", href: "/services" },
        { label: "Sales & Ops Automation", href: "/services" },
        { label: "Growth Strategy & Reporting", href: "/services" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/company/whygc" },
        { label: "Twitter / X", href: "https://x.com/WHYGC_" },
        { label: "Email Us", href: "mailto:Sales@WHYGC.com" },
      ],
    },
  ];

  return (
    <footer
      style={{
        borderTop: `1px solid ${colors.stone}`,
        background: colors.cream,
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "20px",
                fontWeight: 800,
                letterSpacing: "-0.5px",
                marginBottom: "8px",
              }}
            >
              WHYG<span style={{ color: colors.terracotta }}>C</span>
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                lineHeight: 1.6,
                color: colors.warmGray,
              }}
            >
              We Help You Gain Control.
              <br />
              Revenue operations consulting for home service companies.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase" as const,
                  marginBottom: "16px",
                  color: colors.charcoal,
                }}
              >
                {col.title}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map((link) => (
                  <li key={link.label} style={{ marginBottom: "10px" }}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: colors.warmGray,
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = colors.terracotta)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = colors.warmGray)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "40px",
            paddingTop: "24px",
            borderTop: `1px solid ${colors.stone}`,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: colors.warmGray,
            }}
          >
            &copy; {currentYear} WHYGC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
