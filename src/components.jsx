import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FIRMA, MENU, USLUGI, MIASTA, MIASTA_ROZBUDOWA, FAQ_GLOWNA, WPISY } from './data.js';

/* ───────── Routing (hash) ───────── */
export const go = (to) => {
  if (location.hash.replace('#', '') === to) { window.scrollTo({ top: 0 }); return; }
  location.hash = to;
};
export function L({ to = '', children, className, ...rest }) {
  return (
    <a href={'#' + to} className={className} onClick={(e) => { if (e.metaKey || e.ctrlKey) return; e.preventDefault(); go(to); }} {...rest}>
      {children}
    </a>
  );
}
export const scrollToId = (id) => (e) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

/* ───────── Ikony (linia 1.75) ───────── */
const P = {
  phone: <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  pin: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  x: <path d="M7 7l10 10M17 7 7 17" />,
  plus: <path d="M12 5v14M5 12h14" />,
  truck: <><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></>,
  gauge: <><path d="M4 16a8 8 0 1 1 16 0" /><path d="m12 16-4-5" /><path d="M4 19h16" /></>,
  flame: <path d="M12 21c-3.9 0-6.5-2.6-6.5-6 0-4 3.5-5.8 3.5-10 2.5 1.5 4 3.5 4 6 1-1 1.5-2 1.5-3.5 2.4 1.8 4 4.5 4 7.5 0 3.4-2.6 6-6.5 6z" />,
  oil: <><path d="M12 3s-6 6.8-6 11a6 6 0 0 0 12 0c0-4.2-6-11-6-11z" /><path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5" /></>,
  lamp: <><path d="M4 8h3l1-2h8l1 2h3v9H4z" /><path d="M8 12h2m4 0h2m-6 2.5h4" /></>,
  turtle: <><path d="M4 16a8 8 0 1 1 16 0" /><path d="m12 16-5-2" /><path d="M7.5 8.5 9 10M12 6v2M16.5 8.5 15 10" /></>,
  fuel: <><path d="M5 20V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v15M4 20h11M5 10h9" /><path d="M14 8h2l2 2v7a1.5 1.5 0 0 0 3 0V9l-3-3" /></>,
  shield: <><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
  receipt: <><path d="M6 3h12v18l-2-1.5L14 21l-2-1.5L10 21l-2-1.5L6 21z" /><path d="M9 8h6M9 11.5h6M9 15h3" /></>,
  search: <><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  ban: <><circle cx="12" cy="12" r="9" /><path d="m5.6 5.6 12.8 12.8" /></>,
  lr: <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />,
  wrench: <path d="M14.5 6.5a4 4 0 0 0 5 5l-8.8 8.8a2.1 2.1 0 0 1-3-3L16.5 8.5" />,
  route: <><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="6" r="2.5" /><path d="M8.5 18H16a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h7.5" /></>,
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5z" />,
  instagram: <><rect x="4" y="4" width="16" height="16" rx="4.5" /><circle cx="12" cy="12" r="3.6" /><circle cx="16.8" cy="7.2" r=".6" fill="currentColor" /></>,
  youtube: <><rect x="3" y="6" width="18" height="12" rx="3.5" /><path d="m10.5 9.5 4 2.5-4 2.5z" /></>,
  whatsapp: <><path d="M4 20l1.3-4A8 8 0 1 1 8.3 19z" /><path d="M9 9.5c.3 2.5 2.5 4.6 5 5l1.2-1.2-1.8-1-1 .8a4 4 0 0 1-1.9-1.9l.8-1-1-1.8z" /></>,
  /* ikony usług (48) */
  dpf: <><ellipse cx="12" cy="12" rx="8.5" ry="8.5" /><path d="M7 7v10M10.3 4.2v15.6M13.7 4.2v15.6M17 7v10M4.2 10.3h15.6M4.2 13.7h15.6M7 7h10M7 17h10" /></>,
  cat: <><rect x="6" y="6" width="12" height="12" rx="3" /><path d="M2 12h4M18 12h4M9 9.5h6M9 12h6M9 14.5h6" /></>,
  scr: <><rect x="7" y="8" width="13" height="10" rx="3" /><path d="M2 13h5M10 11v4M13.5 11v4M17 11v4" /><path d="M5 3.5s-1.6 1.8-1.6 2.9a1.6 1.6 0 0 0 3.2 0C6.6 5.3 5 3.5 5 3.5z" /></>,
  disc: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2.5" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2" /><path d="M17.5 5.5a8 8 0 0 1 1 13" strokeWidth="3" /></>,
  snow: <><path d="M12 2v20M4.9 7l14.2 10M4.9 17L19.1 7" /><path d="M9 4l3 2 3-2M9 20l3-2 3 2" /></>,
  manifold: <><path d="M3 6h3v5a3 3 0 0 0 3 3h11" /><path d="M9 6h3v4a2 2 0 0 0 2 2" /><path d="M15 6h3v3a1 1 0 0 0 1 1h1" /><path d="M20 12v4" /></>,
};
export function I({ n, s, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={s || 1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {P[n]}
    </svg>
  );
}

/* Wartość do uzupełnienia przez klienta */
export const Ph = ({ children }) => <span className="ph" title="Do uzupełnienia przez klienta">{children}</span>;

/* ───────── Logo (od klienta: osobno znak i napis, ustawione obok siebie) ───────── */
export function Logo({ light }) {
  return (
    <L to="" className={'logo' + (light ? ' logo--light' : '')} aria-label="czystyfiltr.pl, strona główna">
      <img className="logo-znak" src="media/logo-znak.png" alt="" width="626" height="439" />
      <img className="logo-napis" src="media/logo-napis.png" alt="czystyfiltr.pl" width="845" height="135" />
    </L>
  );
}

/* ───────── Przekrój filtra DPF (kanały w szachownicę) ───────── */
const rnd = (i) => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
export function FilterFace({ mode = 'clean', split = 0.5, n = 20, id = 'f', className = 'filter-face', label }) {
  const size = 400, pad = 26, cell = (size - pad * 2) / n, gap = cell * 0.2;
  const cells = useMemo(() => {
    const out = [];
    const c = size / 2, R = size / 2 - pad + 2;
    for (let r = 0; r < n; r++) for (let k = 0; k < n; k++) {
      const x = pad + k * cell, y = pad + r * cell;
      const cx = x + cell / 2 - c, cy = y + cell / 2 - c;
      if (cx * cx + cy * cy > R * R) continue;
      out.push({ x, y, k, r, plug: (r + k) % 2 === 0, j: rnd(r * 97 + k) , j2: rnd(r * 13 + k * 7 + 5) });
    }
    return out;
  }, [n]);
  const isDirty = (cl) => {
    if (mode === 'dirty') return true;
    if (mode === 'clean') return false;
    // granica ukośna: lewa-dolna część brudna
    const t = (cl.x + (size - cl.y) * 0.35) / (size * 1.35);
    return t < split;
  };
  const fill = (cl) => {
    if (isDirty(cl)) {
      if (cl.j2 > 0.93) return '#8C8A84'; // popiół
      const v = 18 + Math.floor(cl.j * 22);
      return `rgb(${v},${v + 2},${v + 4})`;
    }
    return cl.plug ? '#E9E4D8' : '#3B444B';
  };
  return (
    <svg className={className} viewBox={`0 0 ${size} ${size}`} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : 'true'}>
      <defs>
        <radialGradient id={id + 'can'} cx="40%" cy="35%" r="75%">
          <stop offset="0" stopColor="#B9C2C8" /><stop offset=".6" stopColor="#7D8890" /><stop offset="1" stopColor="#4E5860" />
        </radialGradient>
        <clipPath id={id + 'clip'}><circle cx={size / 2} cy={size / 2} r={size / 2 - pad + 3} /></clipPath>
      </defs>
      <circle cx={size / 2} cy={size / 2} r={size / 2 - 4} fill={`url(#${id}can)`} />
      <circle cx={size / 2} cy={size / 2} r={size / 2 - pad + 6} fill="#2A3035" />
      <g clipPath={`url(#${id}clip)`}>
        <rect x="0" y="0" width={size} height={size} fill={mode === 'dirty' ? '#2A2E31' : '#CFC8B8'} />
        {mode === 'split' && <rect x="0" y="0" width={size} height={size} fill="#CFC8B8" />}
        {cells.map((cl, i) => (
          <rect key={i} x={cl.x + gap / 2} y={cl.y + gap / 2} width={cell - gap} height={cell - gap} rx={1.2} fill={fill(cl)} />
        ))}
      </g>
      <circle cx={size / 2} cy={size / 2} r={size / 2 - pad + 4} fill="none" stroke="#1C2126" strokeWidth="5" />
      <circle cx={size / 2} cy={size / 2} r={size / 2 - 4} fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" />
    </svg>
  );
}

export function HeroFilter() {
  const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [split, setSplit] = useState(reduce ? 0.5 : 1.05);
  useEffect(() => {
    if (reduce) return;
    let raf, start;
    const from = 1.05, to = 0.5, dur = 1800;
    const tick = (t) => {
      if (!start) start = t + 300;
      const p = Math.min(1, Math.max(0, (t - start) / dur));
      const e = 1 - Math.pow(1 - p, 3);
      setSplit(from + (to - from) * e);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div className="filter-wrap">
      <FilterFace mode="split" split={split} n={22} id="hero" label="Przekrój filtra DPF: po lewej kanały zatkane sadzą, po prawej czyste" />
      <span className="filter-tag filter-tag--before">przed</span>
      <span className="filter-tag filter-tag--after">po</span>
    </div>
  );
}

/* ───────── Wydruk z badania (przykład) ───────── */
export function Receipt({ compact }) {
  return (
    <div className="receipt" role="img" aria-label="Przykładowy wydruk z badania przeciwciśnienia: przed 186 mbar, po 34 mbar">
      <div className="receipt-title">BADANIE PRZECIWCIŚNIENIA</div>
      <span className="receipt-stamp">PRZYKŁAD</span>
      <div className="receipt-row"><span>Zlecenie</span><span>CF/0412</span></div>
      <div className="receipt-row"><span>Typ</span><span>DPF osobowy</span></div>
      <div className="receipt-row"><span>Przepływ</span><span>300 m³/h</span></div>
      <div className="receipt-sep" />
      <div className="receipt-row"><span>PRZED</span><b>186 mbar</b></div>
      <div className="receipt-bar"><i style={{ width: '93%' }} /></div>
      <div className="receipt-row"><span>PO</span><b>34 mbar</b></div>
      <div className="receipt-bar receipt-bar--ok"><i style={{ width: '17%' }} /></div>
      {!compact && <><div className="receipt-sep" />
        <div className="receipt-row"><span>Spadek oporu</span><b>−82%</b></div>
        <div className="receipt-row"><span>Wkład</span><span>bez pęknięć</span></div></>}
      <div className="receipt-ok">✓ FILTR DROŻNY</div>
    </div>
  );
}

/* ───────── Nagłówek ───────── */
export function Topbar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="topbar-items">
          <span className="topbar-item"><I n="pin" />{FIRMA.ulica}, {FIRMA.kod} {FIRMA.miasto}</span>
          <span className="topbar-item"><I n="clock" />{FIRMA.godziny || <Ph>godziny otwarcia</Ph>}</span>
        </div>
        <div className="topbar-items">
          <span className="topbar-item"><I n="truck" />Kurier w obie strony w cenie</span>
          <a className="topbar-item" href={FIRMA.telefonHref}><I n="phone" />{FIRMA.telefon}</a>
        </div>
      </div>
    </div>
  );
}

export function Header({ route }) {
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  useEffect(() => { setOpen(false); setDd(false); }, [route]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);
  const active = (item) => route === item.to || (item.children && item.children.includes(route));
  const usl = (slug) => USLUGI.find((u) => u.slug === slug);
  return (
    <>
      <Topbar />
      <header className="header">
        <div className="wrap">
          <Logo />
          <nav className="nav" aria-label="Główne menu">
            {MENU.map((m) => m.children ? (
              <div key={m.to} className={'nav-item' + (dd ? ' open' : '')} onMouseLeave={() => setDd(false)}>
                <button className="nav-link" aria-expanded={dd} aria-current={active(m) ? 'page' : undefined} onClick={() => setDd(!dd)}>{m.label}<I n="chevron" /></button>
                <div className="dropdown">
                  {m.children.map((c) => <L key={c} to={c}><I n={usl(c).ikona} s={1.5} />{usl(c).nazwa}</L>)}
                  <L to="oferta" className="all">Cała oferta</L>
                </div>
              </div>
            ) : (
              <div key={m.to} className="nav-item"><L to={m.to} className="nav-link" aria-current={active(m) ? 'page' : undefined}>{m.label}</L></div>
            ))}
          </nav>
          <L to="zamow-odbior" className="btn btn--primary header-cta"><I n="truck" />Zamów odbiór filtra</L>
          <button className="burger" aria-label="Otwórz menu" aria-expanded={open} onClick={() => setOpen(true)}><I n="menu" /></button>
        </div>
      </header>
      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mobile-menu-top">
            <Logo light />
            <button className="burger" aria-label="Zamknij menu" onClick={() => setOpen(false)}><I n="close" /></button>
          </div>
          <nav>
            <L to="">Strona główna</L>
            {MENU.map((m) => (
              <React.Fragment key={m.to}>
                <L to={m.to}>{m.label}</L>
                {m.children && m.children.map((c) => <L key={c} to={c} className="sub">{usl(c).nazwa}</L>)}
              </React.Fragment>
            ))}
          </nav>
          <div className="btn-row">
            <L to="zamow-odbior" className="btn btn--primary btn--lg"><I n="truck" />Zamów odbiór</L>
            <a href={FIRMA.telefonHref} className="btn btn--ghost btn--lg" style={{ color: 'var(--on-dark)' }}><I n="phone" />{FIRMA.telefon}</a>
          </div>
        </div>
      )}
      <div className="mobile-bar">
        <a href={FIRMA.telefonHref} className="btn btn--ghost"><I n="phone" />Zadzwoń</a>
        <L to="zamow-odbior" className="btn btn--primary"><I n="truck" />Zamów odbiór</L>
      </div>
    </>
  );
}

/* ───────── Stopka ───────── */
export function Socials() {
  return (
    <div className="socials">
      {FIRMA.social.map((s) => <a key={s.id} href="#" onClick={(e) => e.preventDefault()} aria-label={s.label + ' (link do uzupełnienia)'} title={s.label + ' — link do uzupełnienia'}><I n={s.id} /></a>)}
    </div>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="stack">
            <Logo light />
            <p>Czyszczenie filtrów DPF / FAP, katalizatorów, układów SCR oraz mycie ciśnieniowe kolektorów i części. Lubań i kurierem z całej Polski.</p>
            <span className="no-dpf"><I n="ban" />Nie usuwamy i nie wycinamy filtrów DPF</span>
            <Socials />
          </div>
          <div>
            <h4>Usługi</h4>
            <ul>{USLUGI.map((u) => <li key={u.slug}><L to={u.slug}>{u.nazwa}</L></li>)}<li><L to="warsztat">Warsztat: hamulce, olej, klimatyzacja</L></li><li><L to="cennik">Cennik i gwarancja</L></li><li><L to="jak-to-dziala">Jak to działa</L></li></ul>
          </div>
          <div>
            <h4>Obszar działania</h4>
            <ul>
              <li><L to="kontakt">Czyszczenie DPF Lubań</L></li>
              {MIASTA.map((m) => <li key={m.slug}><L to={m.slug}>Czyszczenie DPF {m.nazwa}</L></li>)}
              <li className="muted">Kurierem z całej Polski</li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <address>
              <span>{FIRMA.ulica}</span>
              <span>{FIRMA.kod} {FIRMA.miasto}</span>
              <a href={FIRMA.telefonHref}>tel. {FIRMA.telefon}</a>
              <span>{FIRMA.email || <Ph>e-mail</Ph>}</span>
              <span>{FIRMA.godziny || <Ph>godziny otwarcia</Ph>}</span>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 czystyfiltr.pl · <L to="polityka-prywatnosci">Polityka prywatności</L> · <L to="regulamin">Regulamin</L> · <L to="zrodla-zdjec">Źródła zdjęć</L></span>
          <span>Realizacja: <a href="https://olekcodetech.pl" target="_blank" rel="noopener">OlekCodeTech</a></span>
        </div>
      </div>
    </footer>
  );
}

export function Cookie() {
  const [show, setShow] = useState(() => { try { return !localStorage.getItem('cf-cookie'); } catch { return true; } });
  if (!show) return null;
  const close = (v) => { try { localStorage.setItem('cf-cookie', v); } catch { } setShow(false); };
  return (
    <div className="cookie" role="region" aria-label="Zgody na pliki cookies">
      <b>Pliki cookies</b>
      <p>Używamy niezbędnych cookies do działania strony. Za Twoją zgodą także analitycznych (Google Analytics) i do wyświetlenia mapy Google. <L to="polityka-prywatnosci">Polityka prywatności</L></p>
      <div className="btn-row">
        <button className="btn btn--primary btn--sm" onClick={() => close('all')}>Akceptuję wszystkie</button>
        <button className="btn btn--ghost btn--sm" onClick={() => close('min')}>Tylko niezbędne</button>
      </div>
    </div>
  );
}

/* ───────── Hero podstrony ───────── */
export function PageHero({ crumbs = [], eyebrow, title, lead, children, art = 'filter', img = 'media/wklady.jpg' }) {
  return (
    <section className={'page-hero' + (art !== 'none' ? ' page-hero--img' : '')}>
      {art !== 'none' && <img className="page-hero-bg" src={img} alt="" aria-hidden="true" />}
      <div className="wrap">
        <div className="page-hero-copy">
          <ol className="crumbs" aria-label="Okruszki">
            <li><L to="">Strona główna</L></li>
            {crumbs.map((c, i) => <li key={i}>{c.to !== undefined ? <L to={c.to}>{c.label}</L> : c.label}</li>)}
          </ol>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

/* ───────── Sekcje wspólne ───────── */
export function Objawy({ items }) {
  return (
    <div className="grid grid-3">
      {items.map((o) => (
        <div className="symptom" key={o.tytul}>
          <div className="symptom-icon"><I n={o.ikona} /></div>
          <div><h3>{o.tytul}</h3><p>{o.opis}</p></div>
        </div>
      ))}
    </div>
  );
}

export function UslugiGrid() {
  return (
    <div className="grid grid-4">
      {USLUGI.map((u) => (
        <L to={u.slug} className="service service--photo" key={u.slug}>
          <div className="service-img"><img src={u.foto} alt="" loading="lazy" /></div>
          <h3>{u.nazwa}</h3>
          <p>{u.karta}</p>
          <div className="service-foot"><span>od <Ph>cena</Ph> brutto</span><span className="link-arrow">Szczegóły<I n="arrow" /></span></div>
        </L>
      ))}
    </div>
  );
}

export function Kroki({ items, dark }) {
  return (
    <ol className="steps" style={{ listStyle: 'none' }}>
      {items.map((k, i) => (
        <li className="step" key={k.tytul}>
          <span className="step-num">{i + 1}</span>
          <h3>{k.tytul}</h3>
          <p>{k.opis}</p>
        </li>
      ))}
    </ol>
  );
}

export function BeforeAfter() {
  return (
    <div className="compare">
      <figure className="compare-item">
        <img src="media/dpf-zapchany.jpg" alt="Czoło filtra DPF zatkane sadzą i popiołem" loading="lazy" />
        <figcaption><span className="filter-tag filter-tag--before">Przed</span>Kanały zatkane sadzą i popiołem</figcaption>
      </figure>
      <figure className="compare-item">
        <img src="media/dpf-czysty.jpg" alt="Czoło filtra DPF po czyszczeniu, drożne kanały" loading="lazy" />
        <figcaption><span className="filter-tag filter-tag--after">Po</span>Drożne kanały, czysta ceramika</figcaption>
      </figure>
    </div>
  );
}

export function Photo({ src, alt, caption, ratio = '4 / 3', className = '' }) {
  return (
    <figure className={'photo ' + className} style={{ aspectRatio: ratio }}>
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={i} open={i === 0}>
          <summary>{f.q}<I n="plus" /></summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/* Mapa obszaru — schemat (w WordPressie: mapa Google po zgodzie cookies) */
const MAP = { lon0: 14.85, lat0: 51.33, k: 956, cos: Math.cos(51.1 * Math.PI / 180) };
const pr = (lat, lon) => [(lon - MAP.lon0) * MAP.cos * MAP.k, (MAP.lat0 - lat) * MAP.k];
const MAP_PTS = {
  'Lubań': [51.118, 15.288], 'Zgorzelec': [51.152, 15.008], 'Bolesławiec': [51.264, 15.570], 'Leśna': [51.024, 15.262], 'Jelenia Góra': [50.904, 15.719],
  'Lwówek Śląski': [51.110, 15.585], 'Gryfów Śląski': [51.031, 15.419], 'Świeradów-Zdrój': [50.909, 15.341],
};
export function AreaMap() {
  const [lx, ly] = pr(...MAP_PTS['Lubań']);
  const kmPx = MAP.k / 111;
  const border = [[51.33, 14.975], [51.2, 15.0], [51.15, 15.005], [51.05, 14.97], [50.98, 14.94], [50.96, 15.02], [50.97, 15.08], [50.92, 15.18], [50.875, 15.27], [50.86, 15.38], [50.84, 15.5], [50.81, 15.62]];
  const a4 = [[51.17, 14.97], [51.185, 15.15], [51.205, 15.35], [51.235, 15.57], [51.245, 15.85]];
  const path = (pts) => pts.map((p, i) => (i ? 'L' : 'M') + pr(p[0], p[1]).map((v) => v.toFixed(1)).join(' ')).join(' ');
  return (
    <div className="area-map">
      <svg viewBox="0 0 600 488" role="img" aria-label="Schemat obszaru działania: Lubań i miasta w promieniu 25 i 50 km">
        <rect width="600" height="488" fill="var(--paper)" />
        <circle cx={lx} cy={ly} r={50 * kmPx} fill="rgba(18,163,127,.06)" stroke="var(--clean)" strokeOpacity=".35" strokeDasharray="4 6" />
        <circle cx={lx} cy={ly} r={25 * kmPx} fill="rgba(18,163,127,.08)" stroke="var(--clean)" strokeOpacity=".5" strokeDasharray="4 6" />
        <text x={lx + 25 * kmPx * 0.72} y={ly - 25 * kmPx * 0.72} fontSize="11" fill="var(--clean-ink)" fontFamily="var(--f-mono)">25 km</text>
        <text x={lx + 50 * kmPx * 0.72} y={ly - 50 * kmPx * 0.72 + 10} fontSize="11" fill="var(--clean-ink)" fontFamily="var(--f-mono)">50 km</text>
        <path d={path(border)} fill="none" stroke="var(--steel-2)" strokeWidth="1.5" strokeDasharray="8 4 2 4" />
        <text x="14" y="300" fontSize="11" letterSpacing="2" fill="var(--steel-2)" fontFamily="var(--f-mono)">NIEMCY</text>
        <text x="150" y="476" fontSize="11" letterSpacing="2" fill="var(--steel-2)" fontFamily="var(--f-mono)">CZECHY</text>
        <path d={path(a4)} fill="none" stroke="var(--steel-2)" strokeWidth="3" strokeOpacity=".5" />
        <text {...(() => { const [x, y] = pr(51.2, 15.3); return { x, y: y - 8 }; })()} fontSize="11" fontWeight="700" fill="var(--steel)" fontFamily="var(--f-mono)">A4</text>
        {Object.entries(MAP_PTS).map(([name, ll]) => {
          const [x, y] = pr(...ll);
          const m = MIASTA.find((c) => c.nazwa === name);
          const main = name === 'Lubań';
          const later = MIASTA_ROZBUDOWA.includes(name);
          const right = !['Zgorzelec', 'Jelenia Góra', 'Lwówek Śląski', 'Bolesławiec'].includes(name);
          const g = (
            <>
              {main && <circle cx={x} cy={y} r="16" fill="var(--clean)" opacity=".25" />}
              <circle className="dot" cx={x} cy={y} r={main ? 8 : later ? 4 : 6} fill={main ? 'var(--clean-ink)' : later ? 'var(--steel-2)' : 'var(--soot)'} stroke="var(--paper)" strokeWidth="2" />
              <text x={name === 'Lwówek Śląski' ? x : right ? x + (main ? 14 : 10) : x - 10} y={name === 'Lwówek Śląski' ? y + 18 : y + 4} textAnchor={name === 'Lwówek Śląski' ? 'middle' : right ? 'start' : 'end'} style={{ fontSize: main ? 16 : later ? 11 : 13, fontWeight: main ? 700 : later ? 500 : 600, fill: later ? 'var(--steel)' : undefined }}>{main ? 'Lubań · Za Torem 10b' : name}</text>
            </>
          );
          return m ? <g key={name} className="map-city" tabIndex="0" role="link" aria-label={'Czyszczenie DPF ' + name} onClick={() => go(m.slug)} onKeyDown={(e) => e.key === 'Enter' && go(m.slug)}>{g}</g> : <g key={name}>{g}</g>;
        })}
      </svg>
      <span className="map-note">Schemat poglądowy · na stronie: mapa Google</span>
    </div>
  );
}

export function GoogleMap() {
  const [on, setOn] = useState(() => { try { return localStorage.getItem('cf-cookie') === 'all'; } catch { return false; } });
  const q = encodeURIComponent(`${FIRMA.ulica}, ${FIRMA.kod} ${FIRMA.miasto}`);
  return (
    <div className="gmap">
      {on
        ? <iframe title="Mapa dojazdu do warsztatu" src={`https://www.google.com/maps?q=${q}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        : <div className="gmap-ph"><I n="pin" /><b>{FIRMA.ulica}, {FIRMA.miasto}</b><p>Mapa Google zapisuje pliki cookies, dlatego pokazujemy ją po kliknięciu.</p><button className="btn btn--primary btn--sm" onClick={() => setOn(true)}>Pokaż mapę</button></div>}
    </div>
  );
}

export function CityList() {
  return (
    <>
      <ul className="city-list">
        {MIASTA.map((m) => (
          <li key={m.slug}><L to={m.slug}><b>{m.nazwa}</b><span>ok. {m.km} km</span><I n="arrow" /></L></li>
        ))}
      </ul>
      <p className="city-more">Kolejne miasta: {MIASTA_ROZBUDOWA.join(', ')}. Kurierem obsługujemy całą Polskę.</p>
    </>
  );
}

/* Formularz „Oddzwońcie do mnie" */
export function QuickForm({ title = 'Oddzwonimy i wycenimy' }) {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState({});
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const er = {};
    if (!f.get('pojazd')) er.pojazd = 'Wybierz typ pojazdu.';
    if (!/^[\d\s+()-]{9,}$/.test(String(f.get('tel') || ''))) er.tel = 'Podaj numer telefonu, np. 600 100 200.';
    if (!f.get('zgoda')) er.zgoda = 'Zgoda jest potrzebna, żebyśmy mogli oddzwonić.';
    setErr(er);
    if (!Object.keys(er).length) setSent(true);
  };
  if (sent) return (
    <div className="form-card"><div className="form-ok">
      <div className="ok-icon"><I n="check" /></div>
      <h3>Dziękujemy, oddzwonimy</h3>
      <p className="muted">Zwykle oddzwaniamy tego samego dnia roboczego. Jeśli sprawa jest pilna, zadzwoń: {FIRMA.telefon}.</p>
      <span className="proto-note">Prototyp: w wersji WordPress zgłoszenie trafi na e-mail warsztatu.</span>
      <button className="btn btn--ghost btn--sm" onClick={() => setSent(false)}>Wyślij kolejne zgłoszenie</button>
    </div></div>
  );
  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <h3>{title}</h3>
      <div className={'field' + (err.pojazd ? ' invalid' : '')}>
        <label htmlFor="qf-pojazd">Typ pojazdu</label>
        <select id="qf-pojazd" name="pojazd" defaultValue="">
          <option value="" disabled>Wybierz…</option>
          <option>Samochód osobowy</option><option>Dostawczy / bus</option><option>Ciężarowy / autobus</option><option>Maszyna rolnicza lub budowlana</option><option>Kolektor lub inna część</option>
        </select>
        {err.pojazd && <span className="err">{err.pojazd}</span>}
      </div>
      <div className="field"><label htmlFor="qf-model">Marka i model</label><input id="qf-model" name="model" placeholder="np. Ford Transit 2.0 TDCi, 2018" /></div>
      <div className={'field' + (err.tel ? ' invalid' : '')}>
        <label htmlFor="qf-tel">Telefon</label><input id="qf-tel" name="tel" type="tel" inputMode="tel" autoComplete="tel" placeholder="600 100 200" />
        {err.tel && <span className="err">{err.tel}</span>}
      </div>
      <label className="consent"><input type="checkbox" name="zgoda" id="qf-zgoda" /><span>Zgadzam się na kontakt telefoniczny w sprawie wyceny. Administratorem danych jest czystyfiltr.pl. Szczegóły w <L to="polityka-prywatnosci">polityce prywatności</L>.</span></label>
      {err.zgoda && <span className="err" style={{ color: '#B4441F', fontSize: '.8125rem' }}>{err.zgoda}</span>}
      <button className="btn btn--primary btn--lg" type="submit">Oddzwońcie do mnie<I n="arrow" /></button>
    </form>
  );
}

export function CtaBand({ title = 'Filtr znowu się zapchał? Zadzwoń albo zostaw numer', lead = 'Powiemy, czy czyszczenie ma sens w Twoim aucie, ile będzie kosztować i kiedy filtr wróci.' }) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div className="stack-lg">
          <div className="stack">
            <span className="eyebrow">Wycena bez zobowiązań</span>
            <h2>{title}</h2>
            <p className="lead">{lead}</p>
          </div>
          <div className="cta-contact">
            <a className="big" href={FIRMA.telefonHref}><I n="phone" />{FIRMA.telefon}</a>
            <div><I n="pin" />{FIRMA.ulica}, {FIRMA.kod} {FIRMA.miasto}</div>
            <div><I n="clock" />{FIRMA.godziny || <Ph>godziny otwarcia</Ph>}</div>
          </div>
        </div>
        <QuickForm />
      </div>
    </section>
  );
}

/* Okładka wpisu bez zdjęcia: fragment przekroju filtra */
export function PostCover({ src }) {
  return <div className="post-cover"><img src={src} alt="" loading="lazy" /></div>;
}

export function PostCard({ w }) {
  return (
    <L to={w.slug} className="post-card">
      <PostCover src={w.foto} />
      <div className="post-body">
        <div className="post-meta"><b>{w.kategoria}</b><span>{w.czas} min czytania</span></div>
        <h3>{w.tytul}</h3>
        <p>{w.lead}</p>
      </div>
    </L>
  );
}

export function WCenieList({ items }) {
  return <ul className="checks">{items.map((t) => <li key={t}><I n="check" />{t}</li>)}</ul>;
}

export function useTitle(t) {
  useEffect(() => { document.title = t ? `${t} | czystyfiltr.pl` : 'czystyfiltr.pl'; }, [t]);
}
