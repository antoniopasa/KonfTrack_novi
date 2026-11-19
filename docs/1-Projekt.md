# 1. Opseg projekta

**Cilj:** Organizacija znanstvene konferencije koja se sastoji od objava informacija o konferenciji, primanje znanstvenih radova, dodjele recenzenata, provođenje recenzijskog postupka, donošenje odluka o prihvaćanju radova i izrada programa konferencije. Korisnici su: sudionici konferencija, recenzenti, autori radova i organizatori konferencija.

## 1.1 Problem i cilj projekta

**Cilj:**
Problem:
Organizacija znanstvenih konferencija često se oslanja na razmjenu e-mailova i sinkronizaciju tablica. Takav pristup dovodi do gubitka dokumenata, propuštanja strogih rokova, rizika od curenja identiteta autora tijekom recenzije, velike koordinacije i praćenju te otežane komunikacije između organizatora, recenzenata i autora.

Cilj projekta KonfTrack je razviti web-platformu koja omogućuje upravljanje znanstvenim konferencijama i njihovim ključnim organizacijskim procesima. Sustav će podržavati upravljanje korisnicima i njihovim pravima pristupa, stvaranje i uređivanje konferencija, predaju znanstvenih radova, dvostruko slijepo recenziranje, donošenje odluka te organizaciju programa konferencije. Također će omogućiti slanje obavijesti povezanih s važnim događajima u postupku organizacije konferencije u slučaju promjena.

Očekivana korist projekta je jednostavnije upravljanje konferencijama, bolja preglednost tijeka obrade radova, lakše praćenje rokova i jasnije razdvajanje ovlasti među sudionicima. Sustav bi trebao omogućiti da autori, recenzenti i organizatori pristupaju funkcijama i informacijama koje su im potrebne, uz očuvanje povjerljivosti recenzijskog postupka i zaštitu osobnih podataka.



## 1.2 Ciljani korisnici i dionici

**Cilj:** Utvrditi osobe, uloge i organizacije čije potrebe i interesi određuju projektni zadatak.

| Skupina korisnika ili dionika | Potreba ili interes relevantan za ovaj projekt |
| --- | --- |
| Administrator sustava | Stvaranje i odobravanje konferencije, odabir predsjednika programskog odbora i upravljanje postavkama platforme |
| Predsjednik programskog odbora | Upravljanje konferencijom i njezinim rokovima, organizacija postupka recenziranja, pozivanje i dodjela radova recenzentima, praćenje postupka i rezultata recenziranja, donošenje odluka o radovima, organizacija programa konferencije i pregled statistike |
| Autor | Pregledavanje dostupne konferencije, predaja rada, upravljanje vlastitim predajama u dopuštenom razdoblju i pregledavanje dostupnih informacija(obavijesti, odluka) te predaja konačne verzije |
| Recenzent | Pregledavanje poziva, iskazivanje interesa za recenziranje, pregled i recenziranje dodijeljenih radova, sudjelovanje u anonimnoj raspravi |
| Neregistrirani korisnici | Pregled javno dostupne informacije o konferencijama i njihovim programima te mogućnost registracije |
| Registrirani korisnici | Pristup funkcionalnostima sustava u skladu s dodijeljenim ulogama i ovlastima, upravljanje vlastitim profilom ,pregledavanje objavljenih informacija o konferenciji, mogućnost predaje rada, odjava |
| Programski odbor | Sastoji se od predsjednika i recenzenata, cilj je uspješno pregledati, ocijeniti i odlučiti koji radovi će biti izlagani i uvrstiti ih u program|
| ORCID | Omogućavanje vanjske autentifikacije korisnika i dohvat i provjera potrebnih podataka  potrebnih za identifikaciju autora i provjeru mogućih sukoba interesa. |
| Crossref | Omogućavanje provjere DOI referenci i dohvat bibliografskih metapodataka znanstvenih radova |
| Google Calendar | Omogućavanje povezivanje osobnog rasporeda korisnika s vanjskim kalendarom, ako se implementira izravna integracija s Google Calendarom. |

Korisničke uloge definiraju se prema potrebama sustava. Pojedini korisnik može sudjelovati u više konferencija, a njegova prava pristupa mogu ovisiti o ulozi dodijeljenoj za određenu konferenciju.


## 1.3 Granice projekta

**Cilj:** Jasno definirati granice sustava — što je obuhvaćeno odobrenim zadatkom, što je svjesno izostavljeno ili odgođeno te o kojim vanjskim uslugama sustav izravno ovisi.

**Uključeno:**
- Registracija i prijava adresom e-pošte ili ORCID računom, odjava i upravljanje profilom.
- Korisničke uloge po konferenciji i provjera prava pristupa na poslužitelju.
- Odobravanje konferencija, unos osnovnih podataka, tema i rokova te automatsko onemogućivanje radnji nakon isteka roka.
- Predaja radova s koautorima i anonimiziranim PDF rukopisom, provjera PDF-a i DOI referenci (Crossref), revizija i predaja konačne verzije.
- Pozivanje recenzenata, iskazivanje interesa, prepoznavanje sukoba interesa (uključujući koautorstvo prema podacima iz ORCID-a) i prijedlog raspodjele radova.
- Dvostruko slijepa recenzija, rasprava recenzenata, podsjetnici e-poštom i označavanje recenzija koje kasne.
- Odluke o radovima i obavijesti autorima prema predlošku poruke.
- Program konferencije sa sekcijama, javna objava programa, osobni raspored s izvozom u Google Calendar i zbornik sažetaka u PDF formatu.
- Validacija podataka i PDF dokumenata, uključujući provjeru formata, veličine, broja stranica i odabranih metapodataka dokumenta.
- Provjera DOI referenci putem Crossref servisa.
- Ručne provjere kroz Thunder Client
- Uređivanje uloga i dopuštenja uloga prema bazi podataka
- Stvaranje, pregled i uređivanje konferencija te upravljanje njihovim statusima, vidljivošću, znanstvenim temama i rokovima.
- Evidentiranje odluka o radovima i obavještavanje korisnika o važnim događajima.
- Upravljanje programom konferencije i osobnim rasporedom korisnika.
- Generiranje zbornika radova u PDF formatu, u skladu sa zahtjevom projekta.
- Uređivanje korisničkog profila, ako je trenutačno implementirano samo dohvaćanje profila.
- Potpuna autorizacija na temelju uloga i prava pristupa, trenutačno samo provjera je li korisnik prijavljen
- Automatizirani jedinični i integracijski testovi ključnih funkcionalnosti
- Upravljanje programom konferencije i osobnim rasporedom korisnika.
- Generiranje zbornika radova u PDF formatu, u skladu sa zahtjevom projekta.

**Trenutno ostvareno:**
Trenutačno ostvareno: registracija i prijava e-poštom i ORCID-om, odjava, uređivanje profila, JWT tokeni za API, javna početna stranica i stranica programa (s privremenim podacima) te sučelje registriranog korisnika (početna, obrazac za predaju rada, „Moji radovi” i kontakt), pri čemu predaja rada još nije povezana s poslužiteljem. Shema baze podataka obuhvaća sve entitete potrebne za ostale funkcionalnosti. Ostale uključene funkcionalnosti planirane su za sljedeće iteracije; pregled stanja nalazi se u README-u projekta.

**Izvan opsega ili odgođeno:**
- Objavljivanje cjelovitog zbornika radova; sustav generira samo zbornik sažetaka koji traži projektni zadatak.
- Integracija s vanjskim sustavima za plaćanje kotizacija, jer nije dio projektnog zadatka.
- Napredne funkcionalnosti koje nisu potrebne za ostvarenje osnovnih procesa upravljanja konferencijama.

**Vanjske ovisnosti:**
- PostgreSQL sustav za upravljanje relacijskom bazom podataka, za pohranu korisnika, konferencija, radova, recenzija i povezanih podataka.
- Poslužiteljsko okruženje za pokretanje web-aplikacije i lokalnu pohranu datoteka.
- ORCID kao vanjski pružatelj identiteta za autentifikaciju putem OAuth 2.0 protokola.
- Crossref API za provjeru DOI referenci.
- Usluga za slanje obavijesti putem e-pošte, ako se koristi u implementaciji sustava.
- GitHub za upravljanje verzijama izvornog koda i suradnju članova projektnog tima.



## 1.4 Postojeći pristupi i opravdanost projekta

**Cilj:** Objasniti kako korisnici trenutačno rješavaju problem i koja preostala potreba opravdava odobreni projekt.

Organizacija znanstvenih konferencija može se provoditi korištenjem različitih alata i postupaka, npr. razmjena e-mailova za komunikaciju među autorima, recenzentima, predsjednikom, tablica za evidenciju radova, dodijeljenih recenzenata koje se ručno uređuju, praćenje datuma... Takav način iziskuje koordinaciju, preciznost i potpunu posvećenost. KonfTrack ima za cilj objediniti sve potrebne procese organizacije znanstvene konferencije na jednoj platformi i tako omogućiti rasterećenje svih članova, a posebice organizatora i predsjednika. Također, cilj joj je omogućiti veću preglednost, dostupnost, ažurnost, podršku i odaziv publike. KonfTrack želi objediniti prijave autora, predaju radova, osigurati ispravnu predaju, recenziranje, dvostruko slijepu recenziju, donošenje odluka, ispravke grešaka, raspravu recenzenata, razmjenu informacija predsjednika i programskog odbora, donošenje odluke, ponovnu predaju konačne verzije, odabir predavača, raspored održavanja, izrada programa te dostupnost i preglednost informacija o održavanju konferencije.


---

>**Završna provjera:** Opis problema, cilj projekta, korisnici i dionici, granice opsega te postojeći pristupi međusobno su usklađeni. Navedene koristi ne predstavljaju neprovjerene tvrdnje, a uključene i izostavljene funkcionalnosti odgovaraju odobrenom projektnom zadatku.







STARA VERZIJA: 


# 1. Opseg projekta

**Cilj:** Objasniti odobreni projektni zadatak vlastitim riječima tima. Čitatelj treba razumjeti problem, ciljane korisnike, cilj projekta i njegove granice bez prethodnog čitanja detaljnih zahtjeva.

## 1.1 Problem i cilj projekta

**Cilj:** Jasno razgraničiti problem koji se rješava od predloženog rješenja i stvarne koristi za korisnika.

[Problem, cilj i očekivana korist vlastitim riječima tima.]

<details>
<summary><strong>Očekivane koristi i potkrepljujući dokazi</strong></summary>

**Primjer — CrisisMap:** „Tijekom teških vremenskih prilika građaninu mogu trebati prijave kriznih događaja relevantne za njegovu lokaciju. CrisisMap ima za cilj prikazati lokacijski relevantne prijave kriznih događaja na karti kako bi ih građanin mogao pronaći na jednom mjestu.” Time su navedeni problem, ciljani korisnik, predložena mogućnost i očekivana korist. Ne tvrdi se da je izmjereno smanjenje vremena reagiranja niti da aplikacija ima integraciju sa službom za hitne intervencije. Tim i dalje mora opisati opseg odobren za vlastiti projekt.

„Aplikacija smanjuje vrijeme odgovora na krizni događaj za 30 % na temelju simulacija.” Broj očekivanu korist čini konkretnijom, ali odmah zahtijeva provjeru: **gdje je simulacija i kako je postotak izračunan?** Ako takav dokaz ne postoji, očekivanu korist navedite bez brojčanog rezultata.

</details>

## 1.2 Ciljani korisnici i dionici

**Cilj:** Utvrditi osobe, uloge i organizacije čije potrebe i interesi određuju projektni zadatak.

| Skupina korisnika ili dionika | Potreba ili interes relevantan za ovaj projekt |
| --- | --- |
|  |  |

<details>
<summary><strong>Korisnici, dionici i neobavezna persona</strong></summary>

**Primjer — CrisisMap:**

| Skupina korisnika ili dionika | Potreba ili interes relevantan za ovaj projekt |
| --- | --- |
| Građanin | Pronaći informacije o obližnjim kriznim događajima i podnijeti prijavu kriznog događaja s lokacijom. |
| Koordinator pomoći | Pregledati prijave relevantne za područje i dostupne resurse, ako je koordinacija unutar odobrenog opsega. |
| Regulatorno tijelo / Agencija za zaštitu podataka (Dionik) | Zahtijeva osiguravanje anonimnosti prijavitelja i zaštitu osobnih podataka (npr. usklađenost s GDPR-om). Ovaj dionik ne koristi aplikaciju, ali definira ograničenja sustava. |

Riječ je o dvjema različitim potrebama, a ne o dvjema izmišljenim biografijama. Akter komunicira s aplikacijom; demonstrator na kolegiju kojem je rezultat zanimljiv ne mora biti akter aplikacije. Koristite uloge i ovlasti iz svojeg odobrenog zadatka. Persona je neobavezna i korisna je kada pomaže riješiti konkretno projektno pitanje.

**Neobavezni primjer persone:** Ana, koordinatorica pomoći, treba aktualne informacije o resursima kako bi mogla rasporediti pomoć. To može pomoći kada tim odlučuje koje informacije koordinator treba vidjeti prve. Personu opišite samo ako objašnjava projektnu odluku; popis izmišljenih biografija nije obavezni rezultat kolegija.

</details>

## 1.3 Granice projekta

**Cilj:** Jasno definirati granice sustava — što je obuhvaćeno odobrenim zadatkom, što je svjesno izostavljeno ili odgođeno te o kojim vanjskim uslugama sustav izravno ovisi.

**Uključeno:** [Glavne mogućnosti.]  
**Izvan opsega ili odgođeno:** [Navedite funkcionalnosti koje su namjerno izostavljene ili prebačene u buduće verzije, uz kratko inženjersko ili vremensko obrazloženje.] 
**Vanjske ovisnosti:** [Navedite nužne vanjske usluge, API-je, baze podataka ili izvore informacija bez kojih sustav ne može funkcionirati (npr. Google Maps, platni pristupnici, vanjski pružatelj identiteta (OAuth)).]

<details>
<summary><strong>Primjer početne granice projekta</strong></summary>

**Primjer — CrisisMap:**  
**Uključeno:** Podnošenje prijave kriznog događaja s lokacijom i pregled prijava na karti.  
**Isključeno:** Automatsko angažiranje hitnih službi; prikaz prijave ne odobrava niti pokreće službenu intervenciju.  
**Vanjska ovisnost:** Pružatelj kartografskih usluga omogućuje prikaz karte; aplikacija ostaje odgovorna za vlastite podatke o prijavama.

Ovo je konkretna granica jer razdvaja prikaz informacija od službenog odgovora hitnih službi i određuje koji sustav osigurava kartu. Izuzeće i ovisnost dio su **nastavnog scenarija**, a ne tvrdnja o tome što objavljena aplikacija stvarno implementira; te činjenice određuju odobreni opseg i stvarna aplikacija tima.

**Drugi primjer korisne granice:** U prvoj implementaciji usredotočite se na koordinaciju odgovora na poplavu. Navedite vrste događaja ili korisnika koje pokriva odobreni projekt umjesto obećavanja svih mogućih kriznih procesa. Predviđanje pomoću umjetne inteligencije ili obuku u virtualnoj stvarnosti navedite kao budući rad samo ako predstavljaju smislen sljedeći korak, a ne kao pretpostavljene funkcionalnosti prve inačice.

Tvrdnja poput „modularna arhitektura omogućuje brzo postavljanje u novim regijama” zahtijeva stvarno projektno uporište. Ovdje nemojte obećavati prilagodljivost samo zato što zvuči kao poželjna korist projekta.

Ovaj pregled zadržite na razini opsega: navedite glavnu mogućnost i njezinu granicu bez popisivanja svakog zahtjeva ili projektne pojedinosti. Ono što je stvarno dovršeno i ono što je ostalo nedovršeno navedite u završnim rezultatima, a ne u ovom početnom opisu.

</details>

## 1.4 Postojeći pristupi i opravdanost projekta

**Cilj:** Objasniti kako korisnici trenutačno rješavaju problem i koja preostala potreba opravdava odobreni projekt.

[U dvije do četiri rečenice opišite jedan postojeći postupak ili relevantno rješenje, što ono već omogućuje i koja konkretna potreba motivira ovaj projekt. Činjenične tvrdnje o vanjskim proizvodima ili praksama potkrijepite izvorom.]

<details>
<summary><strong>Postojeći pristupi i opravdanost projekta</strong></summary>

**Primjer — CrisisMap:** „Nakon teškog vremenskog događaja građanin će možda morati provjeriti izvor meteoroloških upozorenja i zaseban izvor lokalnih prijava. Predloženi prikaz na karti u CrisisMapu objedinjuje prijave kriznih događaja relevantne za odabranu lokaciju. Aplikacija ne zamjenjuje službena upozorenja ni hitne službe.” Time se objašnjava potreba i namjeravana granica projekta bez tvrdnje da su svi postojeći kanali neučinkoviti. Prva je rečenica **primjer korisničkog scenarija**, a ne izmjeren nalaz o stvarnim korisnicima. Ako tim navodi konkretnu službu upozoravanja ili konkurentski proizvod, treba navesti izvor. Pregled konkurencije i snimke zaslona nisu obavezni.

Ako je postojeće rješenje stvarno utjecalo na projekt, usporedite samo relevantnu funkcionalnost, primjerice jasnoću karte ili potrebnu integraciju. Izbjegavajte unaprijed zadani broj proizvoda ili tablicu kriterija koji nisu povezani s odobrenim zadatkom.

</details>

---

>**Završna provjera:** Opis problema, cilj projekta, korisnici i dionici, granice opsega te postojeći pristupi međusobno su usklađeni. Navedene koristi ne predstavljaju neprovjerene tvrdnje, a uključene i izostavljene funkcionalnosti odgovaraju odobrenom projektnom zadatku.
