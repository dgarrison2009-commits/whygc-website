import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PhoneCallIcon } from "lucide-react";

export function CTASection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-20 md:px-8">
      <div className="relative overflow-hidden rounded-2xl border bg-card px-6 py-16 text-center shadow-sm md:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(50%_80%_at_50%_0%,--theme(--color-primary/.06),transparent)]" />
        <div className="relative">
          <h2 className="mb-4 text-3xl tracking-tight md:text-4xl">
            Ready to build your revenue engine?
          </h2>
          <p className="mx-auto mb-8 max-w-md text-foreground/80">
            Book a free 15-minute strategy call. We&apos;ll map your current
            pipeline and show you exactly where the gaps are.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button className="rounded-full" size="lg" asChild>
              <a href="https://calendly.com/davegarrison/15min?utm_source=whygc&utm_medium=website" target="_blank" rel="noopener noreferrer">
                <PhoneCallIcon className="mr-2 size-4" />
                Book a Strategy Call
              </a>
            </Button>
            <Button variant="outline" className="rounded-full" size="lg" asChild>
              <a href="/case-studies">
                See Results First
                <ArrowRightIcon className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
