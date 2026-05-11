import PageHeader from '../components/PageHeader';
import TrendingArticles from '../components/TrendingArticles';
import { useSEO } from '../utils/seo';

export default function Blog() {
  useSEO({ title:'Stories & Magazine', description:'Long-form journalism for vintage car collectors and restorers.' });
  return (
    <div>
      <PageHeader kicker="The Magazine" title="Stories from the Garage" subtitle="Reportage, essays, and field notes from collectors and restorers around the country."/>
      <TrendingArticles/>
    </div>
  );
}
