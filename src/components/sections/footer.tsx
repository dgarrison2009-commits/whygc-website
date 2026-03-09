export function Footer() {
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
        { label: "Lead Generation & Marketing", href: "/services#lead-gen" },
        { label: "Sales & Ops Automation", href: "/services#sales-automation" },
        { label: "Growth Strategy & Reporting", href: "/services#growth-reporting" },
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
    <footer className="border-t">
      <div className="mx-auto w-full max-w-5xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="mb-2 text-lg font-bold tracking-tight">WHYGC</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We Help You Gain Control.
              <br />
              Revenue operations consulting for home service companies.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-sm font-semibold">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {currentYear} WHYGC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
