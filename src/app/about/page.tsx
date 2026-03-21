"use client";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/sections/footer";
import { CTASection } from "@/components/sections/cta";

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main id="main-content" className="grow">
        <section className="mx-auto w-full max-w-5xl px-4 pt-24 pb-16 md:px-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            About WHYGC
          </p>
          <h1 className="mb-6 text-4xl tracking-tight md:text-5xl">
            We Help You Gain Control.
          </h1>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                WHYGC is a Revenue Operations consultancy that helps home
                service companies earning $2M–$15M in revenue gain control
                of the gap between their marketing spend and their actual
                profit.
              </p>
              <p>
                We connect Marketing, Operations, and Accounting into one
                system — so owners stop guessing and start commanding their
                revenue. No more siloed teams. No more leaky funnels.
              </p>
              <p>
                Led by Dave, our approach combines AI-powered automation with
                proven go-to-market strategies to deliver predictable, scalable
                revenue growth.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
                  alt="WHYGC team"
                  className="size-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl border-t px-4 py-16 md:px-8">
          <h2 className="mb-8 text-center text-2xl tracking-tight md:text-3xl">
            Our values
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Revenue-first thinking",
                desc: "Every strategy, every automation, every campaign is measured against its impact on revenue — not impressions or clicks.",
              },
              {
                title: "Radical transparency",
                desc: "Real-time dashboards, honest reporting, and no vanity metrics. You always know exactly where your pipeline stands.",
              },
              {
                title: "Systems over shortcuts",
                desc: "We build infrastructure that compounds. Quick hacks don't scale — engineered systems do.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-xl border bg-card p-6">
                <h3 className="mb-2 font-semibold">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
