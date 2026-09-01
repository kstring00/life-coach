'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const questions = [
  'I have goals, but I struggle to follow through consistently.',
  'I am facing a decision or transition and need objective structure.',
  'I feel scattered by too many priorities.',
  'External accountability would help me take action.',
  'I am willing to do work between sessions, not only talk about change.',
  'I am looking for personal development rather than mental-health treatment.'
];

export function Assessment() {
  const [answers, setAnswers] = useState<boolean[]>(questions.map(() => false));
  const [submitted, setSubmitted] = useState(false);
  const score = useMemo(() => answers.filter(Boolean).length, [answers]);

  const result = score >= 5
    ? { title: 'Coaching could be a strong fit.', copy: 'You sound ready for structured support, accountability, and action. A consultation can help narrow the best starting point.' }
    : score >= 3
      ? { title: 'Start with a clarity conversation.', copy: 'A focused consultation or single clarity session may be enough to identify the real need before committing to a longer program.' }
      : { title: 'You may not need ongoing coaching right now.', copy: 'That is completely fine. Explore the free resources, or book a short conversation if you want help deciding what kind of support makes sense.' };

  return (
    <div className="assessment glass glass-strong">
      <div className="assessment-heading">
        <p className="eyebrow">60-SECOND FIT CHECK</p>
        <h3>Is coaching actually right for you?</h3>
        <p>Choose every statement that feels true today. This is a reflection tool, not a diagnosis.</p>
      </div>
      {!submitted ? (
        <>
          <div className="question-list">
            {questions.map((question, index) => (
              <button
                type="button"
                key={question}
                className={`question ${answers[index] ? 'selected' : ''}`}
                onClick={() => setAnswers(current => current.map((value, i) => i === index ? !value : value))}
                aria-pressed={answers[index]}
              >
                <span className="check-box">{answers[index] && <Check size={15} />}</span>
                <span>{question}</span>
              </button>
            ))}
          </div>
          <button className="button button-dark" type="button" onClick={() => setSubmitted(true)}>See my result <ArrowRight size={17} /></button>
        </>
      ) : (
        <div className="assessment-result">
          <span className="result-score">{score}/6</span>
          <h4>{result.title}</h4>
          <p>{result.copy}</p>
          <div className="button-row">
            <Link className="button button-dark" href="/book">Book a consultation <ArrowRight size={17} /></Link>
            <button className="text-button" type="button" onClick={() => setSubmitted(false)}>Review answers</button>
          </div>
        </div>
      )}
    </div>
  );
}
