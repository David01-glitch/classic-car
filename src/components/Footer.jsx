import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Facebook, Youtube, Twitter, Wrench } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function Footer() {
  const submit = (e) => {
    e.preventDefault();
    trackEvent('newsletter_signup', { location: 'footer' });
    e.target.reset();
    alert('Welcome to the garage. First dispatch on its way.');
  };
  return (
    <footer className="bg-charcoal text-cream pt-20 pb-8 px-5 md:px-8 mt-10">
      <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2 font-serif text-2xl font-extrabold mb-4">
            <span className="w-9 h-9 rounded-full bg-cream text-charcoal grid place-items-center"><Wrench size={18}/></span>
            Classic Car <span className="text-gold">Legends</span>
          </Link>
          <p className="text-cream/70 text-sm leading-relaxed">
            A premium platform for vintage collectors, restoration craftsmen and retro driving enthusiasts.
          </p>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Youtube, Twitter].map((I,i) => (
              <a key={i} href="#" aria-label="social" className="w-9 h-9 grid place-items-center rounded-full border border-cream/20 hover:bg-burnt hover:border-burnt transition"><I size={16}/></a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Categories</h4>
          <ul className="space-y-2 text-sm text-cream/75">
            <li><Link to="/muscle-cars" className="hover:text-gold">Muscle Cars</Link></li>
            <li><Link to="/restoration-guides" className="hover:text-gold">Restoration Guides</Link></li>
            <li><Link to="/collector-stories" className="hover:text-gold">Collector Stories</Link></li>
            <li><Link to="/garage-workshops" className="hover:text-gold">Garage Workshops</Link></li>
            <li><Link to="/classic-reviews" className="hover:text-gold">Classic Reviews</Link></li>
            <li><Link to="/retro-road-trips" className="hover:text-gold">Retro Road Trips</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2"><Mail size={16} className="mt-1 text-gold"/> classiccarlegends@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-1 text-gold"/> 781 Maple Drive,<br/>Dallas, TX 75201, USA</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Garage Dispatch</h4>
          <p className="text-sm text-cream/70 mb-3">Monthly stories from the workshop.</p>
          <form onSubmit={submit} className="flex flex-col gap-2">
            <input required type="email" placeholder="your@email.com"
              className="px-4 py-3 rounded-full bg-cream/10 border border-cream/20 text-cream placeholder-cream/40 focus:bg-cream/20"/>
            <button className="bg-burnt hover:bg-gold hover:text-charcoal text-cream py-3 rounded-full font-semibold transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="container-x mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/60">
        <p>© {new Date().getFullYear()} Classic Car Legends. All rights reserved.</p>
        <ul className="flex flex-wrap gap-5">
          <li><Link to="/privacy" className="hover:text-gold">Privacy</Link></li>
          <li><Link to="/terms" className="hover:text-gold">Terms</Link></li>
          <li><Link to="/refund" className="hover:text-gold">Refund</Link></li>
          <li><Link to="/about" className="hover:text-gold">About</Link></li>
          <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
}
