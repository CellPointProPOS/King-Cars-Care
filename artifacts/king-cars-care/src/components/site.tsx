import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowUpRight, Gauge, MapPin, Menu, MessageCircle, Phone, Search, Send, ShieldCheck, Snowflake, Wrench, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import logoPath from '@assets/Exact_Logo_Preservation_Package_1788030266298.png';
import { services } from '@/lib/site-data';

export function SiteNav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHome = location === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setOpen(false);
  const target = (id: string) => onHome ? `#${id}` : `/#${id}`;

  return (
    <header className={`site-nav ${scrolled ? 'scrolled' : ''}`} data-testid="site-navigation">
      <div className="container-wide nav-inner">
        <Link href="/" className="brand-link" onClick={close} data-testid="link-home-logo">
          <img className="brand-logo" src={logoPath} alt="King Cars Care" />
          <span className="brand-caption">PRECISION.<br />PERFORMANCE.<br />PROTECTION.</span>
        </Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary navigation">
          <a className="nav-link" href={target('services')} onClick={close} data-testid="link-services">Services</a>
          <a className="nav-link" href={target('about')} onClick={close} data-testid="link-about">About</a>
          <a className="nav-link" href={target('reviews')} onClick={close} data-testid="link-reviews">Reviews</a>
          <a className="nav-cta" href={target('booking')} onClick={close} data-testid="link-book-service">Book your service <ArrowUpRight size={14} /></a>
        </nav>
      </div>
    </header>
  );
}

export function Marquee() {
  const words = ['PROFESSIONAL SERVICE', 'MODERN DIAGNOSTICS', 'QUALITY PARTS', 'TRANSPARENT RECOMMENDATIONS', 'CUSTOMER FOCUSED'];
  return (
    <div className="marquee-wrap" aria-label="King Cars Care commitments" data-testid="marquee-commitments">
      <div className="marquee-track">
        {[...words, ...words].map((word, index) => <div className="marquee-item" key={`${word}-${index}`}>{word}</div>)}
      </div>
    </div>
  );
}

export function WhatsAppButton() {
  return <a className="whatsapp" href="https://wa.me/13305405588" target="_blank" rel="noreferrer" data-testid="link-whatsapp"><MessageCircle size={15} /> WhatsApp us · (330) 540-5588</a>;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-top">
          <div>
            <img className="footer-logo" src={logoPath} alt="King Cars Care" data-testid="img-footer-logo" />
            <div className="footer-tagline">PRECISION. PERFORMANCE. PROTECTION.</div>
          </div>
          <div className="footer-links">
            <Link href="/services" data-testid="link-footer-services">Services</Link>
            <a href="/#booking" data-testid="link-footer-booking">Book service</a>
            <a href="https://wa.me/13305405588" target="_blank" rel="noreferrer" data-testid="link-footer-phone">WhatsApp shop</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© King Cars Care. All rights reserved.</span>
          <span>Youngstown, Ohio · 8 N Raccoon Rd</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return <div className="site-shell"><SiteNav />{children}<WhatsAppButton /><SiteFooter /></div>;
}

const icons = [Wrench, Gauge, Search, Snowflake];
const categories = [
  { title: 'MAINTENANCE', text: 'The routine care that keeps bigger problems away.' },
  { title: 'BRAKES', text: 'Confident stopping, with recommendations grounded in inspection.' },
  { title: 'DIAGNOSTICS', text: 'Modern tools paired with methodical thinking.' },
  { title: 'AC & COMFORT', text: 'Climate performance for every season in Ohio.' },
];

export function NeedSection() {
  return (
    <section id="services" className="section-light section-pad need-section">
      <div className="container-wide">
        <div className="section-heading">
          <div><span className="eyebrow">Start with the symptom</span><h2 className="display">WHAT DOES<br />YOUR CAR NEED?</h2></div>
          <p>Clear service starts with paying attention. Choose a category and we’ll help you find the right next step.</p>
        </div>
        <div className="need-grid">
          {categories.map((category, index) => {
            const Icon = icons[index];
            return <a className="need-card" href={index === 1 ? '/services/brake-service' : index === 2 ? '/services/computer-diagnostics' : index === 3 ? '/services/ac-service' : '#booking'} key={category.title} data-testid={`link-category-${index}`}>
              <Icon className="need-icon" size={26} strokeWidth={1.4} />
              <p>{category.text}</p><h3 className="display">{category.title}</h3>
            </a>;
          })}
        </div>
      </div>
    </section>
  );
}

export function CareSection() {
  return (
    <section className="care-section section-pad" aria-labelledby="care-heading">
      <div className="container-wide">
        <div className="section-heading">
          <div><span className="eyebrow">The full picture</span><h2 id="care-heading" className="display">COMPLETE CARE.<br />ONE PLACE.</h2></div>
          <p>From a simple oil change to a stubborn warning light, your vehicle gets the same careful attention.</p>
        </div>
        <div className="care-grid">
          {services.map((service) => <Link className="care-card" href={`/services/${service.slug}`} key={service.slug} data-testid={`link-care-${service.slug}`}>
            <span className="card-number">{service.mark} / 06</span><ArrowUpRight className="arrow" size={18} /><h3 className="display">{service.shortTitle}</h3><p>{service.intro}</p>
          </Link>)}
          <div className="care-card non-link"><span className="card-number">05 / 06</span><Wrench className="arrow" size={18} /><h3 className="display">Suspension<br />& Steering</h3><p>Control, stability, and a ride that feels composed.</p></div>
          <div className="care-card non-link"><span className="card-number">06 / 06</span><ShieldCheck className="arrow" size={18} /><h3 className="display">Preventive<br />Maintenance</h3><p>Small, scheduled checks that protect bigger miles.</p></div>
        </div>
      </div>
    </section>
  );
}

export function WhySection() {
  const reasons = [
    ['01', 'Precision', 'We listen to the symptom, inspect the system, and make recommendations that connect to evidence.'],
    ['02', 'Transparency', 'You deserve to know what we found, what matters now, and what can wait. No fog, no pressure.'],
    ['03', 'Protection', 'Quality parts, careful work, and respect for your vehicle help protect the drive home and the miles after.'],
  ];
  return <section className="section-dark section-pad" aria-labelledby="why-heading"><div className="container-wide why-layout">
    <div><span className="eyebrow">The King standard</span><h2 id="why-heading" className="display">WHY KING<br />CARS CARE?</h2><p className="why-intro">A well-run shop is measured by the clarity it gives you, not the size of the invoice.</p></div>
    <div className="why-list">{reasons.map(([num, title, text]) => <div className="why-item" key={num}><span className="num">{num}</span><div><h3 className="display">{title}</h3><p>{text}</p></div></div>)}</div>
  </div></section>;
}

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    window.setTimeout(() => { setBusy(false); setSubmitted(true); event.currentTarget.reset(); }, 650);
  };
  return <section id="booking" className="booking-section section-pad" aria-labelledby="booking-heading"><div className="container-wide booking-layout">
    <div><span className="eyebrow">A clear next step</span><h2 id="booking-heading" className="display">BOOK<br />YOUR<br />SERVICE.</h2><p className="booking-copy">Tell us what your vehicle is doing. We’ll follow up to confirm a time and make sure the appointment starts with the right context.</p><a className="booking-phone" href="tel:+13305405588" data-testid="link-booking-phone"><Phone size={14} /> (330) 540-5588</a></div>
    <form className="booking-form" action="https://formspree.io/f/REPLACE_WITH_FORM_ID" method="POST" onSubmit={submit} data-testid="form-service-request">
      {submitted && <div className="form-status" role="status" data-testid="status-form-success"><strong>Request received.</strong> We’ll be in touch to confirm your service time. For anything urgent, call the shop directly.</div>}
      <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required placeholder="Your name" data-testid="input-name" /></div>
      <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" required placeholder="(330) 000-0000" data-testid="input-phone" /></div>
      <div className="field"><label htmlFor="make">Vehicle make</label><input id="make" name="vehicle_make" required placeholder="Ford, Honda, Toyota..." data-testid="input-vehicle-make" /></div>
      <div className="field"><label htmlFor="model">Vehicle model</label><input id="model" name="vehicle_model" required placeholder="F-150, Civic, RAV4..." data-testid="input-vehicle-model" /></div>
      <div className="field full"><label htmlFor="service">Service needed</label><select id="service" name="service_needed" defaultValue="" required data-testid="select-service"><option value="" disabled>Select a service</option><option>Brake Service</option><option>Computer Diagnostics</option><option>Car AC Service</option><option>Oil & Filter Service</option><option>Other Service</option></select></div>
      <div className="field"><label htmlFor="date">Preferred date</label><input id="date" name="preferred_date" type="date" required data-testid="input-date" /></div>
      <div className="field"><label htmlFor="time">Preferred time</label><select id="time" name="preferred_time" defaultValue="" required data-testid="select-time"><option value="" disabled>Choose a window</option><option>Morning · 8–11</option><option>Midday · 11–2</option><option>Afternoon · 2–5</option></select></div>
      <div className="field full"><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="What are you noticing? Include warning lights, sounds, or timing." data-testid="textarea-message" /></div>
      <button className="btn btn-red form-submit" type="submit" disabled={busy} data-testid="button-request-service">{busy ? 'Sending request...' : 'Request service'} <Send size={14} /></button>
    </form>
  </div></section>;
}

export function ProcessSection() {
  const steps = [['01', 'BOOK', 'Give us the details. We’ll get the right conversation started.'], ['02', 'INSPECT', 'We look carefully before we recommend anything.'], ['03', 'REVIEW', 'You get a clear explanation of what we found and why it matters.'], ['04', 'SERVICE', 'We complete the work with care and keep you informed.']];
  return <section className="process-section section-pad"><div className="container-wide"><div className="section-heading"><div><span className="eyebrow">No mystery in the process</span><h2 className="display">CLEAR FROM<br />FIRST CONTACT.</h2></div></div><div className="process-grid">{steps.map(([num,title,text]) => <div className="process-step" key={num}><span className="num">{num}</span><h3 className="display">{title}</h3><p>{text}</p></div>)}</div></div></section>;
}

export function AboutSection() {
  return <section id="about" className="about-section section-pad"><div className="container-wide about-layout"><div className="about-image" role="img" aria-label="King Cars Care automotive service bay" /><div className="about-content"><span className="eyebrow">Built for the long drive</span><h2 className="display">DRIVEN BY<br />QUALITY.</h2><p>King Cars Care is a professional automotive repair shop in Youngstown, Ohio, built around a simple promise: diagnose carefully, communicate clearly, and care for every vehicle like the recommendation has our name on it.</p><p>Because it does.</p><div className="about-signature">Precision · Performance · Protection</div></div></div></section>;
}

export function ReviewsSection() {
  return <section id="reviews" className="reviews-section section-pad"><div className="container-wide"><div className="section-heading"><div><span className="eyebrow">The word on the street</span><h2 className="display">TRUSTED BY<br />DRIVERS.</h2></div><p>We’re building a service experience worth talking about. Real customer feedback will live here soon.</p></div><div className="review-placeholder" data-testid="reviews-placeholder"><div><strong className="display">Customer feedback will be shared here.</strong><p>Have you visited King Cars Care? We’d love to hear about your experience as this collection grows.</p></div><span className="quote-mark">“</span></div></div></section>;
}

export function ContactSection() {
  return <section id="contact" className="contact-section section-pad"><div className="container-wide contact-layout"><h2 className="display">LOCAL SERVICE.<br />DIRECT SUPPORT.</h2><div className="contact-details"><p><MapPin size={13} style={{ verticalAlign: 'middle', marginRight: 5 }} />8 N Raccoon Rd<br />Youngstown, OH 44515</p><p><Phone size={13} style={{ verticalAlign: 'middle', marginRight: 5 }} />(330) 540-5588</p><div className="contact-actions"><a href="https://www.google.com/maps/search/?api=1&query=8+N+Raccoon+Rd,+Youngstown,+OH+44515" target="_blank" rel="noreferrer" data-testid="link-directions">Get directions <ArrowUpRight size={14} /></a><a href="https://wa.me/13305405588" target="_blank" rel="noreferrer" data-testid="link-contact-whatsapp">WhatsApp us <MessageCircle size={14} /></a></div></div></div></section>;
}