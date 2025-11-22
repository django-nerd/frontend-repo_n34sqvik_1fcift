import { CheckCircle2, Rocket, ShoppingCart, LineChart } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "$500",
    highlight: "Perfect for launches",
    features: [
      "Custom website design",
      "Up to 5 pages",
      "Mobile-first, blazing-fast",
      "SEO setup + analytics",
    ],
    icon: Rocket,
  },
  {
    name: "Pro",
    price: "$1500",
    highlight: "Best value for growth",
    features: [
      "Conversion-optimized UX",
      "Blog + CMS",
      "Speed + Core Web Vitals",
      "Automation + lead capture",
    ],
    icon: LineChart,
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    highlight: "Scale without limits",
    features: [
      "E-commerce development",
      "Advanced integrations",
      "Dedicated success manager",
      "Priority support",
    ],
    icon: ShoppingCart,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Services engineered to convert</h2>
          <p className="mt-3 text-slate-300">
            Partner with the best web agency for custom website design and e-commerce development that actually moves the needle.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl p-6 border ${t.featured ? 'bg-gradient-to-br from-orange-500/15 to-red-500/10 border-orange-500/30' : 'bg-white/5 border-white/10'} backdrop-blur-sm`}>
              <div className="flex items-center gap-3">
                <t.icon className="text-orange-400" />
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              </div>
              <p className="mt-2 text-slate-300">{t.highlight}</p>
              <div className="mt-4 text-3xl font-extrabold text-white">{t.price}</div>
              <ul className="mt-6 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-200">
                    <CheckCircle2 size={18} className="mt-0.5 text-orange-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium shadow">
                Get started
              </a>
              <div className="mt-3 text-xs text-orange-300">Boost sales by 300% with our e-commerce designs</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
