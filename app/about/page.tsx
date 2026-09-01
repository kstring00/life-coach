export const metadata = { title: 'About', description: 'Meet the coach and learn the philosophy behind practical, grounded life coaching.' };

export default function AboutPage(){
  return <main>
    <section className="section-shell page-hero"><p className="eyebrow">ABOUT THE COACH</p><h1>Support that respects your judgment.</h1><p>This page is intentionally structured so the coach can add his personal story, training, credentials, values, and photos without turning the page into a biography that forgets the client.</p></section>
    <section className="section-shell section-pad content-grid">
      <article className="content-card glass glass-strong"><p className="eyebrow">WHY I COACH</p><h2>Growth works better when it becomes concrete.</h2><p>Coaching should help you name what matters, notice what keeps interrupting progress, and translate insight into decisions and behaviors you can actually repeat.</p></article>
      <article className="content-card glass"><p className="eyebrow">MY APPROACH</p><h2>Warm, direct, structured.</h2><p>Expect thoughtful questions, honest feedback, practical planning, and accountability without shame. The aim is not dependence on a coach—it is stronger self-leadership.</p></article>
      <article className="content-card glass"><p className="eyebrow">VALUES</p><h2>Clarity over hype.</h2><ul><li>Respect the person, not just the goal.</li><li>Be specific enough to act.</li><li>Build systems that fit real life.</li><li>Review progress without judgment.</li><li>Tell the truth about what coaching can and cannot do.</li></ul></article>
      <article className="content-card glass"><p className="eyebrow">PERSONAL DETAILS</p><h2>Make this unmistakably his.</h2><p>Add a grounded portrait, a short origin story, relevant education or certifications, professional experience, hobbies, and a few details that help clients understand the human being they will actually be talking to.</p></article>
    </section>
  </main>
}
