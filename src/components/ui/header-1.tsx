'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{ label: 'Services', href: '/services' },
		{ label: 'About', href: '/about' },
		{ label: 'Case Studies', href: '/case-studies' },
		{ label: 'Pricing', href: '/pricing' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Contact', href: '/contact' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg':
					scrolled,
			})}
		>
			<nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
				<a href="/" className="hover:bg-accent rounded-md p-2 flex items-center gap-2">
					<WHYGCLogo className="h-5" />
				</a>
				<div className="hidden items-center gap-1 lg:flex">
					{links.map((link) => (
						<a key={link.label} className={buttonVariants({ variant: 'ghost', size: 'sm' })} href={link.href}>
							{link.label}
						</a>
					))}
					<div className="ml-2 flex items-center gap-2">
						<Button size="sm">Book a Call</Button>
					</div>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="lg:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-2">
				<div className="grid gap-y-2">
					{links.map((link) => (
						<a
							key={link.label}
							className={buttonVariants({
								variant: 'ghost',
								className: 'justify-start',
							})}
							href={link.href}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex flex-col gap-2">
					<Button className="w-full">Book a Call</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
				'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y lg:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}

export const WHYGCLogo = (props: React.ComponentProps<"svg">) => (
	<svg viewBox="0 0 220 28" fill="currentColor" {...props}>
		<text x="0" y="22" fontFamily="'Source Sans 3', system-ui, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1">
			<tspan>WHYG</tspan><tspan fill="#B8860B">C</tspan>
		</text>
	</svg>
);
