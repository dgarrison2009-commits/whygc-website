"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PhoneCallIcon, TrendingUpIcon } from "lucide-react";

export function HeroSection() {
	const [wordIndex, setWordIndex] = useState(0);
	const words = useMemo(() => ["Control", "Clarity", "Confidence"], []);

	useEffect(() => {
		const interval = setInterval(() => {
			setWordIndex((prev) => (prev + 1) % words.length);
		}, 2500);
		return () => clearInterval(interval);
	}, [words]);

	return (
		<section className="mx-auto w-full max-w-5xl">
			{/* Top Shades */}
			<div
				aria-hidden="true"
				className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
			>
				<div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,--theme(--color-foreground/.08),transparent)] contain-strict" />
			</div>
			{/* X Bold Faded Borders */}
			<div
				aria-hidden="true"
				className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
			>
				<div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15" />
				<div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15" />
			</div>
			{/* main content */}
			<div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-30">
				{/* X Content Faded Borders */}
				<div
					aria-hidden="true"
					className="absolute inset-0 -z-1 size-full overflow-hidden"
				>
					<div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-8" />
					<div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-8" />
					<div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12" />
					<div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12" />
				</div>
				<a
					className={cn(
						"group mx-auto flex w-fit items-center gap-3 rounded-full border bg-card px-3 py-1 shadow",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
					)}
					href="/case-studies"
				>
					<TrendingUpIcon className="size-3 text-muted-foreground" />
					<span className="text-xs">RevOps consulting for service businesses</span>
					<span className="block h-5 border-l" />
					<ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
				</a>
				<h1
					className={cn(
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards text-center text-4xl tracking-tight delay-100 duration-500 ease-out md:text-5xl lg:text-6xl",
						"text-shadow-[0_0px_50px_theme(--color-foreground/.2)]"
					)}
				>
					We Help You Gain
					<span className="relative inline-flex w-[200px] justify-center overflow-hidden align-bottom md:w-[280px] lg:w-[340px]">
						<AnimatePresence mode="wait">
							<motion.span
								key={words[wordIndex]}
								initial={{ y: 40, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -40, opacity: 0 }}
								transition={{ duration: 0.35, ease: "easeInOut" }}
								className="inline-block text-primary font-semibold"
							>
								{words[wordIndex]}
							</motion.span>
						</AnimatePresence>
					</span>
				</h1>
				<p className="fade-in slide-in-from-bottom-10 mx-auto max-w-lg animate-in fill-mode-backwards text-center text-base text-foreground/80 tracking-wider delay-200 duration-500 ease-out sm:text-lg md:text-xl">
					We connect Marketing, Operations, and Accounting into one
					system — so your revenue stops leaking and starts compounding.
				</p>
				<div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
					<Button className="rounded-full" size="lg" variant="secondary" asChild>
						<a href="https://calendly.com/davegarrison/15min" target="_blank" rel="noopener noreferrer">
							<PhoneCallIcon className="size-4 mr-2" />
							Book a Strategy Call
						</a>
					</Button>
					<Button className="rounded-full" size="lg" asChild>
						<a href="/services">
							See How It Works
							<ArrowRightIcon className="size-4 ms-2" />
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}

export function LogosSection() {
	return (
		<section className="relative space-y-4 border-t pt-6 pb-10">
			<h2 className="text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
				We integrate with <span className="text-foreground">the tools your team already uses</span>
			</h2>
			<div className="relative z-10 mx-auto max-w-4xl">
				<div className="flex flex-wrap items-center justify-center gap-8 py-4 opacity-60">
					{tools.map((tool) => (
						<span key={tool} className="text-sm font-semibold tracking-wide text-foreground/70 uppercase">
							{tool}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}

const tools = [
	"ServiceTitan",
	"JobNimbus",
	"Housecall Pro",
	"QuickBooks",
	"Jobber",
	"Google LSA",
	"CallRail",
	"CompanyCam",
];
