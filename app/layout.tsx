import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Link from "next/link";
import { nav } from "@/data/site";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: "Forward Coaching", template: "%s | Forward Coaching" },
  description: "Practical life coaching for clarity, accountability, habits, career transitions, and personal growth.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <style>{`
          body{background:#f3f1ec;color:#121922}
          .ambient{opacity:.24;filter:blur(110px)}
          .ambient-one{background:#b8c3ce!important}
          .ambient-two{background:#c8ced3!important}
          .glass,.glass-strong{background:#f6f6f4;border-color:#d9dde1;box-shadow:none;backdrop-filter:none;-webkit-backdrop-filter:none}
          .glass-mega:before{display:none}
          .site-header{background:#f7f7f5!important;border:1px solid #d9dde1!important;box-shadow:none!important;border-radius:20px!important}
          .brand-mark{background:#111820;color:#fff}
          .brand small,.desktop-nav{color:#65707b}
          .desktop-nav a:hover{color:#0e1721}
          .button{box-shadow:none!important}
          .button-dark{background:#111820;color:#fff}
          .button-dark:hover{background:#1b2a3a}
          .button-ghost{background:#eef1f3;border-color:#d2d8de;color:#182431}
          .eyebrow,.mini-label{color:#405b76}
          .split-heading h2,.services-intro h2,.two-col h2,.resource-banner h2,.final-cta h2,.site-footer h2{color:#111820}
          .split-heading h2,.services-intro h2,.two-col h2{font-size:clamp(2.15rem,3.8vw,3.5rem)!important;line-height:1.02!important}
          .page-hero h1{font-size:clamp(2.9rem,5.3vw,4.75rem)!important;line-height:.98!important;color:#111820}
          .page-hero>p:last-child,.split-heading>p,.services-intro>p,.section-copy,.content-card p,.content-card li{color:#68717b}
          .content-card{background:#f7f7f5!important;border-color:#d9dde1!important;box-shadow:none!important}
          .content-card h2,.content-card h3{color:#111820;font-size:clamp(1.65rem,2.4vw,2.15rem)!important}
          .service-card h3{color:#111820;font-size:1.75rem!important}
          .service-card p{color:#68717b}
          .pain-card{background:#f6f6f4!important;border-color:#d9dde1!important;box-shadow:none!important}
          .pain-card p{color:#182431;font-size:1.35rem!important}
          .faq-preview article{background:#f7f7f5!important;border-color:#d9dde1!important;box-shadow:none!important}
          .faq-preview h3{color:#111820}
          .faq-preview p{color:#68717b}
          .form-card,.disclaimer-box{background:#f7f7f5!important;border-color:#d9dde1!important;box-shadow:none!important}
          .field input,.field textarea,.field select{background:#fff;border-color:#cfd6dc;color:#111820}
          .text-link,.text-button{color:#20364d}
          .site-footer{background:#111820!important;border-color:#111820!important;color:#fff!important;box-shadow:none!important}
          .site-footer h2{color:#fff!important;font-size:2.25rem!important}
          .site-footer .eyebrow{color:#8ea5bb}
          .footer-links,.fine-print{color:#aeb8c1}
          @media(max-width:620px){.page-hero h1{font-size:2.9rem!important}.split-heading h2,.services-intro h2,.two-col h2{font-size:2.45rem!important}.site-footer h2{font-size:2rem!important}}
        `}</style>
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <header className="site-header glass glass-strong">
          <Link className="brand" href="/" aria-label="Forward Coaching home">
            <span className="brand-mark">F</span>
            <span>FORWARD <small>COACHING</small></span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
          <Link className="button button-dark button-small" href="/book">Book a call</Link>
        </header>
        {children}
        <footer className="site-footer glass glass-strong">
          <div>
            <p className="eyebrow">FORWARD COACHING</p>
            <h2>Bring the situation you&apos;re facing. We&apos;ll start there.</h2>
          </div>
          <div className="footer-links">
            <Link href="/services">Coaching</Link><Link href="/resources">Resources</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link>
            <Link href="/disclaimer">Coaching disclaimer</Link>
          </div>
          <p className="fine-print">Coaching supports personal development, goal setting, accountability, and decision-making. It is not therapy, medical care, psychiatric treatment, legal advice, financial advice, or crisis care.</p>
        </footer>
      </body>
    </html>
  );
}
