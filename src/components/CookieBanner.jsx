import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { updateConsent, trackEvent } from '../utils/analytics';

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ccl_consent');
    if (!saved) setOpen(true);
    else updateConsent(saved === 'granted');
  }, []);

  const decide = (granted) => {
    localStorage.setItem('ccl_consent', granted ? 'granted' : 'denied');
    updateConsent(granted);
    trackEvent('cookie_consent', { value: granted ? 'accept' : 'decline' });
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ type: 'spring', damping: 22 }}
          className="fixed bottom-4 inset-x-4 md:bottom-6 md:inset-x-auto md:right-6 md:max-w-md z-[60]"
          role="dialog" aria-label="Cookie consent"
        >
          <div className="card-premium p-6 bg-charcoal text-cream border-burnt/30">
            <div className="flex items-start gap-3 mb-3">
              <Cookie className="text-gold shrink-0 mt-1" size={22} />
              <div>
                <h3 className="font-serif text-xl mb-1">A Cookie for the Road</h3>
                <p className="text-sm text-cream/80 leading-relaxed">
                  We use cookies to deliver a smoother ride — analytics & content personalization.
                  Read our <Link to="/privacy" className="underline text-gold">Privacy Policy</Link>.
                </p>
              </div>
              <button aria-label="Close" onClick={() => decide(false)} className="text-cream/60 hover:text-cream"><X size={18}/></button>
            </div>
            <div className="flex gap-2 mt-4">
              <button onClick={() => decide(true)} className="flex-1 bg-burnt hover:bg-gold hover:text-charcoal text-cream font-semibold py-2.5 rounded-full transition">Accept All</button>
              <button onClick={() => decide(false)} className="flex-1 border border-cream/30 hover:bg-cream/10 text-cream font-semibold py-2.5 rounded-full transition">Decline</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
