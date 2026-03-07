"use client";

import { Header } from "@/components/ui/header-1";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="grow">
        <section className="mx-auto w-full max-w-5xl px-4 pt-24 pb-20 md:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Contact
              </p>
              <h1 className="mb-4 text-4xl tracking-tight md:text-5xl">
                Let&apos;s talk revenue
              </h1>
              <p className="mb-8 text-lg text-foreground/70">
                Ready to build your revenue engine? Drop us a line or book a
                free strategy call.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <MailIcon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:dave@whygc.com"
                      className="font-medium hover:text-primary"
                    >
                      dave@whygc.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <PhoneIcon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">Available on request</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPinIcon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Atlanta, Georgia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold">Send a message</h2>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      First name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Dave"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Garrison"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="Tell us about your revenue goals..."
                  />
                </div>
                <Button className="w-full rounded-full" size="lg" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
