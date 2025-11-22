import { useEffect, useState } from 'react';

const quickQuotes = [
  { label: 'Landing page', price: 500 },
  { label: 'Business website', price: 1500 },
  { label: 'E‑commerce', price: 3000 },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! Want an instant quote? Tell me about your project.' },
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 3500);
    return () => clearTimeout(t);
  }, []);

  const send = (text) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: 'user', text }]);
    setInput('');
    setTimeout(() => {
      const suggestion = quickQuotes.find(q => text.toLowerCase().includes(q.label.split(' ')[0].toLowerCase()));
      const resp = suggestion
        ? `Rough estimate for ${suggestion.label}: $${suggestion.price}. Want to book a free consult?`
        : 'We can help with that! Typical projects range from $500–$5000 depending on scope.';
      setMessages((m) => [...m, { role: 'bot', text: resp }]);
    }, 600);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[70]">
      <div className="w-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
        <div className="px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-between">
          <span className="font-semibold">Instant Quote Assistant</span>
          <button onClick={() => setOpen(false)} className="text-white/80">×</button>
        </div>
        <div className="h-64 overflow-y-auto p-3 space-y-2">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-[85%] px-3 py-2 rounded-lg text-sm ${m.role==='bot' ? 'bg-white/10 text-white' : 'bg-orange-500 text-white ml-auto'}`}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="p-3 flex gap-2">
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e)=> e.key==='Enter' && send(input)} placeholder="Type your message" className="flex-1 px-3 py-2 rounded-md bg-slate-800 border border-white/10 text-white" />
          <button onClick={() => send(input)} className="px-3 py-2 rounded-md bg-orange-500 text-white">Send</button>
        </div>
      </div>
    </div>
  );
}
