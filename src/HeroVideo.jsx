import React, { useEffect, useRef, useState } from 'react';

/*
  Hero z filmem w tle: trzy ujęcia odtwarzane po kolei z przenikaniem.
  Interakcja: rozdziały na dole (klik = przejście do ujęcia, pasek postępu), pauza/odtwarzanie,
  delikatny ruch kadru za kursorem. Filmy: Pexels (licencja Pexels) — do podmiany na nagrania z warsztatu.
*/
export const HERO_CLIPS = [
  { src: 'media/hero-mechanik.mp4', poster: 'media/hero-mechanik.jpg', tag: '01', title: 'Diagnoza', text: 'Sprawdzamy, dlaczego filtr się zapchał' },
  { src: 'media/hero-wydech.mp4', poster: 'media/hero-wydech.jpg', tag: '02', title: 'Demontaż', text: 'Filtr prosto spod auta trafia na maszynę' },
  { src: 'media/hero-myjka.mp4', poster: 'media/hero-myjka.jpg', tag: '03', title: 'Czyszczenie', text: 'Płukanie pod ciśnieniem do czystej ceramiki' },
];

export default function HeroVideo({ clips = HERO_CLIPS, children }) {
  const [active, setActive] = useState(0);
  const [prog, setProg] = useState(0);
  const [playing, setPlaying] = useState(true);
  const vids = useRef([]);
  const sec = useRef(null);
  const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => { if (reduce) setPlaying(false); }, []);

  useEffect(() => {
    vids.current.forEach((v, i) => {
      if (!v) return;
      if (i === active) {
        v.currentTime = 0;
        if (playing) v.play().catch(() => setPlaying(false));
      } else v.pause();
    });
    setProg(0);
  }, [active]);

  useEffect(() => {
    const v = vids.current[active];
    if (!v) return;
    if (playing) v.play().catch(() => setPlaying(false)); else v.pause();
  }, [playing]);

  // Ruch kadru za kursorem (tylko desktop)
  useEffect(() => {
    const el = sec.current;
    if (!el || reduce || !window.matchMedia('(hover: hover)').matches) return;
    let raf = 0;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => el.style.setProperty('--px', `${(-x * 18).toFixed(1)}px`) || el.style.setProperty('--py', `${(-y * 12).toFixed(1)}px`));
    };
    el.addEventListener('pointermove', onMove);
    return () => { el.removeEventListener('pointermove', onMove); cancelAnimationFrame(raf); };
  }, []);

  const onTime = (i) => (e) => { if (i === active) { const v = e.currentTarget; setProg(v.duration ? v.currentTime / v.duration : 0); } };
  const onEnd = (i) => () => { if (i === active) setActive((active + 1) % clips.length); };

  return (
    <section className="hero hero--video" ref={sec}>
      <div className="hero-media" aria-hidden="true">
        {clips.map((c, i) => (
          <video key={c.src} ref={(el) => (vids.current[i] = el)} className={i === active ? 'is-on' : ''} src={c.src} poster={c.poster}
            muted playsInline preload={i === 0 ? 'auto' : 'metadata'} autoPlay={i === 0 && !reduce} onTimeUpdate={onTime(i)} onEnded={onEnd(i)} />
        ))}
      </div>
      <div className="hero-shade" aria-hidden="true" />
      {children}
      <div className="hero-chapters">
        <div className="wrap">
          <button className="hero-play" onClick={() => setPlaying(!playing)} aria-label={playing ? 'Zatrzymaj film' : 'Odtwórz film'}>
            {playing
              ? <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
              : <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" /></svg>}
          </button>
          {clips.map((c, i) => (
            <button key={c.src} className={'chapter' + (i === active ? ' is-on' : '')} onClick={() => { setActive(i); setPlaying(true); }} aria-pressed={i === active}>
              <span className="chapter-bar"><i style={{ transform: `scaleX(${i === active ? prog : i < active ? 1 : 0})` }} /></span>
              <span className="chapter-tag">{c.tag}</span>
              <b>{c.title}</b>
              <span className="chapter-text">{c.text}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
