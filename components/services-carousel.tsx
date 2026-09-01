'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { services } from '@/data/site';

const visualClasses = [
  'service-visual service-visual-clarity',
  'service-visual service-visual-coaching',
  'service-visual service-visual-habits',
  'service-visual service-visual-career',
  'service-visual service-visual-growth',
  'service-visual service-visual-leadership',
];

export function ServicesCarousel() {
  const [active, setActive] = useState(0);
  const service = services[active];
  const Icon = service.icon;

  function go(direction: -1 | 1) {
    setActive(current => (current + direction + services.length) % services.length);
  }

  return (
    <div className="services-explorer" aria-label="Coaching services explorer">
      <div className="services-explorer-list" role="tablist" aria-label="Choose a coaching service">
        {services.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="services-explorer-panel"
            className={`services-explorer-tab ${active === index ? 'active' : ''}`}
            onClick={() => setActive(index)}
          >
            <span className="services-explorer-number">0{index + 1}</span>
            <span className="services-explorer-divider" aria-hidden="true" />
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      <article
        id="services-explorer-panel"
        className={`services-explorer-panel ${visualClasses[active]}`}
        role="tabpanel"
      >
        <div className="services-explorer-content">
          <div className="services-explorer-top">
            <div className="services-explorer-icon"><Icon size={24} /></div>
            <p className="services-explorer-kicker">0{active + 1} {service.title.toUpperCase()}</p>
            <div className="services-explorer-heading-slot">
              <h3>{service.title === 'Clarity & Direction' ? 'Find clarity and move forward with confidence.' : service.eyebrow}</h3>
            </div>
            <div className="services-explorer-copy-slot">
              <p className="services-explorer-copy">{service.copy}</p>
            </div>
            <Link className="button button-dark" href={`/services#${service.slug}`}>
              See how it works <ArrowRight size={16} />
            </Link>
          </div>

          <div className="services-explorer-controls" aria-label="Carousel controls">
            <button type="button" className="services-arrow" onClick={() => go(-1)} aria-label="Previous service"><ArrowLeft size={18} /></button>
            <div className="services-dots" aria-label={`${active + 1} of ${services.length}`}>
              {services.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  className={active === index ? 'active' : ''}
                  onClick={() => setActive(index)}
                  aria-label={`Show ${item.title}`}
                  aria-current={active === index ? 'true' : undefined}
                />
              ))}
            </div>
            <button type="button" className="services-arrow" onClick={() => go(1)} aria-label="Next service"><ArrowRight size={18} /></button>
          </div>
        </div>
      </article>

      <style jsx>{`
        .services-explorer{display:grid;grid-template-columns:minmax(260px,.78fr) minmax(0,1.72fr);gap:22px;align-items:stretch}
        .services-explorer-list{display:grid;align-content:stretch;border:1px solid #d5dbe1;border-radius:22px;overflow:hidden;background:#f7f7f5}
        .services-explorer-tab{min-height:72px;border:0;border-bottom:1px solid #dde2e6;background:transparent;color:#182431;display:grid;grid-template-columns:38px 1px 1fr;align-items:center;gap:14px;padding:0 22px;text-align:left;font-size:.9rem;cursor:pointer;transition:background .2s ease,color .2s ease}
        .services-explorer-tab:last-child{border-bottom:0}.services-explorer-tab:hover{background:#eef1f4}.services-explorer-tab.active{background:#10263d;color:#fff}.services-explorer-number{font-variant-numeric:tabular-nums;color:inherit;opacity:.78}.services-explorer-divider{height:24px;background:currentColor;opacity:.22}.services-explorer-tab>span:last-child{font-weight:650;line-height:1.2}
        .services-explorer-panel{position:relative;height:560px;min-height:560px;max-height:560px;border:1px solid #d5dbe1;border-radius:28px;overflow:hidden;background:#fbfaf7;display:flex;align-items:stretch;padding:clamp(34px,5vw,72px);box-sizing:border-box}
        .services-explorer-panel:before,.services-explorer-panel:after{content:'';position:absolute;pointer-events:none}
        .services-explorer-panel:before{inset:0;background:linear-gradient(90deg,#fbfaf7 0%,rgba(251,250,247,.98) 46%,rgba(251,250,247,.48) 72%,rgba(251,250,247,.12) 100%);z-index:1}
        .services-explorer-panel:after{right:-3%;bottom:-14%;width:58%;height:76%;border-radius:54% 46% 0 0/65% 54% 0 0;opacity:.56;z-index:0}
        .service-visual-clarity:after{background:linear-gradient(160deg,#e6e2d8,#c8bea9)}
        .service-visual-coaching:after{background:linear-gradient(160deg,#d9e1e8,#aab8c6)}
        .service-visual-habits:after{background:repeating-linear-gradient(135deg,#d9dee3 0 24px,#c5cdd5 24px 48px)}
        .service-visual-career:after{background:linear-gradient(160deg,#ded8cf,#b9afa1)}
        .service-visual-growth:after{background:radial-gradient(circle at 40% 40%,#edf0f2,#c9d3db 60%,#aebdca)}
        .service-visual-leadership:after{background:linear-gradient(155deg,#cad3dc,#8ea0b1)}
        .services-explorer-content{position:relative;z-index:2;max-width:570px;width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between}
        .services-explorer-top{display:flex;flex-direction:column;align-items:flex-start}
        .services-explorer-icon{width:52px;height:52px;border-radius:50%;background:#10263d;color:#fff;display:grid;place-items:center;margin-bottom:24px;flex:0 0 auto}.services-explorer-kicker{font-size:.67rem;letter-spacing:.14em;font-weight:800;color:#304f6d;margin:0 0 12px}
        .services-explorer-heading-slot{min-height:112px;display:flex;align-items:flex-start}.services-explorer-content h3{font-family:var(--font-display);font-weight:600;color:#111820;font-size:clamp(2rem,3.2vw,3rem);line-height:1.02;letter-spacing:-.025em;max-width:560px;margin:0}
        .services-explorer-copy-slot{min-height:92px;display:flex;align-items:flex-start}.services-explorer-copy{font-size:.92rem;line-height:1.65;color:#65707a;max-width:520px;margin:16px 0 22px}
        .services-explorer-controls{display:flex;align-items:center;gap:14px;margin-top:24px}.services-arrow{width:42px;height:42px;border-radius:50%;border:1px solid #d2d8de;background:#f8f8f6;color:#18304a;display:grid;place-items:center;cursor:pointer}.services-arrow:hover{background:#eef1f4}.services-dots{display:flex;gap:10px;align-items:center}.services-dots button{width:8px;height:8px;border-radius:50%;border:0;background:#c5c9cd;padding:0;cursor:pointer}.services-dots button.active{background:#18304a}
        @media(max-width:900px){.services-explorer{grid-template-columns:1fr}.services-explorer-list{grid-template-columns:repeat(3,1fr)}.services-explorer-tab{grid-template-columns:30px 1fr;gap:8px;min-height:66px;padding:10px 14px;border-right:1px solid #dde2e6}.services-explorer-divider{display:none}.services-explorer-panel{height:500px;min-height:500px;max-height:500px}.services-explorer-heading-slot{min-height:98px}.services-explorer-copy-slot{min-height:86px}}
        @media(max-width:620px){.services-explorer-list{display:flex;overflow-x:auto;border-radius:18px;scroll-snap-type:x proximity}.services-explorer-tab{min-width:210px;grid-template-columns:28px 1fr;border-bottom:0;border-right:1px solid #dde2e6;scroll-snap-align:start}.services-explorer-panel{height:auto;min-height:520px;max-height:none;padding:30px 24px;align-items:flex-start}.services-explorer-panel:before{background:linear-gradient(180deg,#fbfaf7 0%,rgba(251,250,247,.97) 66%,rgba(251,250,247,.55) 86%,rgba(251,250,247,.2) 100%)}.services-explorer-panel:after{right:-20%;bottom:-18%;width:92%;height:48%}.services-explorer-content{height:auto;min-height:458px}.services-explorer-heading-slot{min-height:0}.services-explorer-copy-slot{min-height:0}.services-explorer-content h3{font-size:2.15rem}.services-explorer-copy{font-size:.88rem}}
      `}</style>
    </div>
  );
}
