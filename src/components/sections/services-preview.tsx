import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  MegaphoneIcon,
  CogIcon,
  BarChart3Icon,
  ArrowRightIcon,
} from "lucide-react";

const services = [
  {
    icon: MegaphoneIcon,
    title: "Revenue Capture & Pipeline Systems",
    description:
      "Fix the revenue leak between 'lead comes in' and 'contract signed.' Speed-to-lead automation, estimate follow-up, and pipeline visibility that recovers 15-30% more revenue from the same leads.",
  },
  {
    icon: CogIcon,
    title: "Sales & Operations Automation",
    description:
      "Instant lead response, automated estimate follow-ups, CRM your team actually uses, and post-job sequences that turn every customer into a review and a referral.",
  },
  {
    icon: BarChart3Icon,
    title: "Growth Strategy & Reporting",
    description:
      "Real-time dashboards, full marketing attribution, and quarterly strategy reviews so you make growth decisions based on data\u2014not gut feel.",
  },
];

export function ServicesPreview() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-20 md:px-8">
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          What We Do
        </p>
        <h2 className="text-3xl tracking-tight md:text-4xl">
          The systems your business is missing
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/80">
          You don&apos;t need more leads thrown at a broken process. We fix the
          process first, then scale what works.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className={cn(
              "group rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            )}
          >
            <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <s.icon className="size-5 text-primary" aria-hidden="true" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button variant="outline" className="rounded-full" size="lg" asChild>
          <a href="/services">
            View All Services
            <ArrowRightIcon className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
