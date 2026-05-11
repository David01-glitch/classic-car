import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, User, Share2, ChevronDown, ChevronUp, Tag } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import a1 from '../assets/images/blog/article-1.jpg';
import a2 from '../assets/images/blog/article-2.jpg';
import a3 from '../assets/images/blog/article-3.jpg';
import a4 from '../assets/images/blog/article-4.jpg';
import a5 from '../assets/images/blog/article-5.jpg';
import a6 from '../assets/images/blog/article-6.jpg';

const articles = [
  { id:1, img:a1, title:'Bringing a ’67 Camaro Back from the Field',
    author:'Mara Holloway', date:'Mar 4, 2026', time:'9 min', cat:'Restoration',
    excerpt:'A barn-find Camaro with two missing fenders, a seized big-block and a story that refused to die.',
    body:'When the trailer rolled up to our shop in Dallas, all four tires were flat and the front end was tied together with bailing wire. The patina was honest — twenty-two Texas summers under a half-collapsed cedar roof. We started with a 360-degree photo survey, a frame straightness check on the jig, and a careful disassembly that filled fourteen labelled bins.\n\nThe small-block was rebuilt to original spec with forged pistons and a mild cam upgrade. We resisted the urge to chase shine — patina is a kind of provenance. Eighteen months later, this Camaro pulls hard at four thousand revs and still wears the fingerprints of its first owner.' },
  { id:2, img:a2, title:'Inside a Texan Collector’s 14-Car Garage',
    author:'Caleb Ortiz', date:'Feb 22, 2026', time:'11 min', cat:'Collector',
    excerpt:'Polished concrete floors, sodium lights and a quiet rotation of grand tourers built between 1955 and 1972.',
    body:'Walking into Henry’s climate-controlled barn feels like entering a chapel. Fourteen cars, eight decades, every one driven at least once a month — because cars that sit, die.\n\nWe sat down with him for three hours over black coffee to talk about acquisitions, restoration philosophy, the wins, and the one Lancia he should never have sold.' },
  { id:3, img:a3, title:'Route 66 in a ’55 Bel Air — Field Notes',
    author:'Jonas Kellen', date:'Feb 9, 2026', time:'7 min', cat:'Road Trip',
    excerpt:'Two thousand miles, four states, one points-and-condenser failure outside Tucumcari.',
    body:'A retro road trip rewards preparation more than it rewards horsepower. We packed spare ignition components, a full tool roll, a paper atlas, and a willingness to be late.\n\nThe most memorable stop was an unmarked diner outside Amarillo where the owner had restored his own ’57 Chevy in the parking lot, one panel at a time, over fourteen years.' },
  { id:4, img:a4, title:'The Art of Carburetor Tuning',
    author:'Rita Vance', date:'Jan 30, 2026', time:'13 min', cat:'How-To',
    excerpt:'A patient, sensory exercise that fuel injection erased. We bring it back, jet by jet.',
    body:'Modern engines never sing like a properly tuned Holley four-barrel. This walkthrough covers idle mixture, accelerator pump timing, secondary spring selection, and the most underrated trick in the bag — driving the car between adjustments.' },
  { id:5, img:a5, title:'Patina vs Repaint — A Collector Debate',
    author:'David Liang', date:'Jan 18, 2026', time:'6 min', cat:'Editorial',
    excerpt:'Provenance is a fragile thing. Sometimes the worst thing you can do to a car is make it look new.',
    body:'There is a generational divide in the collector world. Older curators value originality above almost everything else; younger restorers chase show-quality finishes. We argue for a third path — sympathetic preservation.' },
  { id:6, img:a6, title:'Auction Houses Don’t Want You to Know This',
    author:'Penny Reyes', date:'Dec 28, 2025', time:'10 min', cat:'Collector',
    excerpt:'How buyer premiums, reserve manipulation and floor bids actually work — written by an ex-house specialist.',
    body:'After eleven years inside a top-three auction house, our contributor pulls back the curtain on the practices that quietly shape every hammer price you read about in the trade press.' },
];

const cats = ['All','Restoration','Collector','Road Trip','How-To','Editorial'];

export default function TrendingArticles() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const [open, setOpen] = useState(null);
  const [limit, setLimit] = useState(6);

  const filtered = useMemo(() => articles.filter(a =>
    (cat==='All' || a.cat===cat) &&
    (a.title.toLowerCase().includes(q.toLowerCase()) || a.excerpt.toLowerCase().includes(q.toLowerCase()))
  ), [q, cat]);

  const toggle = (id) => {
    const next = open===id ? null : id;
    setOpen(next);
    if (next) trackEvent('article_expand', { id });
  };

  const share = (id, e) => {
    e.stopPropagation();
    trackEvent('article_share', { id });
    if (navigator.share) navigator.share({ title:'Classic Car Legends', url: window.location.href }).catch(()=>{});
    else navigator.clipboard?.writeText(window.location.href);
  };

  return (
    <section className="section bg-cream">
      <div className="container-x">
        <div className="text-center mb-12">
          <span className="kicker">From the Magazine</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Trending Stories</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40"/>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search the archives…"
              className="w-full pl-11 pr-5 py-3 rounded-full bg-white border border-charcoal/10"/>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map(c => (
              <button key={c} onClick={()=>setCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${cat===c?'bg-charcoal text-cream':'bg-white border border-charcoal/10 hover:border-burnt'}`}>{c}</button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence>
            {filtered.slice(0, limit).map(a => {
              const isOpen = open===a.id;
              return (
                <motion.article layout key={a.id}
                  className={`card-premium ${isOpen?'md:col-span-2 lg:col-span-3':''}`}>
                  <motion.div layout="position" className={isOpen?'md:flex':''}>
                    <img src={a.img} alt={a.title} loading="lazy"
                      className={`${isOpen?'md:w-1/2 h-80':'h-52'} w-full object-cover`}/>
                    <div className="p-6 flex-1">
                      <div className="flex items-center gap-2 text-xs text-burnt font-semibold">
                        <Tag size={12}/>{a.cat}
                      </div>
                      <h3 className="font-serif text-2xl font-bold mt-2">{a.title}</h3>
                      <p className="mt-2 text-charcoal/70 text-sm">{a.excerpt}</p>
                      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-charcoal/60">
                        <span className="flex items-center gap-1"><User size={12}/>{a.author}</span>
                        <span className="flex items-center gap-1"><Calendar size={12}/>{a.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12}/>{a.time}</span>
                      </div>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}}
                            transition={{duration:0.45}} className="overflow-hidden">
                            <div className="mt-5 space-y-4 text-charcoal/80 leading-relaxed whitespace-pre-line">
                              {a.body}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <div className="mt-5 flex items-center justify-between">
                        <button onClick={()=>toggle(a.id)} className="inline-flex items-center gap-1.5 text-burnt font-semibold">
                          {isOpen ? <>Show Less <ChevronUp size={16}/></> : <>Read More <ChevronDown size={16}/></>}
                        </button>
                        <button onClick={(e)=>share(a.id,e)} aria-label="Share" className="text-charcoal/50 hover:text-burnt"><Share2 size={16}/></button>
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
        {limit < filtered.length && (
          <div className="text-center mt-10">
            <button onClick={()=>setLimit(l=>l+3)} className="btn-secondary">Load More Stories</button>
          </div>
        )}
      </div>
    </section>
  );
}
