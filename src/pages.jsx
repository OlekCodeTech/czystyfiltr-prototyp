import React, { useMemo, useState } from 'react';
import { ZRODLA, FIRMA, OBJAWY, KROKI, USLUGI, CENNIK, W_CENIE, GWARANCJA, FAQ_GLOWNA, MIASTA, MIASTA_ROZBUDOWA, KATEGORIE, WPISY, POROWNANIE, WARSZTAT } from './data.js';
import {
  L, I, Ph, go, scrollToId, Receipt, PageHero, Objawy, UslugiGrid, Kroki, BeforeAfter, Faq, AreaMap, CityList,
  CtaBand, QuickForm, PostCard, WCenieList, Socials, Photo, GoogleMap,
} from './components.jsx';
import HeroVideo from './HeroVideo.jsx';

/* ═════════ Strona główna (10 sekcji) ═════════ */
export function Home() {
  return (
    <>
      {/* 2. Hero — film w tle z rozdziałami */}
      <HeroVideo>
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Warsztat w Lubaniu, ul. Za Torem 10b</span>
            <h1>Czyszczenie filtrów DPF i&nbsp;FAP w&nbsp;Lubaniu</h1>
            <p className="lead">Przywieź filtr do nas albo wyślij go kurierem z dowolnego miejsca w Polsce. Odbiór i zwrot są w cenie. Po czyszczeniu dostajesz wydruk z maszyny, więc dokładnie widzisz efekt.</p>
            <div className="btn-row">
              <L to="zamow-odbior" className="btn btn--primary btn--lg"><I n="truck" />Zamów odbiór filtra</L>
              <a href={FIRMA.telefonHref} className="btn btn--light btn--lg"><I n="phone" />{FIRMA.telefon}</a>
            </div>
            <ul className="hero-ticks">
              <li><I n="check" />Kurier w cenie</li>
              <li><I n="check" />Gwarancja {FIRMA.gwarancjaMies} mies.</li>
              <li><I n="check" />Gotowe w 1–2 dni</li>
              <li className="no"><I n="ban" />Nie wycinamy DPF</li>
            </ul>
          </div>
        </div>
      </HeroVideo>

      {/* 3. Objawy */}
      <section className="section section--paper" id="objawy">
        <div className="wrap">
          <div className="section-head">
                        <h2>Kontrolka DPF znowu się świeci?</h2>
            <p className="lead">Oto najczęstsze znaki, że filtr jest zapchany. Jeśli coś się zgadza, zadzwoń. Powiemy szczerze, czy czyszczenie pomoże, czy problem leży gdzie indziej.</p>
          </div>
          <div className="objawy-layout">
            <figure className="media-card media-card--video">
              <video src="media/dym.mp4" poster="media/dym.jpg" autoPlay muted loop playsInline aria-hidden="true" />
              <figcaption><b>Dym z wydechu</b> to często znak, że filtr nie nadąża z wypalaniem albo że problem leży w silniku.</figcaption>
            </figure>
            <Objawy items={OBJAWY} />
          </div>
          <div className="symptom-foot">
            <p>Rozpoznajesz objawy? Zbadamy filtr i powiemy wprost, czy czyszczenie ma sens.</p>
            <L to="baza-wiedzy" className="link-arrow">Więcej w bazie wiedzy<I n="arrow" /></L>
          </div>
        </div>
      </section>

      {/* 4. Usługi */}
      <section className="section">
        <div className="wrap">
          <div className="section-head section-head--row">
            <div className="stack" style={{ maxWidth: 680 }}>
                            <h2>Co u nas wyczyścisz</h2>
              <p className="lead">Filtry i katalizatory z osobówek, busów, ciężarówek i maszyn. Myjemy też ciśnieniowo kolektory, EGR i inne zabrudzone części.</p>
            </div>
            <L to="oferta" className="link-arrow">Cała oferta<I n="arrow" /></L>
          </div>
          <UslugiGrid />
          <L to="warsztat" className="workshop-strip">
            <span className="workshop-icons"><I n="disc" /><I n="oil" /><I n="snow" /></span>
            <span><b>Prowadzimy też warsztat.</b> Hamulce, wymiana oleju, klimatyzacja i bieżąca obsługa auta.</span>
            <span className="link-arrow">Warsztat<I n="arrow" /></span>
          </L>
        </div>
      </section>

      {/* 5. Jak to działa */}
      <section className="section section--dark section--media">
        <video className="section-bg" src="media/hero-myjka.mp4" poster="media/hero-myjka.jpg" autoPlay muted loop playsInline aria-hidden="true" />
        <div className="wrap">
          <div className="section-head">
                        <h2>Jak to wygląda krok po kroku</h2>
          </div>
          <Kroki items={KROKI} />
          <div className="steps-foot">
            <span className="pill"><I n="clock" />Czyszczenie: {FIRMA.czasRealizacji}</span>
            <L to="jak-to-dziala" className="link-arrow">Jak zapakować i wysłać filtr<I n="arrow" /></L>
          </div>
        </div>
      </section>

      {/* 6. Efekt przed/po */}
      <section className="section">
        <div className="wrap ba">
          <BeforeAfter />
          <div className="ba-side">
                        <h2>Tak wygląda filtr przed i po czyszczeniu</h2>
            <p className="lead">Każdy filtr sprawdzamy na maszynie dwa razy: przed czyszczeniem i po nim. Zdjęcie wydruku wysyłamy Ci SMS-em, a oryginał wkładamy do paczki z filtrem.</p>
            <Receipt />
            
          </div>
        </div>
      </section>

      {/* 7. Cennik + gwarancja */}
      <section className="section section--paper">
        <div className="wrap">
          <div className="section-head">
                        <h2>Ile to kosztuje</h2>
            <p className="lead">Podajemy ceny brutto. Kurier w obie strony jest już w cenie, nic nie dopłacasz.</p>
          </div>
          <div className="price-wrap">
            <PriceList rows={CENNIK.slice(0, 4)} link />
            <Warranty />
          </div>
        </div>
      </section>

      {/* 8. Obszar działania */}
      <section className="section">
        <div className="wrap area">
          <AreaMap />
          <div className="stack-lg">
            <div className="stack">
                            <h2>Skąd przyjmujemy filtry</h2>
              <p className="lead">Z Lubania i okolic najprościej przywieźć filtr osobiście. Z dalszych miast odbierze go kurier, w cenie usługi.</p>
            </div>
            <CityList />
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="section section--paper">
        <div className="wrap faq-layout">
          <div className="stack">
                        <h2>Pytania, które słyszymy najczęściej</h2>
            <p className="lead">Nie ma tu Twojego pytania? Zadzwoń: {FIRMA.telefon}.</p>
          </div>
          <Faq items={FAQ_GLOWNA} />
        </div>
      </section>

      {/* 10. CTA + wpisy */}
      <CtaBand />
      <section className="section">
        <div className="wrap">
          <div className="section-head section-head--row">
            <div className="stack"><h2>Poradnik dla kierowców</h2></div>
            <L to="baza-wiedzy" className="link-arrow">Wszystkie wpisy<I n="arrow" /></L>
          </div>
          <div className="grid grid-3">{WPISY.map((w) => <PostCard key={w.slug} w={w} />)}</div>
        </div>
      </section>
    </>
  );
}

function PriceList({ rows, link }) {
  return (
    <div className="price-list">
      {rows.map((c) => (
        <div className="price-row" key={c.segment}>
          <div><h3>{c.segment}</h3><p>{c.opis}</p></div>
          <div className="price-val">{c.cena ? <>od {c.cena} zł<small>brutto</small></> : <>od <Ph>cena</Ph><small>brutto</small></>}</div>
          {c.uwaga && <span className="price-note">{c.uwaga}</span>}
        </div>
      ))}
      <div className="price-inc">
        <h4>W cenie</h4>
        <WCenieList items={W_CENIE} />
        {link && <div style={{ marginTop: 14 }}><L to="cennik" className="link-arrow">Pełny cennik<I n="arrow" /></L></div>}
      </div>
    </div>
  );
}

function Warranty({ full }) {
  return (
    <div className="warranty">
      <div className="warranty-big"><strong>{FIRMA.gwarancjaMies}</strong><span>miesięcy<br />gwarancji</span></div>
      <ol>
        {GWARANCJA.punkty.map((p, i) => (
          <li key={i}><span>0{i + 1}</span><div><b>{p.t}</b><p>{p.d}</p></div></li>
        ))}
      </ol>
      {!full && <L to="cennik" className="link-arrow" onClick={(e) => { e.preventDefault(); go('cennik'); }}>Pełne warunki gwarancji<I n="arrow" /></L>}
    </div>
  );
}

/* ═════════ Oferta (przegląd) ═════════ */
export function Oferta() {
  return (
    <>
      <PageHero img="media/przekroj-2.jpg" crumbs={[{ label: 'Oferta' }]} eyebrow="Oferta" title="Czyszczenie filtrów, katalizatorów i części" lead="Cztery usługi, jeden warsztat w Lubaniu. Każdy filtr badamy na maszynie przed i po czyszczeniu.">
        <div className="btn-row"><L to="zamow-odbior" className="btn btn--primary btn--lg"><I n="truck" />Zamów odbiór filtra</L></div>
      </PageHero>
      <section className="section"><div className="wrap"><UslugiGrid /></div></section>
      <section className="section section--paper">
        <div className="wrap">
          <div className="section-head"><h2>Dla kogo pracujemy</h2></div>
          <div className="grid grid-4">
            {[
              ['Kierowcy', 'Auta osobowe i dostawcze. Filtr przywozisz albo wysyłasz kurierem.', 'truck'],
              ['Warsztaty', 'Nie musisz kupować maszyny. Odbieramy filtry od Ciebie i odsyłamy z raportem.', 'wrench'],
              ['Floty i przewoźnicy', 'Ciężarówki i busy. Stały odbiór i rozliczenie zbiorcze.', 'route'],
              ['Rolnictwo i budowa', 'Ciągniki, koparki, ładowarki. Wycena z góry przed wysyłką.', 'gauge'],
            ].map(([t, d, ic]) => (
              <div className="info" key={t}><I n={ic} /><h3 style={{ fontSize: '1.3rem' }}>{t}</h3><p className="muted" style={{ fontSize: '.9375rem' }}>{d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ═════════ Warsztat ═════════ */
export function Warsztat() {
  return (
    <>
      <PageHero img="media/hero-mechanik.jpg" crumbs={[{ label: 'Warsztat' }]} eyebrow="Warsztat w Lubaniu" title="Hamulce, olej, klimatyzacja. Bieżąca obsługa auta" lead="Oprócz czyszczenia filtrów prowadzimy zwykły warsztat. Robimy to, czego auto potrzebuje na co dzień, bez kolejki do ASO.">
        <div className="btn-row">
          <a href={FIRMA.telefonHref} className="btn btn--primary btn--lg"><I n="phone" />Umów wizytę: {FIRMA.telefon}</a>
          <L to="kontakt" className="btn btn--ghost btn--lg"><I n="pin" />Jak dojechać</L>
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>Czym się zajmujemy</h2><p className="lead">Osobówki i dostawczaki. Zadzwoń, powiedz, co się dzieje z autem, a podamy termin i orientacyjny koszt.</p></div>
          <div className="grid grid-4">
            {WARSZTAT.map((w) => (
              <div className="info" key={w.tytul}><I n={w.ikona} /><h3 style={{ fontSize: '1.3rem' }}>{w.tytul}</h3><p className="muted" style={{ fontSize: '.9375rem' }}>{w.opis}</p></div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--paper">
        <div className="wrap cols">
          <div className="stack" style={{ minWidth: 0 }}>
            <h2>Przy okazji czyszczenia DPF</h2>
            <p>Jeśli przywozisz auto do wyjęcia i czyszczenia filtra, możemy od razu zrobić wymianę oleju albo sprawdzić hamulce. Jedna wizyta zamiast dwóch.</p>
            <ul className="checks">
              <li><I n="check" />Olej o niskiej zawartości popiołu (Low SAPS) dobrany do auta z DPF</li>
              <li><I n="check" />Sprawdzamy, co mogło zapchać filtr: wtryskiwacze, EGR, czujniki</li>
              <li><I n="check" />Jeden termin, jedna faktura</li>
            </ul>
            <div className="btn-row"><L to="czyszczenie-dpf-fap" className="link-arrow">Czyszczenie DPF / FAP<I n="arrow" /></L></div>
          </div>
          <aside className="aside-card" aria-label="Umów wizytę">
            <span className="eyebrow">Umów wizytę</span>
            <p style={{ margin: 0 }}>{FIRMA.ulica}, {FIRMA.kod} {FIRMA.miasto}</p>
            <p className="muted" style={{ margin: 0 }}>{FIRMA.godziny || <Ph>godziny otwarcia</Ph>}</p>
            <div className="price-val" style={{ fontSize: '1.15rem' }}>Ceny usług: <Ph>do uzupełnienia</Ph></div>
            <a href={FIRMA.telefonHref} className="btn btn--primary"><I n="phone" />{FIRMA.telefon}</a>
            <L to="kontakt" className="link-arrow">Kontakt i mapa<I n="arrow" /></L>
          </aside>
        </div>
      </section>
      <section className="section section--tight">
        <div className="wrap">
          <div className="slot"><b>Zdjęcia warsztatu</b><span>Miejsce na zdjęcia stanowisk, podnośnika i ekipy. Do uzupełnienia.</span></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ═════════ Usługa (szablon) ═════════ */
export function Usluga({ slug }) {
  const u = USLUGI.find((x) => x.slug === slug);
  const powiazane = WPISY.filter((w) => w.uslugi.includes(slug));
  const kolektory = slug === 'mycie-kolektorow-i-czesci';
  return (
    <>
      <PageHero img={u.foto} crumbs={[{ label: 'Oferta', to: 'oferta' }, { label: u.krotko }]} eyebrow="Usługa" title={u.h1} lead={u.lead}>
        <div className="btn-row">
          <L to="zamow-odbior" className="btn btn--primary btn--lg"><I n="truck" />Zamów odbiór</L>
          <a href={FIRMA.telefonHref} className="btn btn--ghost btn--lg"><I n="phone" />{FIRMA.telefon}</a>
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap cols">
          <div className="stack-lg" style={{ minWidth: 0 }}>
            <div className="stack">
              <Photo src={u.foto} alt={u.nazwa} ratio="16 / 9" />
              <h2>Co usuwamy</h2>
              <div className="remove-list">
                {u.usuwamy.map((x) => <div className="remove-item" key={x.co}><h3>{x.co}</h3><p>{x.opis}</p></div>)}
              </div>
            </div>
            {kolektory && (
              <div className="stack">
                <h2>Jakie części myjemy</h2>
                <ul className="parts">{u.czesci.map((c) => <li key={c}>{c}</li>)}</ul>
                <p className="muted" style={{ fontSize: '.875rem' }}>Lista do potwierdzenia z warsztatem.</p>
              </div>
            )}
            <div className="stack">
              <h2>{kolektory ? 'Kiedy warto umyć część' : 'Kiedy czyszczenie ma sens'}</h2>
              <div className="verdict">
                <div className="verdict-yes"><h3>Ma sens, gdy</h3><ul className="checks">{u.sens.map((t) => <li key={t}><I n="check" />{t}</li>)}</ul></div>
                <div className="verdict-no"><h3>Nie pomoże, gdy</h3><ul className="xs">{u.bezSensu.map((t) => <li key={t}><I n="x" />{t}</li>)}</ul></div>
              </div>
            </div>
            <div className="stack">
              <h2>{kolektory ? 'Jak myjemy' : 'Jak czyścimy'}</h2>
              {kolektory ? (
                <ol className="pack">
                  <li>Oglądamy część i dobieramy ciśnienie oraz środek myjący do materiału.</li>
                  <li>Zdejmujemy lub zabezpieczamy elementy z elektroniką i uszczelki.</li>
                  <li>Myjemy ciśnieniowo z nagaru, oleju i szlamu, potem płuczemy i suszymy.</li>
                  <li>Robimy zdjęcia przed i po, pakujemy i odsyłamy część.</li>
                </ol>
              ) : <div className="section--tight" style={{ padding: 0 }}><Kroki items={KROKI} /></div>}
            </div>
            <div className="stack">
              <h2>Co dostajesz</h2>
              <div className="grid grid-3">
                {(kolektory
                  ? [['receipt', 'Zdjęcia przed i po', 'Wysyłamy je, zanim część wróci.'], ['truck', 'Kurier w obie strony', 'Odbiór z domu lub warsztatu.'], ['receipt', 'Faktura VAT', 'Na osobę prywatną lub firmę.']]
                  : [['receipt', 'Wydruk z badania', 'Przeciwciśnienie przed i po czyszczeniu.'], ['truck', 'Kurier w obie strony', 'Odbiór z domu lub warsztatu.'], ['shield', `Gwarancja ${FIRMA.gwarancjaMies} mies.`, 'Warunki napisane wprost.']]
                ).map(([ic, t, d]) => <div className="info" key={t}><I n={ic} /><b style={{ fontFamily: 'var(--f-display)', fontSize: '1.25rem' }}>{t}</b><p className="muted" style={{ fontSize: '.9375rem' }}>{d}</p></div>)}
              </div>
            </div>
            {!kolektory && <div className="stack"><h2>Przed i po</h2><BeforeAfter /><div className="ba" style={{ gap: 32, marginTop: 8 }}><div className="ba-side"><h3>Przykładowy raport</h3><p className="muted">Wydruk z maszyny dostajesz razem z filtrem, a jego zdjęcie wcześniej SMS-em lub mailem.</p></div><Receipt /></div></div>}
            {kolektory && <div className="slot"><b>Galeria przed / po</b><span>Miejsce na zdjęcia umytych kolektorów i części z warsztatu.</span></div>}
            <div className="stack">
              <h2>Pytania o tę usługę</h2>
              <Faq items={u.faq} />
            </div>
            {powiazane.length > 0 && (
              <div className="stack">
                <h2>Przeczytaj też</h2>
                <div className="grid grid-2">{powiazane.slice(0, 2).map((w) => <PostCard key={w.slug} w={w} />)}</div>
              </div>
            )}
          </div>
          <aside className="aside-card" aria-label="Cena i zamówienie">
            <span className="eyebrow">Cena</span>
            <div className="price-val">od <Ph>cena</Ph> <small>brutto</small></div>
            <WCenieList items={kolektory ? ['Kurier w obie strony', 'Zdjęcia przed i po', 'Faktura VAT'] : W_CENIE} />
            <L to="zamow-odbior" className="btn btn--primary"><I n="truck" />Zamów odbiór</L>
            <a href={FIRMA.telefonHref} className="btn btn--ghost"><I n="phone" />{FIRMA.telefon}</a>
            <L to="cennik" className="link-arrow">Pełny cennik<I n="arrow" /></L>
          </aside>
        </div>
      </section>
      <section className="section section--paper section--tight">
        <div className="wrap">
          <div className="section-head"><h2>Pozostałe usługi</h2></div>
          <div className="grid grid-3">
            {USLUGI.filter((x) => x.slug !== slug).map((x) => (
              <L key={x.slug} to={x.slug} className="service"><I n={x.ikona} className="service-icon" s={1.25} /><h3>{x.nazwa}</h3><p>{x.karta}</p></L>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ═════════ Cennik i gwarancja ═════════ */
export function Cennik() {
  return (
    <>
      <PageHero img="media/przekroj.jpg" crumbs={[{ label: 'Cennik' }]} eyebrow="Cennik i gwarancja" title="Cennik czyszczenia DPF" lead="Ceny brutto z kurierem w obie strony, badaniem przed i po oraz fakturą. Bez dopłat za transport." />
      <section className="section">
        <div className="wrap price-wrap">
          <div className="stack-lg" style={{ minWidth: 0 }}>
            <PriceList rows={CENNIK} />
            <div className="symptom-foot" style={{ marginTop: 0, background: 'var(--paper)' }}>
              <p>Nie płacisz za czyszczenie, jeśli filtra nie da się wyczyścić. <Ph>do potwierdzenia</Ph></p>
            </div>
            <div className="stack">
              <h2>Dopłaty</h2>
              <p className="lead">Demontaż i montaż filtra w warsztacie w Lubaniu: <Ph>tak / nie, cena</Ph>. Przy dużych zestawach DPF+SCR z ciężarówek cenę ustalamy przed wysyłką.</p>
            </div>
          </div>
          <Warranty full />
        </div>
      </section>
      <section className="section section--paper" id="gwarancja">
        <div className="wrap cols">
          <div className="stack-lg" style={{ minWidth: 0 }}>
            <div className="stack">
              <span className="eyebrow">Gwarancja</span>
              <h2>Warunki gwarancji</h2>
              <p className="lead">Gwarancja trwa {FIRMA.gwarancjaMies} miesięcy od dnia zwrotu filtra. Jeśli w tym czasie filtr ponownie straci drożność, czyścimy go bez opłaty.</p>
            </div>
            <div className="stack">
              <h3>Gwarancja nie obejmuje zapchania wywołanego przez:</h3>
              <ul className="xs">{GWARANCJA.wylaczenia.map((t) => <li key={t}><I n="x" />{t}</li>)}</ul>
            </div>
            <div className="stack">
              <h3>Jak zgłosić reklamację</h3>
              <ol className="pack">
                <li>Zadzwoń lub napisz i podaj numer zlecenia z wydruku.</li>
                <li>Prześlij wynik diagnostyki z warsztatu, który wskazuje na zapchany filtr.</li>
                <li>Odbieramy filtr kurierem, badamy go i czyścimy, jeśli przyczyna nie wynika z wyłączeń.</li>
              </ol>
            </div>
          </div>
          <aside className="aside-card">
            <span className="eyebrow">Masz pytanie o cenę?</span>
            <p>Podaj model auta, a powiemy, ile zapłacisz za czyszczenie.</p>
            <a href={FIRMA.telefonHref} className="btn btn--primary"><I n="phone" />{FIRMA.telefon}</a>
            <L to="zamow-odbior" className="btn btn--ghost"><I n="truck" />Zamów odbiór</L>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="wrap faq-layout">
          <div className="stack"><h2>Pytania o cenę</h2></div>
          <Faq items={[
            { q: 'Czy kurier naprawdę jest w cenie?', a: 'Tak. Kurier odbiera filtr i odwozi go pod wskazany adres. Nie doliczamy kosztów transportu.' },
            { q: 'Czy cena zależy od modelu auta?', a: 'Zależy od segmentu i wielkości filtra. Dla aut osobowych i dostawczych cena jest stała, przy ciężarówkach i maszynach podajemy ją przed wysyłką.' },
            { q: 'Kiedy płacę?', a: 'Po wykonaniu usługi. Formę płatności potwierdzamy przy zamówieniu odbioru.' },
            FAQ_GLOWNA[3],
          ]} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ═════════ Jak to działa ═════════ */
export function JakToDziala() {
  return (
    <>
      <PageHero img="media/dpf-czysty.jpg" crumbs={[{ label: 'Jak to działa' }]} eyebrow="Jak to działa" title="Jak wysłać filtr DPF do czyszczenia" lead={`Zamawiasz odbiór, pakujesz filtr, kurier zabiera go do nas. Czyszczenie trwa ${FIRMA.czasRealizacji}, a wynik badania dostajesz, zanim filtr wróci.`}>
        <div className="btn-row"><L to="zamow-odbior" className="btn btn--primary btn--lg"><I n="truck" />Zamów odbiór filtra</L></div>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>Cztery proste kroki</h2></div>
          <Kroki items={KROKI} />
        </div>
      </section>
      <section className="section section--paper" id="pakowanie">
        <div className="wrap cols">
          <div className="stack-lg" style={{ minWidth: 0 }}>
            <div className="stack">
              <span className="eyebrow">Pakowanie</span>
              <h2>Jak zapakować filtr</h2>
              <p className="lead">Dobrze zapakowany filtr dociera bez uszkodzeń wkładu. Wystarczy karton i folia.</p>
            </div>
            <ol className="pack">
              <li>Zatkaj wlot i wylot filtra folią spożywczą lub workiem i owiń taśmą. Sadza nie wysypie się w paczce.</li>
              <li>Owiń cały filtr folią bąbelkową, zwłaszcza kołnierze i czujniki, jeśli zostały na filtrze.</li>
              <li>Włóż filtr do kartonu i wypełnij wolne miejsce papierem, żeby się nie przesuwał.</li>
              <li>Do środka włóż kartkę z numerem telefonu i modelem auta. Zaklej karton i czekaj na kuriera.</li>
            </ol>
            <div className="slot"><b>Miejsce na zdjęcia lub krótki film z pakowania</b><span>Do nagrania w warsztacie po remoncie.</span></div>
          </div>
          <aside className="aside-card">
            <span className="eyebrow">Czas</span>
            <ul className="checks">
              <li><I n="truck" />Dzień 1: kurier odbiera filtr</li>
              <li><I n="gauge" />Dzień 2: badanie i czyszczenie</li>
              <li><I n="receipt" />Dzień 2–3: raport i wysyłka</li>
              <li><I n="check" />Dzień 3–4: filtr u Ciebie</li>
            </ul>
            <p className="muted" style={{ fontSize: '.8125rem' }}>Orientacyjnie, w dni robocze. Czas transportu zależy od kuriera.</p>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="wrap ba">
          <div className="ba-side">
            <span className="eyebrow">Raport</span>
            <h2>Co jest na wydruku</h2>
            <ul className="checks">
              <li><I n="check" />Przeciwciśnienie przed czyszczeniem przy stałym przepływie powietrza</li>
              <li><I n="check" />Przeciwciśnienie po czyszczeniu i różnica w procentach</li>
              <li><I n="check" />Ocena wkładu: pęknięcia, stopienia, ślady oleju</li>
              <li><I n="check" />Numer zlecenia, potrzebny przy gwarancji</li>
            </ul>
          </div>
          <Receipt />
        </div>
      </section>
      <section className="section section--paper">
        <div className="wrap stack-lg">
          <div className="section-head" style={{ marginBottom: 0 }}><h2>Kto czyści Twój filtr</h2></div>
          <p className="lead">Warsztat w Lubaniu z doświadczeniem w myciu ciśnieniowym. Więcej o nas, maszynie i metodzie przeczytasz na stronie <L to="o-nas">O nas</L>.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ═════════ Zamów odbiór (3 kroki) ═════════ */
export function ZamowOdbior() {
  const [step, setStep] = useState(0);
  const [d, setD] = useState({ usluga: 'Czyszczenie DPF / FAP', pojazd: '', model: '', miejsce: 'Dom', ulica: '', kod: '', miasto: '', imie: '', tel: '', email: '', faktura: 'Osoba prywatna', nip: '', uwagi: '', zgoda: false });
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setD({ ...d, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const validate = () => {
    const e = {};
    if (step === 0 && !d.pojazd) e.pojazd = 'Wybierz typ pojazdu.';
    if (step === 1) {
      if (!d.ulica.trim()) e.ulica = 'Podaj ulicę i numer.';
      if (!/^\d{2}-?\d{3}$/.test(d.kod.trim())) e.kod = 'Kod w formacie 00-000.';
      if (!d.miasto.trim()) e.miasto = 'Podaj miejscowość.';
    }
    if (step === 2) {
      if (!d.imie.trim()) e.imie = 'Podaj imię i nazwisko lub nazwę firmy.';
      if (!/^[\d\s+()-]{9,}$/.test(d.tel)) e.tel = 'Podaj numer telefonu, np. 600 100 200.';
      if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) e.email = 'Sprawdź adres e-mail.';
      if (d.faktura === 'Firma' && !/^\d{10}$/.test(d.nip.replace(/\D/g, ''))) e.nip = 'NIP ma 10 cyfr.';
      if (!d.zgoda) e.zgoda = 'Zgoda jest potrzebna do realizacji zlecenia.';
    }
    setErr(e);
    return !Object.keys(e).length;
  };
  const next = (e) => { e.preventDefault(); if (!validate()) return; if (step < 2) setStep(step + 1); else setDone(true); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const F = ({ k, label, children, half }) => (
    <div className={'field' + (err[k] ? ' invalid' : '')}>
      <label htmlFor={'zo-' + k}>{label}</label>{children}{err[k] && <span className="err">{err[k]}</span>}
    </div>
  );
  const steps = ['Pojazd i usługa', 'Adres odbioru', 'Kontakt i faktura'];
  return (
    <>
      <PageHero img="media/dpf-lkw.jpg" crumbs={[{ label: 'Zamów odbiór filtra' }]} eyebrow="Zamów odbiór" title="Zamów odbiór filtra" lead="Trzy krótkie kroki. Po wysłaniu zadzwonimy, potwierdzimy cenę i termin odbioru." />
      <section className="section">
        <div className="wrap wizard">
          {done ? (
            <div className="form-card"><div className="form-ok">
              <div className="ok-icon"><I n="check" /></div>
              <h2>Zgłoszenie przyjęte</h2>
              <p className="lead">Dziękujemy, {d.imie.split(' ')[0]}. Zadzwonimy na numer {d.tel}, żeby potwierdzić cenę i dzień odbioru z adresu: {d.ulica}, {d.kod} {d.miasto}.</p>
              <h3>Co dalej</h3>
              <ol className="pack">
                <li>Potwierdzamy zlecenie telefonicznie.</li>
                <li>Pakujesz filtr według <L to="jak-to-dziala">instrukcji</L>.</li>
                <li>Kurier odbiera paczkę, a po czyszczeniu odwozi ją pod ten sam adres.</li>
              </ol>
              <span className="proto-note">Prototyp: w wersji WordPress zgłoszenie trafi na e-mail warsztatu.</span>
              <button className="btn btn--ghost btn--sm" onClick={() => { setDone(false); setStep(0); }}>Nowe zgłoszenie</button>
            </div></div>
          ) : (
            <form className="form-card" onSubmit={next} noValidate>
              <ol className="progress">{steps.map((s, i) => <li key={s} className={i < step ? 'done' : i === step ? 'active' : ''}>{i + 1}. {s}</li>)}</ol>
              {step === 0 && (<>
                <h2 style={{ fontSize: '1.75rem' }}>Pojazd i usługa</h2>
                <div className="field"><span className="label">Usługa</span>
                  <div className="chips" role="radiogroup" aria-label="Usługa">
                    {USLUGI.map((u) => <label className="chip" key={u.slug}><input type="radio" name="usluga" value={u.nazwa} checked={d.usluga === u.nazwa} onChange={set('usluga')} /><span>{u.krotko}</span></label>)}
                  </div>
                </div>
                {F({ k: 'pojazd', label: 'Typ pojazdu', children: (
                  <select id="zo-pojazd" value={d.pojazd} onChange={set('pojazd')}>
                    <option value="" disabled>Wybierz…</option>
                    <option>Samochód osobowy</option><option>Dostawczy / bus</option><option>Ciężarowy / autobus</option><option>Maszyna rolnicza lub budowlana</option><option>Sama część (kolektor, EGR, intercooler)</option>
                  </select>) })}
                {F({ k: 'model', label: 'Marka, model, rok i silnik (opcjonalnie)', children: <input id="zo-model" value={d.model} onChange={set('model')} placeholder="np. Volkswagen Passat B8 2.0 TDI, 2016" /> })}
              </>)}
              {step === 1 && (<>
                <h2 style={{ fontSize: '1.75rem' }}>Skąd odebrać filtr</h2>
                <div className="field"><span className="label">Miejsce odbioru</span>
                  <div className="chips" role="radiogroup" aria-label="Miejsce odbioru">
                    {['Dom', 'Warsztat', 'Przywiozę sam do Lubania'].map((m) => <label className="chip" key={m}><input type="radio" name="miejsce" value={m} checked={d.miejsce === m} onChange={set('miejsce')} /><span>{m}</span></label>)}
                  </div>
                </div>
                {d.miejsce === 'Przywiozę sam do Lubania' && <p className="muted">Zapraszamy na {FIRMA.ulica} w Lubaniu. Podaj poniżej swój adres do faktury lub odesłania filtra.</p>}
                {F({ k: 'ulica', label: 'Ulica i numer', children: <input id="zo-ulica" value={d.ulica} onChange={set('ulica')} autoComplete="street-address" /> })}
                <div className="fields-2">
                  {F({ k: 'kod', label: 'Kod pocztowy', children: <input id="zo-kod" value={d.kod} onChange={set('kod')} inputMode="numeric" autoComplete="postal-code" placeholder="59-800" /> })}
                  {F({ k: 'miasto', label: 'Miejscowość', children: <input id="zo-miasto" value={d.miasto} onChange={set('miasto')} autoComplete="address-level2" /> })}
                </div>
              </>)}
              {step === 2 && (<>
                <h2 style={{ fontSize: '1.75rem' }}>Kontakt i faktura</h2>
                {F({ k: 'imie', label: 'Imię i nazwisko lub nazwa firmy', children: <input id="zo-imie" value={d.imie} onChange={set('imie')} autoComplete="name" /> })}
                <div className="fields-2">
                  {F({ k: 'tel', label: 'Telefon', children: <input id="zo-tel" type="tel" value={d.tel} onChange={set('tel')} autoComplete="tel" inputMode="tel" /> })}
                  {F({ k: 'email', label: 'E-mail (na raport, opcjonalnie)', children: <input id="zo-email" type="email" value={d.email} onChange={set('email')} autoComplete="email" /> })}
                </div>
                <div className="field"><span className="label">Faktura</span>
                  <div className="chips" role="radiogroup" aria-label="Faktura">
                    {['Osoba prywatna', 'Firma'].map((m) => <label className="chip" key={m}><input type="radio" name="faktura" value={m} checked={d.faktura === m} onChange={set('faktura')} /><span>{m}</span></label>)}
                  </div>
                </div>
                {d.faktura === 'Firma' && F({ k: 'nip', label: 'NIP', children: <input id="zo-nip" value={d.nip} onChange={set('nip')} inputMode="numeric" /> })}
                {F({ k: 'uwagi', label: 'Uwagi (opcjonalnie)', children: <textarea id="zo-uwagi" value={d.uwagi} onChange={set('uwagi')} placeholder="np. kod błędu, objawy, preferowany dzień odbioru" /> })}
                <label className="consent"><input type="checkbox" id="zo-zgoda" checked={d.zgoda} onChange={set('zgoda')} /><span>Akceptuję <L to="regulamin">regulamin</L> i zgadzam się na przetwarzanie danych w celu realizacji zlecenia (<L to="polityka-prywatnosci">polityka prywatności</L>).</span></label>
                {err.zgoda && <span className="err" style={{ color: '#B4441F', fontSize: '.8125rem' }}>{err.zgoda}</span>}
              </>)}
              <div className="wizard-nav">
                {step > 0 ? <button type="button" className="btn btn--ghost" onClick={() => { setErr({}); setStep(step - 1); }}>Wstecz</button> : <span />}
                <button type="submit" className="btn btn--primary btn--lg">{step < 2 ? 'Dalej' : 'Wyślij zgłoszenie'}<I n="arrow" /></button>
              </div>
            </form>
          )}
          <aside className="aside-card">
            <span className="eyebrow">Twoje zlecenie</span>
            <ul className="checks" style={{ fontSize: '.9375rem' }}>
              <li><I n="check" />{d.usluga}</li>
              <li><I n="check" />{d.pojazd || 'Typ pojazdu: wybierz'}</li>
              <li><I n="check" />Odbiór: {d.miejsce}</li>
            </ul>
            <div style={{ borderTop: '1px solid var(--line)', paddingTop: 14 }}>
              <WCenieList items={W_CENIE.slice(0, 3)} />
            </div>
            <p className="muted" style={{ fontSize: '.875rem' }}>Wolisz zadzwonić? <a href={FIRMA.telefonHref}>{FIRMA.telefon}</a></p>
          </aside>
        </div>
      </section>
    </>
  );
}

/* ═════════ O nas ═════════ */
export function ONas() {
  return (
    <>
      <PageHero crumbs={[{ label: 'O nas' }]} eyebrow="O nas" title="Warsztat czyszczenia DPF w Lubaniu" lead="Czyścimy filtry i części dla kierowców, warsztatów i firm z Łużyc, Dolnego Śląska i całej Polski." />
      <section className="section">
        <div className="wrap cols">
          <div className="prose">
            <h2>Kim jesteśmy</h2>
            <p>Za czystyfiltr.pl stoi ekipa z wieloletnim doświadczeniem w myciu ciśnieniowym. Wcześniej zajmowaliśmy się myciem i renowacją elewacji, dachów i kostki, więc wiemy, jak dobrać ciśnienie i środek do materiału, żeby czyścić skutecznie i niczego nie uszkodzić.</p>
            <p>Teraz tę wiedzę wykorzystujemy w czyszczeniu filtrów DPF, katalizatorów i części silnika. Warsztat mieści się w Lubaniu, przy {FIRMA.ulica}. <Ph>historia i rok startu do uzupełnienia</Ph></p>
            <h2>Maszyna i metoda</h2>
            <p>Filtry czyścimy metodą hydrodynamiczną na maszynie <Ph>model maszyny</Ph>. Przed i po czyszczeniu mierzymy przeciwciśnienie przy stałym przepływie powietrza, a maszyna drukuje raport z wynikami.</p>
            <p>Dzięki temu wiesz, w jakim stanie filtr do nas trafił i z jakim wynikiem wraca. Jeśli wkład jest pęknięty lub stopiony, mówimy o tym przed czyszczeniem.</p>
            <h2>Czego nie robimy</h2>
            <p>Nie usuwamy i nie wycinamy filtrów DPF. Nie programujemy sterowników tak, żeby działały bez filtra. Zajmujemy się wyłącznie legalnym czyszczeniem, które pozwala przejść przegląd bez problemów.</p>
          </div>
          <aside className="aside-card">
            <span className="eyebrow">W skrócie</span>
            <ul className="checks">
              <li><I n="pin" />{FIRMA.ulica}, {FIRMA.miasto}</li>
              <li><I n="gauge" />Badanie przed i po, z wydrukiem</li>
              <li><I n="clock" />Czyszczenie w {FIRMA.czasRealizacji}</li>
              <li><I n="shield" />Gwarancja {FIRMA.gwarancjaMies} miesięcy</li>
              <li><I n="truck" />Kurier w obie strony w cenie</li>
            </ul>
            <L to="kontakt" className="btn btn--primary">Kontakt</L>
          </aside>
        </div>
      </section>
      <section className="section section--paper">
        <div className="wrap">
          <div className="section-head"><h2>Z czym pracujemy</h2><p className="lead">Ceramiczne wkłady z węglika krzemu i kordierytu, filtry z katalizatorem DOC, zestawy DPF+SCR. Zdjęcia z naszej hali dodamy po zakończeniu remontu.</p></div>
          <div className="grid grid-3">
            <Photo src="media/wklady.jpg" alt="Wkłady filtrów DPF z węglika krzemu" caption="Wkłady z węglika krzemu" />
            <Photo src="media/przekroj.jpg" alt="Przekrój obudowy filtra DPF" caption="Filtr DPF w przekroju" />
            <Photo src="media/dpf-lkw.jpg" alt="Filtr cząstek stałych do pojazdu ciężarowego" caption="Filtr z pojazdu ciężarowego" />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

/* ═════════ Baza wiedzy ═════════ */
export function BazaWiedzy() {
  const [kat, setKat] = useState('Wszystkie');
  const [q, setQ] = useState('');
  const lista = useMemo(() => WPISY.filter((w) => (kat === 'Wszystkie' || w.kategoria === kat) && (w.tytul + ' ' + w.lead).toLowerCase().includes(q.toLowerCase())), [kat, q]);
  return (
    <>
      <PageHero img="media/dpf-zapchany.jpg" crumbs={[{ label: 'Baza wiedzy' }]} eyebrow="Baza wiedzy" title="Poradniki o filtrach DPF" lead="Objawy, kody błędów, porównania i porady, które pomagają uniknąć ponownego zapchania filtra." />
      <section className="section">
        <div className="wrap stack-lg">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="filters" role="group" aria-label="Kategorie">
              {['Wszystkie', ...KATEGORIE].map((k) => <button key={k} className="filter-btn" aria-pressed={kat === k} onClick={() => setKat(k)}>{k}</button>)}
            </div>
            <label className="search"><I n="search" /><input id="bw-search" type="search" placeholder="Szukaj w poradnikach" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Szukaj w poradnikach" /></label>
          </div>
          {lista.length ? <div className="grid grid-3">{lista.map((w) => <PostCard key={w.slug} w={w} />)}</div>
            : <div className="empty">Brak wpisów w tej kategorii. Kolejne poradniki pojawią się wkrótce.</div>}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function Wpis({ slug }) {
  const w = WPISY.find((x) => x.slug === slug);
  const inne = WPISY.filter((x) => x.slug !== slug);
  return (
    <>
      <PageHero crumbs={[{ label: 'Baza wiedzy', to: 'baza-wiedzy' }, { label: w.kategoria }]} eyebrow={`${w.kategoria} · ${w.czas} min czytania`} title={w.tytul} art="none" />
      <section className="section">
        <div className="wrap cols">
          <article className="prose">
            <p style={{ fontSize: '1.2rem', color: 'var(--ink)' }}>{w.lead}</p>
            {w.sekcje.map((s, i) => (
              <React.Fragment key={i}>
                <h2 id={'s' + i}>{s.h}</h2>
                {s.p.map((p, j) => <p key={j}>{p}</p>)}
                {i === 1 && <div className="inline-cta"><div><b>Masz ten problem?</b><p>Zbadamy filtr i powiemy, czy czyszczenie pomoże.</p></div><L to="zamow-odbior" className="btn btn--primary">Zamów odbiór filtra</L></div>}
                {w.porownanie && i === 3 && (
                  <div className="table-scroll"><table className="cmp">
                    <thead><tr><th scope="col">Porównanie</th>{POROWNANIE.kolumny.map((k, ki) => <th key={k} scope="col" className={ki === 1 ? 'hl' : ''}>{k}</th>)}</tr></thead>
                    <tbody>{POROWNANIE.wiersze.map((r) => <tr key={r.cecha}><th scope="row">{r.cecha}</th>{r.w.map((v, vi) => <td key={vi} className={(vi === 1 ? 'hl ' : '') + (vi === 3 && /nie|ryzyko/.test(v) ? 'bad' : '')}>{v}</td>)}</tr>)}</tbody>
                  </table></div>
                )}
              </React.Fragment>
            ))}
            <div className="stack" style={{ marginTop: 24 }}>
              <h2>Powiązane usługi</h2>
              <div className="btn-row">{w.uslugi.map((s) => { const u = USLUGI.find((x) => x.slug === s); return <L key={s} to={s} className="btn btn--ghost btn--sm">{u.nazwa}</L>; })}</div>
            </div>
          </article>
          <aside className="aside-card" style={{ background: 'var(--white)' }}>
            <div className="toc" style={{ border: 0, padding: 0, background: 'none' }}>
              <h4>W tym artykule</h4>
              <ol>{w.sekcje.map((s, i) => <li key={i}><a href={'#s' + i} onClick={scrollToId('s' + i)}>{s.h}</a></li>)}</ol>
            </div>
            <L to="zamow-odbior" className="btn btn--primary"><I n="truck" />Zamów odbiór</L>
          </aside>
        </div>
      </section>
      <section className="section section--paper">
        <div className="wrap">
          <div className="section-head"><h2>Przeczytaj też</h2></div>
          <div className="grid grid-2">{inne.map((x) => <PostCard key={x.slug} w={x} />)}</div>
        </div>
      </section>
    </>
  );
}

/* ═════════ Kontakt ═════════ */
export function Kontakt() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Kontakt' }]} eyebrow="Kontakt" title="Serwis DPF Lubań: kontakt i dojazd" lead={`Zadzwoń, napisz albo przyjedź na ${FIRMA.ulica}. Filtr możesz też wysłać kurierem w cenie usługi.`} art="none" />
      <section className="section">
        <div className="wrap stack-lg">
          <div className="info-grid">
            <div className="info"><I n="phone" /><span className="k">Telefon</span><a className="v" href={FIRMA.telefonHref}>{FIRMA.telefon}</a></div>
            <div className="info"><I n="mail" /><span className="k">E-mail</span><span className="v">{FIRMA.email || <Ph>e-mail</Ph>}</span></div>
            <div className="info"><I n="pin" /><span className="k">Adres</span><span className="v">{FIRMA.ulica}<br />{FIRMA.kod} {FIRMA.miasto}</span></div>
            <div className="info"><I n="clock" /><span className="k">Godziny</span><span className="v">{FIRMA.godziny || <Ph>pn–pt, sob</Ph>}</span></div>
          </div>
          <div className="area" style={{ alignItems: 'start' }}>
            <div className="stack">
              <GoogleMap />
              <div className="btn-row">
                <a className="btn btn--ghost btn--sm" href="https://www.google.com/maps/search/?api=1&query=Za+Torem+10b+59-800+Luba%C5%84" target="_blank" rel="noopener"><I n="route" />Wyznacz trasę w Google Maps</a>
              </div>
              <div className="stack" style={{ marginTop: 8 }}>
                <span className="eyebrow">Znajdź nas</span>
                <Socials />
              </div>
            </div>
            <QuickForm title="Napisz lub zostaw numer" />
          </div>
        </div>
      </section>
      <section className="section section--paper section--tight">
        <div className="wrap">
          <div className="section-head"><h2>Dane firmy</h2></div>
          <div className="info-grid">
            <div className="info"><span className="k">Nazwa</span><span className="v"><Ph>pełna nazwa firmy</Ph></span></div>
            <div className="info"><span className="k">NIP</span><span className="v"><Ph>NIP</Ph></span></div>
            <div className="info"><span className="k">Konto</span><span className="v"><Ph>numer konta</Ph></span></div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ═════════ Miasto (szablon) ═════════ */
export function Miasto({ slug }) {
  const m = MIASTA.find((x) => x.slug === slug);
  const inne = MIASTA.filter((x) => x.slug !== slug);
  return (
    <>
      <PageHero img="media/wydech.jpg" crumbs={[{ label: 'Obszar działania' }, { label: m.nazwa }]} eyebrow={`Obszar działania · ${m.nazwa}`} title={`Czyszczenie DPF ${m.nazwa}`} lead={`Czyścimy filtry DPF, FAP, katalizatory i SCR dla kierowców i firm ${m.zMiasta}. Przywieź filtr do Lubania albo zamów odbiór kurierem w cenie usługi.`}>
        <div className="btn-row">
          <L to="zamow-odbior" className="btn btn--primary btn--lg"><I n="truck" />Zamów odbiór {m.zMiasta}</L>
          <a href={FIRMA.telefonHref} className="btn btn--ghost btn--lg"><I n="phone" />{FIRMA.telefon}</a>
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap cols">
          <div className="stack-lg" style={{ minWidth: 0 }}>
            <div className="city-facts">
              <div><span className="k">Odległość</span><span className="v">ok. {m.km} km</span></div>
              <div><span className="k">Dojazd autem</span><span className="v">ok. {m.min} min</span></div>
              <div><span className="k">Kurier</span><span className="v">w cenie</span></div>
            </div>
            <div className="prose">
              <h2>Dojazd {m.zMiasta} do warsztatu</h2>
              <p>Warsztat jest w Lubaniu przy {FIRMA.ulica}. {m.zMiasta.charAt(0).toUpperCase() + m.zMiasta.slice(1)} to około {m.km} km{m.trasa ? `, ${m.trasa}` : ''}. Jeśli wolisz nie jechać, kurier odbierze filtr spod Twojego adresu {m.wMiescie} i odwiezie go po czyszczeniu.</p>
              <h2>Filtry DPF {m.wMiescie}</h2>
              <p>{m.lokalnie}</p>
              <p>{m.dla}</p>
              <h2>Odbiór filtra kurierem</h2>
              <p>Zamawiasz odbiór online lub telefonicznie, pakujesz filtr według instrukcji, a kurier zabiera go z domu lub warsztatu. Czyszczenie trwa {FIRMA.czasRealizacji}. Zdjęcie wydruku z badania wysyłamy przed zwrotem.</p>
            </div>
            <div className="slot"><b>Realizacje {m.zMiasta}</b><span>Miejsce na 1–2 opisy zleceń z tego miasta, np. model auta, wynik badania przed i po.</span></div>
            <div className="stack"><h2>Pytania kierowców {m.zMiasta}</h2><Faq items={m.faq} /></div>
          </div>
          <aside className="aside-card">
            <span className="eyebrow">Cena</span>
            <div className="price-val">od <Ph>cena</Ph> <small>brutto</small></div>
            <WCenieList items={W_CENIE.slice(0, 4)} />
            <L to="zamow-odbior" className="btn btn--primary"><I n="truck" />Zamów odbiór</L>
            <L to="cennik" className="link-arrow">Pełny cennik<I n="arrow" /></L>
          </aside>
        </div>
      </section>
      <section className="section section--paper">
        <div className="wrap area">
          <AreaMap />
          <div className="stack">
            <h2>Obsługujemy też</h2>
            <ul className="city-list">
              <li><L to="kontakt"><b>Lubań</b><span>warsztat</span><I n="arrow" /></L></li>
              {inne.map((x) => <li key={x.slug}><L to={x.slug}><b>{x.nazwa}</b><span>ok. {x.km} km</span><I n="arrow" /></L></li>)}
            </ul>
            <p className="city-more">Kolejne miasta: {MIASTA_ROZBUDOWA.join(', ')}.</p>
          </div>
        </div>
      </section>
      <CtaBand title={`Filtr ${m.zMiasta}? Zadzwoń albo zostaw numer`} />
    </>
  );
}

/* ═════════ Prawne ═════════ */
export function Polityka() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Polityka prywatności' }]} title="Polityka prywatności" art="none" lead="Szablon do uzupełnienia danymi administratora przed publikacją." />
      <section className="section"><div className="wrap legal">
        <h2>1. Administrator danych</h2>
        <p>Administratorem danych osobowych jest <Ph>pełna nazwa firmy, adres, NIP</Ph>, {FIRMA.ulica}, {FIRMA.kod} {FIRMA.miasto}. Kontakt: tel. {FIRMA.telefon}, e-mail <Ph>e-mail</Ph>.</p>
        <h2>2. Cele i podstawy przetwarzania</h2>
        <ul>
          <li>Odpowiedź na zapytanie z formularza i oddzwonienie (art. 6 ust. 1 lit. a i f RODO).</li>
          <li>Realizacja zlecenia czyszczenia i organizacja odbioru kurierem (art. 6 ust. 1 lit. b RODO).</li>
          <li>Wystawienie faktury i obowiązki księgowe (art. 6 ust. 1 lit. c RODO).</li>
          <li>Statystyki odwiedzin w Google Analytics, wyłącznie po wyrażeniu zgody (art. 6 ust. 1 lit. a RODO).</li>
        </ul>
        <h2>3. Odbiorcy danych</h2>
        <p>Firma kurierska realizująca odbiór i zwrot, dostawca hostingu, biuro rachunkowe oraz Google (Analytics, Mapy) w zakresie objętym zgodą.</p>
        <h2>4. Okres przechowywania</h2>
        <p>Dane z zapytań przez 12 miesięcy, dane z zleceń i faktur przez okres wymagany przepisami podatkowymi.</p>
        <h2>5. Twoje prawa</h2>
        <p>Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia, sprzeciwu oraz cofnięcia zgody. Możesz złożyć skargę do Prezesa UODO.</p>
        <h2>6. Pliki cookies</h2>
        <p>Strona używa niezbędnych plików cookies. Cookies analityczne i mapy Google ładują się dopiero po zgodzie w banerze. Zgodę możesz zmienić w dowolnym momencie.</p>
      </div></section>
    </>
  );
}

export function Regulamin() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Regulamin' }]} title="Regulamin usług" art="none" lead="Szablon do uzupełnienia przed publikacją." />
      <section className="section"><div className="wrap legal">
        <h2>1. Usługodawca</h2>
        <p><Ph>pełna nazwa firmy, NIP</Ph>, {FIRMA.ulica}, {FIRMA.kod} {FIRMA.miasto}.</p>
        <h2>2. Zakres usług</h2>
        <p>Czyszczenie filtrów DPF/FAP, katalizatorów, układów SCR oraz mycie ciśnieniowe kolektorów i części. Usługodawca nie wykonuje usuwania ani wycinania filtrów DPF.</p>
        <h2>3. Zamówienie i odbiór</h2>
        <ol>
          <li>Zlecenie składa się przez formularz, telefonicznie lub osobiście.</li>
          <li>Odbiór i zwrot kurierem są wliczone w cenę usługi na terenie Polski.</li>
          <li>Klient pakuje filtr zgodnie z instrukcją na stronie Jak to działa.</li>
        </ol>
        <h2>4. Badanie i czyszczenie</h2>
        <p>Przed czyszczeniem filtr jest badany. Jeśli wkład jest uszkodzony, usługodawca informuje klienta przed wykonaniem usługi. <Ph>zasady opłat, gdy filtra nie da się wyczyścić</Ph></p>
        <h2>5. Gwarancja</h2>
        <p>Gwarancja trwa {FIRMA.gwarancjaMies} miesięcy od dnia zwrotu filtra. Wyłączenia: {GWARANCJA.wylaczenia.map((x) => x.toLowerCase()).join('; ')}.</p>
        <h2>6. Płatność</h2>
        <p><Ph>forma i termin płatności</Ph></p>
      </div></section>
    </>
  );
}

export function NotFound() {
  return (
    <PageHero title="Nie ma takiej strony" lead="Strona mogła zostać przeniesiona.">
      <div className="btn-row"><L to="" className="btn btn--primary">Strona główna</L><L to="kontakt" className="btn btn--ghost">Kontakt</L></div>
    </PageHero>
  );
}

export function Zrodla() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Źródła zdjęć i filmów' }]} title="Źródła zdjęć i filmów" art="none" lead="Zdjęcia poglądowe z Wikimedia Commons i filmy z Pexels. Docelowo zastąpią je materiały z naszego warsztatu." />
      <section className="section"><div className="wrap">
        <div className="table-scroll"><table className="cmp">
          <thead><tr><th scope="col">Plik</th><th scope="col">Oryginał</th><th scope="col">Autor</th><th scope="col">Licencja</th></tr></thead>
          <tbody>{ZRODLA.map((z) => <tr key={z.plik}><th scope="row">{z.plik}</th><td><a href={z.url} target="_blank" rel="noopener">{z.tytul}</a>{z.zmiany ? ` (${z.zmiany})` : ''}</td><td>{z.autor}</td><td>{z.licencja}</td></tr>)}</tbody>
        </table></div>
      </div></section>
    </>
  );
}
