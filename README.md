# czystyfiltr.pl — prototyp React

Pierwszy zarys strony warsztatu czyszczenia filtrów DPF w Lubaniu (czystyfiltr.pl). Prototyp wszystkich podstron do akceptacji. Później przenosimy go na autorski motyw WordPress.

## Podgląd
https://olekcodetech.github.io/czystyfiltr-prototyp/ (GitHub Pages z folderu docs/)

## Uruchomienie
npm install
npm run build        # docs/index.html (podgląd) + dist/

## Struktura
- src/data.js        — wszystkie treści (każdy klucz = pole w panelu WP / ACF)
- src/styles.css     — tokeny (kolory, fonty) i style komponentów
- src/components.jsx — nagłówek, stopka, sekcje wspólne, wydruk z badania, mapa
- src/pages.jsx      — strony: główna, oferta, 4 usługi, cennik, jak to działa, zamów odbiór,
                       o nas, baza wiedzy + 3 wpisy, kontakt, 4 miasta, polityka, regulamin, źródła zdjęć
- src/HeroVideo.jsx  — hero z filmem: 3 ujęcia z przenikaniem, rozdziały z paskiem postępu, pauza
- docs/media         — zdjęcia i filmy

## Mapa szablonów WP
- page-home, page (oferta/cennik/jak-to-działa/o-nas/kontakt), single-usluga (CPT), single-miasto (CPT),
  archive/single post (baza wiedzy), page-zamow-odbior (formularz 3-krokowy → e-mail)

## Placeholdery (żółte, przerywana ramka)
ceny, godziny, e-mail, social media, model maszyny, dane firmy (NIP, konto), logo.

## Zdjęcia i filmy (tymczasowe)
- Zdjęcia: Wikimedia Commons (CC BY-SA / domena publiczna) — podpisy autorów na stronie „Źródła zdjęć” (dane: ZRODLA w data.js).
- Filmy: Pexels (licencja Pexels).
- Docelowo do podmiany na zdjęcia i nagrania z warsztatu klienta.

## Fonty
Rubik (nagłówki), Source Sans 3 (tekst), IBM Plex Mono (wydruk z badania).
