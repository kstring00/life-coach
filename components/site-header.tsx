'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { nav } from '@/data/site';

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const previousY = useRef(0);

  useEffect(() => {
    previousY.current = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const previous = previousY.current;

      if (current > previous && current > 150) {
        setHidden(true);
      } else if (current < previous) {
        setHidden(false);
      }

      if (current <= 150) setHidden(false);
      previousY.current = current;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header glass glass-strong smart-header ${hidden ? 'smart-header-hidden' : ''}`}>
      <Link className="brand" href="/" aria-label="GrowthGains home">
        <span className="brand-mark">GG</span>
        <span>GrowthGains <small>LIFE COACHING</small></span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>

      <Link className="button button-dark button-small" href="/book">Book a call</Link>
    </header>
  );
}
