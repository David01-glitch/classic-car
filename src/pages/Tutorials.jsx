import PageHeader from '../components/PageHeader';
import Tutorials from '../components/Tutorials';
import { useSEO } from '../utils/seo';

export default function TutorialsPage() {
  useSEO({ title:'Tutorials', description:'Workshop video tutorials for classic car restoration.' });
  return (
    <div>
      <PageHeader kicker="Workshop" title="Restoration Tutorials" subtitle="Long-form video instruction filmed in our Dallas workshop. Free, no upsells, no ads on the actual content."/>
      <Tutorials/>
    </div>
  );
}
