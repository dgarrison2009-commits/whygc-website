"use client";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/sections/footer";
import { ArrowRightIcon } from "lucide-react";

const posts = [
  {
    title: "Why RevOps Is the Growth Lever Most Companies Ignore",
    excerpt:
      "Most companies invest in marketing or sales, but the real multiplier is the operational layer connecting them.",
    date: "Mar 5, 2026",
    category: "Revenue Operations",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Cold Email in 2026: What Actually Works",
    excerpt:
      "Deliverability, personalization, and sequence design — the playbook for outbound that converts.",
    date: "Feb 28, 2026",
    category: "Growth Marketing",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "How to Build a $100K/mo Pipeline with AI Automation",
    excerpt:
      "The exact stack and workflows we use to source, enrich, and engage leads at scale.",
    date: "Feb 20, 2026",
    category: "Automation",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="grow">
        <section className="mx-auto w-full max-w-5xl px-4 pt-24 pb-16 md:px-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Blog
          </p>
          <h1 className="mb-4 text-4xl tracking-tight md:text-5xl">
            Insights for revenue leaders
          </h1>
          <p className="max-w-xl text-lg text-foreground/70">
            Strategies, playbooks, and lessons from the front lines of revenue
            operations.
          </p>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 pb-20 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <a
                key={post.title}
                href="#"
                className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-primary">
                      {post.category}
                    </span>
                    <span>&middot;</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mb-2 font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Read more
                    <ArrowRightIcon className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
