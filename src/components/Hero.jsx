import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 ring-1 ring-orange-400/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wide">Best web agency for sales-driven websites</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl">
            Websites that sell and scale your business
          </h1>
          <p className="mt-6 text-lg text-slate-200/90">
            We design conversion-optimized, custom website experiences that turn clicks into customers. From custom website design to e-commerce development, we build assets that drive results.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/30">
              Book Free Consultation Now
            </a>
            <a href="#portfolio" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/15 text-white backdrop-blur-sm ring-1 ring-white/20">
              See our work
            </a>
          </div>
          <div className="mt-6 text-orange-300 text-sm">
            Only 5 slots left this month. Secure yours today.
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />
    </section>
  );
}
