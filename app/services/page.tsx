import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { services } from '@/data/site';

export const metadata = { title: 'Coaching Services', description: 'Explore life coaching for clarity, accountability, habits, career transitions, confidence, and leadership.' };

export default function ServicesPage(){
  return <main>
    <section className="section-shell page-hero">
      <Link
        href="/"
        className="services-back-link"
        aria-label="Back to home"
      >
        <span className="services-back-icon"><ArrowLeft size={15}/></span>
        <span>Back to home</span>
      </Link>
      <p className="eyebrow">COACHING SERVICES</p>
      <h1>Start with the problem you actually have.</h1>
      <p>You do not need to fit yourself into a generic program. Choose the kind of support that matches what is getting in the way right now.</p>
    </section>

    <style>{`
      .services-back-link {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        margin-bottom: 34px;
        color: #5e655f;
        font-size: .78rem;
        font-weight: 700;
        letter-spacing: .01em;
        transition: color .2s ease, transform .2s ease;
      }

      .services-back-icon {
        width: 31px;
        height: 31px;
        border-radius: 999px;
        display: grid;
        place-items: center;
        background: rgba(255,255,255,.38);
        border: 1px solid rgba(63,70,64,.12);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
      }

      .services-back-link:hover {
        color: #1f2622;
        transform: translateX(-2px);
      }

      .services-back-link:focus-visible {
        outline: 2px solid #66725f;
        outline-offset: 5px;
        border-radius: 999px;
      }

      @media (max-width: 620px) {
        .services-back-link {
          margin-bottom: 24px;
        }
      }
    `}</style>

    <section className="section-shell section-pad stack">
      {services.map(({icon:Icon,title,slug,eyebrow,copy,includes})=><article id={slug} className="content-card glass glass-strong service-detail" key={slug}>
        <p className="mini-label">{eyebrow}</p><Icon size={24}/><h2>{title}</h2><p>{copy}</p><ul>{includes.map(item=><li key={item}><Check size={14}/> {item}</li>)}</ul><Link className="button button-dark" href="/book">Talk through this option <ArrowRight size={16}/></Link>
      </article>)}
    </section>
  </main>
}
