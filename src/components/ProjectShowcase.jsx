import { motion } from 'framer-motion';
import p1 from '../assets/images/projects/project-1.jpg';
import p2 from '../assets/images/projects/project-2.jpg';
import p3 from '../assets/images/projects/project-3.jpg';

const projects = [
  { img:p1, title:'1965 Mustang Restomod', specs:'289 V8 · 5-speed · Coilovers', timeline:'14 months', difficulty:'Advanced', tools:'TIG welder, paint booth, lift', progress:100 },
  { img:p2, title:'1970 Charger Revival', specs:'440 Six Pack · 4-speed', timeline:'19 months', difficulty:'Expert', tools:'Frame jig, media blaster', progress:78 },
  { img:p3, title:'1957 Bel Air Frame-Off', specs:'LS3 swap · Hot rod chassis', timeline:'22 months', difficulty:'Master', tools:'Full shop suite', progress:55 },
];

export default function ProjectShowcase() {
  return (
    <section className="section bg-gradient-to-b from-cream to-white">
      <div className="container-x">
        <div className="text-center mb-14">
          <span className="kicker">From the Floor</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Live Restoration Projects</h2>
          <p className="mt-4 text-charcoal/70 max-w-2xl mx-auto">Follow active builds month by month — every weld, paint coat and dyno number documented.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {projects.map((p,i) => (
            <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
              className="card-premium">
              <img src={p.img} alt={p.title} loading="lazy" className="h-56 w-full object-cover"/>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-charcoal/65 mt-1">{p.specs}</p>
                <ul className="mt-4 space-y-1 text-sm">
                  <li><span className="font-semibold">Timeline:</span> {p.timeline}</li>
                  <li><span className="font-semibold">Difficulty:</span> {p.difficulty}</li>
                  <li><span className="font-semibold">Tools:</span> {p.tools}</li>
                </ul>
                <div className="mt-5">
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span>Progress</span><span>{p.progress}%</span>
                  </div>
                  <div className="h-2 bg-charcoal/10 rounded-full overflow-hidden">
                    <motion.div initial={{width:0}} whileInView={{width:`${p.progress}%`}} viewport={{once:true}}
                      transition={{duration:1.2}} className="h-full bg-burnt"/>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
