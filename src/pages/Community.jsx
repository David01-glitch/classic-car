import PageHeader from '../components/PageHeader';
import Community from '../components/Community';
import { useSEO } from '../utils/seo';

export default function CommunityPage() {
  useSEO({ title:'Community', description:'Forty-eight thousand collectors, restorers and enthusiasts.' });
  return (
    <div>
      <PageHeader kicker="The Club" title="A Community of Quiet Obsession" subtitle="Member spotlights, garage tours, regional meet-ups and the world's most patient comment section."/>
      <Community/>
      <section className="section">
        <div className="container-x max-w-4xl">
          <h2 className="font-serif text-3xl font-extrabold">Upcoming Events</h2>
          <ul className="mt-6 space-y-4">
            {[
              {d:'May 18, 2026',t:'Dallas Garage Open House',l:'781 Maple Drive, Dallas, TX'},
              {d:'Jun 7, 2026',t:'Hill Country Sunday Cruise',l:'Fredericksburg → Luckenbach, TX'},
              {d:'Jul 22, 2026',t:'Carburetor Clinic — Members Only',l:'Workshop · Dallas'},
            ].map(e => (
              <li key={e.t} className="card-premium p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                <span className="kicker text-burnt min-w-[120px]">{e.d}</span>
                <div className="flex-1"><div className="font-serif text-lg font-bold">{e.t}</div><div className="text-sm text-charcoal/60">{e.l}</div></div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
