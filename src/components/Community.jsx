import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import m1 from '../assets/images/community/member-1.jpg';
import m2 from '../assets/images/community/member-2.jpg';
import m3 from '../assets/images/community/member-3.jpg';

const members = [
  { img:m1, name:'Hank Robertson', role:'Collector · Tulsa, OK',
    quote:'Classic Car Legends was the first place that talked about my Riviera like it mattered. Three years in, this is my favorite group of strangers on earth.' },
  { img:m2, name:'Margaret Lin', role:'Restorer · Portland, OR',
    quote:'The restoration guides shaved months off my Mercedes 280SL rebuild. The community spotted a chassis rust pattern in twenty minutes flat.' },
  { img:m3, name:'Daniel Vasquez', role:'Hobbyist · Phoenix, AZ',
    quote:'I came for the muscle cars. I stayed for the people. There’s a kindness in this corner of the internet you don’t find easily.' },
];

export default function Community() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="text-center mb-14">
          <span className="kicker">The Community</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Voices from the Garage</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {members.map((m,i)=>(
            <motion.figure key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.12}}
              className="card-premium p-7">
              <Quote className="text-burnt" size={28}/>
              <blockquote className="mt-4 text-charcoal/85 leading-relaxed">{m.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={m.img} alt={m.name} className="w-12 h-12 rounded-full object-cover"/>
                <div>
                  <div className="font-serif font-bold">{m.name}</div>
                  <div className="text-xs text-charcoal/60">{m.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
