export default function Portfolio() {
  const cases = [
    {
      name: "Apex Wear",
      before: "Cluttered Shopify theme, 2% conversion",
      after: "Custom storefront, 5.8% conversion",
      metric: "+200% traffic • +190% revenue",
      quote: "They rebuilt our e‑commerce in 3 weeks. Sales exploded.",
      author: "— Maya, Founder",
    },
    {
      name: "SolarIQ",
      before: "Complex forms, low lead quality",
      after: "Streamlined funnel, 3x demo bookings",
      metric: "+160% SEO traffic",
      quote: "Our pipeline finally looks healthy.",
      author: "— Aaron, COO",
    },
    {
      name: "Peak Fitness",
      before: "Slow site, 6s LCP",
      after: "0.9s LCP, +2.4x membership signups",
      metric: "Core Web Vitals: green across the board",
      quote: "We rank and we convert. Period.",
      author: "— Dani, Owner",
    },
    {
      name: "Bento Bakes",
      before: "DIY Wix site",
      after: "Brand-first experience, +310% online orders",
      metric: "CAC down 32%",
      quote: "Best decision we made this year.",
      author: "— Ellie, CEO",
    },
    {
      name: "Atlas SaaS",
      before: "Generic template",
      after: "Demand-gen hub, +4.1x trials",
      metric: "Bounce rate -44%",
      quote: "They ship fast and it works.",
      author: "— Leo, VP Growth",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-950/95">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Proven results, real growth</h2>
          <p className="mt-3 text-slate-300">A selection of case studies across retail, SaaS, solar, fitness, and food brands.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.name} className="group rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-orange-500/40 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{c.name}</h3>
                <span className="text-xs text-orange-300">{c.metric}</span>
              </div>
              <div className="mt-4 text-sm text-slate-300">
                <div><span className="text-slate-400">Before:</span> {c.before}</div>
                <div className="mt-1"><span className="text-slate-400">After:</span> {c.after}</div>
              </div>
              <blockquote className="mt-4 text-slate-200 italic border-l-2 border-orange-500 pl-3">
                “{c.quote}” <span className="not-italic text-slate-400">{c.author}</span>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
