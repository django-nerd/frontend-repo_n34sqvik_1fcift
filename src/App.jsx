import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import LeadMagnet from './components/LeadMagnet';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <LeadMagnet />
      <Chatbot />
      <footer className="py-10 border-t border-white/10 text-center text-slate-400">
        © {new Date().getFullYear()} Ignite Studio — best web agency for custom website design & e-commerce development.
      </footer>
    </div>
  );
}

export default App;