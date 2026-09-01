import { Compass, Target, Repeat2, BriefcaseBusiness, Sparkles, Waypoints } from "lucide-react";

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Coaching", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
];

export const services = [
  {
    icon: Compass,
    title: "Clarity & Direction",
    slug: "clarity-direction",
    eyebrow: "When everything feels scattered",
    copy: "Sort through the noise, name what matters now, and leave with a decision you can move on.",
    includes: ["Values + priority mapping", "Decision support", "Written next-step plan"],
  },
  {
    icon: Target,
    title: "1:1 Life Coaching",
    slug: "one-on-one",
    eyebrow: "Personalized, structured support",
    copy: "Turn meaningful goals into a realistic plan with focused sessions, honest reflection, and consistent follow-through.",
    includes: ["Goal planning", "Action plans", "Progress reviews"],
  },
  {
    icon: Repeat2,
    title: "Accountability & Habits",
    slug: "accountability-habits",
    eyebrow: "You know what to do. Now do it consistently.",
    copy: "Build routines that fit your real life, identify friction, and create accountability that keeps momentum visible.",
    includes: ["Weekly priorities", "Habit tracking", "Obstacle review"],
  },
  {
    icon: BriefcaseBusiness,
    title: "Career & Life Transitions",
    slug: "career-transitions",
    eyebrow: "For the season between what was and what is next",
    copy: "Think through career moves, identity shifts, leadership growth, and major transitions without rushing the decision.",
    includes: ["Career clarity", "Strengths + values", "Transition planning"],
  },
  {
    icon: Sparkles,
    title: "Confidence & Personal Growth",
    slug: "confidence-growth",
    eyebrow: "Move before certainty arrives",
    copy: "Strengthen decision confidence, boundaries, communication, and your ability to act even when uncertainty is still present.",
    includes: ["Confidence practices", "Boundaries", "Communication"],
  },
  {
    icon: Waypoints,
    title: "Leadership Development",
    slug: "leadership-development",
    eyebrow: "Lead yourself before you lead others",
    copy: "Develop clearer communication, stronger decisions, personal effectiveness, and a leadership style that feels grounded.",
    includes: ["Leadership identity", "Communication", "Personal effectiveness"],
  },
];

export const faqs = [
  { q: "What is life coaching?", a: "Life coaching is a collaborative personal-development process focused on goals, decisions, habits, accountability, and forward action. It is not medical or mental-health treatment." },
  { q: "How is coaching different from therapy?", a: "Coaching is generally future-focused and action-oriented. Therapy may diagnose and treat mental-health conditions and is provided by licensed clinicians. Coaching is not a substitute for therapy, psychiatric care, or crisis services." },
  { q: "Do I need to know exactly what I want?", a: "No. Clarifying what matters can be part of the work. You only need enough willingness to look honestly at where you are and take action between sessions." },
  { q: "How long does coaching last?", a: "Some people need one focused clarity session. Others benefit from a 4-, 8-, or 12-week engagement or ongoing monthly support. The right length depends on the goal and level of accountability needed." },
  { q: "Will you tell me what to do?", a: "Not in the sense of making your decisions for you. Coaching should improve your judgment, not replace it. Expect thoughtful questions, direct feedback, structure, and practical next steps." },
  { q: "What happens between sessions?", a: "Depending on the program, you may complete reflection prompts, track habits, test an action step, or send a brief accountability check-in." },
];

export const process = [
  ["01", "Discover", "Understand what feels stuck, what is changing, and what you actually want."],
  ["02", "Define", "Clarify priorities, values, outcomes, and what success needs to look like."],
  ["03", "Design", "Build a practical plan around your real schedule, constraints, and responsibilities."],
  ["04", "Execute", "Take focused action with accountability, reflection, and support."],
  ["05", "Review", "Measure what is working, adjust what is not, and build independence."],
] as const;
