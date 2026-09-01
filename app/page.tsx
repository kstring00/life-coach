import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleDot, Quote } from 'lucide-react';
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
      <style>{`
        .hero.hero-image {
          width: calc(100% - 32px);
          max-width: 1600px;
          min-height: 640px;
          margin: 26px auto 42px;
          padding: 0;
          display: block;
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          background-image:
            linear-gradient(90deg, rgba(18, 23, 20, .76) 0%, rgba(18, 23, 20, .53) 38%, rgba(18, 23, 20, .16) 70%, rgba(18, 23, 20, .06) 100%),
            url('https://images.unsplash.com/photo-1758273240403-052b3c99f636?auto=format&fit=crop&q=88&w=2400');
          background-size: cover;
          background-position: center 42%;
          box-shadow: 0 26px 80px rgba(35, 34, 30, .16);
        }

        .hero-image::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(255,255,255,.05), transparent 32%, rgba(9,13,11,.14));
        }

        .hero-image-content {
          position: absolute;
          z-index: 2;
          left: clamp(28px, 6vw, 92px);
          bottom: clamp(34px, 7vw, 82px);
          width: min(560px, calc(100% - 56px));
          color: #fff;
        }

        .hero-image .eyebrow {
          color: rgba(255,255,255,.72);
          font-size: .66rem;
          letter-spacing: .19em;
          margin-bottom: 13px;
        }

        .hero-image h1 {
          max-width: 560px;
          margin: 0;
          color: #fff;
          font-family: var(--font-display);
          font-size: clamp(2.45rem, 4vw, 4.15rem);
          line-height: 1.01;
          letter-spacing: -.035em;
          font-weight: 560;
          text-wrap: balance;
        }

        .hero-image h1 em {
          color: #fff;
          font-style: italic;
          font-weight: 500;
        }

        .hero-image .hero-lede {
          max-width: 500px;
          margin: 18px 0 23px;
          color: rgba(255,255,255,.83);
          font-size: .98rem;
          line-height: 1.62;
        }

        .hero-image .button-dark {
          background: rgba(255,255,255,.94);
          color: #1f2622;
          box-shadow: 0 10px 30px rgba(0,0,0,.16);
        }

        .hero-image .button-ghost {
          color: #fff;
          background: rgba(255,255,255,.10);
          border-color: rgba(255,255,255,.35);
          backdrop-filter: blur(14px);
        }

        .hero-image-note {
          margin-top: 16px;
          color: rgba(255,255,255,.68);
          font-size: .72rem;
          letter-spacing: .01em;
        }

        @media (max-width: 760px) {
          .hero.hero-image {
            width: calc(100% - 20px);
            min-height: 560px;
            margin-top: 12px;
            border-radius: 25px;
            background-position: 62% center;
          }
          .hero-image::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(16,21,18,.18) 0%, rgba(16,21,18,.2) 32%, rgba(16,21,18,.83) 100%);
            z-index: 1;
          }
          .hero-image-content {
            left: 24px;
            right: 24px;
            bottom: 30px;
            width: auto;
          }
          .hero-image h1 {
            font-size: clamp(2.25rem, 11vw, 3.25rem);
            max-width: 440px;
          }
          .hero-image .hero-lede {
            font-size: .92rem;
            max-width: 420px;
          }
        }
      `}</style>

      <section className="hero hero-image" aria-label="Life coaching introduction">
        <div className="hero-image-content">
          <p className="eyebrow">ONE-ON-ONE LIFE COACHING</p>
          <h1>Get clear. <em>Move forward.</em></h1>
          <p className="hero-lede">Practical coaching for decisions, habits, and the season of life you are in right now.</p>
          <div className="button-row">
            <Link className="button button-dark" href="/book">Book a free consultation <ArrowRight size={16} /></Link>
            <Link className="button button-ghost" href="/services">Explore coaching</Link>
          </div>
          <p className="hero-image-note">A clear conversation. No pressure and no inflated promises.</p>
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
