import PageHeader from '../components/PageHeader';
import { useSEO } from '../utils/seo';
import FoundersStory from '../components/FoundersStory';

const team = [
  { name:'Ankush Reeves', role:'Founder & Editor in Chief', bio:'Master restorer, twenty-two years in the trade.' },
  { name:'Mara Holloway', role:'Senior Restoration Writer', bio:'Specializes in Detroit muscle, 1964–1972.' },
  { name:'Caleb Ortiz', role:'Auction & Markets Editor', bio:'Eleven years on the floor at a top-three house.' },
  { name:'Rita Vance', role:'Technical Director', bio:'Carburetor specialist, ignition system author.' },
];

export default function About() {
  useSEO({ title:'About', description:'The story, team and values behind Classic Car Legends.' });
  return (
    <div>
      <PageHeader kicker="Our Story" title="A Magazine, A Workshop, A Family" subtitle="Built in a Dallas garage in 2003 — and run from the same building two decades later."/>
      <FoundersStory/>
      <section className="section">
        <div className="container-x max-w-5xl">
          <h2 className="font-serif text-3xl font-extrabold mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {h:'Permanence over Trend',p:'We publish for the next twenty years, not the next twenty minutes.'},
              {h:'Craft over Speed',p:'Restorations done patiently outlast restorations done fast.'},
              {h:'People over Pageviews',p:'The community decides what we cover next.'},
            ].map(v => <div key={v.h} className="card-premium p-6"><h3 className="font-serif text-xl font-bold">{v.h}</h3><p className="mt-2 text-charcoal/70">{v.p}</p></div>)}
          </div>

          <h2 className="font-serif text-3xl font-extrabold mt-16 mb-4">The Team</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {team.map(t => (
              <div key={t.name} className="card-premium p-6">
                <div className="font-serif text-xl font-bold">{t.name}</div>
                <div className="text-burnt text-sm font-semibold">{t.role}</div>
                <p className="mt-2 text-charcoal/70">{t.bio}</p>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl font-extrabold mt-16 mb-4">Business Model</h2>
          <p className="text-charcoal/80 leading-relaxed">
            Classic Car Legends is reader-supported. Our revenue comes from optional paid memberships,
            a small store, and a transparent partnership program with parts suppliers we use ourselves
            in the workshop. We never run interruptive ad networks on long-form editorial.
          </p>
        </div>
      </section>
    </div>
  );
}
