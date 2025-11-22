import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Limited spots for Q1 projects – Claim yours today!</h2>
          <p className="mt-4 text-slate-300">Get an instant strategy call. We’ll audit your current site and map a conversion-focused plan to scale.</p>
          <div className="mt-6 rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 text-orange-200">
            Only 5 onboarding slots left this month. Lock in your spot now.
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl bg-white/5 border border-white/10 p-6">
          {submitted ? (
            <div className="text-center text-green-300">Thanks! We’ll be in touch within 24 hours.</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Name</label>
                  <input required className="w-full px-3 py-2 rounded-md bg-slate-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm text-slate-300 mb-1">Email</label>
                  <input type="email" required className="w-full px-3 py-2 rounded-md bg-slate-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-slate-300 mb-1">Website</label>
                  <input className="w-full px-3 py-2 rounded-md bg-slate-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-slate-300 mb-1">Project goals</label>
                  <textarea rows={4} className="w-full px-3 py-2 rounded-md bg-slate-900 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                </div>
              </div>
              <button className="mt-4 w-full px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold">Request Free Consultation</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
