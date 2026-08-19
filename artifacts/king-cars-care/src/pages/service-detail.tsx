import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'wouter';
import { services } from '@/lib/site-data';
import { SiteFrame } from '@/components/site';

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const service = services.find((item) => item.slug === params.slug) ?? services[0];
  return <SiteFrame><main>
    <section className="service-hero"><div className="container-wide"><span className="eyebrow">King Cars Care / {service.mark} / 04</span><h1 className="display">{service.title.split(' ').map((word, index) => <span key={word + index}>{index === service.title.split(' ').length - 1 ? <em>{word}</em> : `${word} `}</span>)}</h1><p className="subtitle">{service.subtitle} {service.intro}</p><div className="actions"><a className="btn btn-red" href="/#booking" data-testid="button-detail-book">Book your service <ArrowUpRight size={15} /></a><a className="btn btn-outline" href="/#contact" data-testid="button-detail-contact">Contact King Cars Care <ArrowRight size={15} /></a><Link className="btn btn-outline" href="/services" data-testid="button-detail-all-services">View all services <ArrowRight size={15} /></Link></div></div></section>
    <section className="info-section section-pad"><div className="container-wide"><div className="section-heading"><div><span className="eyebrow">Know before you book</span><h2 className="display">THE CARE<br />BREAKDOWN.</h2></div><p>Specific work depends on the vehicle and what the inspection tells us. Here’s what to expect from a professional conversation.</p></div><div className="info-grid">
      <InfoBlock mark="01" title="Common symptoms" text={service.symptoms} />
      <InfoBlock mark="02" title="What may be included" list={service.included} />
      <InfoBlock mark="03" title="Why professional service" text={service.professional} />
      <InfoBlock mark="04" title="Service questions" text={service.questions} />
    </div></div></section>
    <section className="service-cta section-pad"><div className="container-wide service-cta-layout"><h2 className="display">READY FOR A<br />CLEAR ANSWER?</h2><div><p>Bring us the concern. We’ll bring a careful inspection and a recommendation you can understand.</p><a className="btn btn-outline" href="/#booking" data-testid="button-detail-final-book">Book your service <ArrowUpRight size={15} /></a></div></div></section>
  </main></SiteFrame>;
}

function InfoBlock({ mark, title, text, list }: { mark: string; title: string; text?: string; list?: string[] }) {
  return <article className="info-block" data-testid={`info-block-${mark}`}><span className="block-num">{mark} / 04</span><h2 className="display">{title}</h2>{text && <p>{text}</p>}{list && <ul>{list.map((item) => <li key={item}>{item}</li>)}</ul>}</article>;
}