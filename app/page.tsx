import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleDot, Quote, ShieldCheck } from 'lucide-react';
import { services, process, faqs } from '@/data/site';
import { Assessment } from '@/components/assessment';

const painPoints = [
  'I know what I should do. I just do not follow through.',
  'I have goals, but everything feels scattered.',
  'I am entering a new season and do not know what comes next.',
  'I need accountability without judgment.',
];

const outcomes = ['Clearer decisions', 'More consistent habits', 'Stronger follow-through', 'Better priorities', 'Greater self-awareness', 'Practical accountability'];

export default function HomePage() {
  return (
    <main>
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">PRACTICAL COACHING FOR REAL LIFE</p>
          <h1>You do not need more hype. You need <em>clarity, structure, and movement.</em></h1>
          <p className="hero-lede">One-on-one coaching for people who are ready to make better decisions, build stronger habits, and stop restarting the same goals.</p>
          <div className="button-row">
            <Link className="button button-dark" href="/book">Book a free consultation <ArrowRight size={17} /></Link>
            <Link className="button button-ghost" href="/services">Explore coaching</Link>
          </div>
          <div className="trust-line"><ShieldCheck size={18} /><span>No pressure. No inflated promises. Just a clear conversation about what would actually help.</span></div>
        </div>

        <div className="hero-console glass glass-strong">
          <div className="console-topline"><span>FORWARD / 01</span><span className="status-dot">Available for new clients</span></div>
          <div className="portrait-placeholder" aria-label="Coach portrait placeholder">
            <div className="portrait-copy"><span>COACH PORTRAIT</span><strong>Replace with a natural, editorial headshot.</strong></div>
          </div>
          <div className="console-grid">
            <div><span>FOCUS</span><strong>Clarity → action</strong></div>
            <div><span>FORMAT</span><strong>Virtual 1:1</strong></div>
            <div><span>STYLE</span><strong>Direct + grounded</strong></div>
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="split-heading">
          <div><p className="eyebrow">DOES THIS SOUND FAMILIAR?</p><h2>Maybe you are not lost. Maybe you are <em>stuck.</em></h2></div>
          <p>You can be ambitious, capable, and still need help separating what matters from what is simply loud.</p>
        </div>
        <div className="pain-grid">
          {painPoints.map((point, index) => (
            <article className="pain-card glass" key={point}><span>0{index + 1}</span><p>{point}</p></article>
          ))}
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="glass glass-mega services-slab">
          <div className="services-intro">
            <p className="eyebrow">COACHING, WITHOUT THE VAGUE LANGUAGE</p>
            <h2>Start with the problem you actually have.</h2>
            <p>Not every client needs the same program. These are the core ways coaching can support the season you are in now.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, slug, eyebrow, copy }, index) => (
              <Link href={`/services#${slug}`} className="service-card" key={slug}>
                <div className="service-index">0{index + 1}</div>
                <Icon size={22} />
                <span className="mini-label">{eyebrow}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className="service-link">See how it works <ArrowRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="split-heading">
          <div><p className="eyebrow">THE FORWARD FRAMEWORK</p><h2>A process that turns reflection into <em>movement.</em></h2></div>
          <p>The goal is not endless coaching. The goal is to strengthen your judgment, build systems that hold up in real life, and eventually need less support—not more.</p>
        </div>
        <div className="process-rail glass glass-strong">
          {process.map(([number, title, copy]) => (
            <div className="process-step" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-pad two-col">
        <div>
          <p className="eyebrow">WHAT CHANGES?</p>
          <h2>Progress should be visible in your <em>actual life.</em></h2>
          <p className="section-copy">The work is not about sounding inspired after a session. It is about making decisions faster, following through more consistently, and building routines you can keep.</p>
          <div className="outcome-list">
            {outcomes.map(item => <div key={item}><CheckCircle2 size={18} /><span>{item}</span></div>)}
          </div>
        </div>
        <blockquote className="quote-card glass glass-strong">
          <Quote size={30} />
          <p>“The goal is not to make you dependent on coaching. It is to help you build the clarity and systems to move forward confidently on your own.”</p>
          <footer>— Coaching philosophy</footer>
        </blockquote>
      </section>

      <section className="section-shell section-pad">
        <Assessment />
      </section>

      <section className="section-shell section-pad">
        <div className="resource-banner glass glass-mega">
          <div>
            <p className="eyebrow">FREE RESOURCE</p>
            <h2>The Personal Reset Workbook</h2>
            <p>A practical reset for values, priorities, habits, current frustrations, and your next 30 days.</p>
          </div>
          <div className="resource-list">
            {['Life audit', 'Priority ranking', 'Habit audit', '30-day action plan'].map(item => <span key={item}><CircleDot size={14} />{item}</span>)}
          </div>
          <Link className="button button-dark" href="/resources">Get the workbook <ArrowRight size={17} /></Link>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="split-heading">
          <div><p className="eyebrow">QUESTIONS BEFORE YOU BOOK</p><h2>Know what you are walking into.</h2></div>
          <Link href="/faq" className="text-link">View all FAQs <ArrowRight size={15} /></Link>
        </div>
        <div className="faq-preview">
          {faqs.slice(0, 4).map(item => <article className="glass" key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>)}
        </div>
      </section>

      <section className="section-shell section-pad final-cta-wrap">
        <div className="final-cta glass glass-mega">
          <p className="eyebrow">START WITH ONE CONVERSATION</p>
          <h2>You do not need to have everything figured out before reaching out.</h2>
          <p>Bring the situation you are facing. We will start there.</p>
          <div className="button-row centered">
            <Link className="button button-dark" href="/book">Book a free consultation <ArrowRight size={17} /></Link>
            <Link className="button button-ghost" href="/services">Compare coaching options</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
