**Programsko inženjerstvo, FER. Grupa L-A-12.3**

# KonfTrack

KonfTrack je web-aplikacija namijenjena organizaciji znanstvenih konferencija. Cilj projekta je olakšati upravljanje konferencijama, prijavu znanstvenih radova, njihovo recenziranje, praćenje životnog ciklusa radova te donošenje odluka o prihvaćanju radova.

**Projekt na kolegiju:** Ovu je aplikaciju razvio studentski tim u sklopu kolegija [Programsko inženjerstvo](https://www.fer.unizg.hr/predmet/proinz) na Fakultetu elektrotehnike i računarstva Sveučilišta u Zagrebu (FER).

## Opis aplikacije

[Aplikacija rješava problem organizacije konferencija starim načinima tako što za razliku od njih  štedi vrijeme, omogućuje transparentnost, jednostavnost i preglednost, organiziranost te pravednost. Rješava problem anonimnosti i uvodi dvostruko slijepu recenziju kako bi konačan odabir bio optimalan. 
Namijenjena je svim autorima znanstvenih radova, recenzentima, predsjednicima programskog odbora i administratiorima konferencija. 

-**Neregistrirani korisnik** - bez prijave pregledava javnu stranicu konferencije i objavljeni program.
- **Autori** — prijavljuju znanstvene radove i predaju njihove verzije.
- **Recenzenti** — pregledavaju dodijeljene radove i izrađuju recenzije.
- **Predsjednik programskog odbora** — koordiniraju recenziranje i sudjeluju u donošenju odluka.
- **Organizator/administrator konferencije** — upravljaju postavkama konferencije, rokovima i korisničkim ulogama.

## TRENUTAČNE FUNKCIONALNOSTI:

| Funkcionalnost | Povezani zahtjevi | Napomena |
|---|---|---|
| Registracija korisnika adresom e-pošte i lozinkom | F-001, NF-01, NF-02 | Implementirana je registracija korisnika. Lozinka se pohranjuje u obliku sažetka (hash), a ne kao običan tekst. Validacija ulaznih podataka i dosljedni HTTP statusi pogrešaka još nisu potvrđeni. |
| Prijava korisnika adresom e-pošte i lozinkom | F-001, NF-01 | Implementirana je prijava korisnika i uspostavljanje sesije. Funkcionalnost je ručno provjerena putem alata Thunder Client, a automatizirani testovi još nisu napisani (NF-05). |
| Registracija i prijava putem ORCID računa (OAuth 2.0) | F-001, NF-01 | Implementiran je tijek autorizacije putem ORCID-a u sandbox okruženju. Potpuna end-to-end provjera integracije još nije potvrđena. Potrebno je osigurati sigurno rukovanje OAuth tokenima. |
| Odjava korisnika | F-001, NF-01 | Implementirano je uništavanje poslužiteljske sesije i uklanjanje sesijskog kolačića. Već izdani JWT tokeni ostaju valjani do isteka njihova 24-satnog trajanja, što je djelomično u neskladu s kriterijem da se odjavom poništava aktivna sesija. |
| Dohvat vlastitog korisničkog profila | F-002 | Implementiran je dohvat podataka prijavljenog korisnika. Mogućnost uređivanja profila (ime, prezime, ustanova, ORCID, područja ekspertize) još nije potvrđena. |
| Izdavanje JWT tokena za pristup API-ju | F-001, F-003, NF-01 | Implementirana je ruta `POST /api/auth/token`. Izdani token vrijedi 24 sata i koristi se za autentifikaciju zahtjeva prema zaštićenim API rutama. Provjera ovlasti prema ulozi na backendu još nije implementirana. |
| Javna početna stranica i stranica programa | F-007, F-022 | Osnovne stranice su izrađene. Podaci o programu trenutačno su privremeni i nije potvrđeno da su povezani sa stvarnim podacima iz baze. |
| Osnovno sučelje registriranog korisnika | F-002, F-008, F-011, NF-06 | Izrađene su stranice i navigacija za registriranog korisnika, uključujući početnu stranicu, obrazac za predaju rada i prikaz „Moji radovi”. Predaja rada kroz sučelje još nije potpuno povezana s poslužiteljskim dijelom aplikacije. Prilagodba mobilnim uređajima nije potvrđena. |
| Poslužiteljska obrada prijave znanstvenog rada | F-008, F-009, F-012, NF-02 | Implementiran je dio poslužiteljske logike za predaju rada, spremanje nacrta, pohranu PDF rukopisa i podataka o autorima. Potrebno je dovršiti koautore bez korisničkog računa, autora za kontakt i provjeru otvorenosti roka. Funkcionalnost još nije potpuno integrirana sa sučeljem. |
| Provjera PDF rukopisa i DOI referenci | F-009, F-010, NF-03 | Implementirane su provjere PDF datoteke, njezinih metapodataka i DOI referenci putem Crossref servisa. Provjera metapodataka ne znači automatsku provjeru anonimnosti cjelokupnog sadržaja dokumenta. |

## PLANIRANE FUNKCIONALNOSTI:

| Funkcionalnost | Povezani zahtjevi | Napomena |
|---|---|---|
| Upravljanje konferencijama, temama, rokovima i postavkama konferencije | F-004 – F-007, NF-07 | Obuhvaća odobravanje konferencija i imenovanje predsjednika programskog odbora, stvaranje i uređivanje konferencija i znanstvenih tema, upravljanje rokovima (uključujući produljenje i vremensku zonu) te objavu konferencije. |
| Potpuna integracija predaje znanstvenih radova sa sučeljem | F-008 – F-012, NF-02, NF-06, NF-08 | Obuhvaća predaju rada, upravljanje autorima i koautorima, rukopisima, izmjenama, povlačenjem radova, praćenjem statusa te predajom revidirane i konačne verzije. |
| Implementaciju, upravljanje korisničkim ulogama i ovlastima te administracija korisničkih računa | F-002, F-003, NF-01 | Potrebno je implementirati sustav korisničkih uloga (administrator, predsjednik programskog odbora, recenzent, autor) i pripadajućih ovlasti te osigurati da korisnici mogu pristupati funkcionalnostima i izvršavati radnje u skladu sa svojom ulogom i dodijeljenim pravima. Obuhvaća administraciju korisnika, deaktivaciju računa i provjeru ovlasti na backendu. |
| Pozivanje recenzenata, iskazivanje interesa i provjera sukoba interesa | F-013 – F-017 | Obuhvaća pozivanje recenzenata, iskazivanje interesa, provjeru sukoba interesa te predlaganje, potvrđivanje i izmjenu raspodjele radova uz najmanje tri recenzenta po radu, kao i zamjenu recenzenata. |
| Provedba recenzijskog postupka | F-018, F-019, NF-03 | Obuhvaća dvostruko slijepu recenziju, predaju recenzija, raspravu recenzenata i slanje podsjetnika. |
| Donošenje odluka o radovima i obavještavanje autora | F-020, F-021 | Obuhvaća evidentiranje odluka o prihvaćanju, reviziji ili odbijanju radova te obavještavanje autora. |
| Izrada i objava programa konferencije | F-022 | Obuhvaća organizaciju prihvaćenih radova u program konferencije. |
| Upravljanje osobnim rasporedom i izvoz podataka u kalendarske aplikacije | F-023 | Obuhvaća osobni raspored sudionika i izvoz podataka u Google Calendar. |
| Generiranje zbornika sažetaka u PDF formatu | F-024 | Obuhvaća generiranje zbornika sažetaka konferencije. |
| Statistika konferencije i platforme te upravljanje predlošcima e-pošte | F-025 | Obuhvaća statistiku za predsjednika programskog odbora (s izvozom u CSV) i administratora te uređivanje predložaka poruka e-pošte. |
| Nefunkcijska poboljšanja (konfiguracija, logiranje, testovi, dokumentacija, opterećenje) | NF-01, NF-02, NF-04, NF-05, NF-08 | Obuhvaća tajne i postavke izvan izvornog koda, centralizirano logiranje bez osjetljivih podataka, automatizirane unit i integracijske testove, dokumentaciju API ruta, sigurnosne testove pristupa i testiranje opterećenja. |

**Ključne funkcionalnosti**

- [Reprezentativna funkcionalnost koju korisnici mogu isprobati]:
- Prijava u sustav e-poštom ili ORCID računom (F-001)
- [Druga reprezentativna funkcionalnost]:
- Predaja znanstvenog rada (F-008, F-009)
- [Po želji dodatna funkcionalnost; nemojte kopirati cijeli popis zahtjeva];
- Povlačenje znanstvenog rada( F-011 )

Aplikacija rješava problem organizacije konferencija starim načinima tako što za razliku od njih štedi vrijeme, omogućuje transparentnost, jednostavnost i preglednost, organiziranost te pravednost. Rješava problem anonimnosti i uvodi dvostruko slijepu recenziju kako bi konačan odabir bio optimalan.
Namijenjena je svim autorima znanstvenih radova, recenzentima, predsjednicima programskog odbora i administratorima platforme.

- **Neregistrirani korisnik** — bez prijave pregledava javnu stranicu konferencije: poziv na predaju radova, teme, važne datume i objavljeni program.
- **Registrirani korisnik** — slaže osobni raspored izlaganja i izvozi ga u Google Calendar. Isti korisnik na različitim konferencijama može imati različite uloge.
- **Autor** — predaje radove, prati njihova stanja, predaje revizije i konačne verzije te prima obavijesti o odlukama.
- **Recenzent** — prihvaća poziv u programski odbor, iskazuje interes za radove, recenzira dodijeljene radove i sudjeluje u anonimnoj raspravi.
- **Predsjednik programskog odbora** — upravlja podacima, temama i rokovima konferencije, poziva recenzente, potvrđuje raspodjelu radova, donosi odluke, slaže program i pregledava statistiku.
- **Administrator** — upravlja korisničkim računima, odobrava nove konferencije i imenuje njihove predsjednike programskog odbora, uređuje predloške poruka e-pošte i pregledava statistiku korištenja platforme.

## Trenutačne funkcionalnosti

| Funkcionalnost                                        | Povezani zahtjevi | Napomena                                                                                                                                                                                                                              |
| ----------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Registracija korisnika adresom e-pošte i lozinkom     | F-001             | Implementirana je registracija korisnika. Lozinka se pohranjuje u obliku sažetka (hash), a ne kao običan tekst.                                                                                                                       |
| Prijava korisnika adresom e-pošte i lozinkom          | F-001             | Implementirana je prijava korisnika i uspostavljanje sesije. Funkcionalnost je ručno provjerena putem alata Thunder Client.                                                                                                           |
| Registracija i prijava putem ORCID računa (OAuth 2.0) | F-001             | Implementiran je tijek autorizacije putem ORCID-a u sandbox okruženju. Potpuna end-to-end provjera integracije još nije potvrđena.                                                                                                    |
| Odjava korisnika                                      | F-001             | Implementirano je uništavanje poslužiteljske sesije i uklanjanje sesijskog kolačića. Već izdani JWT tokeni ostaju valjani do isteka njihova 24-satnog trajanja.                                                                       |
| Dohvat vlastitog korisničkog profila                  | F-002             | Implementiran je dohvat podataka prijavljenog korisnika. Mogućnost uređivanja profila još nije potvrđena.                                                                                                                             |
| Izdavanje JWT tokena za pristup API-ju                | F-001, NF-01      | Implementirana je ruta `POST /api/auth/token`. Izdani token vrijedi 24 sata i koristi se za autentifikaciju zahtjeva prema zaštićenim API rutama.                                                                                     |
| Javna početna stranica i stranica programa            | F-007             | Osnovne stranice su izrađene. Podaci o programu trenutačno su privremeni i nije potvrđeno da su povezani sa stvarnim podacima iz baze.                                                                                                |
| Osnovno sučelje registriranog korisnika               | F-008, F-011      | Izrađene su stranice i navigacija za registriranog korisnika, uključujući početnu stranicu, obrazac za predaju rada i prikaz „Moji radovi”. Predaja rada kroz sučelje još nije potpuno povezana s poslužiteljskim dijelom aplikacije. |
| Poslužiteljska obrada prijave znanstvenog rada        | F-008 – F-010     | Implementiran je dio poslužiteljske logike za predaju rada, spremanje nacrta, pohranu PDF rukopisa i podataka o autorima. Funkcionalnost još nije potpuno integrirana sa sučeljem.                                                    |
| Provjera PDF rukopisa i DOI referenci                 | F-009, F-010      | Implementirane su provjere PDF datoteke, njezinih metapodataka i DOI referenci putem Crossref servisa. Provjera metapodataka ne znači automatsku provjeru anonimnosti cjelokupnog sadržaja dokumenta.                                 |

## Planirane funkcionalnosti

| Funkcionalnost                                                                   | Povezani zahtjevi | Napomena                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Upravljanje konferencijama, temama, rokovima i postavkama konferencije           | F-004 – F-007     | Obuhvaća stvaranje i uređivanje konferencija te upravljanje njihovim osnovnim postavkama i rokovima.                                                                                                                                                                                       |
| Potpuna integracija predaje znanstvenih radova sa sučeljem                       | F-008 – F-011     | Obuhvaća predaju rada, upravljanje autorima i koautorima, rukopisima, izmjenama i povlačenjem radova.                                                                                                                                                                                      |
| Upravljanje korisničkim ulogama i ovlastima te administracija korisničkih računa | F-003             | Potrebno je implementirati sustav korisničkih uloga i pripadajućih ovlasti te osigurati da korisnici mogu pristupati funkcionalnostima i izvršavati radnje u skladu sa svojom ulogom i dodijeljenim pravima. Obuhvaća administraciju korisnika i upravljanje njihovim ovlastima u sustavu. |
| Pozivanje recenzenata, iskazivanje interesa i provjera sukoba interesa           | F-013 – F-017     | Obuhvaća pozivanje recenzenata, iskazivanje interesa, provjeru sukoba interesa te predlaganje, potvrđivanje i izmjenu raspodjele radova.                                                                                                                                                   |
| Provedba recenzijskog postupka                                                   | F-017 – F-019     | Obuhvaća dvostruko slijepu recenziju, predaju recenzija, raspravu recenzenata i slanje podsjetnika.                                                                                                                                                                                        |
| Donošenje odluka o radovima i obavještavanje autora                              | F-020, F-021      | Obuhvaća evidentiranje odluka o prihvaćanju ili odbijanju radova te obavještavanje autora.                                                                                                                                                                                                 |
| Izrada i objava programa konferencije                                            | F-022             | Obuhvaća organizaciju prihvaćenih radova u program konferencije.                                                                                                                                                                                                                           |
| Upravljanje osobnim rasporedom i izvoz podataka u kalendarske aplikacije         | F-023             | Obuhvaća osobni raspored sudionika i izvoz podataka u kalendarski format odnosno podržane kalendarske aplikacije.                                                                                                                                                                          |
| Generiranje zbornika sažetaka u PDF formatu                                      | F-024             | Obuhvaća generiranje zbornika sažetaka konferencije.                                                                                                                                                                                                                                       |
| Statistika konferencije i platforme, izvoz u CSV i predlošci poruka e-pošte      | F-025             | Obuhvaća pregled „Statistika” za predsjednika programskog odbora, izvoz u CSV te administratorsko uređivanje predložaka poruka i pregled statistike korištenja.                                                                                                                            |

**Ključne funkcionalnosti**

- Prijava u sustav e-poštom ili ORCID računom (F-001)
- Predaja znanstvenog rada s provjerom PDF rukopisa i DOI referenci (F-008 – F-010)
- Povlačenje znanstvenog rada (F-011)

Za potpuni opis funkcijskih i nefunkcijskih zahtjeva, slučajeva uporabe, arhitekture, implementacije i rezultata ispitivanja pogledajte [projektnu dokumentaciju](/docs/Home.md)

<a id="deployment"></a>

## Postavljanje (engl. deployment)

<!-- UPUTA: Ovaj odjeljak opisuje već postavljenu aplikaciju koju se  može otvoriti i isprobati bez lokalnog pokretanja izvornog koda.
Za Iteraciju 1 i Završni pregled navedite konkretne podatke. Provjerite vodi li URL na javno dostupnu pokrenutu aplikaciju i radi li navedeni tijek uporabe. Nikada ne objavljujte lozinke ni pristupne tokene. Provjereni koraci za instalaciju, pokretanje backenda i frontenda -->

**Javno dostupna aplikacija:** [Javni URL]

**Isprobajte:** [Jedna ili dvije kratke radnje koje pokazuju funkcionalan korisnički tijek.]

**Demonstracija:** [Objasnite kako dobiti potreban ograničeni pristup ako je prijava obavezna; u suprotnom napišite „Korisnički račun nije potreban.” Ovdje ne objavljujte lozinke ni pristupne tokene.]

**Ograničenja:** [Kratko navedite ograničenja postavljene inačice ili postavite poveznicu na jedinstveno mjerodavno mjesto u dokumentaciji s poznatim problemima.]

[Vodič za postavljanje i pokretanje](docs/6-Postavljanje-instalacija-i-konfiguracija.md) opisuje smještaj aplikacije (engl. hosting) koji tim stvarno koristi. Tim može koristiti Render ili drugu platformu koju ste dogovorili s asistentom/demonstratorom.

<a id="quick-start"></a>

## Brzi početak / instalacija

<!-- Obavezno od Demo 1 nadalje. Zamijenite mjesta za unos naredbama koje je drugi član tima uspješno provjerio nakon čistog kloniranja repozitorija. Detaljne upute za administraciju držite u projektnoj dokumentaciji u direktoriju docs/. -->

**Preduvjeti:** Instalacija Node.js, npm, Python, PostgreSQL, GitHub Desktop

```bash
# Preuzimanje projekta
git clone [URL vašeg repozitorija]
cd KonfTrack
```

Za ispravno pokretanje aplikacije potrebno je postaviti bazu podataka, konfigurirati varijable okruženja i instalirati potrebne pakete. Detaljne upute za postavljanje baze podataka, konfiguraciju .env datoteke, pokretanje migracija i pokretanje backend poslužitelja nalaze se u navedenoj dokumentaciji.

- [Dokumentacija baze podataka za pokretanje apliakcije](db/README-db.md)
- [Dokumentacija backenda za pokretanje aplikacije](backend/README.md)

**Adresa:** [Stvarna adresa koju aplikacija ispiše nakon pokretanja.]

**Konfiguracija:** [Navedite potrebne varijable okruženja (engl. environment variables) ili uputite na sigurnu datoteku `.env.example`; objasnite gdje se dobivaju vrijednosti. Nikada ne stavljajte stvarne pristupne podatke u ovu datoteku, primjer konfiguracije, snimke zaslona, zapise ni zapise promjena (engl. commits).]

[Dodajte kratak korak provjere, primjerice koja se stranica treba otvoriti ili koja naredba pokreće osnovnu provjeru.] Za detaljno postavljanje pogledajte [projektnu dokumentaciju](docs/Home.md).

## Tehnologije

Navedite nekoliko tehnologija i vanjskih usluga koje bitno određuju kako vaša aplikacija radi. Za svaku navedite njezinu konkretnu ulogu i jedan razlog ili ograničenje važno za projekt. Alat za razvoj ili ispitivanje uključite samo ako je njegova uloga važna za razumijevanje načina na koji je projekt izrađen ili provjeren. Nemojte prepisivati popis ovisnosti (engl. dependencies), statistiku programskih jezika ni popis razvojnih okruženja i komunikacijskih alata. Tablicu provjerite prema stvarnom repozitoriju i pokrenutoj aplikaciji; potrebne verzije i konfiguraciju dokumentirajte u vodiču za instalaciju.

| Tehnologija ili alat  | Uloga u ovom projektu                                                     | Razlog uporabe ili važno ograničenje                                                              |
| --------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Node.js i Express     | Poslužiteljska aplikacija: rute, obrada obrazaca i API.                   | Ista aplikacija poslužuje web-stranice i API, pa se postavlja kao jedna usluga.                   |
| EJS                   | Generiranje web-stranica na poslužitelju.                                 | Sučelje se uglavnom sastoji od obrazaca i popisa, pa nije potreban zaseban klijent u pregledniku. |
| PostgreSQL            | Pohrana korisnika, konferencija, radova, recenzija i njihovih odnosa.     | Podaci su izrazito povezani; promjene sheme zahtijevaju migracije.                                |
| Prisma                | Pristup bazi i verzionirane migracije.                                    | Svi članovi tima rade nad istom shemom iz repozitorija.                                           |
| express-session i JWT | Sesija za web-stranice i tokeni za API.                                   | Izdani JWT ostaje valjan do isteka i nakon odjave.                                                |
| ORCID (OAuth 2.0)     | Registracija i prijava istraživača te podaci za provjeru sukoba interesa. | Ovisnost o vanjskoj usluzi; sandbox i produkcija imaju odvojene postavke.                         |
| Crossref API          | Provjera DOI oznaka referenci predanih radova.                            | Vanjska usluga; nedostupnost servisa ne smije spriječiti predaju rada.                            |

Obrazloženje ključnih arhitekturnih odluka nalazi se u [poglavlju 4.1 – Ključne arhitekturne odluke](docs/4-Arhitektura-i-oblikovanje.md).

<details>
<summary><strong>Primjer: objašnjenje ključnih tehnoloških odluka</strong></summary>

**Primjer — CrisisMap:**

| Tehnologija ili alat                                  | Uloga u ovom projektu                                                | Razlog uporabe ili važno ograničenje                                                                                                               |
| ----------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| React                                                 | Prikazuje obrazac za prijavu i kartu kriznih događaja u pregledniku. | Karta i poslane prijave mogu se ažurirati bez ponovnog učitavanja cijele stranice.                                                                 |
| PostgreSQL                                            | Pohranjuje prijave, lokacije i njihove odnose.                       | Zapisi o prijavama moraju ostati povezani s autorima i lokacijama; promjene sheme zahtijevaju migracije baze podataka (engl. database migrations). |
| Usluga kartografskih pločica (engl. map tile service) | Omogućuje prikaz karte u pregledniku.                                | Karta ovisi o vanjskoj usluzi; aplikacija mora imati definirano ponašanje i kada kartografske pločice nisu dostupne.                               |

**Analiza primjera:** Svaki redak opisuje ulogu ili posljedicu konkretne tehnologije u ovoj aplikaciji. Verzije paketa pripadaju datotekama s ovisnostima projekta; verzije izvršnog okruženja i konfiguracija važna za postavljanje pripadaju vodiču za instalaciju. Važne kompromise u oblikovanju (engl. design trade-offs) objasnite na stranici arhitekture u direktoriju `docs/` umjesto da ovdje ponavljate cijeli zapis odluke. Navodite samo usluge koje vaš tim stvarno integrira.

</details>

<a id="team-members"></a>

## Članovi tima

| Član tima | Uloga |
|---|---|
| Marta Šimić | Frontend |
| Karla Tušek | Backend |
| Antonio Pasarić | Frontend |
| Gabrijela Stipić | Backend |
| Mia Hrkać | Backend |
| Marin Lukas Lončar | Baze podataka |
| Pavla Čančar | Koordinator + Dokumentacija |


Uloge se tijekom projekta mogu mijenjati. Repozitorij i dogovoreni alat za praćenje zadataka (engl. task tracker) služe kao dodatni dokazi timskog rada.

## Doprinos projektu

[Ako je primjenjivo, ukratko opišite kako se evidentiraju zadaci i nedostaci te kako se pregledavaju promjene koda i gdje se nalazi aktualna evidencija zadataka. Ako tim održava `CONTRIBUTING.md`, ovdje postavite poveznicu umjesto ponavljanja pravila. Nemojte stvarati tu datoteku samo zato da biste popunili ovaj odjeljak.]

opis:

- Podjela zadataka odvijala se tijekom laboratorijskih vježbi, na sastancima uživo, putem GitHub Issues alata te dogovorom u zajedničkoj WhatsApp grupi.
  Greške i nedostaci uočavaju se tijekom testiranja i korištenja aplikacije, a zatim se prijavljuju u WhatsApp grupu. Za pojedine probleme otvaraju se GitHub Issues zadaci kojima se dodjeljuje odgovorna osoba (Assignee).
- Radi očuvanja stabilnosti glavne grane (main), izravno dodavanje promjena u nju nije dopušteno. Svi članovi tima dužni su raditi putem zasebnih grana (branch) ili forkanjem repozitorija te predavati promjene putem Pull Requestova (PR).Iznimke su dodavanje nekih dijelova dokumentacije.(npr. prenošenje .puml i .svg datoteka za UML dijagrame)
- Pri otvaranju Pull Requesta u pravilu se određuje član tima zadužen za pregled promjena (Review). Ako je ta osoba dulje vrijeme nedostupna, moguće je odabrati drugog člana ili samostalno spojiti promjene, ali samo u slučaju novih, neovisnih funkcionalnosti koje ne utječu na postojeće dijelove aplikacije. Ako promjena uključuje uklanjanje postojećeg sadržaja ili utječe na druge funkcionalnosti, pregled drugog člana tima obvezan je prije spajanja.
- Članovi tima također kontinuirano testiraju aplikaciju te prijavljuju uočene probleme i daju povratne informacije o već implementiranim funkcionalnostima.
- Aktualna evidencija postojećih i planiranih funkcionalnosti nalazi se u ovom dokumentu, u odgovarajućim odjeljcima(trenutačne i planirane funkcionalnosti).
- Evidencija raspodjele zadataka i doprinosa pojedinih članova ili grupa dostupna je u dokumentaciji pojedinih dijelova projekta te kroz povijest Pull Requestova i commitova. Također, dostupni su dnevnici rada pojedinih timova:
- [Dokumentacija baze podataka](db/README-db.md)
- [Dokumentacija frontenda](frontend/README-frontend.md)
- [Dokumentacija backenda za prijavu](backend/prijava-dnevnikRad.md)
- [Dokumentacija backenda za inicijalizaciju](backend/inicijalizacija-dnevnikRad.md)
- [Dokumentacija backenda za predaju i povlačenje rada](backend/rad-dnevnikRad.md)

<a id="license"></a>

**Status licence:** [Navedite licencu i postavite poveznicu na projektnu datoteku `LICENSE` ili izričito navedite da nije dodijeljena licenca koja dopušta javnu ponovnu uporabu. Namjeravani opseg provjerite s timom; nemojte prepisivati licencu predloška ove dokumentacije kao licencu svoje aplikacije.]

Dokumentacijski predložak kolegija sadrži otvorene obrazovne sadržaje (engl. Open Educational Resources, OER) i licenciran je licencom Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International. Ta licenca **ne određuje automatski licencu studentske aplikacije**; tim treba jasno navesti licencu svojeg projekta u prethodnom retku i datoteci `LICENSE`, ako je primjenjivo.

Kod trećih strana, skupovi podataka, slike, ikone i drugi sadržaji zadržavaju vlastite licence i uvjete uporabe. [Po potrebi postavite poveznicu na zahvale i izvore.]

<a id="ai-usage"></a>

## Uporaba umjetne inteligencije [![AI Usage: Disclosed](https://img.shields.io/badge/AI%20Usage-Disclosed-blue.svg)](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf)

Ovaj projekt slijedi FER-ova [pravila o primjerenoj uporabi umjetne inteligencije](https://www.fer.unizg.hr/_download/repository/Policy%20on%20the%20appropriate%20use%20of%20artificial%20intelligence%20at%20the%20faculty%20of%20electrical%20engineering%20and%20computing%5B1%5D.pdf).

**Izjava:** [Navedite jesu li korišteni alati umjetne inteligencije. Ako jesu, navedite alate i njihove glavne namjene te objasnite kako je tim pregledao nastali kod ili tekst i kako može objasniti vlastiti doprinos. Ako nisu korišteni, to jasno navedite. U alate umjetne inteligencije nemojte unositi privatne podatke, pristupne podatke ni tuđe zaštićene materijale.]

[Ako je za ovaj projekt potreban detaljniji zapis uporabe umjetne inteligencije, postavite poveznicu na njegovo jedinstveno mjerodavno mjesto u dokumentaciji.]

**Izjava:**
AI je u dokumentaciji korišten za ispravljanje pravopisa i gramatike, poboljšavanje stila i formulacije rečenica, usklađivanje struktura teksta s kosturom predloška dokumentacije, pregledavanje je li nešto duplicirano, previđeno, zaboravljeno, nekonzistentno ili cjelovito. AI alat koji je korišten za izradu dokumentacije je Chat GPT. Sadržaj koji je generirao ponekad je uvelike olakšao zapis dokumentacije i praćenje, ali ponekad je bio neprecizan, zaobilazio rješenje ili ubacivao pogrešne stvari. Za svako korištenje bilo je potrebno pregledati, provjeriti, ispraviti i preoblikovati sadržaj.
AI je u programiranju korišten za istraživanje, upoznavanje rada s vanjskim sustavima, prevođenje dokumenata, pomoć u usmjeravanju koda, debuggiranje...
AI alat koji su korišteni jesu ChatGPT i Claude.


1. Koji AI alat si koristio/la – primjerice ChatGPT, Gemini ili Copilot.
2. Kako si ga koristio/la – primjerice za ispravljanje gramatike, razradu ideja ili pomoć pri programiranju.
3. Kako je AI pridonio radu – objasniti na koji je način njegov sadržaj iskorišten.
4. Osobno kritičko mišljenje – vlastiti osvrt na sadržaj koji je generirao AI.
5. Detaljan zapis upita (promptova) – navesti što si upisivao/la u AI alat i kako si s njim komunicirao/la.

<a id="code-of-conduct-and-support"></a>

## Kodeks ponašanja i podrška [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

Od članova tima očekuje se pridržavanje **Kodeksa ponašanja studenata** Fakulteta elektrotehnike i računarstva Sveučilišta u Zagrebu, pravila timskog rada na kolegiju i [Etičkog kodeksa IEEE-a](https://www.ieee.org/about/corporate/governance/p7-8.html). [Postavite poveznicu na `CODE_OF_CONDUCT.md` ako se ta datoteka koristi u vašem repozitoriju.]

---

Struktura dokumentacije prilagođena je predlošku kolegija Programsko inženjerstvo FER-a autora [Vlade Sruka](https://www.fer.unizg.hr/vlado.sruk), licenciranom pod [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Aplikaciju i njezin sadržaj izradio je gore navedeni studentski tim.
