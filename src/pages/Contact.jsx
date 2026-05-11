import PageHeader from '../components/PageHeader';
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { useSEO } from '../utils/seo';

export default function Contact() {
  useSEO({ title:'Contact', description:'Get in touch with Classic Car Legends.' });
  const submit = (e) => {
    e.preventDefault();
    trackEvent('contact_submit', {});
    e.target.reset();
    alert('Message received. Expect a reply within two business days.');
  };
  return (
    <div>
      <PageHeader kicker="Get in Touch" title="Open the Garage Door" subtitle="Restoration questions, story pitches, partnership inquiries — all welcome."/>
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl font-extrabold mb-6">Reach Us</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4"><span className="w-12 h-12 rounded-full bg-burnt/10 text-burnt grid place-items-center shrink-0"><Mail/></span>
                <div><div className="font-semibold">Email</div><a href="mailto:classiccarlegends@gmail.com" className="text-charcoal/75 hover:text-burnt">classiccarlegends@gmail.com</a></div></li>
              <li className="flex items-start gap-4"><span className="w-12 h-12 rounded-full bg-burnt/10 text-burnt grid place-items-center shrink-0"><MapPin/></span>
                <div><div className="font-semibold">Workshop</div><div className="text-charcoal/75">781 Maple Drive,<br/>Dallas, TX 75201, USA</div></div></li>
              <li className="flex items-start gap-4"><span className="w-12 h-12 rounded-full bg-burnt/10 text-burnt grid place-items-center shrink-0"><Phone/></span>
                <div><div className="font-semibold">Hours</div><div className="text-charcoal/75">Mon–Fri · 9:00 AM – 6:00 PM CT</div></div></li>
            </ul>
            <div className="mt-8">
              <div className="font-semibold mb-3">Follow</div>
              <div className="flex gap-3">
                {[Instagram,Facebook,Youtube].map((I,i)=>(
                  <a key={i} href="#" className="w-10 h-10 grid place-items-center rounded-full border border-charcoal/15 hover:bg-burnt hover:text-cream hover:border-burnt transition"><I size={16}/></a>
                ))}
              </div>
            </div>
            <div className="mt-10 rounded-3xl overflow-hidden border border-charcoal/10 aspect-[4/3] bg-charcoal/5 grid place-items-center">
              <div className="text-center px-6">
                <MapPin className="mx-auto text-burnt" size={32}/>
                <p className="mt-3 text-charcoal/65 text-sm">Map placeholder — 781 Maple Drive, Dallas, TX</p>
              </div>
            </div>
          </div>
          <form onSubmit={submit} className="card-premium p-7 space-y-4">
            <h2 className="font-serif text-3xl font-extrabold">Send a Note</h2>
            <input required placeholder="Your name" className="w-full px-5 py-3 rounded-full border border-charcoal/15"/>
            <input required type="email" placeholder="Email" className="w-full px-5 py-3 rounded-full border border-charcoal/15"/>
            <input placeholder="Subject" className="w-full px-5 py-3 rounded-full border border-charcoal/15"/>
            <textarea required rows="6" placeholder="Your message" className="w-full px-5 py-3 rounded-2xl border border-charcoal/15"/>
            <button className="btn-primary w-full justify-center">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
