import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/data/site';

export const metadata = { title: 'Coaching Services', description: 'Explore life coaching for clarity, accountability, habits, career transitions, confidence, and leadership.' };

export default function ServicesPage(){
  return <main>
    <section className="section-shell page-hero"><p className="eyebrow">COACHING SERVICES</p><h1>Start with the problem you actually have.</h1><p>You do not need to fit yourself into a generic program. Choose the kind of support that matches what is getting in the way right now.</p></section>
    <section className="section-shell section-pad stack">
      {services.map(({icon:Icon,title,slug,eyebrow,copy,includes})=><article id={slug} className="content-card glass glass-strong service-detail" key={slug}>
        <p className="mini-label">{eyebrow}</p><Icon size={24}/><h2>{title}</h2><p>{copy}</p><ul>{includes.map(item=><li key={item}><Check size={14}/> {item}</li>)}</ul><Link className="button button-dark" href="/book">Talk through this option <ArrowRight size={16}/></Link>
      </article>)}
    </section>
  </main>
}
