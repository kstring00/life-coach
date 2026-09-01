'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, RotateCcw } from 'lucide-react';

type Category = 'clarity' | 'accountability' | 'habits' | 'transition' | 'growth';
type Scores = Record<Category, number>;
type Option = { label: string; detail?: string; weights: Partial<Scores> };
type Question = { eyebrow: string; prompt: string; helper: string; options: Option[] };

const openingOptions: Option[] = [
  { label: 'I feel stuck, but I cannot quite name why.', detail: 'Something needs to change, but the next step is blurry.', weights: { clarity: 3, growth: 1 } },
  { label: 'I know what I want. I just keep struggling to follow through.', detail: 'The problem is less about direction and more about execution.', weights: { accountability: 3, habits: 2 } },
  { label: 'I am in the middle of a decision or transition.', detail: 'Career, relationship, identity, relocation, or another meaningful change.', weights: { transition: 3, clarity: 2 } },
  { label: 'Nothing is necessarily wrong. I just want to be more intentional.', detail: 'I want to grow with more structure instead of drifting.', weights: { growth: 3, clarity: 1 } },
];

const questions: Question[] = [
  {
    eyebrow: 'WHERE IT SHOWS UP',
    prompt: 'Where does the friction take up the most space?',
    helper: 'Choose the area that keeps returning to your attention.',
    options: [
      { label: 'My priorities feel scattered.', weights: { clarity: 3 } },
      { label: 'My routines and habits keep falling apart.', weights: { habits: 3, accountability: 2 } },
      { label: 'I keep overthinking important decisions.', weights: { clarity: 2, transition: 2 } },
      { label: 'I need progress, but there is no structure holding me to it.', weights: { accountability: 3 } },
    ],
  },
  {
    eyebrow: 'THE REPEATING PATTERN',
    prompt: 'When you already know what you should do, what usually happens?',
    helper: 'This helps separate a direction problem from an execution problem.',
    options: [
      { label: 'I question the plan and reopen the decision.', weights: { clarity: 3 } },
      { label: 'I put it off until it feels urgent.', weights: { accountability: 3, habits: 1 } },
      { label: 'I start strong, then lose momentum.', weights: { habits: 3, accountability: 2 } },
      { label: 'I stay busy, but I am not sure it is moving me forward.', weights: { growth: 2, clarity: 2 } },
    ],
  },
  {
    eyebrow: 'WHAT WOULD HELP',
    prompt: 'What kind of support would make the biggest difference?',
    helper: 'Think about what is currently missing, not what sounds impressive.',
    options: [
      { label: 'Someone objective to help me think clearly.', weights: { clarity: 3, transition: 1 } },
      { label: 'A realistic plan with clear next steps.', weights: { clarity: 2, habits: 2 } },
      { label: 'Consistent accountability so I actually execute.', weights: { accountability: 4 } },
      { label: 'Help building routines that work in my actual life.', weights: { habits: 4 } },
    ],
  },
  {
    eyebrow: 'READINESS',
    prompt: 'How ready are you to do something differently?',
    helper: 'Coaching works best when reflection turns into action between conversations.',
    options: [
      { label: 'I am ready. I want structure and I will do the work.', weights: { growth: 2, accountability: 1 } },
      { label: 'I am interested, but I need help figuring out the first step.', weights: { clarity: 2 } },
      { label: 'I am mostly exploring what kind of support exists.', weights: { growth: 1 } },
      { label: 'I am looking for mental-health treatment rather than coaching.', weights: {} },
    ],
  },
];

const results: Record<Category, { title: string; copy: string; service: string; href: string; pattern: string }> = {
  clarity: { title: 'The friction looks more like clarity than motivation.', copy: 'Your answers point toward competing priorities, overthinking, or uncertainty about what deserves your attention first. Coaching can create a structured place to sort the noise, make a decision, and leave with a concrete next step.', service: 'Clarity & Direction Coaching', href: '/services#clarity', pattern: 'Too much mental load. Not enough confident direction.' },
  accountability: { title: 'You may already know what needs to happen.', copy: 'The gap looks more like knowing versus consistently doing. Coaching can turn intentions into commitments, identify what interrupts follow-through, and create an accountability rhythm that does not depend on motivation.', service: 'Accountability Coaching', href: '/services#accountability', pattern: 'Clear intentions. Inconsistent execution.' },
  habits: { title: 'The system may be the problem, not your ambition.', copy: 'Your answers point toward routines that are hard to sustain in real life. Coaching can simplify the plan, remove friction, and build habits around the life you actually have.', service: 'Habit & Routine Coaching', href: '/services#habits', pattern: 'Repeated restarts without a system that holds.' },
  transition: { title: 'You are navigating a season where the old answer may no longer fit.', copy: 'Transitions create competing priorities and pressure to make the right decision quickly. Coaching can help clarify what matters now, evaluate the options, and move forward without pretending every unknown can be removed first.', service: 'Life Transition Coaching', href: '/services#transitions', pattern: 'Meaningful change with too many variables to hold alone.' },
  growth: { title: 'You may be ready for more intentional growth.', copy: 'Your answers suggest that you want more structure around the person, habits, and direction you are building toward. Coaching can create a recurring place to set priorities, test what is working, and keep development connected to real life.', service: 'One-on-One Life Coaching', href: '/services#one-on-one', pattern: 'Functioning well, but wanting more intention and momentum.' },
};

const emptyScores: Scores = { clarity: 0, accountability: 0, habits: 0, transition: 0, growth: 0 };
const STORAGE_KEY = 'forward-opening-answer';

function OptionButton({ option, selected, onClick }: { option: Option; selected: boolean; onClick: () => void }) {
  return <button type="button" className={`funnel-option ${selected ? 'selected' : ''}`} onClick={onClick} aria-pressed={selected}>
    <span className="funnel-radio">{selected && <Check size={14} />}</span>
    <span><strong>{option.label}</strong>{option.detail && <small>{option.detail}</small>}</span>
  </button>;
}

export function QuickStart() {
  const [selected, setSelected] = useState<number | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored !== null) { setSelected(Number(stored)); setSaved(true); }
  }, []);

  function save(index: number) {
    setSelected(index);
    window.sessionStorage.setItem(STORAGE_KEY, String(index));
    setSaved(true);
  }

  return <div className="quick-start matte-panel" id="find-your-fit">
    <div className="quick-copy">
      <p className="eyebrow">START WITH ONE QUESTION</p>
      <h2>What feels most true right now?</h2>
      <p>You do not need to diagnose the problem. Pick the closest answer, then keep exploring the site.</p>
    </div>
    <div className="quick-options" role="radiogroup" aria-label="What feels most true right now?">
      {openingOptions.map((option, index) => <OptionButton key={option.label} option={option} selected={selected === index} onClick={() => save(index)} />)}
    </div>
    {saved && selected !== null && <div className="quick-ack" aria-live="polite">
      <span>Got it.</span>
      <p>Keep that answer in mind as you look through the process and coaching options below. We will come back to it.</p>
      <Link href="#coaching-process">See how coaching works <ArrowRight size={15} /></Link>
    </div>}
  </div>;
}

export function Assessment() {
  const [opening, setOpening] = useState<number | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(questions.map(() => null));
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored !== null) setOpening(Number(stored));
  }, []);

  const scores = useMemo(() => {
    const total = { ...emptyScores };
    if (opening !== null) Object.entries(openingOptions[opening].weights).forEach(([key, value]) => { total[key as Category] += value ?? 0; });
    answers.forEach((answer, questionIndex) => {
      if (answer === null) return;
      Object.entries(questions[questionIndex].options[answer].weights).forEach(([key, value]) => { total[key as Category] += value ?? 0; });
    });
    return total;
  }, [answers, opening]);

  const mentalHealthChoice = answers[3] === 3;
  const primaryCategory = (Object.entries(scores) as [Category, number][]).sort((a, b) => b[1] - a[1])[0][0];
  const result = results[primaryCategory];
  const current = questions[step];
  const selected = answers[step];
  const progress = finished ? 100 : ((step + 1) / questions.length) * 100;

  function choose(index: number) { setAnswers(currentAnswers => currentAnswers.map((value, i) => i === step ? index : value)); }
  function next() { if (selected === null) return; if (step === questions.length - 1) setFinished(true); else setStep(value => value + 1); }
  function back() { if (finished) { setFinished(false); setStep(questions.length - 1); } else setStep(value => Math.max(0, value - 1)); }
  function restart() { setAnswers(questions.map(() => null)); setStep(0); setFinished(false); }

  return <div className="funnel-shell matte-panel" id="deeper-fit">
    <div className="funnel-top">
      <div><p className="eyebrow">NOW GO A LITTLE DEEPER</p>{opening !== null && <p className="earlier-answer">Earlier, you said: <strong>{openingOptions[opening].label}</strong></p>}</div>
      <span>{finished ? 'Your starting point' : `${step + 1} / ${questions.length}`}</span>
    </div>
    <div className="funnel-progress"><span style={{ width: `${progress}%` }} /></div>

    {!finished ? <div className="funnel-grid">
      <div className="funnel-context">
        <h2>Let&apos;s make that more specific.</h2>
        <p>Now that you have seen what coaching looks like, these questions can help identify where support would be most useful.</p>
      </div>
      <div className="funnel-question">
        <p className="eyebrow">{current.eyebrow}</p>
        <h3>{current.prompt}</h3>
        <p className="funnel-helper">{current.helper}</p>
        <div className="funnel-options" role="radiogroup" aria-label={current.prompt}>
          {current.options.map((option, index) => <OptionButton key={option.label} option={option} selected={selected === index} onClick={() => choose(index)} />)}
        </div>
        <div className="funnel-actions">
          <button className="funnel-back" type="button" onClick={back} disabled={step === 0}><ArrowLeft size={15}/> Back</button>
          <button className="button button-dark" type="button" onClick={next} disabled={selected === null}>{step === questions.length - 1 ? 'See my starting point' : 'Next question'} <ArrowRight size={15}/></button>
        </div>
      </div>
    </div> : mentalHealthChoice ? <div className="funnel-result">
      <p className="eyebrow">A DIFFERENT KIND OF SUPPORT MAY FIT BETTER</p>
      <h3>Coaching may not be the best first step for what you are looking for.</h3>
      <p>If you are seeking diagnosis, treatment, crisis support, or mental-health care, a licensed mental-health professional is the more appropriate place to begin. Coaching can sometimes complement care, but it does not replace it.</p>
      <button className="funnel-back" type="button" onClick={back}><ArrowLeft size={15}/> Review my answers</button>
    </div> : <div className="funnel-result">
      <p className="eyebrow">YOUR STARTING POINT</p>
      <h3>{result.title}</h3>
      <div className="result-pattern">{result.pattern}</div>
      <p>{result.copy}</p>
      <div className="result-service"><span>A coaching path worth exploring</span><strong>{result.service}</strong></div>
      <div className="button-row">
        <Link className="button button-dark" href={result.href}>Explore this service <ArrowRight size={15}/></Link>
        <Link className="button button-ghost" href="/book">Talk it through</Link>
        <button className="funnel-reset" type="button" onClick={restart}><RotateCcw size={14}/> Retake</button>
      </div>
    </div>}

    <style>{`
      .matte-panel{background:#f4f5f4;border:1px solid #d9dde1;border-radius:28px;box-shadow:none}.quick-start{padding:clamp(24px,4vw,42px);display:grid;grid-template-columns:.72fr 1.28fr;gap:42px}.quick-copy h2,.funnel-context h2,.funnel-question h3,.funnel-result h3{font-family:var(--font-display);color:#111820;font-weight:600;letter-spacing:-.025em;margin:0}.quick-copy h2{font-size:clamp(1.9rem,3vw,2.8rem);line-height:1.04}.quick-copy>p:last-child,.funnel-context p{color:#626b75;font-size:.86rem;line-height:1.65;max-width:420px}.quick-options,.funnel-options{display:grid;gap:8px}.funnel-option{width:100%;display:grid;grid-template-columns:26px 1fr;gap:11px;text-align:left;align-items:start;padding:14px 15px;border-radius:15px;border:1px solid #d8dde2;background:#fafafa;color:#1f2730;cursor:pointer;transition:.16s ease}.funnel-option:hover{border-color:#9aa6b3;background:#fff}.funnel-option.selected{background:#e9eef4;border-color:#63788f}.funnel-radio{width:20px;height:20px;border-radius:50%;border:1px solid #a8b0b9;display:grid;place-items:center;margin-top:1px}.selected .funnel-radio{background:#17283b;border-color:#17283b;color:#fff}.funnel-option strong{display:block;font-size:.86rem;line-height:1.35}.funnel-option small{display:block;color:#707982;font-size:.72rem;line-height:1.45;margin-top:3px}.quick-ack{grid-column:2;display:flex;align-items:center;gap:12px;flex-wrap:wrap;border-top:1px solid #d9dde1;padding-top:16px;font-size:.78rem;color:#59636d}.quick-ack span{font-weight:800;color:#17283b}.quick-ack p{margin:0;flex:1;min-width:220px}.quick-ack a{display:inline-flex;align-items:center;gap:5px;font-weight:800;color:#17283b}.funnel-shell{padding:clamp(24px,4vw,42px)}.funnel-top{display:flex;justify-content:space-between;gap:24px;align-items:flex-start;margin-bottom:16px}.funnel-top>span{font-size:.7rem;color:#6f7882}.earlier-answer{font-size:.76rem;color:#68727c;max-width:620px;margin:4px 0 0}.earlier-answer strong{color:#17283b}.funnel-progress{height:3px;background:#dfe3e6;border-radius:999px;overflow:hidden;margin-bottom:30px}.funnel-progress span{display:block;height:100%;background:#17283b;transition:width .25s ease}.funnel-grid{display:grid;grid-template-columns:.68fr 1.32fr;gap:44px}.funnel-context h2{font-size:clamp(1.8rem,2.7vw,2.55rem);line-height:1.05}.funnel-question h3{font-size:clamp(1.65rem,2.3vw,2.2rem);line-height:1.08}.funnel-helper{font-size:.8rem;color:#6e7780;line-height:1.55;margin:8px 0 18px}.funnel-actions{display:flex;justify-content:space-between;gap:14px;align-items:center;margin-top:20px}.funnel-back,.funnel-reset{border:0;background:transparent;color:#59636d;font-size:.76rem;font-weight:750;display:inline-flex;align-items:center;gap:5px;cursor:pointer;padding:8px 0}.funnel-back:disabled{opacity:.28;cursor:default}.funnel-result{max-width:760px;padding:8px 0}.funnel-result h3{font-size:clamp(2rem,3vw,2.9rem);line-height:1.03}.funnel-result>p:not(.eyebrow){font-size:.88rem;line-height:1.68;color:#626b75;max-width:700px}.result-pattern{font-family:var(--font-display);font-size:1.15rem;color:#27384a;margin:18px 0 8px}.result-service{margin:22px 0;padding:16px 18px;background:#17283b;color:white;border-radius:16px;display:flex;justify-content:space-between;gap:18px;align-items:center}.result-service span{font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;color:#b9c4cf}.result-service strong{font-family:var(--font-display);font-size:1.2rem}.funnel-reset{margin-left:4px}@media(max-width:820px){.quick-start,.funnel-grid{grid-template-columns:1fr}.quick-ack{grid-column:1}.funnel-context{max-width:560px}}@media(max-width:540px){.quick-start,.funnel-shell{border-radius:22px}.funnel-top{flex-direction:column;gap:8px}.result-service{align-items:flex-start;flex-direction:column}}
    `}</style>
  </div>;
}
