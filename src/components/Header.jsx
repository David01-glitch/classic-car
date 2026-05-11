import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wrench } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Stories' },
  { to: '/tutorials', label: 'Tutorials' },
  { to: '/community', label: 'Community' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || pathname !== '/';

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${solid ? 'bg-cream/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <nav className="container-x flex items-center justify-between px-5 md:px-8 py-4">
        <Link to="/" onClick={() => trackEvent('nav_click', { item: 'logo' })} className="flex items-center gap-2 font-serif text-2xl font-extrabold tracking-tight">
          <span className="w-9 h-9 rounded-full bg-charcoal text-gold grid place-items-center"><Wrench size={18}/></span>
          <span>Classic Car <span className="text-burnt">Legends</span></span>
        </Link>
        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {links.map(l => (
            <li key={l.to}>
              <NavLink to={l.to} onClick={() => trackEvent('nav_click', { item: l.label })}
                className={({isActive}) => `hover:text-burnt transition ${isActive ? 'text-burnt' : 'text-charcoal'}`}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" onClick={() => trackEvent('cta_click', { location: 'header' })}
          className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5">Join the Club</Link>
        <button className="lg:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X/> : <Menu/>}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0}} animate={{height:'auto'}} exit={{height:0}}
            className="lg:hidden overflow-hidden bg-cream border-t border-charcoal/10">
            <ul className="flex flex-col p-5 gap-3">
              {links.map(l => (
                <li key={l.to}><NavLink to={l.to} className="block py-2 font-medium">{l.label}</NavLink></li>
              ))}
              <Link to="/contact" className="btn-primary justify-center mt-2">Join the Club</Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
