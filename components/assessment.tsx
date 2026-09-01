'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, RotateCcw } from 'lucide-react';

type Category = 'clarity' | 'accountability' | 'habits' | 'transition' | 'growth';
type Scores = Record<Category, number>;

type Option = {
  label: string;
  detail?: string;
  weights: Partial<Scores>;
};

type Question = {
  eyebrow: string;
  prompt: string;
  helper: string;
  options: Option[];
};

const questions: Question[] = [
  {
    eyebrow: 'START BROAD',
    prompt: 'What feels most true about life right now?',
    helper: 'Pick the answer that is closest. It does not have to fit perfectly.',
    options: [
      { label: 'I feel stuck, but I cannot quite name why.', detail: 'Something needs to change, but the next step is blurry.', weights: { clarity: 3, growth: 1 } },
      { label: 'I know what I want. I just keep struggling to follow through.', detail: 'The problem is less about direction and more about execution.', weights: { accountability: 3, habits: 2 } },
      { label: 'I am in the middle of a decision or transition.', detail: 'Career, relationship, identity, relocation, or another major change.', weights: { transition: 3, clarity: 2 } },
      { label: 'Nothing is necessarily wrong. I just want to be more intentional.', detail: 'I want to grow with more structure instead of drifting.', weights: { growth: 3, clarity: 1 } },
    ],
  },
  {
    eyebrow: 'NARROW IT DOWN',
    prompt: 'Where does the friction show up most?',
    helper: 'Think about the area that keeps taking up the most mental space.',
    options: [
      { label: 'My priorities feel scattered.', detail: 'Too many directions, too little confidence about what matters most.', weights: { clarity: 3 } },
      { label: 'My routines and habits keep falling apart.', detail: 'I start well, then lose consistency.', weights: { habits: 3, accountability: 2 } },
      { label: 'I keep overthinking important decisions.', detail: 'I can see every side and still cannot move.', weights: { clarity: 2, transition: 2 } },
      { label: 'I need to make progress, but no one is holding me to it.', detail: 'There is no structure outside my own motivation.', weights: { accountability: 3 } },
    ],
  },
  {
    eyebrow: 'LOOK AT THE PATTERN',
    prompt: 'When you already know what you should do, what usually happens?',
    helper: 'This is often where the real coaching need becomes clearer.',
    options: [
      { label: 'I question the plan and reopen the decision.', weights: { clarity: 3 } },
      { label: 'I put it off until it feels urgent.', weights: { accountability: 3, habits: 1 } },
      { label: 'I start strong, then lose momentum.', weights: { habits: 3, accountability: 2 } },
      { label: 'I stay busy, but I am not sure the work is moving me forward.', weights: { growth: 2, clarity: 2 } },
    ],
  },
  {
    eyebrow: 'GET SPECIFIC',
    prompt: 'What kind of support would make the biggest difference?',
    helper: 'Choose the thing you wish you had more of right now.',
    options: [
      { label: 'Someone objective to help me think clearly.', weights: { clarity: 3, transition: 1 } },
      { label: 'A realistic plan with clear next steps.', weights: { clarity: 2, habits: 2 } },
      { label: 'Consistent accountability so I actually execute.', weights: { accountability: 4 } },
      { label: 'Help building routines that work in my actual life.', weights: { habits: 4 } },
    ],
  },
  {
    eyebrow: 'LAST QUESTION',
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
  clarity: {
    title: 'You may not need more motivation. You may need clarity.',
    copy: 'Your answers point toward competing priorities, overthinking, or uncertainty about what deserves your attention first. Coaching can give you a structured place to sort the noise, make a decision, and leave with a concrete next step.',
    service: 'Clarity & Direction Coaching',
    href: '/services#clarity',
    pattern: 'The pattern: too much mental load, not enough confident direction.',
  },
  accountability: {
    title: 'You seem to know a lot of the answers already.',
    copy: 'The gap is more likely between knowing and consistently doing. Coaching can help turn intentions into commitments, surface what keeps interrupting follow-through, and create an accountability rhythm that does not depend on feeling motivated.',
    service: 'Accountability Coaching',
    href: '/services#accountability',
    pattern: 'The pattern: clear intentions, inconsistent execution.',
  },
  habits: {
    title: 'The problem may be the system, not your ambition.',
    copy: 'Your answers point toward routines that are difficult to sustain in real life. Coaching can help simplify the plan, remove friction, build realistic habits, and adjust the environment around the behavior you are trying to keep.',
    service: 'Habit & Routine Coaching',
    href: '/services#habits',
    pattern: 'The pattern: repeated restarts without a system that holds.',
  },
  transition: {
    title: 'You are navigating a season where the old answer may no longer fit.',
    copy: 'Transitions create competing priorities, uncertainty, and pressure to make the “right” decision quickly. Coaching can help you clarify what matters now, evaluate the options, and move forward without pretending every unknown can be removed first.',
    service: 'Life Transition Coaching',
    href: '/services#transitions',
    pattern: 'The pattern: a meaningful change with too many variables to hold alone.',
  },
  growth: {
    title: 'You are not necessarily stuck. You may be ready for more intentional growth.',
    copy: 'Your answers suggest that you want more structure around the person, habits, and direction you are building toward. Coaching can create a recurring space to set priorities, test what is working, and keep development connected to your real life.',
    service: 'One-on-One Life Coaching',
    href: '/services#one-on-one',
    pattern: 'The pattern: capable and functioning, but wanting greater intention and momentum.',
  },
};

const emptyScores: Scores = { clarity: 0, accountability: 0, habits: 0, transition: 0, growth: 0 };

export function Assessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(questions.map(() => null));
  const [finished, setFinished] = useState(false);

  const scores = useMemo(() => {
    return answers.reduce<Scores>((total, answer, questionIndex) => {
      if (answer === null) return total;
      const option = questions[questionIndex].options[answer];
      Object.entries(option.weights).forEach(([key, value]) => {
        total[key as Category] += value ?? 0;
      });
      return total;
    }, { ...emptyScores });
  }, [answers]);

  const mentalHealthChoice = answers[4] === 3;
  const primaryCategory = (Object.entries(scores) as [Category, number][]).sort((a, b) => b[1] - a[1])[0][0];
  const result = results[primaryCategory];
  const current = questions[step];
  const selected = answers[step];
  const progress = finished ? 100 : ((step + 1) / questions.length) * 100;

  function choose(index: number) {
    setAnswers(currentAnswers => currentAnswers.map((value, i) => i === step ? index : value));
  }

  function next() {
    if (selected === null) return;
    if (step === questions.length - 1) {
      setFinished(true);
      return;
    }
    setStep(currentStep => currentStep + 1);
  }

  function back() {
    if (finished) {
      setFinished(false);
      setStep(questions.length - 1);
      return;
    }
    setStep(currentStep => Math.max(0, currentStep - 1));
  }

  function restart() {
    setAnswers(questions.map(() => null));
    setStep(0);
    setFinished(false);
  }

  return (
    <div className="funnel-shell glass glass-strong" id="find-your-fit">
      <style>{`
        .funnel-shell{border-radius:34px;padding:clamp(24px,4vw,44px);overflow:hidden}.funnel-top{display:flex;justify-content:space-between;gap:20px;align-items:end;margin-bottom:18px}.funnel-kicker{font-size:.65rem;letter-spacing:.18em;font-weight:800;color:#8b5b43}.funnel-counter{font-size:.72rem;color:#757a76}.funnel-progress{height:4px;background:rgba(39,46,41,.09);border-radius:999px;overflow:hidden;margin-bottom:34px}.funnel-progress span{display:block;height:100%;background:#5f6d61;border-radius:999px;transition:width .3s ease}.funnel-grid{display:grid;grid-template-columns:.72fr 1.28fr;gap:48px}.funnel-intro h2,.funnel-question h3,.funnel-result h3{font-family:var(--font-display);font-weight:560;letter-spacing:-.025em;color:#202621;margin:0}.funnel-intro h2{font-size:clamp(2rem,3.6vw,3.15rem);line-height:1.02}.funnel-intro>p{font-size:.88rem;line-height:1.65;color:#69706b;max-width:420px;margin:16px 0 0}.funnel-question h3{font-size:clamp(1.75rem,2.7vw,2.45rem);line-height:1.08;max-width:680px}.funnel-helper{font-size:.82rem;line-height:1.55;color:#727872;margin:10px 0 20px}.funnel-options{display:grid;gap:9px}.funnel-option{width:100%;display:grid;grid-template-columns:28px 1fr;gap:12px;align-items:start;text-align:left;border:1px solid rgba(48,57,50,.12);background:rgba(255,255,255,.28);border-radius:18px;padding:15px 16px;color:#313832;cursor:pointer;transition:.18s ease}.funnel-option:hover{background:rgba(255,255,255,.46);border-color:rgba(48,57,50,.22)}.funnel-option.selected{background:rgba(255,255,255,.66);border-color:rgba(82,103,87,.42);box-shadow:inset 0 0 0 1px rgba(82,103,87,.12)}.funnel-radio{width:22px;height:22px;border-radius:50%;border:1px solid rgba(49,61,51,.28);display:grid;place-items:center;margin-top:1px}.selected .funnel-radio{background:#5f6d61;border-color:#5f6d61;color:white}.funnel-option strong{display:block;font-size:.9rem;line-height:1.35}.funnel-option small{display:block;font-size:.75rem;line-height:1.45;color:#747a75;margin-top:4px}.funnel-actions{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:22px}.funnel-back{border:0;background:transparent;display:inline-flex;align-items:center;gap:6px;font-size:.78rem;font-weight:750;color:#626964;cursor:pointer;padding:10px 0}.funnel-next:disabled{opacity:.35;cursor:not-allowed;transform:none}.funnel-result{max-width:780px}.funnel-result-label{font-size:.66rem;letter-spacing:.17em;font-weight:800;color:#8b5b43;margin-bottom:10px}.funnel-result h3{font-size:clamp(2rem,3.7vw,3.35rem);line-height:1.01}.funnel-pattern{margin:18px 0 8px;font-family:var(--font-display);font-size:1.15rem;color:#3c463e}.funnel-result-copy{font-size:.9rem;line-height:1.68;color:#626964;max-width:700px}.funnel-recommendation{display:flex;align-items:center;justify-content:space-between;gap:18px;margin:24px 0;padding:17px 18px;border-radius:18px;background:rgba(255,255,255,.4);border:1px solid rgba(255,255,255,.5)}.funnel-recommendation span{font-size:.68rem;letter-spacing:.14em;color:#7f837f;display:block;margin-bottom:4px}.funnel-recommendation strong{font-family:var(--font-display);font-size:1.25rem}.funnel-clinical{padding:22px;border-radius:20px;background:rgba(255,255,255,.42);border:1px solid rgba(79,88,80,.12)}.funnel-clinical h3{font-size:1.8rem}.funnel-clinical p{font-size:.88rem;line-height:1.65;color:#626964}.funnel-restart{margin-top:14px}.funnel-start-note{display:flex;gap:8px;align-items:flex-start;margin-top:22px;font-size:.72rem;line-height:1.5;color:#757b76}.funnel-dot{width:7px;height:7px;border-radius:50%;background:#687568;flex:0 0 auto;margin-top:4px}@media(max-width:800px){.funnel-grid{grid-template-columns:1fr;gap:30px}.funnel-intro{max-width:560px}.funnel-top{align-items:center}.funnel-recommendation{align-items:flex-start;flex-direction:column}.funnel-actions{align-items:flex-end}}@media(max-width:520px){.funnel-shell{border-radius:26px}.funnel-option{padding:14px}.funnel-option strong{font-size:.86rem}.funnel-option small{font-size:.72rem}.funnel-actions{flex-wrap:wrap}.funnel-actions .button{margin-left:auto}}
      `}</style>

      <div className="funnel-top">
        <div>
          <div className="funnel-kicker">FIND YOUR STARTING POINT</div>
        </div>
        <div className="funnel-counter">{finished ? 'Your result' : `Question ${step + 1} of ${questions.length}`}</div>
      </div>
      <div className="funnel-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>

      {!finished ? (
        <div className="funnel-grid">
          <div className="funnel-intro">
            <h2>A few questions can make the real need easier to see.</h2>
            <p>Start broad. We will narrow it down together. There are no right answers and no automatic assumption that coaching is the right support.</p>
            <div className="funnel-start-note"><span className="funnel-dot" /><span>Your answers stay in this browser session and are only used to show your result.</span></div>
          </div>

          <div className="funnel-question" key={step}>
            <p className="eyebrow">{current.eyebrow}</p>
            <h3>{current.prompt}</h3>
            <p className="funnel-helper">{current.helper}</p>
            <div className="funnel-options" role="radiogroup" aria-label={current.prompt}>
              {current.options.map((option, index) => (
                <button
                  type="button"
                  key={option.label}
                  className={`funnel-option ${selected === index ? 'selected' : ''}`}
                  onClick={() => choose(index)}
                  role="radio"
                  aria-checked={selected === index}
                >
                  <span className="funnel-radio">{selected === index && <Check size={13} />}</span>
                  <span><strong>{option.label}</strong>{option.detail && <small>{option.detail}</small>}</span>
                </button>
              ))}
            </div>
            <div className="funnel-actions">
              <button className="funnel-back" type="button" onClick={back} disabled={step === 0} style={{ visibility: step === 0 ? 'hidden' : 'visible' }}><ArrowLeft size={15} /> Back</button>
              <button className="button button-dark funnel-next" type="button" disabled={selected === null} onClick={next}>{step === questions.length - 1 ? 'See what this points to' : 'Keep going'} <ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
      ) : mentalHealthChoice ? (
        <div className="funnel-clinical">
          <p className="funnel-result-label">BASED ON YOUR ANSWERS</p>
          <h3>Coaching may not be the right first step for what you are looking for.</h3>
          <p>You indicated that you are looking for mental-health treatment. Life coaching is designed for personal development, goal setting, accountability, decisions, and behavior change; it is not a substitute for licensed mental-health care.</p>
          <div className="button-row">
            <button className="button button-ghost" type="button" onClick={back}><ArrowLeft size={15} /> Review my answer</button>
          </div>
        </div>
      ) : (
        <div className="funnel-result">
          <p className="funnel-result-label">WHAT YOUR ANSWERS POINT TO</p>
          <h3>{result.title}</h3>
          <p className="funnel-pattern">{result.pattern}</p>
          <p className="funnel-result-copy">{result.copy}</p>
          <div className="funnel-recommendation">
            <div><span>BEST PLACE TO START</span><strong>{result.service}</strong></div>
            <Link className="text-link" href={result.href}>See this coaching option <ArrowRight size={15} /></Link>
          </div>
          <div className="button-row">
            <Link className="button button-dark" href="/book">Talk through my result <ArrowRight size={16} /></Link>
            <button className="button button-ghost" type="button" onClick={restart}><RotateCcw size={15} /> Start over</button>
          </div>
        </div>
      )}
    </div>
  );
}
