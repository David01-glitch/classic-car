import PageHeader from '../components/PageHeader';
import { useSEO } from '../utils/seo';

export function Privacy() {
  useSEO({ title:'Privacy Policy', description:'How Classic Car Legends collects and protects your data.' });
  return (
    <div>
      <PageHeader kicker="Legal" title="Privacy Policy" subtitle="Last updated May 11, 2026"/>
      <article className="section">
        <div className="container-x max-w-3xl prose">
          {[
            ['Introduction','Classic Car Legends ("we", "us", "our") respects your privacy. This policy explains what information we collect, how we use it, and the choices you have. It applies to classiccarlegends.com and all related services.'],
            ['Information We Collect','We collect information you provide directly, such as your name and email when you subscribe or contact us, and information collected automatically through cookies, log files, device identifiers, and analytics services.'],
            ['How We Use Information','To deliver newsletters and respond to inquiries, improve our content and editorial direction, secure our services, comply with legal obligations, and analyse aggregated, anonymised usage trends.'],
            ['Cookies & Consent Mode','We use first-party and third-party cookies. With Google Consent Mode v2, analytics and advertising storage are denied by default until you accept. You may revisit this choice at any time via your browser settings.'],
            ['Third-Party Services','We use Google Analytics for aggregated traffic measurement, email service providers for newsletter delivery, and content delivery networks for performance. These providers process limited data under their own policies.'],
            ['Data Retention','Newsletter subscriptions are retained until you unsubscribe. Contact-form submissions are retained for up to 24 months. Aggregated analytics data is retained for up to 26 months.'],
            ['Your Rights','Subject to your jurisdiction, you may have rights to access, correct, delete, port, or object to processing of your personal data. Contact us to exercise these rights.'],
            ['Children','Our content is intended for adult enthusiasts. We do not knowingly collect data from individuals under 13.'],
            ['International Transfers','Our services are hosted in the United States. If you access from outside the US, your data may be transferred under standard contractual safeguards.'],
            ['Security','We implement administrative, technical and physical safeguards designed to protect personal information. No method of transmission over the internet is 100% secure.'],
            ['Changes','We may update this policy. Material changes will be posted with an updated effective date.'],
            ['Contact','Questions: classiccarlegends@gmail.com — 781 Maple Drive, Dallas, TX 75201, USA.'],
          ].map(([h,p]) => (
            <section key={h} className="mb-7">
              <h2 className="font-serif text-2xl font-extrabold">{h}</h2>
              <p className="mt-2 text-charcoal/80 leading-relaxed">{p}</p>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}

export function Terms() {
  useSEO({ title:'Terms of Service', description:'Terms governing use of Classic Car Legends.' });
  const sections = [
    ['Acceptance of Terms','By accessing Classic Car Legends, you agree to these Terms of Service. If you do not agree, do not use the site.'],
    ['Eligibility','You must be 13 or older. Memberships and purchases require legal majority in your jurisdiction.'],
    ['Account Registration','You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.'],
    ['Acceptable Use','You agree not to misuse the site, attempt unauthorized access, scrape content at scale, or distribute malware.'],
    ['Intellectual Property','All editorial content, photography, video and design are © Classic Car Legends or our contributors. Personal, non-commercial use only without written permission.'],
    ['User Submissions','By submitting comments, photos, or stories, you grant us a non-exclusive, royalty-free license to publish, edit and promote that content.'],
    ['Purchases & Memberships','All transactions are governed by the listed price at time of checkout. Membership renewals are clearly communicated before billing.'],
    ['Disclaimers','Restoration and mechanical advice is editorial. Always consult a qualified professional for safety-critical work.'],
    ['Limitation of Liability','To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential or punitive damages.'],
    ['Indemnification','You agree to indemnify Classic Car Legends against claims arising from your misuse of the site or breach of these terms.'],
    ['Third-Party Links','External links are provided for convenience. We are not responsible for third-party content.'],
    ['Termination','We may suspend or terminate access for violations of these terms. You may discontinue use at any time.'],
    ['Governing Law','These terms are governed by the laws of the State of Texas, USA.'],
    ['Dispute Resolution','Disputes will be resolved by binding arbitration in Dallas County, Texas, except where prohibited by law.'],
    ['Changes to Terms','We may revise these terms; continued use after changes constitutes acceptance.'],
    ['Contact','Questions: classiccarlegends@gmail.com.'],
  ];
  return (
    <div>
      <PageHeader kicker="Legal" title="Terms of Service" subtitle="Last updated May 11, 2026"/>
      <article className="section">
        <div className="container-x max-w-3xl">
          {sections.map(([h,p],i)=>(
            <section key={h} className="mb-7">
              <h2 className="font-serif text-2xl font-extrabold">{i+1}. {h}</h2>
              <p className="mt-2 text-charcoal/80 leading-relaxed">{p}</p>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}

export function Refund() {
  useSEO({ title:'Refund Policy', description:'Our refund and return policy.' });
  return (
    <div>
      <PageHeader kicker="Legal" title="Refund Policy" subtitle="Last updated May 11, 2026"/>
      <article className="section">
        <div className="container-x max-w-3xl">
          {[
            ['Overview','We stand behind our memberships and merchandise. This policy explains what is refundable and how to request a refund.'],
            ['Digital Memberships','New annual memberships are fully refundable within 14 days of purchase, provided you have not downloaded gated paid content. Monthly memberships may be cancelled at any time and will not auto-renew.'],
            ['Physical Merchandise','Unworn, unwashed merchandise may be returned within 30 days for a full refund minus return shipping. Items damaged in transit are replaced at our cost.'],
            ['Restoration Workshop Classes','Workshop seats are refundable up to 14 days before the start date. Within 14 days, seats are transferable but not refundable.'],
            ['How to Request a Refund','Email classiccarlegends@gmail.com with your order number and reason. We typically respond within two business days.'],
            ['Processing Time','Approved refunds are processed within 5–10 business days to the original payment method.'],
            ['Non-Refundable Items','Gift cards, downloaded archival PDFs, and final-sale items are non-refundable.'],
            ['Chargebacks','Please contact us first. We resolve almost all issues directly and faster than your bank can.'],
            ['Contact','Questions: classiccarlegends@gmail.com — 781 Maple Drive, Dallas, TX 75201, USA.'],
          ].map(([h,p])=>(
            <section key={h} className="mb-7">
              <h2 className="font-serif text-2xl font-extrabold">{h}</h2>
              <p className="mt-2 text-charcoal/80 leading-relaxed">{p}</p>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
