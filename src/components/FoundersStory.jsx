import { motion } from 'framer-motion';
import garage from '../assets/images/garage/garage-1.jpg';

export default function FoundersStory() {
  return (
    <section className="section bg-charcoal text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-metallic-gold mix-blend-overlay"/>
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center relative">
        <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
          <span className="kicker text-gold">A Founder's Story</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">It Started with a Rusted '67 in a Texas Barn.</h2>
          <p className="mt-5 text-cream/80 leading-relaxed">
            My grandfather left me his Mustang the summer I turned sixteen — its bonnet pocked with rust,
            the carburetor seized, the chrome bumpers fogged like an old mirror. I spent the next decade
            putting it right, and somewhere between welds and weekends I realized restoration was never
            really about the car. It was about lineage — a quiet conversation across generations through
            shared craft.
          </p>
          <p className="mt-4 text-cream/70 leading-relaxed">
            Classic Car Legends began as a journal beside that workbench and grew into a community of
            forty-eight thousand collectors, restorers and weekend wrenchers. Our philosophy is simple:
            preserve the machines, share the knowledge, and tell the human stories underneath.
          </p>
          <div className="mt-7 grid sm:grid-cols-3 gap-5 text-sm">
            <div><div className="text-gold font-serif text-3xl">22</div><div className="text-cream/70">Years restoring</div></div>
            <div><div className="text-gold font-serif text-3xl">640+</div><div className="text-cream/70">Documented builds</div></div>
            <div><div className="text-gold font-serif text-3xl">48k</div><div className="text-cream/70">Members worldwide</div></div>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="relative">
          <img src={garage} alt="The workshop where everything started" className="rounded-3xl shadow-premium"/>
          <div className="absolute -bottom-5 -right-5 bg-cream text-charcoal rounded-2xl p-5 shadow-soft max-w-xs">
            <div className="kicker">Founder</div>
            <div className="font-serif text-lg font-bold">Ankush Reeves</div>
            <div className="text-sm text-charcoal/65">Master restorer, automotive historian</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
