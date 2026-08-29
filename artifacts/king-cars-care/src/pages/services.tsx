import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { services, supportingServices } from '@/lib/site-data';
import { SiteFrame } from '@/components/site';

export default function ServicesPage() {
  return <SiteFrame><main>
    <section className="service-index-hero"><div className="container-wide"><span className="eyebrow">King Cars Care / Service menu</span><h1 className="display">THE RIGHT CARE<br />FOR THE <em>ROAD AHEAD.</em></h1><p className="subtitle">Professional maintenance, repair, and diagnostics with a straightforward explanation of what your vehicle needs next.</p></div></section>
    <section className="service-list section-pad"><div className="container-wide"><div className="section-heading"><div><span className="eyebrow">Choose your starting point</span><h2 className="display">SERVICE<br />CATEGORIES.</h2></div><p>Every service begins with listening. If you’re not sure where to start, <a href="/#booking" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>tell us what you’re noticing</a>.</p></div><div className="service-list-grid">
      {services.map((service) => <Link className="service-list-card" href={`/services/${service.slug}`} key={service.slug} data-testid={`link-service-index-${service.slug}`}><span className="card-type">{service.mark} / 06</span><ArrowUpRight className="arrow" size={19} /><h2 className="display">{service.shortTitle}</h2><p>{service.subtitle}</p></Link>)}
      {supportingServices.map((service) => <a className="service-list-card" href="/#services" key={service.title} data-testid={`link-service-index-${service.mark}`}><span className="card-type">{service.mark} / 06 · HOME OVERVIEW</span><ArrowUpRight className="arrow" size={19} /><h2 className="display">{service.title}</h2><p>{service.text}</p></a>)}
    </div></div></section>
    <section className="service-cta section-pad"><div className="container-wide service-cta-layout"><h2 className="display">NOT SURE<br />WHERE TO START?</h2><div><p>Describe the symptom, sound, or warning light. We’ll help you choose the right next step.</p><a className="btn btn-outline" href="/#booking" data-testid="button-service-index-book">Book your service <ArrowUpRight size={15} /></a></div></div></section>
  </main></SiteFrame>;
}