import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q:'I’m brand new to classic cars — where should I start?',
    a:'Begin with a sympathetic restoration on a popular platform like a 1964–73 Mustang or 1955–57 Chevy. Parts availability is excellent, the community is welcoming, and you’ll learn every craft — mechanical, bodywork, paint and trim — on a single project.' },
  { q:'How do I know I’m not overpaying for a classic?',
    a:'Inspect three of the model you want before you buy any. Compare condition reports rigorously, check the VIN against factory records, hire a marque-specialist inspector, and walk away from any seller who refuses an independent pre-purchase inspection.' },
  { q:'What about insurance for a vintage vehicle?',
    a:'Agreed-value collector insurance is the standard. It protects the vehicle at a documented value rather than a depreciated one. Expect to provide photos, mileage limits, and proof of secure storage. Premiums are typically lower than daily-driver insurance.' },
  { q:'What does a good home garage setup require?',
    a:'Concrete floor with epoxy coating, dedicated 240V circuits for welders and lifts, balanced lighting at 6500K, a parts washer, basic compressed air, and proper ventilation. Budget for $8–15K to set up a serious hobbyist shop.' },
  { q:'How much does running a classic really cost?',
    a:'Plan for $1,800–$4,500 per year in maintenance for a regularly driven classic, plus insurance ($350–$900) and storage. Restoration projects vary wildly — a frame-off can run $40k–$200k depending on the platform and finish quality.' },
  { q:'Any quick tips for first-time collectors?',
    a:'Buy the best example of the most common model rather than a project version of something rare. Documentation matters more than chrome. Drive what you buy — cars that sit, die.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <div className="text-center mb-12">
          <span className="kicker">Pit Stop</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Frequently Asked</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f,i) => {
            const isOpen = open===i;
            return (
              <div key={i} className="card-premium overflow-hidden">
                <button onClick={()=>setOpen(isOpen?-1:i)} className="w-full px-6 py-5 flex justify-between items-center text-left">
                  <span className="font-serif text-lg font-bold pr-4">{f.q}</span>
                  {isOpen ? <Minus className="shrink-0 text-burnt"/> : <Plus className="shrink-0 text-burnt"/>}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}
                      className="overflow-hidden">
                      <p className="px-6 pb-6 text-charcoal/75 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
