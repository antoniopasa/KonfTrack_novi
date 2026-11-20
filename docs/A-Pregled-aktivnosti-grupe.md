# A. Pregled aktivnosti grupe

**Cilj:** Prikazati kako je tim organizirao projekt, raspodijelio rad, reagirao na važne probleme i pridonio rezultatu. Zapisi trebaju opisivati ishode, a ne samo navoditi da je sastanak održan ili da se o nekoj temi raspravljalo.

## A.1 Evidencija sastanaka

**Cilj:** Voditi kratak zapis projektnih sastanaka i tjedne koordinacije: tko je sudjelovao, što je odlučeno i koja je radnja uslijedila. Raspravu koja nije dovela do odluke zabilježite samo ako je važno pitanje ostalo otvoreno.

**Kratice članova tima:** `PČ Pavla Čančar, GS Gabrijela Stipić, AP Antonio Pasarić, KT Karla Tušek, MH Mia Hrkać, MLL Marin Luka Lončar, MŠ Marta Šimić`

| Datum i sudionici | Glavna tema | Donesena odluka ili zadatak | Poveznica na zadatak ili rezultat, ako postoji |
| --- | --- | --- | --- |
| 14. 10. 2026.; cijela grupa | Odabir teme projekta | **Odluka:** Preuzeta je predložena tema *G12 – SK2 KonfTrack* jer grupa nije odabrala vlastitu temu.<br>**Radnja:** Svi članovi preuzimaju specifikaciju teme (PDF, 4 str.) radi upoznavanja sa zahtjevima. | Specifikacija teme G12 |
| 15. 10. 2026.; cijela grupa (chat) | Pristup GitHubu i organizacija laboratorijskih vježbi | **Radnja:** Prikupljena su GitHub korisnička imena članova te je MH zadužena za slanje pozivnica profesoru i asistentima (H. Floreani, S. Kendjel).<br>**Odluka:** Svi članovi obvezno donose prijenosna računala na vježbe radi zajedničkog rada.<br>**Otvoreno pitanje:** Provjeriti prihvaćanje pozivnica (prate PČ i MH). | [Repozitorij KonfTrack](https://github.com/pavlacancar/KonfTrack.git)  |
| 16. 10. 2026.; cijela grupa | Usklađivanje termina sastanaka | **Odluka:** Utvrđeni su zajednički termini za tjednu koordinaciju: srijedom (8–10 h, 12–14 h i nakon 17 h), četvrtkom (8–10 h i 12–15 h) te petkom (nakon 16 h). | – |
| 21. 10. 2026.; cijela grupa (uživo) | Postavljanje razvojne okoline i novog repozitorija | **Radnja:** PČ je otvorila novi GitHub repozitorij (`KonfTrack`), a stari se briše. Svi članovi pristupaju novom repozitoriju, čitaju zahtjeve projekta i postavljaju lokalnu razvojnu okolinu. | [Repozitorij KonfTrack](https://github.com/pavlacancar/KonfTrack.git) |
| 28. 10. 2026.; PČ, MH i ostali (chat) | Izbor tehnološkog skupa | **Odluka:** Odabran je Node/Express (JavaScript) prema predlošku kolegija, a Python/FastAPI (koji je PČ započela) je odbačen.<br>**Radnja:** MH postavlja inicijalnu strukturu projekta na odabranom predlošku. | – |
| 8. 11. 2026.; PČ, AP, MŠ | Rješavanje problema s prijavom korisnika | **Otvoreno pitanje:** Neispravan rad funkcionalnosti prijave (login).<br>**Radnja:** Otvoren je GitHub zadatak za prijavu; AP i MŠ preuzimaju odgovornost za pronalazak uzroka i ispravak koda. | GitHub issue za login |
| 9. 11. 2026.; cijela grupa (chat) | Definiranje tjednog cilja, prijave i toka rada (`A1–A16`) | **Odluka:** Registracija korisnika implementira se putem e-pošte **ili** ORCID-a (OAuth 2.0) kao dvije ravnopravne opcije (zaključak KT). Umjesto krute unaprijed zadane podjele, članovi slobodno dopunjuju zadatke, već riješene zatvaraju komentarom *„već spojeno na glavnu granu“*, a PR otvaraju isključivo za nove izmjene.<br>**Radnja:** MLL izrađuje bazu podataka (`A1`, `A15`, `A16`), KT implementira prijavu (`A2–A5`), a tim ažurira dokumentaciju i UML dijagrame. | Zadaci `A1–A16` |
| 11.–18. 11. 2026.; KT, MH i ostali | Tehnička podrška pri postavljanju okruženja | **Radnja:** KT je održala konzultacije i pomogla ostalim članovima pri lokalnom postavljanju razvojnog okruženja i pokretanju aplikacije. | – |
| 18. 11. 2026.; cijela grupa (chat) | Sinkronizacija grana i provjera javne aplikacije | **Odluka:** Sve izmjene koda moraju se spajati na glavnu granu (`main`) putem *pull requestova* uz redovito slanje promjena (*push*) kako grane ne bi zaostajale preko 100 *commitova*.<br>**Rezultat:** Aplikacija je objavljena na platformi Render, GS je testiranjem potvrdila ispravan rad predaje radova, a MŠ i MH spojile su *frontend* i *backend*. | [://konftrack1.onrender.com](https://konftrack1.onrender.com/), PR #127 |
| 19. 11. 2026.; cijela grupa | Završna raspodjela i dovršetak dokumentacije | **Radnja:** Podijeljena je završna obrada dokumentacije: PČ (funkcijski zahtjevi), AP (nefunkcijski zahtjevi, AI usage i dijagram `4.4.1`), MH (poglavlje `4.1` i ažuriranje poglavlja `2` i `3`), MŠ (poglavlje `A`), GS (`README`), MLL (dijagram `4.3.2`) i KT (*deployment*). | PR #139, PR #140, PR #141, PR #142 |

## A.2 Plan rada

**Trenutačni plan:** Glavni plan vodi se kroz [GitHub Issues](https://github.com/issues) (zadaci `A1–A16` za prijavu i bazu te `BE-01` do `BE-24` za *backend*), projektnu dokumentaciju i održavanu tablicu u nastavku. Za ažurnost plana zadužena je voditeljica tima **PČ**. *(Tim ne koristi Gantogram niti GitHub Projects ploču).*

| Razdoblje/Tjedan | Glavni planirani rad | Odgovorni članovi | Poveznica na zadatke |
| --- | --- | --- | --- |
| 14. 10. – 20. 10. 2026. | Odabir teme, otvaranje GitHub pristupa i dogovor termina sastanaka | PČ, MH, cijela grupa | – |
| 21. 10. – 27. 10. 2026. | Otvaranje novog repozitorija, postavljanje predloška kolegija, početni `README`, funkcijski zahtjevi i prve HTML stranice | PČ, KT, MH, MŠ | PR #4, PR #6 |
| 28. 10. – 3. 11. 2026. | Odluka o Node/Expressu, inicijalizacija *backenda* (Express, Prisma, Swagger, ESLint), izrada stranice za prijavu, sučelja registriranog korisnika i prvog *backenda* prijave | MH, MŠ, AP, KT | PR #22, PR #24, PR #49, PR #51 |
| 4. 11. – 10. 11. 2026. | Izrada baze podataka (Prisma shema, migracije, tokeni), funkcionalnost registracije, raspodjela i obrada zadataka `A1–A16` te dorada zahtjeva | MLL, MŠ, KT, PČ | PR #54, PR #58, PR #85, PR #94, PR #95 |
| 11. 11. – 17. 11. 2026. | Predaja rada (PDF prijenos, provjera DOI-ja preko Crossrefa), JWT tokeni, ER model, glavni UML dijagram i obrasci uporabe | GS, KT, MLL, PČ | PR #107, PR #115–#120, PR #126 |
| 18. 11. – 19. 11. 2026. | Spajanje *frontenda* i *backenda*, obrada obrazaca uporabe i poglavlja `4.1`, ažuriranje poglavlja `2` i `3`, uređivanje `README` datoteka, postavljanje na Render i izrada dnevnika rada | MŠ, MH, GS, PČ, AP, KT | PR #127–#142 |
| Preostali rad (do predaje) | Izrada dijagrama `4.3.2` (MLL) i `4.4.1` (AP), završni *deployment* (KT) te dovršetak poglavlja `5–7` | MLL, AP, KT, cijela grupa | – |

## A.3 Aktivnosti i doprinosi članova

Sati u tablici predstavljaju samoprijavljenu procjenu uloženog truda (izrada, ispravljanje pogrešaka, učenje i sastanci), bez dvostrukog brojanja zajedničkog rada. Ukupno je na razini tima utrošeno **240 sati** (PČ 57 h, KT 38 h, MŠ 37 h, MH 35 h, GS 28 h, MLL 25 h, AP 20 h).

| Aktivnost ili rezultat | Član | Prijavljeni sati | Reprezentativni rezultat ili poveznica |
| --- | --- | --- | --- |
| Otvaranje repozitorija, plan rada i podjela zadataka | PČ | 10 | [Repozitorij KonfTrack](https://github.com/pavlacancar/KonfTrack.git), zadaci `A1–A16` |
| Funkcijski zahtjevi, dionici, akteri, sigurnost i uvodni opis projekta | PČ | 8 | `docs/1-Projekt.md`, `docs/2-Analiza-zahtjeva.md` |
| Poglavlja `2.5`, `2.6`, obrasci uporabe (`3`) i UML dijagrami (uključujući ponovnu izradu zbog ispravaka) | PČ | 28 | `docs/3-Obrasci-uporabe.md`, `docs/puml/`, PR #126, PR #131–#134, PR #137 |
| Uređivanje `README` i `Home` stranica, provjera poveznica i dnevnika | PČ | 5 | `README.md`, `docs/Home.md` |
| Vođenje tima i sudjelovanje na sastancima | PČ | 6 | Evidencija sastanaka (`A.1`) |
| Implementacija sustava prijave (e-pošta, ORCID OAuth 2.0, JWT tokeni) | KT | 27 | `authController.js`, `orcidService.js`, `tokenService.js`, PR #54, PR #95, PR #115–#117 |
| Početni zahtjevi i inicijalno uređivanje `README` dokumentacije | KT | 2 | `README.md` (početne verzije) |
| Izrada dnevnika rada za sustav prijave | KT | 2 | `backend/prijava-dnevnikRad.md` |
| Pomoć članovima tima oko postavljanja lokalne okoline | KT | 4 | Evidencija sastanaka (`A.1`) |
| Sudjelovanje na sastancima i koordinaciji | KT | 3 | Evidencija sastanaka (`A.1`) |
| Izrada *frontend* sučelja (prijava, registracija, početna stranica, predaja rada, responzivnost) | MŠ | 24 | `frontend/src/pages/`, PR #49, PR #85, PR #127–#129, PR #142 |
| Integracija (*spajanje*) *backenda* za predaju radova s *frontendom* | MŠ | 3 | PR #127 |
| Izrada poglavlja `A. Pregled aktivnosti grupe` | MŠ | 5 | `docs/A-Pregled-aktivnosti-grupe.md` |
| Izrada osobnog dnevnika rada | MŠ | 2 | `KonfTrack_Marta.pdf` |
| Sudjelovanje na sastancima i koordinaciji | MŠ | 3 | Evidencija sastanaka (`A.1`) |
| Planiranje *backend* zadataka (`BE-01` do `BE-24`) | MH | 5 | GitHub Issues (`BE-01` – `BE-24`) |
| Inicijalizacija *backenda* (Express, Prisma, ESLint, Prettier, Swagger) | MH | 9 | `backend/`, PR #22 |
| Izrada poglavlja `4.1` i opis strukture *backenda* | MH | 5 | `docs/4-Arhitektura-i-oblikovanje.md`, PR #135 |
| Ažuriranje funkcijskih i nefunkcijskih zahtjeva | MH | 4 | PR #140 |
| Dopuna poglavlja `2.7` u analizi zahtjeva | MH | 2 | `docs/2-Analiza-zahtjeva.md` |
| Izrada dokumentacije *frontenda* | MH | 2 | `frontend/README-frontend.md` |
| Postavljanje predloška kolegija, `README` datoteke i upravljanje GitHub pristupima | MH | 3 | PR #4, PR #6 |
| Izrada dnevnika rada za inicijalizaciju *backenda* | MH | 2 | `backend/inicijalizacija-dnevnikRad.md` |
| Sudjelovanje na sastancima i koordinaciji | MH | 3 | Evidencija sastanaka (`A.1`) |
| Implementacija predaje radova (kontroler, prijenos PDF-a, provjera DOI-ja) | GS | 18 | `paperController.js`, `upload.js`, `pdfService.js`, `crossrefService.js`, PR #107, PR #119, PR #120 |
| Izrada *frontenda* za predaju radova i stranice programa konferencije | GS | 3 | PR #136 |
| Izrada dnevnika rada, ažuriranje `README` datoteka i ispravak poveznica | GS | 4 | `backend/rad-dnevnikRad.md`, PR #141 |
| Sudjelovanje na sastancima i koordinaciji | GS | 3 | Evidencija sastanaka (`A.1`) |
| Izrada baze podataka (Prisma shema, migracije, tablice tokena) | MLL | 20 | `prisma/schema.prisma`, migracije, PR #58, PR #94 |
| Izrada dokumentacije i dnevnika rada za bazu podataka | MLL | 2 | `db/README-db.md` |
<details>
<summary><strong>Primjer aktivnosti i rezultata rada</strong></summary>

**Primjer — CrisisMap:** Tablica razlikuje implementaciju, integraciju i dokumentaciju te svaku aktivnost povezuje s rezultatom.

| Aktivnost ili rezultat | Član | Prijavljeni sati | Reprezentativni rezultat ili poveznica |
| --- | --- | --- | --- |
| Ručni unos položaja na karti | AK | 8 | Zadatak #21; promjena klijentskog dijela. |
| Provjera valjanosti i trajna pohrana prijave | LM | 10 | Zadatak #23; promjena pozadinskog sustava i ispitivanje. |
| Integracija klijenta i API-ja te javno postavljanje | EP | 7 | Zadatak #25; konfiguracija u `render.yaml` i `dist/` |
| Obrazac uporabe za podnošenje prijave i provjera odbijenog dopuštenja | NK | 5 | Završene izmjene UC-002 i ispitivanje ST-03. |

**Trud i rezultat:** Završni stupac omogućuje raspravu o doprinosu bez tretiranja velikog broja sati kao dokaza isporuke. Tim može prijaviti stvarno dugotrajan, još neriješen problem integracije kao obavljen rad i iskreno opisati njegov ishod.

</details>

## A.4 Pregled promjena u repozitoriju

**Cilj:** Prikazati kada su promjene napravljene u repozitoriju i tko ih je napravio, uz napomenu da sam broj zapisa promjena ne mjeri kvalitetu doprinosa.

**Prikaz aktivnosti repozitorija:** [://github.com](https://github.com/pavlacancar/KonfTrack/graphs/contributors?from=2026-08-14T22%3A00%3A00.000Z) (razdoblje od **19. 10. 2026.** do **19. 11. 2026.**).

*(Napomena: Ovdje zalijepite ili ugradite snimku zaslona grafa s GitHuba: `![GitHub Contributors](putanja-do-slike.png)`).*

| Član | Broj *commitova* (bez spajanja) | Dana s aktivnošću |
| --- | --- | --- |
| **PČ** | 144 | 14 |
| **MŠ** | 24 | 10 |
| **GS** | 18 | 5 |
| **KT** | 16 | 7 |
| **MH** | 14 | 4 |
| **MLL** | 6 | 3 |
| **AP** | 4 | 3 |
| *GitHub Actions (automatski)* | *9* | *–* |

**Objašnjenje nesklada između broja *commitova* i prijavljenih sati:**
* **Predaja rada u većim cjelinama:** MLL ima 6 *commitova* (uz 25 prijavljenih sati) jer su shema baze podataka, migracije i tablice tokena predavani u većim, zaokruženim cjelinama. Slično tome, AP ima 4 *commita* (uz 20 sati) jer je cijelo sučelje registriranog korisnika (793 linije koda) predao u jednom zapisu.
* **Učestala izravna uređivanja na GitHubu:** PČ ima 144 *commita* (57 sati) jer je dokumentaciju i PlantUML dijagrame učitavala i uređivala u manjim koracima izravno putem web-sučelja GitHuba, uz dodatnih 9 automatskih *commitova* sustava GitHub Actions za regeneraciju dijagrama.
* **Aktivnosti izvan statistike zapisa:** Početni predložak kolegija koji je postavila MH (22. 10., oko 3800 linija) nije zabilježen kao njezin autorski kod. Graf također ne obuhvaća vrijeme uloženo u učenje, lokalno testiranje, izradu dnevnika rada te međusobnu pomoć članova tima.

---

## A.5 Ključni inženjerski izazovi i rješenja

**Cilj:** Dokumentirati stvarne tehničke i organizacijske prepreke s kojima se tim suočio, poduzete korektivne inženjerske korake te konačni ishod.

| Izazov | Poduzeta radnja | Ishod ili preostalo ograničenje |
| --- | --- | --- |
| **Izbor tehnološkog skupa** (Node/Express naspram Python/FastAPI) | Provedena je grupna rasprava te je donesena odluka da se koristi službeni predložak kolegija (Node/Express) umjesto FastAPI-ja koji je PČ započela. | **Riješeno.** Projekt je ujednačen na Node/Expressu u JavaScriptu, čime je olakšana suradnja cijelog tima. |
| **Prevelika unaprijed zadana granulacija zadataka za prijavu (`A1–A16`)** | Umjesto krutog praćenja unaprijed zadanog načina implementacije OAuth 2.0 prijave i tokena, članovi su tijekom razvoja slobodno dopunjavali i prilagođavali zadatke stvarnom stanju u kodu. | **Riješeno.** Sustav prijave e-poštom i ORCID-om uspješno je integriran i funkcionalan. |
| **Greška pri registraciji** (*„Popuni sva obavezna polja“*) | KT je usporedila polja HTML obrasca s očekivanim parametrima na *backendu* te uskladila nazive polja (`ime`, `lozinka` s `firstName`, `password` u kontroleru). | **Riješeno.** Registracija novih korisnika ispravno pohranjuje podatke u bazu. |
| **Neuspjela ORCID autorizacija** (*„Neispravna ORCID autorizacija“*) | KT je dijagnosticirala nesklad adresa te utvrdila da se adresa u pregledniku, varijabla `APP_URL` i `ORCID_CALLBACK_URL` moraju točno podudarati (`127.0.0.1` ili `localhost`), što je dokumentirano u uputama. | **Riješeno** i opisano u datoteci `backend/prijava-dnevnikRad.md`. |
| **Blokiranje *inline* JavaScripta zbog Helmet CSP pravila** | Uklonjen je sav *inline* JavaScript iz HTML predložaka te su skripte izdvojene u zasebne `.js` datoteke. | **Riješeno.** Sigurnosna zaglavlja rade bez blokiranja funkcionalnosti korisničkog sučelja. |
| **Usklađivanje SQL sheme i Prisme (dvije inicijalne migracije)** | MLL je ponovno postavio shemu baze, a na prijedlog MH tablice su definirane SQL-om te učitane u Prismu naredbom `db pull`. | **Djelomično riješeno.** Baza je stabilna, ali preostaje ograničenje da stupac `review_assignments.paper_id` trenutačno nema definiran strani ključ. |
| **Nekompatibilnost Prisme 7 s projektnim postavkama** | Zbog zahtjeva Prisme 7 za ESM modulima i drukčijom konfiguracijom, MH je donijela odluku o zadržavanju stabilne verzije Prisma 6. | **Riješeno** odlukom; migracije i upiti rade stabilno u cijelom sustavu. |
| **Ovisnost predaje rada o vanjskom Crossref servisu** | GS je izdvojila provjere u zasebne servise (`crossrefService.js`, `pdfService.js`) i prilagodila sustav da prikazuje upozorenja umjesto potpunog odbijanja rada. | **Riješeno uz ograničenja:** DOI-jevi se provjeravaju sekvencijalno, mrežna pogreška prikazuje se kao nepostojeći DOI, anonimnost se provjerava samo iz metapodataka PDF-a, a datoteke se pohranjuju lokalno. |
| **Pogreške u prvoj verziji obrazaca uporabe i analize (`2.5`, `2.6`, poglavlje `3`)** | PČ je ponovno izradila sporne dijelove dokumentacije i regenerirala pripadajuće PlantUML dijagrame (~10 h dodatnog rada). | **Riješeno** (PR #126, PR #131–#134, PR #137). |
| **Zaostajanje razvojnih grana za glavnom granom (`main`)** | Na sastanku 18. 11. uvedeno je pravilo obveznog spajanja isključivo putem *pull requestova* i redovitog slanja izmjena (*push*). | **U tijeku:** Potrebno potvrditi da su sve grane ažurne prije konačne predaje. |
| **Nedostajuće ovisnosti i rute u početnom *backend* zapisu** | U dnevniku *backenda* zabilježeno je da `/health` i Swagger nisu bili spojeni u `app.js` te da su nedostajali paketi `jsonwebtoken`, `multer` i `axios`. | **Potrebno provjeriti:** Provjeriti u `package.json` i `app.js` na grani `main` jesu li svi paketi i rute naknadno dodani tijekom razvoja. |
| **Prikaz sučelja za recenzije i stranica grešaka `403`/`404`** | Pokrenuto je pitanje vidljivosti dijela za recenzije (trenutačno vidljivo samo *„Moji radovi“*) te implementacije posebnih stranica za greške `403` i `404`. | **Otvoreno:** Potrebno provjeriti uloge korisnika (recenzent) i dovršiti prilagođene stranice grešaka prije konačne predaje. |
</details>

---

>**Završna provjera:** Sastanci navode smislene ishode i odgovorne osobe; plan odražava namjeravani rad; tablica uloženog rada i generirani prikaz repozitorija odnose na ovaj vidljivi projekt; konkretni izazovi povezani su s radnjama i njihovim rezultatima. 
