import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FoundersStory from '../components/FoundersStory';
import TrendingArticles from '../components/TrendingArticles';
import ProjectShowcase from '../components/ProjectShowcase';
import Community from '../components/Community';
import Tutorials from '../components/Tutorials';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';
import { useSEO } from '../utils/seo';
import { motion } from 'framer-motion';

export default function Home() {
  useSEO({
    title: 'Vintage Automobile Lifestyle & Collector Platform',
    description: 'Classic Car Legends — restoration stories, legendary vehicle reviews, garage craftsmanship and retro automotive culture.'
  });
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <Hero/>
      <Categories/>
      <FoundersStory/>
      <TrendingArticles/>
      <ProjectShowcase/>
      <Community/>
      <Tutorials/>
      <Newsletter/>
      <FAQ/>
      <section className="section -mt-10">
        <div className="container-x max-w-4xl prose prose-lg">
          <h2 className="font-serif text-3xl font-extrabold mb-4">A Living Archive of American Garage Culture</h2>
          <p className="text-charcoal/80 leading-relaxed">
            Classic Car Legends exists because cars are time machines. A 1963 Corvette Split-Window isn't just fiberglass and chrome — it's a folded letter from the Cold War, a postcard from a Detroit drafting table, a love song to American road geometry. Every story we publish, every restoration we document and every tutorial we film comes from the same belief: that these machines deserve careful, intelligent, generous keepers.
          </p>
          <p className="text-charcoal/80 leading-relaxed mt-4">
            Our editorial team comes from the trade. Mara restored her first Camaro at nineteen. Caleb worked the floor at one of the largest collector auctions in the southwest for eleven years. Rita has hand-built more than two hundred carburetor rebuild kits. We're not enthusiast tourists. The writing here is researched, the technical guidance is field-tested in our Dallas workshop, and the community is moderated by humans who own the same cars you do.
          </p>
          <p className="text-charcoal/80 leading-relaxed mt-4">
            We cover six departments with intent. Muscle cars are the broadest gateway — accessible parts, generous documentation, forgiving learning curves. Restoration guides walk through the trades that built these vehicles in the first place: bodywork, paint, upholstery, electrics, mechanical rebuilds. Collector stories are our long-form journalism — patient, character-driven essays about lifetimes spent in service of a hobby. Garage workshops chronicle the spaces themselves. Vintage reviews are honest retrospectives, not nostalgia. And retro road trips are our excuse to keep driving — because cars that sit, die.
          </p>
          <p className="text-charcoal/80 leading-relaxed mt-4">
            If you're new, start with the Restoration Guides and the FAQ. If you're a seasoned collector, the Collector Stories archive runs more than three hundred essays deep. If you're hands-on, the video tutorials are the densest free resource on the internet for sympathetic restoration. And if you join the Garage Dispatch newsletter, we'll send you a careful, monthly digest with no advertising — because a magazine devoted to permanence shouldn't be cluttered with the disposable.
          </p>
          <p className="text-charcoal/80 leading-relaxed mt-4">
            Welcome. Pull up a stool. The coffee is on.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
