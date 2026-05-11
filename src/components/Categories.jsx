import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp, Wrench, Clock, Gauge } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import muscle from '../assets/images/categories/muscle-cars.jpg';
import resto from '../assets/images/categories/restoration.jpg';
import collector from '../assets/images/categories/collector.jpg';
import road from '../assets/images/categories/road-trips.jpg';
import garage from '../assets/images/categories/garage-builds.jpg';
import reviews from '../assets/images/categories/reviews.jpg';

const cats = [
  { id:'muscle', slug:'/muscle-cars', img:muscle, title:'Muscle Cars',
    intro:'Big-block legends, raw torque and American attitude — the cars that defined a continent.',
    tips:['Inspect the cowl for hidden rust','Decode the VIN before any cash exchanges hands','Numbers-matching engines triple resale value'],
    difficulty:'Intermediate', time:'8–14 months', models:'Mustang, Charger, Camaro, Chevelle, GTO',
    tools:'Engine hoist, torque wrench set, body dolly, MIG welder' },
  { id:'resto', slug:'/restoration-guides', img:resto, title:'Restoration Guides',
    intro:'Step-by-step playbooks for sympathetic and frame-off restorations done the right way.',
    tips:['Photograph everything before disassembly','Bag and label all fasteners','Plan the budget at 1.4× your first estimate'],
    difficulty:'Beginner → Advanced', time:'6–24 months', models:'Any classic platform',
    tools:'Media blaster, paint booth, panel beating tools, spray gun' },
  { id:'collector', slug:'/collector-stories', img:collector, title:'Collector Stories',
    intro:'Personal essays from lifelong garage keepers — the obsession, the patience, the joy.',
    tips:['Buy the rarest variant you can afford','Provenance is everything at auction','Climate-controlled storage pays itself back'],
    difficulty:'Curator', time:'A lifetime', models:'Ferrari, Jaguar, Porsche, Aston',
    tools:'Trickle charger, dust covers, hygrometer, archival folder' },
  { id:'road', slug:'/retro-road-trips', img:road, title:'Retro Road Trips',
    intro:'Two-lane diaries — sunrise on Route 66, mountain passes, and roadside diners that still matter.',
    tips:['Carry spare points and condenser','Map fuel stations every 120 miles','Never trust the original gauge cluster — bring a GPS'],
    difficulty:'Easy', time:'Weekends', models:'Convertibles, GTs, station wagons',
    tools:'Tool roll, jack, fire extinguisher, paper atlas' },
  { id:'garage', slug:'/garage-workshops', img:garage, title:'Garage Builds',
    intro:'Workshops that double as sanctuaries — concrete, sodium lights, pegboards, and good coffee.',
    tips:['Epoxy floors save your back','Dedicated 240V circuits are non-negotiable','Ventilation prevents headaches and lawsuits'],
    difficulty:'DIY Friendly', time:'2–6 weekends', models:'Any',
    tools:'Air compressor, lift, bench grinder, parts washer' },
  { id:'reviews', slug:'/classic-reviews', img:reviews, title:'Vintage Reviews',
    intro:'Hands-on retrospectives — what these machines actually feel like decades after they left the line.',
    tips:['Drive before you buy — always','A “matching numbers” claim deserves paperwork','Sympathetic patina beats fresh paint'],
    difficulty:'Reader-friendly', time:'15 min reads', models:'Curated each month',
    tools:'A discerning eye' },
];

export default function Categories() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    const next = openId === id ? null : id;
    setOpenId(next);
    if (next) trackEvent('hobby_expand', { category: id });
  };

  return (
    <section id="categories" className="section">
      <div className="container-x">
        <div className="text-center mb-14">
          <span className="kicker">The Departments</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Explore Every Chapter of the Garage</h2>
          <p className="mt-4 text-charcoal/70 max-w-2xl mx-auto">
            Six curated departments — from raw muscle to delicate restoration craft. Tap any card to expand the full briefing without leaving this page.
          </p>
        </div>

        <LayoutGroup>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {cats.map(c => {
              const open = openId === c.id;
              return (
                <motion.article
                  key={c.id}
                  layout
                  transition={{ layout: { duration: 0.5, type:'spring', damping:22 } }}
                  className={`card-premium ${open ? 'lg:col-span-3 md:col-span-2' : ''}`}
                >
                  <motion.div layout="position" className={`${open ? 'md:flex' : ''}`}>
                    <motion.img layout src={c.img} alt={c.title}
                      loading="lazy"
                      className={`${open ? 'md:w-1/2 h-72 md:h-auto' : 'h-56'} w-full object-cover`}/>
                    <motion.div layout="position" className="p-6 md:p-8 flex-1">
                      <h3 className="font-serif text-2xl font-extrabold">{c.title}</h3>
                      <p className="mt-2 text-charcoal/70">{c.intro}</p>

                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ opacity:0, height:0 }}
                            animate={{ opacity:1, height:'auto' }}
                            exit={{ opacity:0, height:0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                          >
                            <div className="grid sm:grid-cols-3 gap-4 mt-6 text-sm">
                              <div className="flex items-start gap-2"><Gauge size={16} className="text-burnt mt-1"/><div><div className="font-semibold">Difficulty</div><div className="text-charcoal/60">{c.difficulty}</div></div></div>
                              <div className="flex items-start gap-2"><Clock size={16} className="text-burnt mt-1"/><div><div className="font-semibold">Time</div><div className="text-charcoal/60">{c.time}</div></div></div>
                              <div className="flex items-start gap-2"><Wrench size={16} className="text-burnt mt-1"/><div><div className="font-semibold">Popular</div><div className="text-charcoal/60">{c.models}</div></div></div>
                            </div>
                            <div className="mt-5">
                              <h4 className="font-serif text-lg mb-2">Collector Tips</h4>
                              <ul className="list-disc list-inside text-charcoal/75 space-y-1">
                                {c.tips.map(t => <li key={t}>{t}</li>)}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <span className="font-semibold">Tools Required: </span>
                              <span className="text-charcoal/70">{c.tools}</span>
                            </div>
                            <div className="mt-7 flex flex-wrap gap-3">
                              <Link to={c.slug} className="btn-primary text-sm py-2.5 px-5">View Full Page <ArrowRight size={16}/></Link>
                              <button onClick={() => toggle(c.id)} className="btn-secondary text-sm py-2.5 px-5"><ChevronUp size={16}/>Show Less</button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {!open && (
                        <button onClick={() => toggle(c.id)} className="mt-5 inline-flex items-center gap-1.5 text-burnt font-semibold hover:gap-2.5 transition-all">
                          Explore <ChevronDown size={16}/>
                        </button>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
