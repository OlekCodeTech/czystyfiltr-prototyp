import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { USLUGI, MIASTA, WPISY } from './data.js';
import { Header, Footer, Cookie } from './components.jsx';
import * as P from './pages.jsx';

const STATIC = {
  '': P.Home, oferta: P.Oferta, cennik: P.Cennik, 'jak-to-dziala': P.JakToDziala, 'zamow-odbior': P.ZamowOdbior,
  'o-nas': P.ONas, 'baza-wiedzy': P.BazaWiedzy, kontakt: P.Kontakt, 'polityka-prywatnosci': P.Polityka, regulamin: P.Regulamin, 'zrodla-zdjec': P.Zrodla,
};
function resolve(r) {
  if (STATIC[r]) return <>{React.createElement(STATIC[r])}</>;
  if (USLUGI.some((u) => u.slug === r)) return <P.Usluga slug={r} />;
  if (MIASTA.some((m) => m.slug === r)) return <P.Miasto slug={r} />;
  if (WPISY.some((w) => w.slug === r)) return <P.Wpis slug={r} />;
  return <P.NotFound />;
}
const TITLES = { '': 'Czyszczenie DPF Lubań', oferta: 'Oferta', cennik: 'Cennik czyszczenia DPF', 'jak-to-dziala': 'Jak wysłać filtr DPF', 'zamow-odbior': 'Zamów odbiór filtra', 'o-nas': 'O nas', 'baza-wiedzy': 'Baza wiedzy', kontakt: 'Kontakt', 'polityka-prywatnosci': 'Polityka prywatności', regulamin: 'Regulamin', 'zrodla-zdjec': 'Źródła zdjęć' };
const titleFor = (r) => TITLES[r] ?? (USLUGI.find((u) => u.slug === r)?.nazwa || (MIASTA.find((m) => m.slug === r) ? 'Czyszczenie DPF ' + MIASTA.find((m) => m.slug === r).nazwa : WPISY.find((w) => w.slug === r)?.tytul) || 'Strona');
const read = () => decodeURIComponent(location.hash.replace(/^#/, ''));

function App() {
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const on = () => { setRoute(read()); window.scrollTo({ top: 0, behavior: 'instant' }); };
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  useEffect(() => { document.title = titleFor(route) + ' | czystyfiltr.pl'; }, [route]);
  return (
    <>
      <a href="#main" className="btn btn--primary btn--sm" style={{ position: 'absolute', left: -9999 }} onFocus={(e) => (e.target.style.left = '16px')} onBlur={(e) => (e.target.style.left = '-9999px')} onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>Przejdź do treści</a>
      <Header route={route} />
      <main id="main" tabIndex="-1" key={route} style={{ outline: 'none' }}>{resolve(route)}</main>
      <Footer />
      <Cookie />
    </>
  );
}
createRoot(document.getElementById('root')).render(<App />);
