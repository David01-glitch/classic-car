import { Link } from 'react-router-dom';
import { useSEO } from '../utils/seo';

export default function NotFound() {
  useSEO({ title:'404 — Lost on the Road', description:'Page not found.' });
  return (
    <div className="min-h-[70vh] grid place-items-center text-center pt-32 px-5">
      <div>
        <div className="font-serif text-8xl md:text-9xl text-burnt font-extrabold">404</div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold mt-2">Took a Wrong Turn</h1>
        <p className="mt-4 text-charcoal/70 max-w-md mx-auto">The page you're looking for has driven off into the sunset. Let's get you back to the garage.</p>
        <Link to="/" className="btn-primary mt-7">Back to Home</Link>
      </div>
    </div>
  );
}
