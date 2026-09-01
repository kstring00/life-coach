import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleDot, Quote } from 'lucide-react';
import { services, process, faqs } from '@/data/site';
import { Assessment, QuickStart } from '@/components/assessment';

const outcomes = ['Clearer decisions', 'More consistent habits', 'Stronger follow-through', 'Better priorities', 'Greater self-awareness', 'Practical accountability'];

export default function HomePage() {
  return (
    <main>
      <style>{`
        .hero.hero-image {
          width: calc(100% - 32px);
          max-width: 1600px;
          min-height: 620px;
          margin: 26px auto 28px;
          padding: 0;
          display: block;
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          background-image:
            linear-gradient(90deg, rgba(7, 13, 21, .82) 0%, rgba(12, 24, 38, .58) 42%, rgba(12, 24, 38, .16) 72%, rgba(12, 24, 38, .04) 100%),
            url('https://images.unsplash.com/photo-1758273240403-052b3c99f636?auto=format&fit=crop&q=88&w=2400');
          background-size: cover;
          background-position: center 42%;
          box-shadow: none;
        }
        .hero-image::after { content:''; position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg,rgba(255,255,255,.02),transparent 36%,rgba(5,10,17,.18)); }
        .hero-image-content { position:absolute; z-index:2; left:clamp(28px,6vw,88px); bottom:clamp(34px,7vw,74px); width:min(520px,calc(100% - 56px)); color:#fff; }
        .hero-image .eyebrow { color:#b9c6d3; font-size:.62rem; letter-spacing:.18em; margin-bottom:12px; }
        .hero-image h1 { max-width:520px; margin:0; color:#fff; font-family:var(--font-display); font-size:clamp(2.25rem,3.5vw,3.55rem); line-height:1.03; letter-spacing:-.03em; font-weight:600; text-wrap:balance; }
        .hero-image h1 em { color:#dce5ed; font-style:italic; font-weight:500; }
        .hero-image .hero-lede { max-width:455px; margin:15px 0 21px; color:#d5dde4; font-size:.9rem; line-height:1.58; }
        .hero-image .button-dark { background:#f5f6f7; color:#101923; box-shadow:none; }
        .hero-image .button-ghost { color:#fff; background:rgba(9,20,33,.42); border-color:rgba(255,255,255,.24); backdrop-filter:none; }
        .hero-image-note { margin-top:14px; color:#aeb9c4; font-size:.68rem; }
        .quick-home-wrap{padding-top:34px;padding-bottom:58px}.section-bridge{text-align:center;max-width:670px;margin:0 auto 30px}.section-bridge h2{font-family:var(--font-display);font-size:clamp(1.9rem,3vw,2.8rem);line-height:1.05;letter-spacing:-.025em;margin:0;color:#111820}.section-bridge p:last-child{color:#68717b;line-height:1.65;font-size:.86rem;max-width:560px;margin:12px auto 0}.deep-funnel-wrap{padding-top:64px;padding-bottom:70px}.thread-note{display:flex;align-items:center;justify-content:center;gap:8px;margin:0 auto 22px;color:#66717d;font-size:.74rem}.thread-note span{width:6px;height:6px;border-radius:50%;background:#23384f}.services-slab{background:#e9edf1!important;border-color:#d7dde3!important;box-shadow:none!important}.service-card{background:#f5f6f7!important;border-color:#d8dde2!important}.service-card:hover{background:#fff!important}.process-rail{background:#152233!important;border-color:#152233!important;color:white!important;box-shadow:none!important}.process-step{border-color:rgba(255,255,255,.12)!important}.process-step h3{color:white}.process-step p{color:#b8c2cc!important}.process-step span{color:#8ea2b6!important}.quote-card{background:#111820!important;border-color:#111820!important;color:white!important;box-shadow:none!important}.quote-card>p{color:white}.quote-card footer{color:#9da9b4!important}.resource-banner,.final-cta{background:#e9edf1!important;border-color:#d7dde3!important;box-shadow:none!important}
        @media(max-width:760px){.hero.hero-image{width:calc(100% - 20px);min-height:550px;margin-top:12px;border-radius:22px;background-position:62% center}.hero-image::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(9,16,25,.12) 0%,rgba(9,16,25,.22) 34%,rgba(9,16,25,.88) 100%);z-index:1}.hero-image-content{left:24px;right:24px;bottom:28px;width:auto}.hero-image h1{font-size:clamp(2.05rem,9vw,2.85rem);max-width:410px}.hero-image .hero-lede{font-size:.86rem;max-width:390px}.quick-home-wrap{padding-top:22px}}
      `}</style>

      <section className="hero hero-image" aria-label="Life coaching introduction">
        <div className="hero-image-content">
          <p className="eyebrow">ONE-ON-ONE LIFE COACHING</p>
          <h1>Something feels off. <em>Start there.</em></h1>
          <p className="hero-lede">One question first. Then explore what coaching actually looks like before deciding whether it fits.</p>
          <div className="button-row">
            <Link className="button button-dark" href="#find-your-fit">Start with one question <ArrowRight size={16}/></Link>
            <Link className="button button-ghost" href="#coaching-process">See the process</Link>
          </div>
          <p className="hero-image-note">No email. No commitment. Just a place to begin.</p>
        </div>
      </section>

      <section className="section-shell quick-home-wrap">
        <QuickStart />
      </section>

      <section className="section-shell section-pad">
        <div className="section-bridge">
          <p className="eyebrow">WHAT COACHING CAN HELP WITH</p>
          <h2>Different kinds of friction need different kinds of support.</h2>
          <p>Before we ask anything more personal, see the actual options. Coaching should fit the problem—not the other way around.</p>
        </div>
        <div className="glass glass-mega services-slab">
          <div className="service-grid">
            {services.map(({icon:Icon,title,slug,eyebrow,copy},index)=><Link href={`/services#${slug}`} className="service-card" key={slug}>
              <div className="service-index">0{index+1}</div><Icon size={21}/><span className="mini-label">{eyebrow}</span><h3>{title}</h3><p>{copy}</p><span className="service-link">See how it works <ArrowRight size={15}/></span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad" id="coaching-process">
        <div className="split-heading">
          <div><p className="eyebrow">THE FORWARD FRAMEWORK</p><h2>What happens after you decide to work on it?</h2></div>
          <p>Coaching should not create dependence. The process is designed to help you think more clearly, act more consistently, and build systems you can eventually carry without support.</p>
        </div>
        <div className="process-rail glass glass-strong">
          {process.map(([number,title,copy])=><div className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}
        </div>
      </section>

      <section className="section-shell section-pad two-col">
        <div>
          <p className="eyebrow">WHAT CHANGES?</p>
          <h2>Progress should show up in your actual life.</h2>
          <p className="section-copy">Not just insight after a conversation. Better decisions, stronger follow-through, and routines that survive a normal week.</p>
          <div className="outcome-list">{outcomes.map(item=><div key={item}><CheckCircle2 size={18}/><span>{item}</span></div>)}</div>
        </div>
        <blockquote className="quote-card glass glass-strong"><Quote size={27}/><p>“The goal is not to make you dependent on coaching. It is to help you build the clarity and systems to move forward confidently on your own.”</p><footer>— Coaching philosophy</footer></blockquote>
      </section>

      <section className="section-shell deep-funnel-wrap">
        <div className="thread-note"><span/>You started with one broad answer. Now that you have seen the options and process, we can make it more specific.</div>
        <Assessment />
      </section>

      <section className="section-shell section-pad">
        <div className="resource-banner glass glass-mega">
          <div><p className="eyebrow">FREE RESOURCE</p><h2>The Personal Reset Workbook</h2><p>A practical reset for values, priorities, habits, current frustrations, and your next 30 days.</p></div>
          <div className="resource-list">{['Life audit','Priority ranking','Habit audit','30-day action plan'].map(item=><span key={item}><CircleDot size={14}/>{item}</span>)}</div>
          <Link className="button button-dark" href="/resources">Get the workbook <ArrowRight size={17}/></Link>
        </div>
      </section>

      <section className="section-shell section-pad">
        <div className="split-heading"><div><p className="eyebrow">QUESTIONS BEFORE YOU BOOK</p><h2>Know what you are walking into.</h2></div><Link href="/faq" className="text-link">View all FAQs <ArrowRight size={15}/></Link></div>
        <div className="faq-preview">{faqs.slice(0,4).map(item=><article className="glass" key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>)}</div>
      </section>

      <section className="section-shell section-pad final-cta-wrap">
        <div className="final-cta glass glass-mega"><p className="eyebrow">START WITH ONE CONVERSATION</p><h2>You do not need everything figured out before reaching out.</h2><p>Bring the situation you are facing. We will start there.</p><div className="button-row centered"><Link className="button button-dark" href="/book">Book a free consultation <ArrowRight size={17}/></Link><Link className="button button-ghost" href="#deeper-fit">Review my starting point</Link></div></div>
      </section>
    </main>
  );
}
