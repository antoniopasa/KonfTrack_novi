# Frontend

Frontend KonfTracka sastoji se od EJS predložaka i CSS stilova. Stranice generira poslužitelj (Express), pa se frontend ne pokreće zasebno: dovoljno je pokrenuti backend prema [uputama za backend](../backend/README.md) i otvoriti `http://localhost:3000`.

**Tehnologije:** EJS, čisti CSS, Node.js i Express za prikaz stranica.

## Struktura

|Mapa ili datoteka|Sadržaj|
|-|-|
|`src/pages/neregistriraniKorisnik/`|Javna početna stranica (`index.ejs`) i stranica programa konferencije (`program.ejs`)|
|`src/pages/registriraniKorisnik/`|Sučelje prijavljenog korisnika: početna, predaja rada, „Moji radovi” i kontakt|
|`src/pages/registriraniKorisnik/head.ejs`, `sidebar.ejs`, `footer.ejs`|Zajednički dijelovi stranica (EJS partiali)|
|`src/pages/login.ejs`, `register.ejs`|Stranice za prijavu i registraciju sa stilovima `login.css` i `register.css`|
|`src/pages/admin.ejs`, `ppo.ejs`, `recenzent.ejs`|Početne verzije stranica za administratora, predsjednika programskog odbora i recenzenta|
|`src/assets/`|Logo, ORCID logo i favicon|
|`public/Readme.md`|[Smjernice za izgled sučelja](public/Readme.md): boje, fontovi, raspored i komponente|

## Sučelje prijavljenog korisnika

Prijavljeni korisnik ima bočnu traku s četiri taba: **Početna**, **Predaja rada**, **Moji radovi** i **Kontakt**. Zajednički dijelovi (zaglavlje, bočna traka i podnožje) izdvojeni su u EJS partiale. Aktivni tab zadaje se parametrom `aktivno`, pa se navigacija ne ponavlja u svakoj stranici.

Vizualni stil (tamnoplava bočna traka, gradijent u pozadini i bijele kartice) preuzet je s javne stranice kako bi aplikacija izgledala ujednačeno.

Obrazac za predaju rada i pregled „Moji radovi” zasad nisu povezani s poslužiteljem, jer API za radove još nije uključen u aplikaciju.

## Pregled rada

### Marta Šimić

Pregled je izrađen iz povijesti commitova na grani `main`.

|Datum|Što je napravljeno|Datoteke|
|-|-|-|
|22. 10. 2026.|Početna struktura stranica: administrator, početna stranica, predsjednik programskog odbora, recenzent i registrirani korisnik; opis komponenti po stranicama|`src/pages/\*.ejs`, `index.css`|
|29. i 30. 10. 2026.|Stranica za prijavu (najprije u HTML-u, zatim prebačena u EJS), stilovi, logo i favicon|`login.ejs`, `login.css`, `src/assets/`, `site.webmanifest`|
|1. 11. 2026.|Početna stranica s bočnom trakom i odjeljcima sa sadržajem, uređen CSS|`index.ejs`, `index.css`|
|2. 11. 2026.|Razdvojene stranice za neregistriranog i registriranog korisnika, usklađen CSS, nova stranica programa|`neregistriraniKorisnik/`, `registriraniKorisnik/`, `program.ejs`, `index.js`|
|4. 11. 2026.|Favicon na stranicama registriranog korisnika|`registriraniKorisnik/head.ejs`|
|9. 11. 2026.|Stranica za registraciju sa stilovima, ispravljene poveznice na stranici za prijavu|`register.ejs`, `register.css`, `login.ejs`, `index.js`|

### Antonio Pasarić

**Alati:** VS Code, Node.js, Express (privremeni poslužitelj za pregled stranica), EJS, čisti CSS

|Datum|Što je napravljeno|
|-|-|
|1. 11. 2026.|Sučelje za prijavljenog korisnika s četiri taba u bočnoj traci: Početna, Predaja rada, Moji radovi i Kontakt|
|1. 11. 2026.|Vizualni stil preuzet s javne stranice: tamnoplava bočna traka, gradijent u pozadini i bijele kartice|
|1. 11. 2026.|Zajednički dijelovi izdvojeni u EJS partiale (head, sidebar, footer), s aktivnim tabom zadanim parametrom `aktivno`|



