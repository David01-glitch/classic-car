import { motion } from 'framer-motion';

export default function PageHeader({ kicker, title, subtitle }) {
  return (
    <section className="pt-36 pb-16 px-5 md:px-8 bg-charcoal text-cream">
      <div className="container-x max-w-4xl text-center">
        <motion.span initial={{opacity:0}} animate={{opacity:1}} className="kicker text-gold">{kicker}</motion.span>
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
          className="mt-3 text-4xl md:text-6xl font-extrabold">{title}</motion.h1>
        {subtitle && <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}
          className="mt-5 text-cream/75 text-lg max-w-2xl mx-auto">{subtitle}</motion.p>}
      </div>
    </section>
  );
}
