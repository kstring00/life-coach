import { process } from '@/data/site';

export const metadata = { title: 'Coaching Process', description: 'See the five-step Forward coaching process from discovery through independent progress.' };

export default function ProcessPage(){
  return <main>
    <section className="section-shell page-hero"><p className="eyebrow">THE FORWARD FRAMEWORK</p><h1>Reflection is useful. Movement is the point.</h1><p>A transparent five-step process keeps coaching grounded in decisions, behavior, and visible progress instead of vague motivation.</p></section>
    <section className="section-shell section-pad">
      <div className="process-rail glass glass-strong">{process.map(([number,title,copy])=><article className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>
    <section className="section-shell section-pad content-grid">
      <article className="content-card glass"><p className="eyebrow">WHAT A SESSION LOOKS LIKE</p><h2>Focused, not scripted.</h2><ul><li>Check in on what changed.</li><li>Review commitments.</li><li>Explore the current obstacle.</li><li>Identify the real constraint.</li><li>Create specific next steps.</li><li>Close with clear accountability.</li></ul></article>
      <article className="content-card glass"><p className="eyebrow">THE DIFFERENCE</p><h2>We do not stop at “try harder.”</h2><p>When progress stalls, look at the environment, habits, priorities, time, energy, skills, systems, expectations, accountability, and competing goals. The goal is to find the friction—not shame the person.</p></article>
    </section>
  </main>
}
