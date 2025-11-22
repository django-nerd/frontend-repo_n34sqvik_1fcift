export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Built by obsessives. Focused on outcomes.</h2>
          <p className="mt-4 text-slate-300">
            We’re a small, senior team obsessed with performance, design, and conversions. We craft high-impact, custom website design and e-commerce development that turn browsers into buyers.
          </p>
          <p className="mt-3 text-slate-300">
            Every project starts with a growth blueprint: positioning, offer clarity, conversion psychology, and a plan to scale. That’s why partners stay with us.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <div className="text-white">
              <div className="text-3xl font-extrabold">150+</div>
              <div className="text-sm text-slate-400">sites launched</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-extrabold">$80M+</div>
              <div className="text-sm text-slate-400">client revenue influenced</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-extrabold">4.9/5</div>
              <div className="text-sm text-slate-400">average satisfaction</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/10 border border-orange-500/30 p-6">
          <ul className="space-y-3 text-slate-100">
            <li>• Speed-first builds that dominate Core Web Vitals</li>
            <li>• Messaging that converts on day one</li>
            <li>• Senior designers + developers only</li>
            <li>• Ship in weeks, not months</li>
            <li>• Transparent pricing, ROI focus</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
