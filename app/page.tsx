import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleDot, Quote, LockKeyhole } from 'lucide-react';
import { services, process, faqs } from '@/data/site';
import { Assessment, QuickStart } from '@/components/assessment';

const outcomes = ['Clearer decisions', 'More consistent habits', 'Stronger follow-through', 'Better priorities', 'Greater self-awareness', 'Practical accountability'];

export default function HomePage() {
  return (
    <main>
      <style>{`
        .growth-hero{width:min(1320px,calc(100% - 40px));margin:34px auto 24px;display:grid;grid-template-columns:.9fr 1.1fr;gap:54px;align-items:center;min-height:650px;padding:34px 16px 44px}.growth-copy{padding-left:clamp(0px,2vw,22px);max-width:560px}.growth-kicker{font-size:.68rem;letter-spacing:.32em;font-weight:800;color:#405b76;margin:0 0 24px}.growth-copy h1{font-family:var(--font-display);font-size:clamp(3rem,5.1vw,5.3rem);line-height:.94;letter-spacing:-.045em;font-weight:600;color:#102236;margin:0;max-width:590px}.growth-rule{width:48px;height:2px;background:#20364d;margin:28px 0 24px}.growth-copy .hero-lede{font-size:1rem;line-height:1.72;color:#4f5963;max-width:480px;margin:0 0 26px}.growth-copy .button{min-height:50px;padding:0 24px}.privacy-note{display:flex;align-items:center;gap:8px;color:#69727c;font-size:.73rem;margin-top:18px}.growth-art{position:relative;min-height:600px}.portrait-main,.portrait-secondary{position:absolute;background-image:url('https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1400');background-size:cover;background-repeat:no-repeat;overflow:hidden}.portrait-main{width:78%;height:88%;right:3%;top:2%;background-position:center 32%;border-radius:46% 54% 38% 62% / 43% 35% 65% 57%;box-shadow:0 0 0 1px rgba(16,34,54,.06)}.portrait-main:after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(12,31,49,.02),rgba(12,31,49,.12));pointer-events:none}.portrait-secondary{width:34%;height:42%;left:7%;bottom:11%;background-position:35% 66%;border-radius:56% 44% 58% 42% / 48% 57% 43% 52%;box-shadow:0 0 0 14px #f3f1ec}.portrait-dot{position:absolute;left:0;bottom:2%;width:130px;height:130px;background:#12263b;border-radius:55% 45% 61% 39% / 50% 58% 42% 50%;transform:rotate(-16deg)}.portrait-cut{position:absolute;left:25%;top:52%;width:160px;height:220px;background:#f3f1ec;border-radius:48% 52% 48% 52% / 40% 56% 44% 60%;transform:rotate(-34deg);z-index:3}.hero-cross{position:absolute;right:0;top:17%;width:190px;height:330px;opacity:.92;z-index:4}.hero-cross:before,.hero-cross:after{content:'';position:absolute;background:#102236}.hero-cross:before{width:36px;height:100%;left:77px;top:0;clip-path:polygon(23% 0,73% 1%,88% 12%,74% 28%,100% 44%,82% 64%,93% 83%,64% 100%,28% 95%,11% 80%,21% 61%,0 42%,19% 22%)}.hero-cross:after{width:100%;height:34px;left:0;top:108px;clip-path:polygon(0 19%,18% 7%,34% 22%,53% 0,70% 24%,100% 12%,94% 65%,71% 72%,52% 92%,33% 70%,7% 100%)}.verse{position:absolute;right:20%;bottom:0;z-index:5;max-width:330px;color:#4b5661;font-family:var(--font-display);font-size:.9rem;line-height:1.3}.verse strong{display:block;margin-top:7px;font-family:var(--font-body);font-size:.66rem;letter-spacing:.18em;color:#405b76}.quick-home-wrap{padding-top:34px;padding-bottom:58px}.section-bridge{text-align:center;max-width:670px;margin:0 auto 30px}.section-bridge h2{font-family:var(--font-display);font-size:clamp(1.9rem,3vw,2.8rem);line-height:1.05;letter-spacing:-.025em;margin:0;color:#111820}.section-bridge p:last-child{color:#68717b;line-height:1.65;font-size:.86rem;max-width:560px;margin:12px auto 0}.deep-funnel-wrap{padding-top:64px;padding-bottom:70px}.thread-note{display:flex;align-items:center;justify-content:center;gap:8px;margin:0 auto 22px;color:#66717d;font-size:.74rem}.thread-note span{width:6px;height:6px;border-radius:50%;background:#23384f}.services-slab{background:#e9edf1!important;border-color:#d7dde3!important;box-shadow:none!important}.service-card{background:#f5f6f7!important;border-color:#d8dde2!important}.service-card:hover{background:#fff!important}.process-rail{background:#152233!important;border-color:#152233!important;color:white!important;box-shadow:none!important}.process-step{border-color:rgba(255,255,255,.12)!important}.process-step h3{color:white}.process-step p{color:#b8c2cc!important}.process-step span{color:#8ea2b6!important}.quote-card{background:#111820!important;border-color:#111820!important;color:white!important;box-shadow:none!important}.quote-card>p{color:white}.quote-card footer{color:#9da9b4!important}.resource-banner,.final-cta{background:#eef1f3!important;border-color:#d7dde3!important;box-shadow:none!important}.resource-banner{color:#111820!important}.resource-banner h2{color:#111820!important}.resource-banner p{color:#56616c!important}.resource-banner .eyebrow{color:#405b76!important}
        @media(max-width:920px){.growth-hero{grid-template-columns:1fr;gap:28px;padding-top:44px}.growth-copy{max-width:620px}.growth-art{min-height:560px;max-width:720px;width:100%;margin:0 auto}.portrait-main{width:76%;right:4%}.verse{right:12%;}.growth-copy h1{font-size:clamp(3rem,8vw,4.6rem)}}
        @media(max-width:620px){.growth-hero{width:min(100% - 24px,1320px);padding:26px 4px 26px;min-height:auto}.growth-copy h1{font-size:clamp(2.7rem,13vw,3.7rem);max-width:440px}.growth-copy .hero-lede{font-size:.9rem}.growth-art{min-height:430px}.portrait-main{width:84%;height:83%;right:0}.portrait-secondary{width:36%;height:36%;left:2%;bottom:14%;box-shadow:0 0 0 8px #f3f1ec}.portrait-dot{width:86px;height:86px}.portrait-cut{width:105px;height:145px;left:24%;top:54%}.hero-cross{width:125px;height:230px;right:-2%;top:18%}.hero-cross:before{width:24px;left:52px}.hero-cross:after{height:24px;top:75px}.verse{right:4%;bottom:0;max-width:250px;font-size:.72rem}.quick-home-wrap{padding-top:22px}.privacy-note{font-size:.68rem}}
      `}</style>

      <section className="growth-hero" aria-label="GrowthGains life coaching introduction">
        <div className="growth-copy">
          <p className="growth-kicker">CLARITY. STRUCTURE. MOMENTUM.</p>
          <h1>Build a life<br/>that matters.</h1>
          <div className="growth-rule" />
          <p className="hero-lede">Faith-centered life coaching for people who are ready to stop drifting, get clear, and move forward with intention.</p>
          <Link className="button button-dark" href="#find-your-fit">See where to start <ArrowRight size={17}/></Link>
          <div className="privacy-note"><LockKeyhole size={14}/>Private. Personal. Purposeful.</div>
        </div>

        <div className="growth-art" aria-label="GrowthGains coach portrait">
          <div className="portrait-main" />
          <div className="portrait-secondary" />
          <div className="portrait-dot" />
          <div className="portrait-cut" />
          <div className="hero-cross" aria-hidden="true" />
          <div className="verse">Commit to the Lord whatever you do, and he will establish your plans.<strong>PROVERBS 16:3</strong></div>
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
          <div><p className="eyebrow">THE GROWTHGAINS FRAMEWORK</p><h2>What happens after you decide to work on it?</h2></div>
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
        <blockquote className="quote-card glass glass-strong"><Quote size={27}/><p>“The goal is not to make you dependent on coaching. It is to help you build the clarity and systems to move forward confidently on your own.”</p><footer>— GrowthGains coaching philosophy</footer></blockquote>
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
