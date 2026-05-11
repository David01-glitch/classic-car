import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function Newsletter() {
  const submit = (e) => {
    e.preventDefault();
    trackEvent('newsletter_signup', { location: 'section' });
    e.target.reset();
    alert("You're in. First dispatch lands next Tuesday.");
  };
  return (
    <section className="section">
      <div className="container-x">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="relative rounded-3xl p-10 md:p-16 overflow-hidden bg-metallic-gold text-charcoal text-center">
          <div className="absolute inset-0 bg-chrome-grad mix-blend-overlay opacity-30"/>
          <Mail className="mx-auto" size={36}/>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold mt-4">Join the Collector's Club</h2>
          <p className="mt-3 max-w-xl mx-auto">One thoughtful email per month — restoration deep-dives, auction picks, and a hand-curated reading list. No spam, no ad nonsense.</p>
          <form onSubmit={submit} className="mt-7 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto relative">
            <input required type="email" placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-full border-2 border-charcoal bg-cream text-charcoal placeholder-charcoal/40"/>
            <button className="px-7 py-3.5 rounded-full bg-charcoal text-cream font-semibold hover:bg-burnt transition">Subscribe</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
