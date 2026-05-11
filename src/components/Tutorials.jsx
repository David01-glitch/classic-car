import { motion } from 'framer-motion';
import { PlayCircle, Clock } from 'lucide-react';
import t1 from '../assets/images/tutorials/tut-1.jpg';
import t2 from '../assets/images/tutorials/tut-2.jpg';
import t3 from '../assets/images/tutorials/tut-3.jpg';
import t4 from '../assets/images/tutorials/tut-4.jpg';

const tuts = [
  { img:t1, title:'Engine Rebuild 101', cat:'Mechanical', time:'42 min', skill:'Beginner' },
  { img:t2, title:'Bodywork & Panel Beating', cat:'Bodywork', time:'58 min', skill:'Intermediate' },
  { img:t3, title:'Chrome & Trim Polishing', cat:'Detailing', time:'21 min', skill:'Beginner' },
  { img:t4, title:'Wiring a Classic Harness', cat:'Electrical', time:'1 hr 14 min', skill:'Advanced' },
];

export default function Tutorials() {
  return (
    <section className="section bg-charcoal text-cream">
      <div className="container-x">
        <div className="text-center mb-14">
          <span className="kicker text-gold">Video Library</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Workshop Tutorials</h2>
          <p className="mt-4 text-cream/75 max-w-2xl mx-auto">Long-form, no-rush video instruction filmed in our Dallas workshop.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tuts.map((t,i)=>(
            <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
              className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img src={t.img} alt={t.title} loading="lazy" className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"/>
                <div className="absolute inset-0 bg-charcoal/30 grid place-items-center">
                  <PlayCircle size={56} className="text-cream group-hover:text-gold transition"/>
                </div>
                <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs bg-burnt text-cream">{t.cat}</span>
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-lg font-bold">{t.title}</h3>
                <div className="mt-1 flex items-center gap-4 text-xs text-cream/65">
                  <span className="flex items-center gap-1"><Clock size={12}/>{t.time}</span>
                  <span>{t.skill}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
