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
        { label: "Revenue Capture & Pipeline", href: "/services#revenue-capture" },
        { label: "Sales & Ops Automation", href: "/services#sales-automation" },
        { label: "Growth Strategy & Reporting", href: "/services#growth-reporting" },
        { label: "How We Work", href: "/pricing" },
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
            <p className="mb-2 text-lg font-black tracking-wide">WHYG<span className="text-primary">C</span></p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We Help You Gain Control.
              <br />
              Revenue operations consulting for home service companies.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-semibold">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground underline-offset-4 hover:underline transition-colors hover:text-foreground"
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
