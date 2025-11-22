import { useEffect, useState } from 'react';

export default function LeadMagnet() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-orange-500/30 p-6 shadow-2xl">
        <button onClick={() => setOpen(false)} className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 text-white">×</button>
        <h3 className="text-white text-xl font-bold">Free Conversion Blueprint</h3>
        <p className="mt-2 text-slate-300 text-sm">Get our 16‑point checklist to turn your website into a sales machine.</p>
        <form className="mt-4 grid grid-cols-1 gap-3">
          <input placeholder="Your email" className="px-3 py-2 rounded-md bg-slate-800 border border-white/10 text-white" />
          <button className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold">Send me the PDF</button>
        </form>
        <div className="mt-3 text-xs text-orange-300">Instant download. No spam, ever.</div>
      </div>
    </div>
  );
}
