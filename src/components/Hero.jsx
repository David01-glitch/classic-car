import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Award, Users } from 'lucide-react';
import heroCar from '../assets/images/hero/classic-mustang.jpg';
import heroBg from '../assets/images/hero/hero-bg.jpg';
import { trackEvent } from '../utils/analytics';

const Counter = ({ to, suffix, label, icon: Icon }) => (
  <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
    className="flex items-center gap-3">
    <span className="w-11 h-11 rounded-full bg-burnt/10 text-burnt grid place-items-center"><Icon size={20}/></span>
    <div>
      <div className="font-serif text-2xl font-extrabold text-charcoal">{to}{suffix}</div>
      <div className="text-xs uppercase tracking-widest text-charcoal/60">{label}</div>
    </div>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-40" style={{backgroundImage:`url(${heroBg})`, backgroundSize:'cover', backgroundPosition:'center'}}/>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-cream/60 to-cream"/>
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center px-5 md:px-8">
        <div>
          <motion.span initial={{opacity:0}} animate={{opacity:1}} className="kicker">Est. 1962 — A Living Archive</motion.span>
          <motion.h1
            initial={{opacity:0, y:30}} animate={{opacity:1, y:0}}
            transition={{duration:0.7}}
            className="mt-4 text-5xl md:text-7xl font-extrabold leading-[0.95]">
            Where <span className="italic text-burnt">Chrome</span><br/>
            Meets <span className="text-gold">Soul</span>.
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.25}}
            className="mt-6 text-lg text-charcoal/75 max-w-xl">
            A devoted home for collectors, restorers and weekend wrenchers. We tell the stories behind
            legendary machines — body lines hammered by hand, V8s reborn under shop lights, and
            road trips made unforgettable by mile-stained chrome.
          </motion.p>
          <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.4}}
            className="mt-8 flex flex-wrap gap-4">
            <Link to="/blog" onClick={()=>trackEvent('cta_click',{cta:'hero_stories'})} className="btn-primary">
              Read the Stories <ArrowRight size={18}/>
            </Link>
            <Link to="/tutorials" onClick={()=>trackEvent('cta_click',{cta:'hero_tutorials'})} className="btn-secondary">
              Restoration Library
            </Link>
          </motion.div>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            <Counter to="640" suffix="+" label="Restorations" icon={Wrench}/>
            <Counter to="48" suffix="k" label="Enthusiasts" icon={Users}/>
            <Counter to="22" suffix="yrs" label="In the Shop" icon={Award}/>
          </div>
        </div>
        <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:0.8}}
          className="relative">
          <motion.img
            animate={{ y:[0,-12,0] }} transition={{duration:6, repeat:Infinity, ease:'easeInOut'}}
            src={heroCar} alt="Classic Mustang feature car"
            className="w-full rounded-3xl shadow-premium border border-charcoal/10"/>
          <motion.div
            initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.6}}
            className="absolute -bottom-6 -left-4 md:-left-10 card-premium p-4 max-w-[220px]">
            <div className="kicker">Cover Car</div>
            <div className="font-serif text-lg">1967 Mustang Fastback</div>
            <div className="text-xs text-charcoal/60">Frame-off restoration — 18 months</div>
          </motion.div>
          <motion.div
            animate={{ rotate:[0,3,-3,0] }} transition={{duration:9, repeat:Infinity}}
            className="absolute -top-6 -right-2 w-24 h-24 rounded-full bg-metallic-gold shadow-soft grid place-items-center text-charcoal font-serif font-extrabold text-center text-sm leading-tight">
            Vol.<br/>XXIV
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
