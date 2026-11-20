**Programsko inženjerstvo, FER. Grupa L-A-12.3**

# KonfTrack

KonfTrack je web-aplikacija za organizaciju znanstvenih konferencija. Objedinjuje predaju znanstvenih radova, dvostruko slijepu recenziju, donošenje odluka o prihvaćanju, praćenje životnog ciklusa radova i izradu programa konferencije.

**Projekt na kolegiju:** Aplikaciju je razvio studentski tim u sklopu kolegija [Programsko inženjerstvo](https://www.fer.unizg.hr/predmet/proinz) na Fakultetu elektrotehnike i računarstva Sveučilišta u Zagrebu (FER).

## Opis aplikacije

Manje znanstvene konferencije često se organiziraju razmjenom e-pošte i tablica. Recenzenti propuštaju rokove, autori ne znaju u kojoj je fazi njihov rad, a anonimnost recenzije i izbjegavanje sukoba interesa teško je ručno jamčiti. KonfTrack sve te korake objedinjuje na jednoj platformi. Anonimnost dvostruko slijepe recenzije provodi poslužitelj, a ne samo korisničko sučelje.

Aplikacija je namijenjena autorima znanstvenih radova, recenzentima, predsjednicima programskih odbora i administratorima platforme.

- **Neregistrirani korisnik** bez prijave pregledava javnu stranicu konferencije: poziv na predaju radova, teme, važne datume i objavljeni program.
- **Registrirani korisnik** slaže osobni raspored izlaganja i izvozi ga u Google Calendar. Isti korisnik na različitim konferencijama može imati različite uloge.
- **Autor** predaje radove, prati njihova stanja, predaje revizije i konačne verzije te prima obavijesti o odlukama.
- **Recenzent** prihvaća poziv u programski odbor, iskazuje interes za radove, recenzira dodijeljene radove i sudjeluje u anonimnoj raspravi.
- **Predsjednik programskog odbora** upravlja podacima, temama i rokovima konferencije, poziva recenzente, potvrđuje raspodjelu radova, donosi odluke, slaže program i pregledava statistiku.
- **Administrator** upravlja korisničkim računima, odobrava nove konferencije i imenuje njihove predsjednike programskog odbora, uređuje predloške poruka e-pošte i pregledava statistiku korištenja platforme.

### Ključne funkcionalnosti

- Registracija i prijava adresom e-pošte ili ORCID računom putem protokola OAuth 2.0 (F-001)
- Predaja znanstvenog rada s provjerom PDF rukopisa i DOI referenci putem servisa Crossref (F-008 – F-010)
- Pregled vlastitih radova i njihovih stanja te povlačenje rada (F-011, F-012)

Za potpuni opis funkcijskih i nefunkcijskih zahtjeva, obrazaca uporabe, arhitekture i ispitivanja pogledajte [projektnu dokumentaciju](docs/Home.md).

## Trenutačne funkcionalnosti

| Funkcionalnost | Povezani zahtjevi | Napomena |
| --- | --- | --- |
| Registracija adresom e-pošte i lozinkom | F-001, NF-01 | Lozinka se pohranjuje kao sažetak (hash), a ne kao običan tekst. Registracija ne zahtijeva potvrdu adrese e-pošte. |
| Prijava adresom e-pošte i lozinkom | F-001, NF-01 | Pri prijavi se uspostavlja poslužiteljska sesija s `httpOnly` kolačićem. |
| Registracija i prijava putem ORCID računa (OAuth 2.0) | F-001, NF-01 | Tijek *authorization code* prema ORCID sandbox okruženju. |
| Odjava | F-001 | Poslužiteljska sesija se uništava, a sesijski kolačić uklanja. Već izdani JWT ostaje valjan do isteka (24 sata). |
| Korisnički profil | F-002 | Dohvat podataka prijavljenog korisnika. Poslužitelj podržava izmjenu imena, prezimena, ustanove i područja ekspertize; zasebno sučelje za uređivanje profila još nije izrađeno. |
| JWT tokeni za API | F-001, NF-01 | Ruta `POST /api/auth/token` izdaje token valjan 24 sata za pristup zaštićenim `/api/...` rutama. |
| Javna početna stranica | F-007 | Dostupna bez prijave. |
| Predaja znanstvenog rada | F-008, F-009, F-012 | Kroz sučelje: odabir otvorene konferencije i teme, naslov, sažetak, ključne riječi, koautori (ime i e-pošta), autor za kontakt i PDF rukopis. Predaja nakon isteka roka nije moguća. Rad se može spremiti i kao nacrt. |
| Provjera PDF rukopisa | F-009, NF-03 | Provjeravaju se format i najveći dopušteni broj stranica. Ako metapodaci PDF-a sadrže ime nekog od autora, prikazuje se upozorenje. PDF se sprema pod generiranim nazivom datoteke. |
| Provjera DOI referenci | F-010 | Svaka DOI oznaka provjerava se putem Crossref API-ja; nepostojeći DOI označava se upozorenjem. Nedostupnost servisa ne sprječava predaju. |
| „Moji radovi” i povlačenje rada | F-011, F-012 | Autor vidi svoje radove i njihova stanja te može povući rad, koji prelazi u stanje *povučen* i ostaje evidentiran. Izmjena predanog rada podržana je na poslužitelju (`PUT /api/papers/:id`), ali još nije dostupna kroz sučelje. |

## Planirane funkcionalnosti

| Funkcionalnost | Povezani zahtjevi | Napomena |
| --- | --- | --- |
| Upravljanje konferencijama, temama i rokovima | F-004 – F-007, NF-07 | Odobravanje konferencija i imenovanje predsjednika programskog odbora, unos tema i rokova, produljenje rokova, vremenska zona i objava konferencije. Konferencije se zasad unose početnim podacima (`seedConferences.js`). |
| Korisničke uloge, ovlasti i administracija računa | F-002, F-003, NF-01 | Uloge po konferenciji (administrator, predsjednik programskog odbora, recenzent, autor), provjera ovlasti na poslužitelju, deaktivacija računa i sučelje za uređivanje profila. |
| Revizija i konačna verzija rada | F-011, F-012 | Uređivanje rada kroz sučelje, predaja revidirane verzije s odgovorima recenzentima te konačne verzije s izjavom o autorskim pravima i izlagačem. |
| Pozivanje recenzenata, interes i sukobi interesa | F-013 – F-017 | Pozivanje recenzenata, iskazivanje interesa, automatsko prepoznavanje sukoba interesa (ista ustanova, koautorstvo iz ORCID-a), prijedlog raspodjele s najmanje tri recenzenta po radu i zamjena recenzenata. |
| Recenzijski postupak | F-018, F-019, NF-03 | Dvostruko slijepa recenzija, predaja recenzija, anonimna rasprava recenzenata i podsjetnici e-poštom. |
| Odluke i obavještavanje autora | F-020, F-021 | Pregled „Odluke”, odluke o prihvaćanju, reviziji ili odbijanju te slanje obavijesti autorima prema predlošku. |
| Program konferencije | F-022 | Sekcije, provjera preklapanja izlaganja i predsjedavajućih te javna objava programa. Stranica programa zasad prikazuje privremene (ogledne) podatke. |
| Osobni raspored i Google Calendar | F-023 | Odabir izlaganja i izvoz u Google Calendar. |
| Zbornik sažetaka | F-024 | Automatsko generiranje zbornika u PDF formatu sa sadržajem po sekcijama i kazalom autora. |
| Statistika i predlošci e-pošte | F-025 | Pregled „Statistika” s izvozom u CSV te administratorsko uređivanje predložaka poruka. |
| Nefunkcijska poboljšanja | NF-01, NF-02, NF-04, NF-05, NF-08 | Centralizirano logiranje bez osjetljivih podataka, automatizirani testovi, dokumentacija API-ja, sigurnosni testovi pristupa i testiranje opterećenja. |

<a id="deployment"></a>

## Postavljanje (engl. deployment)

**Javno dostupna aplikacija:** https://konftrack1.onrender.com/

Aplikacija je postavljena na besplatnom planu usluge Render, koji uspavljuje aplikaciju kada se ne koristi. **Prvo otvaranje može trajati do jedne minute**; nakon toga aplikacija radi normalnom brzinom.

### Kako isprobati aplikaciju

1. Otvorite javnu adresu. Početna stranica i stranica programa dostupne su bez prijave.
2. Odaberite **Registracija** i izradite račun adresom e-pošte i lozinkom (najmanje 8 znakova) ili odaberite prijavu **ORCID** računom. Registracija e-poštom ne zahtijeva potvrdu, pa se odmah možete prijaviti.
3. U izborniku odaberite **Predaja rada**:
   - odaberite konferenciju (ispod izbornika prikazuju se mjesto, rok za predaju i najveći broj stranica), a zatim jednu od njezinih tema;
   - upišite naslov, sažetak i ključne riječi;
   - po želji dodajte koautora (ime i e-pošta) i odaberite autora za kontakt;
   - u polje za reference upišite, svaki u svoj redak, `10.1038/nature14539` (postojeći DOI) i `10.1234/konftrack.nepostoji` (nepostojeći DOI);
   - priložite bilo koji PDF do 10 stranica i odaberite **Predaj rad**.
4. Nakon predaje prikazuje se potvrda sa stanjem rada i upozorenjem za nepostojeći DOI. Ako metapodaci PDF-a sadrže ime nekog od autora, prikazuje se i upozorenje o anonimnosti.
5. Otvorite **Moji radovi**: rad je u stanju *predan*. Rad možete povući, nakon čega prelazi u stanje *povučen*.

Gumb **Spremi nacrt** sprema rad kao nacrt, bez provjere obaveznih polja i bez PDF-a.

### Ograničenja javne inačice

- Predani PDF rukopisi pohranjuju se u datotečni sustav poslužitelja, koji Render briše pri svakom novom postavljanju. Podaci o radovima u bazi ostaju, ali rukopisi predani prije novog postavljanja više nisu dostupni.
- ORCID prijava koristi sandbox okruženje, pa za prijavu treba ORCID sandbox račun.
- Recenzijski postupak, odluke, program iz baze i administracija još nisu implementirani (vidi [Planirane funkcionalnosti](#planirane-funkcionalnosti)).
- Provjera metapodataka PDF-a ne jamči anonimnost samog teksta rada.
- Izdani JWT ostaje valjan do isteka i nakon odjave.

Potpun postupak postavljanja opisan je u [poglavlju 6 dokumentacije](docs/6-Postavljanje-instalacija-i-konfiguracija.md).

<a id="quick-start"></a>

## Brzi početak / instalacija

**Preduvjeti:** Node.js 22 i npm, PostgreSQL. (Python je potreban samo za Selenium ispitivanja u mapi `tests/`.)

```bash
# Preuzimanje projekta
git clone https://github.com/pavlacancar/KonfTrack.git
cd KonfTrack/backend

# Instalacija ovisnosti (automatski generira i Prisma klijent)
npm install

# Konfiguracija: kopirajte primjer i upišite vlastite vrijednosti
cp .env.example .env          # na Windowsu: copy .env.example .env

# Stvaranje tablica u bazi i početni podaci (konferencije s temama i rokovima)
npx prisma migrate deploy
node seedConferences.js

# Pokretanje
npm run dev
```

**Adresa:** http://localhost:3000 (ili port postavljen u `PORT`). Za ORCID prijavu otvorite aplikaciju na http://127.0.0.1:3000, jer je ta adresa registrirana kao povratna adresa u ORCID sandboxu.

**Konfiguracija:** Sve potrebne varijable navedene su u [`backend/.env.example`](backend/.env.example):

| Varijabla | Značenje |
| --- | --- |
| `DATABASE_URL` | Adresa PostgreSQL baze. |
| `PORT`, `APP_URL` | Port i javna adresa aplikacije. |
| `SESSION_SECRET`, `JWT_SECRET` | Dva različita nasumična ključa od najmanje 32 znaka. |
| `ORCID_SANDBOX`, `ORCID_CLIENT_ID`, `ORCID_CLIENT_SECRET`, `ORCID_CALLBACK_URL` | Podaci aplikacije registrirane u [ORCID Sandbox Developer Tools](https://sandbox.orcid.org/developer-tools). |
| `COOKIE_SECURE` | Lokalno `false`; u produkciji (HTTPS) `true`. |

Ključeve možete generirati naredbom `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`. Stvarne vrijednosti nikada se ne stavljaju u repozitorij.

**Provjera:** Otvorite http://localhost:3000/health; odgovor potvrđuje da poslužitelj radi. Zatim otvorite početnu stranicu, registrirajte se i slijedite korake iz odjeljka [Kako isprobati aplikaciju](#kako-isprobati-aplikaciju).

Detaljne upute, uključujući česte probleme s bazom, nalaze se u [dokumentaciji backenda](backend/README.md) i [dokumentaciji baze podataka](db/README-db.md).

## Tehnologije

| Tehnologija ili alat | Uloga u ovom projektu | Razlog uporabe ili važno ograničenje |
| --- | --- | --- |
| Node.js i Express | Poslužiteljska aplikacija: rute, obrada obrazaca i API. | Ista aplikacija poslužuje web-stranice i API, pa se postavlja kao jedna usluga. |
| EJS | Generiranje web-stranica na poslužitelju. | Sučelje se uglavnom sastoji od obrazaca i popisa, pa nije potreban zaseban klijent u pregledniku. |
| PostgreSQL | Pohrana korisnika, konferencija, radova, recenzija i njihovih odnosa. | Podaci su izrazito povezani; promjene sheme zahtijevaju migracije. |
| Prisma | Pristup bazi i verzionirane migracije. | Svi članovi tima rade nad istom shemom iz repozitorija. |
| express-session i JWT | Sesija za web-stranice i tokeni za API. | Izdani JWT ostaje valjan do isteka i nakon odjave. |
| ORCID (OAuth 2.0) | Registracija i prijava istraživača te podaci za provjeru sukoba interesa. | Ovisnost o vanjskoj usluzi; sandbox i produkcija imaju odvojene postavke. |
| Crossref API | Provjera DOI oznaka referenci predanih radova. | Vanjska usluga; nedostupnost servisa ne smije spriječiti predaju rada. |
| Render | Smještaj aplikacije i PostgreSQL baze. | Besplatni plan uspavljuje aplikaciju, a datotečni sustav se briše pri novom postavljanju. |

Obrazloženje ključnih arhitekturnih odluka nalazi se u [poglavlju 4.1 dokumentacije](docs/4-Arhitektura-i-oblikovanje.md).

<a id="team-members"></a>

## Članovi tima

| Član tima | Uloga | FER e-pošta | GitHub profil |
| --- | --- | --- | --- |
| Pavla Čančar | Koordinatorica, dokumentacija | pc56957@fer.hr | [pavlacancar](https://github.com/pavlacancar) |
| Karla Tušek | Backend | kt56735@fer.hr | [karlatusek](https://github.com/karlatusek) |
| Gabrijela Stipić | Backend | gs57113@fer.hr | [gabrijelast](https://github.com/gabrijelast) |
| Mia Hrkać | Backend | mh56916@fer.hr | [miahrk](https://github.com/miahrk) |
| Marta Šimić | Frontend | ms57042@fer.hr | [martasimic](https://github.com/martasimic) |
| Antonio Pasarić | Frontend | ap56979@fer.hr | [antoniopasa](https://github.com/antoniopasa) |
| Marin Luka Lončar | Baze podataka | ml010811167@fer.hr | [RedSky42](https://github.com/RedSky42) |

Uloge se tijekom projekta mogu mijenjati. Pregled sastanaka, plana rada i doprinosa članova nalazi se u [dodatku A dokumentacije](docs/A-Pregled-aktivnosti-grupe.md).

## Doprinos projektu

- **Zadaci:** Zadaci se dogovaraju na laboratorijskim vježbama, na sastancima uživo i u zajedničkoj WhatsApp grupi, a evidentiraju se kao [GitHub Issues](https://github.com/pavlacancar/KonfTrack/issues) s dodijeljenom odgovornom osobom (*assignee*).
- **Nedostaci:** Članovi tima kontinuirano testiraju aplikaciju. Uočene greške prijavljuju se u grupi, a za značajnije probleme otvara se GitHub Issue.
- **Promjene koda:** Izravno dodavanje promjena u granu `main` nije dopušteno. Svi rade na zasebnim granama ili forkovima i promjene predaju putem *pull requestova*. Iznimka su manje izmjene dokumentacije (npr. `.puml` i `.svg` datoteke UML dijagrama).
- **Pregled koda:** Pri otvaranju *pull requesta* određuje se član tima zadužen za pregled. Ako je dulje nedostupan, može se odabrati drugi član. Samostalno spajanje dopušteno je samo za nove, neovisne funkcionalnosti; promjene koje uklanjaju postojeći sadržaj ili utječu na druge dijelove aplikacije obavezno pregledava drugi član tima.
- **Postavljanje:** Svaka promjena spojena u `main` pokreće GitHub Actions tijek koji putem *deploy hooka* pokreće novo postavljanje na Renderu.
- **Evidencija:** Trenutačno stanje funkcionalnosti vodi se u ovom dokumentu, a raspodjela zadataka i doprinosi vidljivi su u povijesti *pull requestova* i *commitova* te u dnevnicima rada:
  - [Dokumentacija baze podataka](db/README-db.md)
  - [Dokumentacija frontenda](frontend/README-frontend.md)
  - [Dnevnik rada: backend za prijavu](backend/prijava-dnevnikRad.md)
  - [Dnevnik rada: inicijalizacija backenda](backend/inicijalizacija-dnevnikRad.md)
  - [Dnevnik rada: predaja i povlačenje rada](backend/rad-dnevnikRad.md)

<a id="license"></a>

## Licenca

**Status licence:** Aplikaciji KonfTrack nije dodijeljena licenca koja dopušta javnu ponovnu uporabu izvornog koda. Datoteka [`LICENSE`](LICENSE) odnosi se na predložak dokumentacije kolegija, a ne na samu aplikaciju.

Dokumentacijski predložak kolegija sadrži otvorene obrazovne sadržaje (engl. Open Educational Resources, OER) i licenciran je licencom Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. Ta licenca ne određuje licencu studentske aplikacije.

Kod trećih strana (npm paketi navedeni u `package.json`), vanjske usluge (ORCID, Crossref) te logotipi i ikone zadržavaju vlastite licence i uvjete uporabe.

<a id="ai-usage"></a>

## Uporaba umjetne inteligencije [![AI Usage: Disclosed](https://img.shields.io/badge/AI%20Usage-Disclosed-blue.svg)](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf)

Ovaj projekt slijedi FER-ova [pravila o primjerenoj uporabi umjetne inteligencije](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf).

**Izjava:** Tim je koristio alate umjetne inteligencije ChatGPT i Claude.

- **Dokumentacija (ChatGPT):** ispravljanje pravopisa i gramatike, poboljšanje stila i formulacija, usklađivanje strukture teksta s predloškom dokumentacije te provjera je li nešto duplicirano, izostavljeno ili nedosljedno.
- **Programiranje (ChatGPT i Claude):** istraživanje i upoznavanje s vanjskim sustavima (ORCID, Crossref), prevođenje dokumentacije, pomoć pri usmjeravanju koda i otklanjanje pogrešaka.

**Pregled i kritički osvrt:** Generirani sadržaj ponekad je uvelike olakšao pisanje dokumentacije i rad na kodu, ali je ponekad bio neprecizan, zaobilazio stvarno rješenje ili uvodio pogrešne tvrdnje. Svaki rezultat tim je pregledao, provjerio, ispravio i preoblikovao prije uključivanja u projekt, a članovi mogu objasniti vlastiti doprinos. U alate umjetne inteligencije nisu unošeni pristupni podaci ni tajni ključevi.

<a id="code-of-conduct-and-support"></a>

## Kodeks ponašanja i podrška [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

Od članova tima očekuje se pridržavanje **Kodeksa ponašanja studenata** Fakulteta elektrotehnike i računarstva Sveučilišta u Zagrebu, pravila timskog rada na kolegiju, [Etičkog kodeksa IEEE-a](https://www.ieee.org/about/corporate/governance/p7-8.html) i [kodeksa ponašanja ovog repozitorija](CODE_OF_CONDUCT.md).

---

Struktura dokumentacije prilagođena je predlošku kolegija Programsko inženjerstvo FER-a autora [Vlade Sruka](https://www.fer.unizg.hr/vlado.sruk), licenciranom pod [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Aplikaciju i njezin sadržaj izradio je gore navedeni studentski tim.
