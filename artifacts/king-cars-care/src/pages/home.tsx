import { ArrowUpRight, Phone } from 'lucide-react';
import { AboutSection, BookingForm, CareSection, ContactSection, Marquee, NeedSection, ProcessSection, ReviewsSection, SiteFrame, WhySection } from '@/components/site';

export default function HomePage() {
  return <SiteFrame>
    <main>
      <section className="hero" data-testid="hero-home">
        <div className="hero-content">
          <div className="hero-kicker eyebrow">King Cars Care — Professional Automotive Service</div>
          <h1 className="display">PROFESSIONAL<br />CAR SERVICE<br /><em>YOU CAN TRUST.</em></h1>
          <p className="hero-copy">Maintenance, diagnostics, and repair for drivers who want clear recommendations and a shop that respects their vehicle.</p>
          <div className="actions"><a className="btn btn-red" href="#booking" data-testid="button-hero-book">Book your service <ArrowUpRight size={15} /></a><a className="btn btn-outline" href="tel:+13305405588" data-testid="button-hero-call"><Phone size={15} /> Call now</a></div>
          <div className="hero-meta"><div><strong>8 N RACCOON RD</strong><span>Ohio · 44515</span></div><div><strong>YOUNGSTOWN</strong><span>Independent service shop</span></div></div>
        </div>
        <div className="corner-mark" aria-hidden="true"><span>KCC / 2024</span></div>
      </section>
      <Marquee />
      <NeedSection />
      <CareSection />
      <WhySection />
      <BookingForm />
      <ProcessSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  </SiteFrame>;
}