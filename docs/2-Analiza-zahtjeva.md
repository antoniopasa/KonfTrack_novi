# 2. Analiza zahtjeva

**Cilj:** Iz odobrenog opsega projekta izvesti prepoznatljive, prioritetizirane i provjerljive zahtjeve. Zahtjevi se mogu mijenjati; pri završnoj predaji moraju odražavati dogovorenu aplikaciju. Izvori, odluke i poveznice u primjerima kolegija nastavni su scenariji, a ne projektni zapisi.

<details>
<summary><strong>Održavanje zahtjeva ažurnima</strong></summary>

Primjeri koriste temu projekta CrisisMap. Neki namjerno sadrže korisne nedostatke za raspravu. Izvori, odluke i poveznice na provjere u tim primjerima **nastavni su scenariji**, a ne zapisi rada stvarnog studentskog tima. Zamijenite ih zahtjevima i dokazima svojeg odobrenog projekta. Značajne promjene zabilježite u odjeljku 2.5.

</details>

## 2.1 Funkcijski zahtjevi

Cilj: Navesti što aplikacija mora omogućiti korisnicima, odakle pojedina mogućnost proizlazi i koji se opažljivi rezultat smatra prihvaćanjem.

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
|---|---|---|---|---|
| F-001 | Sustav omogućuje registraciju, prijavu i odjavu korisnika putem adrese e-pošte ili ORCID računa. | Visok | Projektni zadatak | Korisnik se može registrirati i prijaviti podržanim načinom autentifikacije. Sustav provjerava valjanost podataka i ne dopušta pristup neautentificiranim korisnicima. Odjavom se poništava aktivna korisnička sesija. |
| F-002 | Sustav omogućuje pregled i uređivanje osobnog korisničkog profila. | Visok | Projektni zadatak | Prijavljeni korisnik može pregledati i ažurirati dopuštene osobne podatke, uključujući ime, prezime, ustanovu, ORCID identifikator i područja ekspertize. Korisnik ne može samostalno mijenjati administrativne ovlasti. |
| F-003 | Sustav omogućuje upravljanje korisničkim računima, ulogama i pravima pristupa. | Visok | Projektni zadatak | Sustav podržava uloge administratora, predsjednika programskog odbora, recenzenta i autora. Administrator može pregledavati i deaktivirati korisničke račune, a ovlašteni korisnici mogu dodjeljivati uloge za pojedine konferencije. Sustav provjerava ovlasti pri izvođenju zaštićenih operacija i sprječava neovlašten pristup podacima drugih korisnika ili konferencija. |
| F-004 | Sustav omogućuje administratoru odobravanje konferencija i imenovanje predsjednika programskog odbora. | Visok | Projektni zadatak | Administrator može odobriti novu konferenciju i imenovati njezina predsjednika programskog odbora. Navedene radnje nisu dostupne korisnicima bez odgovarajućih ovlasti. |
| F-005 | Sustav omogućuje predsjedniku programskog odbora upravljanje osnovnim podacima konferencije i njezinim znanstvenim temama. | Visok | Projektni zadatak | Predsjednik može unositi i uređivati naziv, opis, mjesto, datume održavanja i znanstvene teme konferencije. Sustav omogućuje pregled spremljenih podataka. |
| F-006 | Sustav omogućuje definiranje i upravljanje rokovima konferencije. | Visok | Projektni zadatak | Predsjednik može definirati rokove za predaju radova, recenziju, obavještavanje autora i predaju konačnih verzija te ih naknadno produljiti. Sustav nakon isteka roka onemogućuje odgovarajuće radnje, a o produljenju obavještava zahvaćene korisnike. |
| F-007 | Sustav omogućuje objavljivanje konferencije i pregled njezinih javno dostupnih informacija. | Visok | Projektni zadatak | Predsjednik može objaviti konferenciju i njezine javne informacije. Neregistrirani korisnici mogu pregledati objavljene podatke, uključujući poziv na predaju radova, teme, važne datume i objavljeni program, ali nemaju pristup zaštićenim funkcionalnostima. |
| F-008 | Sustav omogućuje predaju znanstvenog rada za odabranu konferenciju, uključujući unos podataka o radu i njegovim autorima. | Visok | Projektni zadatak | Prijavljeni korisnik može predati rad ako su predaja i pripadajući rok otvoreni. Za rad se evidentiraju naslov, sažetak, ključne riječi, znanstvena tema i autori. Moguće je odabrati postojeće korisnike kao koautore ili unijeti podatke o osobama koje još nemaju korisnički račun. Za svaki rad određuje se jedan autor za kontakt. |
| F-009 | Sustav omogućuje prilaganje i provjeru rukopisa znanstvenog rada u PDF formatu. | Visok | Projektni zadatak | Autor može priložiti PDF rukopis. Sustav provjerava format i dopušteni broj stranica te pregledava metapodatke dokumenta radi pronalaska imena autora. Ako pronađe moguće podatke koji narušavaju anonimnost, prikazuje upozorenje autoru. |
| F-010 | Sustav omogućuje provjeru DOI oznaka referenci u znanstvenom radu putem vanjskog servisa Crossref. | Srednji | Projektni zadatak | Sustav za navedene DOI oznake dohvaća dostupne metapodatke putem servisa Crossref. Ako DOI oznaka nije pronađena, autoru se prikazuje upozorenje. |
| F-011 | Sustav omogućuje autoru pregled, uređivanje i povlačenje vlastitih radova u skladu s pravilima životnog ciklusa rada. | Visok | Projektni zadatak i pitanje za pojašnjenje | Autor može pregledavati vlastite radove i uređivati ih samo u dopuštenim fazama i unutar odgovarajućih rokova. Tijekom recenziranja nije dopušteno uređivanje rada. Autor može povući vlastiti rad u bilo kojem trenutku prije njegova prihvaćanja, uključujući razdoblje recenziranja. Povučeni rad ostaje evidentiran u sustavu. |
| F-012 | Sustav prati i evidentira statuse znanstvenih radova tijekom njihova životnog ciklusa te omogućuje predaju revidirane i konačne verzije rada. | Visok | Projektni zadatak | Sustav evidentira statuse rada: nacrt, predan, u recenziji, potrebna revizija, prihvaćen, odbijen, konačna verzija predana i uvršten u program. Nakon zatražene revizije autor može ponovno predati rad i dokument s odgovorima recenzentima. Nakon prihvaćanja može predati konačnu verziju rada i potpisanu izjavu o autorskim pravima te navesti izlagača. |
| F-013 | Sustav omogućuje pozivanje recenzenata i evidentiranje njihova odgovora na poziv. | Visok | Projektni zadatak | Predsjednik programskog odbora može poslati pozivnicu potencijalnom recenzentu putem e-pošte. Pozvani korisnik može prihvatiti ili odbiti poziv, a sustav evidentira njegov odgovor. |
| F-014 | Sustav omogućuje recenzentima iskazivanje interesa i prijavu sukoba interesa za pojedine radove. | Visok | Projektni zadatak | Recenzent može iskazati želi li ili može li recenzirati pojedini rad, odbiti recenziranje ili prijaviti sukob interesa. Sustav uzima u obzir prijavljene sukobe interesa pri raspodjeli radova. |
| F-015 | Sustav provjerava moguće sukobe interesa između recenzenata i autora radova. | Visok | Projektni zadatak | Sustav provjerava postoje li poveznice između recenzenta i autora na temelju zajedničke ustanove ili koautorstva u posljednje tri godine, koristeći dostupne podatke iz ORCID-a. Utvrđeni sukobi interesa uzimaju se u obzir pri raspodjeli radova. |
| F-016 | Sustav omogućuje automatsko predlaganje, pregled, potvrdu i ručno uređivanje raspodjele radova recenzentima. | Visok | Projektni zadatak i pitanje za pojašnjenje | Sustav predlaže raspodjelu uzimajući u obzir interese recenzenata, sukobe interesa i ravnomjernost opterećenja. Svaki rad mora imati najmanje tri recenzenta. Predložena raspodjela vidljiva je samo predsjedniku programskog odbora dok je ne potvrdi. Predsjednik može ručno mijenjati raspodjelu, pri čemu se i dalje mora očuvati najmanje tri recenzenta po radu. |
| F-017 | Sustav omogućuje zamjenu recenzenata i upravljanje njihovim pristupom dodijeljenim radovima. | Visok | Projektni zadatak i pitanje za pojašnjenje | Predsjednik programskog odbora može zamijeniti dodijeljenog recenzenta drugim recenzentom, uključujući slučaj kašnjenja s recenzijom. Zamijenjeni recenzent gubi pristup radu i recenzijskim podacima te više ne može predati recenziju ni utjecati na odluku o radu. Sustav pritom mora očuvati pravilo o najmanje tri recenzenta po radu. |
| F-018 | Sustav omogućuje recenzentima pregled dodijeljenih radova i predaju recenzija u skladu s pravilima dvostruko slijepog recenziranja. | Visok | Projektni zadatak | Recenzent može pregledati dodijeljene radove i rokove te predati recenziju koja sadrži ocjenu od −3 do +3, procjenu vlastite stručnosti od 1 do 5, komentar za autore i povjerljivi komentar za programski odbor. Identiteti autora i recenzenata međusobno su skriveni tijekom recenzijskog postupka. |
| F-019 | Sustav omogućuje pregled recenzija, raspravu recenzenata i praćenje rokova recenziranja. | Visok | Projektni zadatak | Recenzenti mogu pregledati međusobne recenzije nakon predaje svih recenzija za pojedini rad te sudjelovati u anonimnoj raspravi. Sustav šalje podsjetnike sedam i dva dana prije isteka roka te označava zakašnjele recenzije kako bi ih predsjednik programskog odbora mogao pratiti. |
| F-020 | Sustav omogućuje predsjedniku programskog odbora pregled rezultata recenziranja i donošenje odluka o radovima. | Visok | Projektni zadatak | Predsjednik može pregledati predane recenzije, prosječne ocjene, broj pristiglih recenzija i značajna neslaganja među ocjenama. Za svaki rad može donijeti odluku: prihvaćen, potrebna revizija ili odbijen. |
| F-021 | Sustav omogućuje obavještavanje autora o odlukama programskog odbora i pripadajućim recenzijama. | Visok | Projektni zadatak | Predsjednik može poslati obavijesti autorima o donesenim odlukama. Obavijest sadržava odluku i komentare recenzenata namijenjene autorima, ali ne uključuje povjerljive komentare programskom odboru. |
| F-022 | Sustav omogućuje izradu, uređivanje i objavu programa konferencije. | Visok | Projektni zadatak | Predsjednik može organizirati program u sekcije te za svaku definirati temu, dvoranu, termin i predsjedavajućeg. Sustav može predložiti grupiranje radova prema temama i ključnim riječima te upozorava na vremenska preklapanja izlaganja istog izlagača i slučajeve u kojima je predsjedavajući autor rada u vlastitoj sekciji. Uvrštenim radovima ažurira se status, a objavljeni program dostupan je javnosti. |
| F-023 | Sustav omogućuje korisnicima izradu i izvoz osobnog rasporeda izlaganja. | Srednji | Projektni zadatak | Prijavljeni korisnik može odabrati izlaganja i dodati ih u osobni raspored te izvesti odabrana izlaganja u Google Calendar. |
| F-024 | Sustav omogućuje automatsko generiranje zbornika sažetaka prihvaćenih radova u PDF formatu. | Visok | Projektni zadatak | Sustav generira PDF dokument koji sadržava sažetke prihvaćenih radova, organizirane prema programskim sekcijama, te kazalo autora. |
| F-025 | Sustav omogućuje pregled i izvoz statističkih podataka o konferenciji i korištenju platforme te upravljanje predlošcima poruka e-pošte. | Srednji | Projektni zadatak | Predsjednik programskog odbora može pregledati statistiku konferencije, uključujući broj predanih radova po temama, udio prihvaćenih radova, prosječno trajanje recenzije i opterećenje recenzenata, te izvesti podatke u CSV formatu. Administrator može pregledati statistiku korištenja platforme i uređivati predloške poruka e-pošte. |

### Izvori zahtjeva i kriteriji prihvaćanja


<details>
<summary><strong>Izvori zahtjeva i kriteriji prihvaćanja</strong></summary>

Svaki zahtjev treba imati stabilan ID. **Izvor označava odakle zahtjev potječe**, primjerice iz odobrenog projektnog zadatka, zahtjeva dionika ili povratne informacije koja je promijenila zahtjev. Opišite opažljivo ponašanje umjesto naziva zaslona ili programskog okvira. U cijeloj dokumentaciji koristite istu ljestvicu prioriteta. Složenu korisničku interakciju objasnite u odgovarajućem obrascu uporabe umjesto kopiranja cijelog tijeka u ovu tablicu.

**Primjer — funkcijski zahtjevi za aplikaciju CrisisMap:**

Kategorije izvora pokazuju različite načine na koje zahtjev može nastati.

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| F-001 | Sustav omogućuje korisniku registraciju računa pomoću adrese e-pošte. | Visok | Zahtjev dionika | Korisnik se može registrirati adresom e-pošte, primiti poruku za potvrdu i aktivirati račun slijedeći poveznicu. |
| F-002 | Sustav omogućuje oporavak lozinke putem e-pošte. | Srednji | Zahtjev dionika | Korisnik može zatražiti ponovno postavljanje lozinke, primiti poveznicu i uspješno postaviti novu lozinku. |
| F-003 | Sustav prikazuje popis dostupnih resursa povezanih s kriznim događajima. | Visok | Postojeći sustav | Korisnik može pregledati ažurirani popis resursa relevantnih za vrstu kriznog događaja, lokaciju i raspoloživost. |
| F-004 | Sustav omogućuje korisnicima podnošenje prijave kriznog događaja s lokacijom. | Visok | Dokument sa zahtjevima | Korisnik može podnijeti prijavu s vrstom kriznog događaja, razinom ozbiljnosti i lokacijom te dobiti potvrdu o zaprimanju. Ako odbije pristup geolokaciji preglednika, može lokaciju odabrati ručno.|
| F-005 | Sustav šalje korisnicima obavijesti o relevantnim promjenama u njihovoj blizini. | Visok | Povratna informacija korisnika | Korisnici dobivaju obavijest unutar jedne minute od relevantne promjene za njihovu lokaciju. |
| F-006 | Sustav prikazuje dostupne resurse prema lokaciji. | Visok | Analiza dokumentacije | Prikazuje se ažurirani popis resursa prilagođen vrsti kriznog događaja, lokaciji i raspoloživosti. |
| F-007 | Sustav prikazuje prijave kriznih događaja s lokacijom kao oznake na karti. | Visok | Odobreni zadatak | Prijava s valjanom lokacijom prikazuje se kao oznaka na karti; odabirom oznake korisnik može otvoriti pripadajuću prijavu. |
| F-008 | Sustav omogućuje moderatoru odobravanje ili odbijanje podnesenih prijava. | Visok | Zahtjev dionika | Moderator može odobriti ili odbiti prijavu koja čeka pregled; korisnik bez moderatorskih ovlasti ne može izvršiti te radnje. |

**Kriteriji prihvaćanja i podrijetlo zahtjeva:** Primjer prikazuje registraciju, oporavak lozinke, resurse, prijavu kriznog događaja i obavijesti te nekoliko vrsta izvora i opažljivih kriterija. Istodobno otvara korisna pitanja: opisuju li F-003 i F-006 istu funkcionalnost resursa? Je li obećanje od jedne minute u F-005 dogovoreno i moguće ispitati? Treba li aplikaciji koja koristi isključivo OAuth uopće F-001 i F-002? Retke koristite kao materijal za analizu; u svojem projektu navedite vlastite zahtjeve. U stvarnom projektu stupac Izvor bilježi odakle su doista potekli njegovi zahtjevi.

**Primjer prilagodbe kada odobreni zadatak koristi OAuth i kartu:** Umjesto kopiranja registracije e-poštom i oporavka lozinke formulirajte relevantni zahtjev za prijavu, primjerice: „F-001: Korisnici se prijavljuju putem odobrenog OAuth pružatelja identiteta; uspješna prijava omogućuje radnje rezervirane za prijavljene korisnike, a odustajanje od prijave ostavlja te radnje nedostupnima.” Zaseban zahtjev za kartu može glasiti: „F-007 : Prijave s lokacijom prikazuju se kao oznake na karti; odabirom oznake otvara se pripadajuća prijava.” Izvor treba biti stvarni odobreni zadatak ili dogovoreni zahtjev dionika. Ova je prilagodba zamjena za neodgovarajuće retke, a ne dodatna tablica koju svaki tim mora ispuniti.

Za složenu interakciju kratak scenarij *Given / When / Then* može pojasniti kriterij. Primjerice: *Given* prijava bez lokacije, *when* građanin je podnese, *then* sustav objašnjava da lokacija nedostaje i ne pohranjuje prijavu. Nemojte jednostavan kriterij ponavljati i u prozi i u Gherkinu niti pisati Gherkin za svaki zahtjev.

</details>


## 2.2 Nefunkcijski zahtjevi

**Cilj:** Odrediti važna svojstva kvalitete i uvjete rada odobrene aplikacije na način koji tim može razumno provjeriti.


| **ID** | **Opis** | **Prioritet** | **Izvor** | **Način provjere** |
| ------ | -------- | ------------- | --------- | ----------------- |
| NF-01 | Sustav mora sigurno obrađivati autentifikacijske podatke i OAuth 2.0 tokene te ih zaštititi od neovlaštenog otkrivanja. Za sve zaštićene operacije mora provoditi autentifikaciju i provjeru ovlasti na backendu, neovisno o ograničenjima u korisničkom sučelju. Korisnik smije pristupati samo osobnim podacima i resursima za koje ima ovlasti, a privatne PDF datoteke radova smiju biti dostupne samo ovlaštenim korisnicima. | Visok | Sigurnosni zahtjevi projektnog tima | Pregled obrade i pohrane autentifikacijskih podataka i tokena. Integracijski testovi s prijavljenim i neprijavljenim korisnicima te korisnicima s različitim ulogama, uključujući pokušaje pristupa tuđim profilima, radovima, recenzijama, konferencijama i PDF datotekama. |
| NF-02 | Sustav mora validirati sve ulazne podatke prije obrade i spremanja. API mora vraćati dosljedne odgovore i odgovarajuće HTTP statuse za uspješne zahtjeve i različite vrste pogrešaka. | Visok | Sigurnosni i tehnički zahtjevi projektnog tima | Integracijski testovi uspješnih, nevaljanih i neovlaštenih zahtjeva: nevaljani tipovi, nedostajuća polja, nedopuštene vrijednosti i neprihvatljivi datumi, uz provjeru vraćenih HTTP statusa i oblika odgovora. |
| NF-03 | Sustav mora očuvati anonimnost dvostruko slijepe recenzije u svim dijelovima aplikacije: u korisničkom sučelju, nazivima datoteka koje recenzenti preuzimaju, obavijestima e-poštom i odgovorima programskog sučelja (API). | Visok | Projektni zadatak – Ostali zahtjevi | Pregled korisničkog sučelja, preuzetih datoteka, poslanih obavijesti i API odgovora tijekom recenziranja, uz provjeru da se identiteti autora i recenzenata ne otkrivaju neovlaštenim osobama. |
| NF-04 | Tajni podaci i postavke različitih okruženja moraju se voditi kroz konfiguraciju, a ne u izvornom kodu. Tehničke pogreške moraju se evidentirati centralizirano, bez zapisivanja lozinki, autentifikacijskih tokena i nepotrebnih osobnih podataka. | Visok | Sigurnosni zahtjevi projektnog tima | Pregled konfiguracije, varijabli okruženja i repozitorija. Pregled konfiguracije logiranja i zapisa nakon simuliranih pogrešaka. |
| NF-05 | Ključne funkcionalnosti moraju imati automatizirane unit ili integracijske testove. Dokumentacija mora članovima tima omogućiti pokretanje aplikacije i razumijevanje osnovnih API funkcionalnosti. | Visok | Zahtjevi razvojnog procesa projektnog tima | Pokretanje automatiziranih testova i pregled rezultata u razvojnom okruženju ili CI postupku. Drugi član tima prati upute za postavljanje i provjerava dokumentirane API rute. |
| NF-06 | Korisničko sučelje mora biti prilagođeno različitim veličinama zaslona, uključujući mobilne uređaje. | Visok | Projektni zadatak – Ostali zahtjevi | Testiranje prikaza i korištenja aplikacije na mobilnim uređajima, tabletima i stolnim računalima. |
| NF-07 | Sustav mora podržavati vremensku zonu koju odabere predsjednik programskog odbora za određivanje rokova te korisnicima prikazivati rokove preračunate u njihovo lokalno vrijeme. | Visok | Projektni zadatak – Ostali zahtjevi | Postavljanje roka u odabranoj vremenskoj zoni i provjera prikaza tog roka korisnicima u različitim vremenskim zonama, uključujući prijelaz na ljetno i zimsko računanje vremena. |
| NF-08 | Sustav mora podržavati istodobni rad većeg broja korisnika, osobito neposredno prije isteka roka za predaju radova. | Visok | Projektni zadatak – Ostali zahtjevi | Testovi opterećenja s većim brojem istodobnih korisnika, uz simulaciju predaje radova i drugih uobičajenih operacija. |


<details>
<summary><strong>Nefunkcijski zahtjevi za analizu</strong></summary>

Relevantna svojstva mogu se odnositi na uporabljivost, pristupačnost, sigurnost, performanse ili pouzdanost. Odaberite svojstva specifična za projekt i opišite kako ih je moguće provjeriti. Zahtjev navodi što se očekuje; stvarna opažanja i dokazi pripadaju rezultatima ispitivanja, a ne drugom stupcu s rezultatima u ovoj tablici.

**Primjer — nefunkcijski zahtjevi za aplikaciju CrisisMap:**

| ID | Opis | Prioritet | Izvor |
| --- | --- | --- | --- |
| NF-1.1 | Sustav mora podržati 1.000 istodobnih korisnika uz vrijeme odziva kraće od 1 s. | Visok | SLA | Opteretiti sustav zadanim brojem istodobnih korisnika i izmjeriti vrijeme odziva. |
| NF-1.2 | Svi osjetljivi podaci moraju biti šifrirani algoritmom AES-256. | Visok | Sigurnosna politika | Pregledati način pohrane i konfiguraciju šifriranja za podatke na koje se zahtjev odnosi. |
| NF-1.3 | Korisničko sučelje mora podržavati engleski i španjolski jezik. | Srednji | Povratna informacija dionika | Pregledati reprezentativne korisničke tijekove u oba jezika. |
| NF-1.4 | Dostupnost sustava mora iznositi najmanje 99,5 % mjesečno. | Visok | SLA | Izračunati mjesečnu dostupnost iz zapisa sustava za nadzor, ako takvi podaci postoje.|
| NF-3.1.7 | Sustav treba imati odgovarajuću dokumentaciju. | Visok | Pravila dokumentiranja | Pregledati zahtijevane dokumentaciju prema obavezama.|
| NF-3.1.7.1 | Kod sustava treba biti dokumentiran prema „Code Conventions for the Java Programming Language”. | Visok | Pravila dokumentiranja | Pregledati kod. |
| NF-3.1.7.2 | Sustav treba biti opisan projektnim dokumentom/SRS-om. | Visok | Pravila dokumentiranja | Pregledati strukturu dokumenta  |
| NF-3.1.7.3 | Sustav treba imati „Operativni priručnik” koji opisuje pravilnu uporabu. | Visok | Pravila dokumentiranja | Pregledati postoji li priručnik i mogu li se prema njemu izvršiti opisane radnje. |
| NF-3.1.7.4 | Sustav treba imati „Plan implementacije” za pravilno postavljanje. | Visok | Smjernice za postavljanje | Pregledati odgovara li opisani postupak stvarnom postupku postavljanja.|

**Provjerljivost i opseg:** Primjer uvodi performanse, sigurnost, lokalizaciju, dostupnost i dokumentaciju, uključujući hijerarhijski ID zahtjeva. Navedeni izvori primjeri su podrijetla zahtjeva, a ne dokaz da za studentski projekt stvarno postoji SLA ili sigurnosna politika. Vrijednosti poput 1.000 korisnika, 99,5 % mjesečne dostupnosti i AES-256 moraju imati odobren izvor i izvediv način provjere prije nego što postanu zahtjevi tima. Skup zahtjeva o dokumentaciji ilustrira razlaganje zahtjeva, ali zahtjevi za izradu *ove dokumentacije kolegija* u pravilu pripadaju uputama zadatka, a ne zahtjevima kvalitete web-aplikacije.

**Primjer prilagodbe:** Ako je pristupačnost zahtjevana za  projekt, projektno specifičan zahtjev može glasiti: „NF-01: Sve obavezne radnje u obrascu za podnošenje prijave moguće je izvršiti samo tipkovnicom, uz vidljiv fokus na aktivnoj kontroli.” Provjera: navigirati kroz obrazac bez pokazivačkog uređaja, odabrati ili unijeti lokaciju, poslati prijavu i provjeriti može li se pročitati rezultat. To je provjerljivo svojstvo kvalitete, a ne dodatna funkcionalnost koju svaki projekt mora implementirati.

</details>

## 2.3 Dionici i akteri

**Cilj:** Utvrditi uloge koje utječu na zahtjeve i razlikovati dionike od aktera koji komuniciraju s aplikacijom.

| **ID uloge ili aktera** | **Odnos prema sustavu** | **Relevantni zahtjevi** |
| ----------------------- | ---------------------- | ----------------------- |
| A-01 | Administrator sustava – upravlja korisničkim računima i konferencijama, odobrava nove konferencije, imenuje predsjednike programskih odbora, uređuje predloške poruka e-pošte i pregledava statistiku korištenja sustava. | F-003, F-004, F-025, NF-01 |
| A-02 | Predsjednik programskog odbora – upravlja dodijeljenom konferencijom, njezinim podacima, temama i rokovima, poziva recenzente, upravlja raspodjelom radova, donosi odluke o radovima, organizira program i pregledava statistiku konferencije. | F-003, F-005–F-007, F-013, F-016, F-017, F-019–F-022, F-024, F-025, NF-01, NF-07 |
| A-03 | Autor – registrira se i upravlja svojim profilom, predaje radove, unosi podatke o radovima i koautorima, prati stanja svojih radova, predaje revizije i konačne verzije te prima obavijesti o odlukama. | F-001, F-002, F-008–F-012, F-021, NF-01, NF-03, NF-07, NF-08 |
| A-04 | Recenzent – prihvaća ili odbija poziv za sudjelovanje u programskom odboru, iskazuje interes za recenziranje radova, pregledava dodijeljene radove, predaje recenzije i sudjeluje u anonimnoj raspravi o radovima. | F-001, F-002, F-013–F-015, F-018, F-019, NF-01, NF-03, NF-07 |
| A-05 | Registrirani korisnik – pregledava objavljeni program konferencije te odabrana izlaganja dodaje u osobni raspored i izvozi raspored u Google Calendar. | F-001, F-007, F-022, F-023 |
| A-06 | Neregistrirani korisnik – bez registracije pregledava javne stranice konferencija, njihove osnovne informacije, teme, važne datume i objavljeni program. | F-007, F-022 |
| A-07 | ORCID – vanjski sustav putem kojeg se omogućuje registracija i prijava korisnika te dohvaćaju podaci potrebni za prepoznavanje sukoba interesa. | F-001, F-015 |
| A-08 | Crossref – vanjski servis putem kojeg sustav provjerava DOI oznake referenci i dohvaća pripadajuće metapodatke. | F-010 |
| A-09 | Google Calendar – vanjski sustav u koji registrirani korisnik može izvesti svoj osobni raspored izlaganja. | F-023 |


<details>
<summary><strong>Akteri i povezani zahtjevi</strong></summary>

**Primjer — akteri aplikacije CrisisMap:**

| ID aktera | Uloga | Obuhvaćeni funkcijski zahtjevi |
| --- | --- | --- |
| A-01 | Koordinator pomoći | F-003: Pregled resursa; F-004: Podnošenje prijave kriznog događaja. |
| A-02 | Građanin | F-001: Izrada računa; F-005: Primanje obavijesti. |
| A-03 | Administrator sustava | NF-1.2: Provođenje sigurnosnih pravila; upravljanje korisnicima. |
| A-04 | Posjetitelj | F-007: Pregled prijava na karti. |
| A-05 | Moderator | F-008: Odobravanje ili odbijanje prijava. |

**Odgovornosti aktera:** Uloga aktera treba biti povezana s interakcijom, a ne samo s nazivom. Provjerite podnosi li koordinator pomoći u odobrenom zadatku doista prijave kriznih događaja. Poveznica administratora s NF-1.2 navodi sigurnosni aspekt, ali sama po sebi ne opisuje obrazac uporabe; navedite stvarnu radnju administratora ili izostavite ulogu ako je nema. Nastavnici zainteresirani za rezultat mogu biti dionici, a da nisu akteri aplikacije. Tablica je polazište za razmišljanje, a ne potvrđen opis ovlasti u CrisisMapu.

</details>

---

## 2.4 Ograničenja i pretpostavke

**Cilj:** Zabilježiti projektno specifične granice i pretpostavke koje utječu na zahtjeve ili oblikovanje, zajedno s njihovim izvorom i praktičnom posljedicom. Ovo je njihovo mjerodavno mjesto u dokumentaciji.

| **ID** | **Tip** | **Opis ograničenja ili pretpostavke** | **Izvor** | **Inženjerska posljedica / Provjera** |
|---|---|---|---|---|
| C-01 | Ograničenje | Sustav mora podržavati prijavu putem adrese e-pošte ili ORCID računa te koristiti OAuth 2.0 tokene za odgovarajuću autentifikaciju i autorizaciju. | Projektni zadatak; F-001, NF-01 | Potrebno je odabrati i implementirati odgovarajući mehanizam autentifikacije i sigurno rukovati tokenima. Provjerava se uspješna i neuspješna prijava te zaštita tokena od neovlaštenog pristupa. |
| C-02 | Ograničenje | Sustav se razvija u okviru studentskog projekta i raspoloživog vremena kolegija. | Projektni zadatak i rokovi kolegija | Prioritet imaju funkcionalnosti nužne za ostvarenje osnovnog procesa upravljanja konferencijom. Opseg dodatnih funkcionalnosti dogovara se unutar tima. |
| C-03 | Ograničenje | Pristup funkcionalnostima i podacima mora biti ograničen prema ulozi i ovlastima korisnika. | Projektni zadatak; F-003–F-006, F-011, F-017, F-020, NF-01 | Ovlasti se moraju provjeravati na backendu, a ne samo skrivanjem opcija u korisničkom sučelju. Provjerava se pokušaj pristupa funkcionalnostima i podacima bez odgovarajućih ovlasti. |
| C-04 | Ograničenje | Radovi i recenzije moraju se obrađivati uz očuvanje povjerljivosti dvostruko slijepog recenziranja. | Projektni zadatak; F-009, F-018, F-019, F-021, NF-01, NF-03 | Pristup datotekama i podacima o autorima i recenzentima mora se ograničiti prema ulozi i fazi postupka. Anonimnost se provjerava u korisničkom sučelju, nazivima preuzetih datoteka, obavijestima e-poštom i API odgovorima. |
| C-05 | Ograničenje | Rukopisi radova predaju se u PDF formatu, a sustav mora provjeravati format i najveći dopušteni broj stranica. | Projektni zadatak; F-009 | Potrebno je implementirati provjeru formata datoteke i broja stranica. Konkretna najveća dopuštena duljina rada ne smije se pretpostaviti bez dodatnog dogovora ili podatka za pojedinu konferenciju. |
| C-06 | Ograničenje | Rokovi konferencije moraju poštovati vremensku zonu koju odabere predsjednik programskog odbora, uz prikaz rokova korisnicima u njihovu lokalnom vremenu. | Projektni zadatak – Ostali zahtjevi; F-006, NF-07 | Potrebno je pravilno pohranjivati i preračunavati datume i vremena. Provjerava se prikaz istog roka korisnicima u različitim vremenskim zonama, uključujući prijelaz na ljetno i zimsko računanje vremena. |
| C-07 | Ograničenje | Svaki rad u postupku recenziranja mora imati najmanje tri dodijeljena recenzenta. | Projektni zadatak i pojašnjenje profesora; F-016, F-017 | Pravilo se mora poštovati pri automatskoj raspodjeli i svim ručnim izmjenama dodjela. Provjerava se da sustav ne dopušta raspodjelu kojom bi neki rad ostao s manje od tri recenzenta. |
| AS-01 | Pretpostavka | Vanjski servisi ORCID, Crossref i Google Calendar bit će dostupni za povezivanje sa sustavom i korištenje njihovih predviđenih funkcionalnosti. | Projektni zadatak; F-001, F-010, F-015, F-023 | Tijekom razvoja potrebno je provjeriti dostupnost i mogućnosti potrebnih API-ja. Potrebno je razmotriti ponašanje sustava u slučaju privremene nedostupnosti vanjskog servisa. |
| AS-02 | Pretpostavka | Za svaku konferenciju bit će poznat najveći dopušteni broj stranica predanog rada. | Projektni zadatak; F-009; pretpostavka projektnog tima | Potrebno je dogovoriti na koji se način određuje dopušteni broj stranica, primjerice kroz upute za predaju rada za pojedinu konferenciju. Pretpostavku treba potvrditi prije implementacije provjere. |
| AS-03 | Pretpostavka | Ciljani broj istodobnih korisnika i prihvatljivo vrijeme odziva bit će određeni ako bude potrebno preciznije definirati kriterije opterećenja sustava. | NF-08; pretpostavka projektnog tima | Potrebno je dogovoriti mjerljive ciljeve opterećenja i odziva ako ih projektni tim bude specificirao. Do tada se opterećenje provjerava testovima s većim brojem istodobnih korisnika, osobito tijekom predaje radova. |

**Napomena:** Ograničenja C-01–C-07 proizlaze iz projektnog zadatka, pojašnjenja profesora ili okvira studentskog projekta. Pretpostavke AS-01–AS-03 potrebno je potvrditi tijekom razvoja ili dogovora unutar tima. Ako se neka pretpostavka pokaže netočnom, potrebno je ponovno razmotriti povezane zahtjeve i rješenja.
<details>
<summary><strong>Ograničenja nasuprot pretpostavkama</strong></summary>

Ograničenje je uvjet koji tim mora poštovati; pretpostavka je uvjet na koji se tim oslanja i koji treba ponovno provjeravati.

**Primjer — projektni kontekst CrisisMapa:**

| ID | Ograničenje ili pretpostavka | Izvor | Posljedica ili način provjere |
| --- | --- | --- | --- |
| C-01 | Odobreni zadatak zahtijeva OAuth prijavu u sustav za uređivanje vlastitih prijava korisnika. | Odobreni zadatak  | Zaštićeno uređivanje projektirati oko odabranog pružatelja identiteta; provjeriti autorizirane i neautorizirane zahtjeve. |
| AS-01 | Prijave koje se prikazuju na karti imaju uporabive koordinate. | Pretpostavka o podacima  | Pregledati ogledne i uvezene prijave; planirati prikaz prijava bez valjanih koordinata. |

**Ograničenje nasuprot pretpostavci:** C-01 navodi obvezujuću odluku i njezin arhitekturni učinak; AS-01 je moguće provjeriti i može se pokazati netočnim. Nemojte kopirati C-01 ako OAuth nije dio stvarnog odobrenog zadatka. Projektni odgovor objasnite u arhitekturi bez prepisivanja ove tablice.

</details>

---

## 2.5 Značajne promjene zahtjeva

**Cilj:** Sačuvati razlog promjena koje mijenjaju dogovoreni opseg, prioritet ili kriterije prihvaćanja, uz istodobno održavanje prethodnih zahtjeva ažurnima.

| Datum | ID zahtjeva | Promjena i razlog | Dogovoreno s / dokaz |
| --- | --- | --- | --- |
| [10.11.2026.] | F-026 | U opseg projekta uključena je provjera DOI referenci putem Crossref API-ja kako bi se autorima omogućila provjera bibliografskih referenci tijekom predaje rada. | Dogovor projektnog tima / zapisnik sastanka ili potvrda mentora |
| [15.11.2026.] | F-024 | Povlačenje rada dopušteno je samo prije isteka roka za predaju i ako rad nije u određenim završnim statusima. | Potrebno je potvrditi prihvaća li se ograničenje povlačenja na razdoblje prije isteka roka za predaju. Izvorni zahtjev predviđa mogućnost povlačenja sve do prihvaćanja rada, uključujući razdoblje recenziranja. Ako se prihvaća trenutačno ponašanje, potrebno je sukladno tome izmijeniti zahtjev.|
| [15.11.2026.] | F-029 | Sustav koristi status „povučen” za radove koji su povučeni, umjesto da se takvi radovi brišu iz sustava. | Potrebno je dopuniti popis statusa rada u funkcijskom zahtjevu F-029 statusom „povučen” kako bi dokumentacija odgovarala implementiranom ponašanju i zahtjevu F-028.|
| 4. 11. 2026. | F-027 | **Promijenjeno je pravilo uređivanja rada.** Mogućnost uređivanja više ne ovisi samo o rokovima koje određuje predsjednik programskog odbora, nego i o trenutačnom stanju rada. Autor ne smije uređivati rad dok je on u postupku recenzije. Promjena je potrebna kako bi se spriječilo mijenjanje sadržaja rada tijekom njegove evaluacije. | Dogovoreno s profesorom putem e-maila, točka 5. |
| 4. 11. 2026. | F-028 | **Precizirano je pravilo povlačenja rada.** Autor može povući rad u bilo kojem trenutku prije njegova prihvaćanja, uključujući i tijekom postupka recenzije. Povučeni rad ne briše se iz sustava, nego ostaje evidentiran. Promjena osigurava mogućnost povlačenja rada bez gubitka evidencije o njegovoj prijavi i prethodnom tijeku postupka. Potrebno je definirati i postupanje s otvorenim recenzijama. | Dogovoreno s profesorom putem e-maila, točka 4. |
| 4. 11. 2026. | F-039 | **Dopunjeno je pravilo vidljivosti automatski predložene raspodjele radova.** Raspodjela koju predloži sustav vidljiva je samo predsjedniku programskog odbora. Recenzenti dodijeljene radove mogu vidjeti tek nakon što predsjednik potvrdi raspodjelu. Promjena omogućuje predsjedniku pregled i provjeru raspodjele prije njezine objave recenzentima. | Dogovoreno s profesorom putem e-maila, točka 1. |
| 4. 11. 2026. | F-040 | **Proširena je mogućnost ručne izmjene raspodjele radova.** Predsjednik programskog odbora može mijenjati raspodjelu i tijekom postupka recenzije, a ne samo u slučaju kašnjenja recenzenta. Promjena omogućuje prilagodbu raspodjele tijekom cijelog postupka recenziranja. | Dogovoreno s profesorom putem e-maila, točka 2. |
| 4. 11. 2026. | F-041 | **Proširena je primjena pravila o minimalnom broju recenzenata.** Zahtjev da svaki rad ima najmanje tri recenzenta ne odnosi se samo na automatski prijedlog sustava, nego mora biti zadovoljen i nakon ručnih izmjena raspodjele. Promjena osigurava da ručne intervencije ne naruše uvjete recenziranja. | Dogovoreno s profesorom putem e-maila, točka 2. |
| 4. 11. 2026. | F-042 | **Dopunjena su ograničenja pri ručnoj izmjeni raspodjele.** Sustav mora spriječiti predsjednika programskog odbora da izmjenom raspodjele smanji broj recenzenata za pojedini rad ispod tri ili ostavi rad bez dodijeljenih recenzenata. Promjena osigurava da svaki rad tijekom postupka ima potreban broj recenzenata. | Dogovoreno s profesorom putem e-maila, točka 2. |
| 4. 11. 2026. | F-043 | **Precizirano je postupanje pri zamjeni recenzenta.** Predsjednik programskog odbora može zamijeniti prethodno dodijeljenog recenzenta drugim recenzentom, pri čemu se rad uklanja iz dodjele prethodnog recenzenta i dodjeljuje novom. Promjena omogućuje pravilno evidentiranje zamjene i nastavak postupka recenziranja. | Dogovoreno s profesorom putem e-maila, točka 3. |
| 4. 11. 2026. | F-044 | **Dopunjeno je pravilo pristupa radu nakon zamjene recenzenta.** Recenzent kojem je rad oduzet zamjenom više ne smije imati pristup tom radu niti sudjelovati u daljnjem postupku odlučivanja o njemu. Promjena osigurava da nakon zamjene samo trenutačno dodijeljeni recenzenti mogu pristupati radu i utjecati na njegovu evaluaciju. | Dogovoreno s profesorom putem e-maila, točka 3. |
|  |  |  |  |





<details>
<summary><strong>Primjer značajne promjene</strong></summary>

**Primjer scenarija — odluka tijekom pregleda CrisisMapa:**

| Datum | ID zahtjeva | Promjena i razlog | Dogovoreno s / dokaz |
### 2.5 Značajne promjene zahtjeva

| **Datum** | **ID zahtjeva** | **Promjena i razlog** | **Dogovoreno s / dokaz** |
|---|---|---|---|
| [datum dogovora] | F-001, F-002 | Opseg projekta proširen je uključivanjem registracije i prijave putem ORCID računa, uz korištenje OAuth 2.0 protokola. Promjena je prihvaćena radi omogućavanja povezivanja korisničkih računa s ORCID identitetom. | Dogovor projektnog tima / zapisnik sastanka ili potvrda mentora |
| [datum dogovora] | F-026 | U opseg projekta uključena je provjera DOI referenci putem Crossref API-ja kako bi se autorima omogućila provjera bibliografskih referenci tijekom predaje rada. | Dogovor projektnog tima / zapisnik sastanka ili potvrda mentora |
| --- | --- | --- | --- |
| [Datum pregleda] | F-004, NF-01 | Dodati ručni odabir lokacije kada korisnik odbije geolokaciju preglednika; bez toga građanin ne može podnijeti prijavu kriznog događaja s lokacijom. | [Poveznica na stvarnu bilješku pregleda ili zadatak tima] |

**Razlog promjene:** Zapis navodi zahvaćene stavke i objašnjava razlog iz perspektive korisnika, a zatim upućuje na dokaz odluke.  Nakon stvarne odluke ažurirajte trenutačne zahtjeve; stilska izmjena teksta ne zahtijeva zapis u dnevniku promjena. Trenutačni red zadataka držite u alatu za praćenje zadataka.

</details>

---

## 2.6 Sljedivost zahtjeva

**Cilj:** Osigurati dvosmjernu sljedivost — povezati zahtjeve s opisanim ponašanjem, dijelovima sustava koji ih ostvaruju te ispitivanjem ili drugom provjerom. 

| ID zahtjeva | Obrazac uporabe / modul | Arhitekturna realizacija | Ispitivanje ili provjera |
| --- | --- | --- | --- |
### Primjeri popunjenih redaka matrice sljedivosti

| ID zahtjeva | Obrazac uporabe / modul | Arhitekturna realizacija | Ispitivanje ili provjera |
| :--- | :--- | :--- | :--- |
| F-001 | UC-01 – Registracija | Backend: `authController` za obradu registracije, `authRoutes.js` za definiranje ruta i Prisma klijent za pristup bazi podataka. Frontend: `register.ejs` i `register.css` za korisničko sučelje registracije. | Provedena je ručna provjera registracije putem Thunder Clienta. Predloženi ST-01: provjeriti uspješnu registraciju s ispravnim podacima i odbijanje neispravnih podataka. |
| F-002 | UC-02 – Prijava u sustav | Backend: `authController`, `authRoutes.js`, `orcidRoutes.js`, `orcidService.js` i `tokenService.js`. Autentifikacija se ostvaruje putem sesije i JWT tokena, a ORCID prijava koristi OAuth 2.0. Frontend: `login.ejs` i `login.css`. | Provedena je ručna provjera prijave putem Thunder Clienta. Predloženi ST-02: provjeriti prijavu ispravnim i neispravnim podacima. Predloženi ST-03: provjeriti tijek prijave putem ORCID-a u sandbox okruženju. |
| F-003 | UC-23 – Odjava iz sustava | Backend: funkcija `logout` u `authControlleru` i ruta u `authRoutes.js`. Prilikom odjave uništava se sesija i briše kolačić `konftrack.sid`. | Provedena je ručna provjera odjave putem Thunder Clienta. Predloženi ST-04: provjeriti uništavanje sesije, brisanje kolačića i onemogućavanje pristupa zaštićenim web-rutama nakon odjave. |
| F-004 | UC-04 – Upravljanje profilom | Backend: ruta `/profile` i zaštićeni endpoint `/api/me` za dohvat podataka prijavljenog korisnika. Podaci se dohvaćaju putem autentifikacije i Prisma klijenta. Frontend: stranica profila i sučelje registriranog korisnika izrađeno pomoću EJS predložaka. | Na čekanju – predloženi ST-05: provjeriti prikaz podataka prijavljenog korisnika. Predloženi CT-01: provjeriti dohvat korisničkih podataka putem odgovarajućeg kontrolera ili servisa. |
| F-007 | Obrasci uporabe koji zahtijevaju autentifikaciju i kontrolu pristupa | Backend: `authMiddleware.js` za provjeru JWT tokena ili korisničke sesije. Zaštićene API rute koriste Bearer autentifikaciju, a neautorizirani zahtjevi dobivaju HTTP status 401. | Provedena je provjera zaštićene rute u Thunder Clientu s valjanim tokenom i bez tokena. Predloženi ST-06: provjeriti odbijanje pristupa zaštićenoj ruti bez valjanog tokena ili sesije. |
| F-008 | UC-05 – Upravljanje korisnicima i postavkama platforme | Na čekanju – administratorski modul | Na čekanju – provjera pregleda, uređivanja i deaktivacije korisničkih računa |
| F-009 | UC-03 – Pregled javne stranice konferencije | Frontend: EJS stranice za neregistriranog korisnika, uključujući pripadajuće predloške u mapi `neregistriraniKorisnik/`, te stranica programa `program.ejs`. | Na čekanju – predloženi ST-07: provjeriti može li neregistrirani korisnik otvoriti javnu stranicu konferencije i objavljeni program bez prijave. |
| F-010 | UC-06 – Odobravanje konferencije i imenovanje predsjednika | Na čekanju – administratorski modul za upravljanje konferencijama | Na čekanju – provjera odobravanja konferencije i imenovanja predsjednika programskog odbora |
| F-011 | UC-07 – Upravljanje konferencijom | Na čekanju – modul upravljanja konferencijama | Na čekanju – provjera unosa i izmjene osnovnih podataka konferencije |
| F-012 | UC-03 – Pregled javne stranice konferencije | Na čekanju – modul prikaza podataka konferencije | Na čekanju – provjera prikaza podataka o konferenciji |
| F-013 | UC-07 – Upravljanje konferencijom | Na čekanju – modul upravljanja rokovima | Na čekanju – provjera postavljanja rokova za pojedine faze konferencije |
| F-014 | UC-07 – Upravljanje konferencijom | Na čekanju – modul upravljanja rokovima i pravilima pristupa | Na čekanju – provjera automatskog onemogućavanja radnji nakon isteka roka |
| F-015 | UC-07 – Upravljanje konferencijom | Na čekanju – modul upravljanja rokovima | Na čekanju – provjera produljenja postojećeg roka |
| F-016 | UC-07 – Upravljanje konferencijom | Na čekanju – modul obavijesti | Na čekanju – provjera slanja obavijesti korisnicima na koje se produljenje roka odnosi |
| F-017 | UC-07 – Upravljanje konferencijom | Na čekanju – modul upravljanja temama konferencije | Na čekanju – provjera dodavanja, izmjene i uklanjanja tema |
| F-018 | UC-07 – Upravljanje konferencijom | Na čekanju – modul objave podataka konferencije | Na čekanju – provjera objave javnih informacija o konferenciji |
| F-019 | UC-08 – Predaja rada | Backend: `paperController.js` obrađuje HTTP zahtjeve za predaju rada i spremanje nacrta putem funkcija `submitPaper` i `saveDraft`. Zajednička logika nalazi se u funkciji `spremiRad`. Rute su definirane u `paperRoutes.js` i zaštićene middlewareom `requireLogin`. Podaci o radu i autorima spremaju se u bazu podataka unutar jedne transakcije, a rukopis se pohranjuje kao verzija u tablicu `paper_versions`. Datoteka se tijekom obrade privremeno sprema na poslužitelj te se briše funkcijom `obrisiDatoteku` ako predaja ne uspije. | Na čekanju – predloženi ST-08: provjeriti uspješnu predaju rada sa svim obveznim podacima i valjanim PDF dokumentom. Predloženi ST-09: provjeriti odbijanje predaje kada nedostaju obvezni podaci, kada je rok istekao ili kada PDF nije valjan. Predloženi CT-02: provjeriti zajedničku logiku funkcije `spremiRad`. |
| F-020 | UC-08 – Predaja rada | Backend: funkcija `spremiRad` obrađuje metapodatke rada, uključujući naslov, sažetak, ključne riječi i temu. Za predaju rada obvezni su naslov, sažetak, konferencija, PDF rukopis i barem jedan kontaktni autor. Za spremanje nacrta obvezan je samo naslov. | Na čekanju – predloženi ST-10: provjeriti spremanje rada s obveznim metapodacima te odbijanje predaje kada nedostaje neki od obveznih podataka. |
| F-021 | UC-08 – Predaja rada | Backend: funkcija `pripremiAutore` priprema zapise autora za tablicu `paper_authors`. Ako koautor ima adresu e-pošte koja već postoji u sustavu, povezuje se s postojećim korisničkim računom putem `user_id`. Mogućnost pozivanja koautora koji još nemaju račun nije potvrđena u dostavljenom opisu implementacije. | Na čekanju – predloženi ST-11: provjeriti povezivanje koautora koji već imaju korisnički račun s predanim radom. Provjeru pozivanja novih koautora potrebno je provesti ako je ta funkcionalnost implementirana. |
| F-022 | UC-08 – Predaja rada | Backend: funkcija `spremiRad` pri predaji zahtijeva barem jednog kontaktnog autora. Detaljna implementacija odabira i ograničenja na točno jednog korespondentnog autora nije potvrđena u dostavljenom opisu. | Na čekanju – predloženi ST-12: provjeriti obveznost navođenja kontaktnog autora te, ako je implementirano, mogućnost određivanja točno jednog korespondentnog autora. |
| F-023 | UC-08 – Predaja rada | Backend: `upload.js` preuzima PDF datoteku iz zahtjeva, provjerava njezin format, ograničava veličinu na 10 MB, generira nasumično ime datoteke i sprema je u lokalnu mapu `uploads`. Mapa se automatski stvara pri pokretanju aplikacije ako ne postoji. U `paperRoutes.js` prijenos je omotan funkcijom `uploadPdf`. Nakon uspješne obrade rukopis se pohranjuje funkcijom `spremiRukopis` kao verzija rada u tablicu `paper_versions`. Datoteke se trenutačno pohranjuju lokalno na poslužitelju. | Na čekanju – predloženi ST-13: provjeriti prijenos valjane PDF datoteke, odbijanje datoteke neodgovarajućeg formata i odbijanje datoteke veće od 10 MB. Predloženi CT-03: provjeriti funkcionalnost middlewarea za prijenos datoteka `uploadPdf`. |
| F-024 | UC-08 – Predaja rada | Backend: `pdfService.js` sadrži funkcije `procitajPdf` i `validatePdf`. Provjeravaju se broj stranica PDF dokumenta i dopušteni maksimalni broj stranica. `upload.js` dodatno provjerava PDF format i ograničava veličinu datoteke na 10 MB. | Na čekanju – predloženi CT-04: provjeriti validaciju PDF formata, ograničenja veličine datoteke i maksimalnog broja stranica. Predloženi ST-14: provjeriti odbijanje PDF dokumenta koji ne zadovoljava definirana ograničenja. |
| F-025 | UC-08 – Predaja rada | Backend: `pdfService.js` funkcijom `procitajPdf` čita metapodatke PDF dokumenta, a funkcija `validatePdf` provjerava sadrže li polja metapodataka, kao što su autor, kreator i naslov, ime autora. Ako se pronađe ime autora u metapodacima, predaja se ne odbija, nego se korisniku prikazuje upozorenje putem objekta `warnings`, odnosno polja `pdfWarnings`. Provjera ne obuhvaća tekstualni ni slikovni sadržaj dokumenta. | Na čekanju – predloženi CT-05: provjeriti prepoznavanje imena autora u metapodacima PDF dokumenta. Predloženi ST-15: provjeriti prikaz upozorenja kada PDF metapodaci sadrže ime autora. Dodatno treba provjeriti da se ne tvrdi kako sustav provjerava anonimnost sadržaja dokumenta. |
| F-026 | UC-08 – Predaja rada; UC-21 – Provjera DOI referenci | Backend: `crossrefService.js` sadrži funkciju `verifyDoi`, koja putem Crossref API-ja provjerava reference s DOI oznakama. Ako DOI nije pronađen, korisniku se prikazuje upozorenje u polju `doiWarnings` objekta `warnings`, ali se predaja rada ne odbija samo zbog takvog upozorenja. Ako Crossref API nije dostupan, mrežna pogreška trenutačno se može prikazati kao da DOI ne postoji. | Na čekanju – predloženi CT-06: provjeriti dohvat i obradu rezultata Crossref API-ja za postojeće i nepostojeće DOI oznake. Predloženi ST-16: provjeriti prikaz upozorenja za nepostojeći DOI. Potrebno je dodatno provjeriti i ponašanje sustava u slučaju nedostupnosti Crossref API-ja. |
| F-027 | UC-09 – Upravljanje vlastitim radovima | Backend: `paperController.js` sadrži funkcije `getMyPapers`, `getPaper` i `updatePaper`. Funkcija `getMyPapers` dohvaća radove koje je korisnik predao ili na kojima je koautor, a uključuje i podatak `isOwner` koji označava je li korisnik vlasnik rada. Funkcija `getPaper` dohvaća detalje vlastitog rada. Funkcija `updatePaper` dopušta vlasniku promjenu naslova, sažetka, ključnih riječi i teme rada ako rok za predaju nije istekao. | Na čekanju – predloženi ST-17: provjeriti prikaz popisa vlastitih radova i detalja odabranog rada. Predloženi ST-18: provjeriti mogućnost izmjene podataka prije isteka roka te odbijanje izmjene nakon isteka roka ili od strane korisnika koji nije vlasnik rada. |
| F-028 | UC-09 – Upravljanje vlastitim radovima | Backend: `paperController.js` sadrži funkciju `withdrawPaper`, koja omogućuje povlačenje rada samo njegovu vlasniku, prije isteka roka za predaju i ako rad nije u jednom od statusa navedenih u `NE_MOZE_POVUCI`: `accepted`, `rejected`, `withdrawn`, `final_submitted` i `in_program`. Funkcija provodi provjere vlasništva, roka i statusa prije obrade zahtjeva za povlačenje. | Na čekanju – predloženi ST-19: provjeriti uspješno povlačenje rada koji zadovoljava uvjete te odbijanje povlačenja rada nakon isteka roka, rada koji nije u vlasništvu korisnika i rada u statusu u kojem povlačenje nije dopušteno. Potrebno je potvrditi da se povučeni rad zadržava u evidenciji sa statusom `withdrawn`. |
| F-029 | UC-09 – Upravljanje vlastitim radovima | Na čekanju – modul upravljanja životnim ciklusom rada | Na čekanju – provjera prijelaza rada između definiranih statusa |
| F-030 | UC-09 – Upravljanje vlastitim radovima | Na čekanju – modul revizija radova | Na čekanju – provjera predaje revidirane verzije i dokumenta s odgovorima te zadržavanja istih recenzenata |
| F-031 | UC-09 – Upravljanje vlastitim radovima | Na čekanju – modul predaje konačnih verzija | Na čekanju – provjera predaje konačne neanonimizirane verzije rada i potpisane izjave o autorskim pravima |
| F-032 | UC-09 – Upravljanje vlastitim radovima | Na čekanju – modul upravljanja izlagačima | Na čekanju – provjera određivanja izlagača rada |
| F-033 | UC-10 – Upravljanje recenzentima | Na čekanju – modul pozivanja recenzenata | Na čekanju – provjera slanja poziva recenzentima putem e-pošte |
| F-034 | UC-11 – Prihvaćanje ili odbijanje poziva za recenziranje | Na čekanju – modul poziva recenzenata | Na čekanju – provjera prihvaćanja i odbijanja poziva |
| F-035 | UC-12 – Iskazivanje interesa za recenziranje | Na čekanju – modul iskazivanja interesa recenzenata | Na čekanju – provjera odabira jedne od ponuđenih mogućnosti interesa |
| F-036 | UC-12 – Iskazivanje interesa za recenziranje | Na čekanju – modul evidencije sukoba interesa | Na čekanju – provjera prijave sukoba interesa od strane recenzenta |
| F-037 | UC-13 – Dodjela radova recenzentima; UC-22 – Provjera sukoba interesa | Na čekanju – modul provjere sukoba interesa i integracije s ORCID-om | Na čekanju – provjera prepoznavanja sukoba interesa na temelju institucije i prethodne suradnje |
| F-038 | UC-13 – Dodjela radova recenzentima | Na čekanju – modul automatske dodjele radova | Na čekanju – provjera generiranja prijedloga dodjele uz najmanje tri recenzenta i uravnoteženo opterećenje |
| F-039 | UC-13 – Dodjela radova recenzentima | Na čekanju – modul upravljanja vidljivošću prijedloga dodjele | Na čekanju – provjera da prijedlog dodjele prije potvrde vidi samo predsjednik programskog odbora |
| F-040 | UC-13 – Dodjela radova recenzentima | Na čekanju – modul potvrde dodjele radova | Na čekanju – provjera da recenzenti dobivaju pristup radovima tek nakon potvrde dodjele |
| F-041 | UC-13 – Dodjela radova recenzentima | Na čekanju – modul ručnog uređivanja dodjele | Na čekanju – provjera ručne izmjene dodjele i ograničenja minimalnog broja recenzenata |
| F-042 | UC-13 – Dodjela radova recenzentima | Na čekanju – modul provjere ograničenja dodjele | Na čekanju – provjera da svaki rad u postupku recenziranja ima najmanje tri aktivna recenzenta |
| F-043 | UC-14 – Recenziranje rada | Na čekanju – modul upravljanja recenzentima i zamjenama | Na čekanju – provjera mogućnosti zamjene recenzenta |
| F-044 | UC-14 – Recenziranje rada | Na čekanju – modul upravljanja ovlastima recenzenata | Na čekanju – provjera ukidanja pristupa zamijenjenom recenzentu |
| F-045 | UC-14 – Recenziranje rada | Na čekanju – modul korisničkog sučelja recenzenta | Na čekanju – provjera prikaza dodijeljenih radova i rokova na nadzornoj ploči recenzenta |
| F-046 | UC-14 – Recenziranje rada | Na čekanju – modul za unos i pohranu recenzija | Na čekanju – provjera unosa ocjene, stručnosti, komentara za autore i povjerljivih komentara |
| F-047 | UC-14 – Recenziranje rada | Na čekanju – modul anonimnosti i kontrole pristupa | Na čekanju – provjera da recenzent ne vidi autore te da autori ne vide identitet recenzenata |
| F-048 | UC-15 – Sudjelovanje u anonimnoj raspravi | Na čekanju – modul prikaza recenzija | Na čekanju – provjera da su recenzije drugih recenzenata dostupne tek nakon predaje svih recenzija za rad |
| F-049 | UC-15 – Sudjelovanje u anonimnoj raspravi | Na čekanju – modul anonimne rasprave | Na čekanju – provjera rasprave pod anonimnim oznakama recenzenata |
| F-050 | UC-14 – Recenziranje rada | Na čekanju – modul automatskih obavijesti | Na čekanju – provjera slanja podsjetnika sedam i dva dana prije isteka roka |
| F-051 | UC-14 – Recenziranje rada | Na čekanju – modul praćenja rokova recenziranja | Na čekanju – provjera označavanja recenzija koje nisu predane do isteka roka |
| F-052 | UC-14 – Recenziranje rada | Na čekanju – modul zamjene recenzenata | Na čekanju – provjera dodjele zamjenskog recenzenta i očuvanja pravila o najmanje tri aktivna recenzenta |
| F-053 | UC-16 – Donošenje odluka o radovima | Na čekanju – modul pregleda rezultata recenziranja | Na čekanju – provjera prikaza prosječne ocjene, broja recenzija i upozorenja na neslaganje |
| F-054 | UC-16 – Donošenje odluka o radovima | Na čekanju – modul donošenja odluka | Na čekanju – provjera odabira odluke o prihvaćanju, doradi ili odbijanju rada |
| F-055 | UC-16 – Donošenje odluka o radovima | Na čekanju – modul obavijesti autorima | Na čekanju – provjera slanja obavijesti svim autorima rada jednom akcijom |
| F-056 | UC-16 – Donošenje odluka o radovima | Na čekanju – modul pripreme sadržaja obavijesti | Na čekanju – provjera uključivanja odluke i recenzija te izostavljanja povjerljivih komentara |
| F-057 | UC-18 – Upravljanje programom konferencije | Na čekanju – modul upravljanja programom | Na čekanju – provjera sastavljanja i uređivanja programa konferencije |
| F-058 | UC-18 – Upravljanje programom konferencije | Na čekanju – modul upravljanja sekcijama | Na čekanju – provjera unosa teme, prostorije, termina i predsjedavajućeg sekcije |
| F-059 | UC-18 – Upravljanje programom konferencije | Na čekanju – modul predlaganja grupiranja radova | Na čekanju – provjera predlaganja grupiranja radova prema temama i ključnim riječima |
| F-060 | UC-18 – Upravljanje programom konferencije | Na čekanju – modul provjere rasporeda | Na čekanju – provjera preklapanja termina izlaganja istog izlagača |
| F-061 | UC-18 – Upravljanje programom konferencije | Na čekanju – modul provjere pravila sekcija | Na čekanju – provjera da predsjedavajući sekcije nije autor rada u toj sekciji |
| F-062 | UC-18 – Upravljanje programom konferencije | Na čekanju – modul upravljanja statusima radova | Na čekanju – provjera promjene statusa rada u „Uvršten u program” |
| F-063 | UC-03 i UC-18 – Pregled javne stranice i upravljanje programom | Na čekanju – modul javne objave programa | Na čekanju – provjera prikaza objavljenog programa na javnoj stranici konferencije |
| F-064 | UC-19 – Upravljanje osobnim rasporedom | Na čekanju – modul osobnog rasporeda korisnika | Na čekanju – provjera dodavanja izlaganja u osobni raspored |
| F-065 | UC-19 – Upravljanje osobnim rasporedom | Na čekanju – modul izvoza rasporeda i integracije s Google Calendarom | Na čekanju – provjera izvoza rasporeda u Google Calendar |
| F-066 | UC-20 – Generiranje zbornika radova | Na čekanju – modul automatskog generiranja PDF zbornika | Na čekanju – provjera generiranja zbornika sažetaka, organizacije po sekcijama i kazala autora |
| F-067 | UC-17 – Pregled statistike konferencije | Na čekanju – modul statistike konferencije | Na čekanju – provjera izračuna broja predanih radova po temama, stope prihvaćanja, prosječnog trajanja recenziranja i opterećenja recenzenata |
| F-068 | UC-17 – Pregled statistike konferencije | Na čekanju – modul izvoza statistike | Na čekanju – provjera izvoza statističkih podataka u CSV formatu |
| F-069 | UC-05 – Upravljanje korisnicima i postavkama platforme | Na čekanju – modul predložaka e-pošte | Na čekanju – provjera uređivanja predložaka obavijesti |
| F-070 | UC-05 – Upravljanje korisnicima i postavkama platforme | Na čekanju – administratorski modul statistike platforme | Na čekanju – provjera prikaza statističkih podataka o korištenju platforme |
|  |  |  |  |

<details>
<summary><strong>Sljedivost zahtjeva do obrazaca uporabe i ispitivanja</strong></summary>

**Primjer — poveznice zahtjeva CrisisMapa:**

| ID zahtjeva | Obrazac uporabe / ponašanje | Arhitekturna realizacija | Ispitivanje / provjera |
| --- | --- | --- | --- |
| F-004 | UC-002 Podnošenje prijave kriznog događaja | Web-klijent; API za prijave; usluga za prijave | ST-01 Valjano podnošenje prijave; ST-02 Nedostaje obavezna lokacija; ST-03 Dopuštenje geolokacije odbijeno |
| F-005 | Odabir primatelja obavijesti | Proces za obavijesti | CT-06 Primatelji obavijesti; potpuna dostava obavijesti nije pokrivena ovom provjerom |

**Pokrivenost i dokazi:** CT-06 provjerava odabir primatelja za F-005, ali sam po sebi ne dokazuje da je obavijest stvarno dostavljena; ako projekt zahtijeva potpunu dostavu od početka do kraja, za taj dio treba postojati zasebna provjera. Svaki redak pokazuje gdje je zahtjev opisan kao ponašanje, gdje je ostvaren u sustavu i gdje se nalazi dokaz njegove provjere. Zahtjev ne mora imati zaseban obrazac uporabe ako ne opisuje korisničku interakciju; tada navedite relevantno ponašanje, arhitekturni element ili drugi prikladan način realizacije. U svojem projektu koristite stvarne nazive komponenata, modula i provjera iz dokumentacije i implementacije. Nedostajuću poveznicu ostavite praznom ili označite kao *na čekanju* uz kratak razlog. Stvarni rezultati ispitivanja bilježe se uz ispitne slučajeve; ova tablica pokazuje gdje ih pronaći.

</details>

---

## 2.7 Pregled zahtjeva

**Cilj:** Zabilježiti važne povratne informacije o zahtjevima i odluke koje iz njih proizlaze na dvije formalne kontrolne točke projekta, u 7. i 14. tjednu.

| Kontrolna točka | Povratna informacija ili nalaz | Odluka o zahtjevu ili opsegu |
| --- | --- | --- |
| Iteracija 1 | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |
| Demo 2  | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |
| Završni pregled | [Povratna informacija] | [Odluka; vidi odjeljak 2.5] |

<details>
<summary><strong>Odluke o zahtjevima nakon pregleda</strong></summary>

**Primjer scenarija — pregled zahtjeva CrisisMapa:**

| Kontrolna točka | Povratna informacija ili nalaz | Odluka o zahtjevu ili opsegu |
| --- | --- | --- |
| Iteracija 1 | Demonstracija pokazuje da odbijanje pristupa lokaciji preglednika onemogućuje podnošenje prijave. | Dogovoriti ručni odabir lokacije; ažurirati F-004 i primjer NF-01 te razlog zabilježiti u odjeljku 2.5. |

**Odluka povezana s povratnom informacijom:** Zapis povezuje opaženo ponašanje s konkretnom promjenom zahtjeva i izbjegava zapisnik cijelog sastanka. Zapišite samo stvarne povratne informacije i odluke za kontrolne točke. Konzultacije u nekom drugom tjednu ne stvaraju dodatnu obaveznu predaju.

</details>

---

>**Završna provjera:** Zahtjevi su aktualni, provjerljivi i povezani. Svaki važan zahtjev moguće je pratiti od njegova opisa i ponašanja preko mjesta realizacije u sustavu do odgovarajućeg ispitivanja ili druge provjere. Poveznice koriste stvarne identifikatore i nazive iz projektne dokumentacije.

