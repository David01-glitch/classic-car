import PageHeader from '../components/PageHeader';
import { useSEO } from '../utils/seo';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wrench, Clock, Gauge } from 'lucide-react';

export default function CategoryPage({ kicker, title, intro, img, sections }) {
  useSEO({ title, description: intro });
  return (
    <div>
      <PageHeader kicker={kicker} title={title} subtitle={intro}/>
      <section className="section">
        <div className="container-x max-w-5xl">
          <img src={img} alt={title} className="w-full rounded-3xl shadow-premium mb-12"/>
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="card-premium p-5 flex items-start gap-3"><Gauge className="text-burnt mt-1"/><div><div className="font-semibold">Difficulty</div><div className="text-charcoal/65 text-sm">{sections.difficulty}</div></div></div>
            <div className="card-premium p-5 flex items-start gap-3"><Clock className="text-burnt mt-1"/><div><div className="font-semibold">Time</div><div className="text-charcoal/65 text-sm">{sections.time}</div></div></div>
            <div className="card-premium p-5 flex items-start gap-3"><Wrench className="text-burnt mt-1"/><div><div className="font-semibold">Tools</div><div className="text-charcoal/65 text-sm">{sections.tools}</div></div></div>
          </div>
          {sections.body.map((b, i) => (
            <section key={i} className="mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-extrabold">{b.h}</h2>
              <p className="mt-3 text-charcoal/80 leading-relaxed">{b.p}</p>
            </section>
          ))}
          <Link to="/" className="btn-secondary mt-4"><ArrowLeft size={16}/>Back to Home</Link>
        </div>
      </section>
    </div>
  );
}
