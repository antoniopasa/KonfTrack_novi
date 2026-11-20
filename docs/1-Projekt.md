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

- Registracija i prijava adresom e-pošte ili ORCID računom, odjava i upravljanje korisničkim profilom.
- Upravljanje korisničkim ulogama po konferenciji i provjera prava pristupa na poslužitelju.
- Odobravanje konferencija, unos osnovnih podataka, znanstvenih tema i rokova te ograničavanje radnji nakon isteka odgovarajućih rokova.
- Stvaranje, pregled i uređivanje konferencija te upravljanje njihovim statusima i vidljivošću.
- Predaja znanstvenih radova s podacima o koautorima i PDF rukopisom, provjera PDF datoteka i DOI referenci putem servisa Crossref, upravljanje verzijama radova i predaja konačne verzije.
- Pozivanje recenzenata, iskazivanje interesa za recenziranje, prepoznavanje mogućih sukoba interesa, uključujući provjeru koautorstva na temelju dostupnih podataka iz ORCID-a, te prijedlog raspodjele radova.
- Provođenje dvostruko slijepog recenzijskog postupka, rasprava recenzenata, praćenje rokova recenziranja i slanje podsjetnika e-poštom.
- Evidentiranje odluka o radovima i obavještavanje autora o važnim promjenama statusa.
- Upravljanje programom konferencije, organizacija sekcija, javna objava programa i upravljanje osobnim rasporedom korisnika.
- Generiranje zbornika sažetaka u PDF formatu, u skladu sa zahtjevima projektnog zadatka.
- Validacija ulaznih podataka i PDF dokumenata, uključujući provjeru formata, veličine, broja stranica i odabranih metapodataka dokumenta.

**Trenutačno ostvareno:**

U trenutačnoj verziji sustava implementirane su registracija i prijava adresom e-pošte i ORCID računom, odjava, upravljanje korisničkim profilom te autentifikacija API zahtjeva putem JWT tokena. Implementirano je korisničko sučelje s javnim stranicama i sučeljem za registrirane korisnike, uključujući početnu stranicu, obrazac za predaju rada, pregled vlastitih radova i kontakt.

Implementiran je poslužiteljski dio za predaju i obradu znanstvenih radova, uključujući provjeru PDF datoteka i DOI referenci putem servisa Crossref te pohranu podataka o radu, autorima i verzijama rada. Stanje pojedinih funkcionalnosti i eventualna ograničenja prikazani su u projektnom README-u i odgovarajućim tehničkim dnevnicima.

**Izvan opsega ili odgođeno:**

- Objavljivanje cjelovitih tekstova radova u zborniku; projektni zadatak obuhvaća generiranje zbornika sažetaka u PDF formatu.
- Napredne funkcionalnosti koje nisu potrebne za ostvarenje osnovnih procesa upravljanja znanstvenim konferencijama.

**Vanjske ovisnosti:**

- **PostgreSQL** — sustav za upravljanje relacijskom bazom podataka u kojoj se pohranjuju korisnici, konferencije, radovi, recenzije i povezani podaci.
- **Poslužiteljsko okruženje** — potrebno za pokretanje web-aplikacije i pohranu datoteka.
- **ORCID** — vanjski pružatelj identiteta za autentifikaciju korisnika putem protokola OAuth 2.0.
- **Crossref API** — vanjski servis za provjeru DOI referenci i dohvat bibliografskih metapodataka.
- **Usluga za slanje e-pošte** — koristi se za slanje obavijesti korisnicima, ako je uključena u trenutačno postavljeno okruženje.
- **GitHub** — koristi se za upravljanje verzijama izvornog koda, praćenje zadataka i suradnju članova projektnog tima.

## 1.4 Postojeći pristupi i opravdanost projekta

**Cilj:** Objasniti kako korisnici trenutačno rješavaju problem i koja preostala potreba opravdava odobreni projekt.

Organizacija znanstvenih konferencija može se provoditi korištenjem različitih alata i postupaka, npr. razmjena e-mailova za komunikaciju među autorima, recenzentima, predsjednikom, tablica za evidenciju radova, dodijeljenih recenzenata koje se ručno uređuju, praćenje datuma... Takav način iziskuje koordinaciju, preciznost i potpunu posvećenost. KonfTrack ima za cilj objediniti sve potrebne procese organizacije znanstvene konferencije na jednoj platformi i tako omogućiti rasterećenje svih članova, a posebice organizatora i predsjednika. Također, cilj joj je omogućiti veću preglednost, dostupnost, ažurnost, podršku i odaziv publike. KonfTrack želi objediniti prijave autora, predaju radova, osigurati ispravnu predaju, recenziranje, dvostruko slijepu recenziju, donošenje odluka, ispravke grešaka, raspravu recenzenata, razmjenu informacija predsjednika i programskog odbora, donošenje odluke, ponovnu predaju konačne verzije, odabir predavača, raspored održavanja, izrada programa te dostupnost i preglednost informacija o održavanju konferencije.


---

>**Završna provjera:** Opis problema, cilj projekta, korisnici i dionici, granice opsega te postojeći pristupi međusobno su usklađeni. Navedene koristi ne predstavljaju neprovjerene tvrdnje, a uključene i izostavljene funkcionalnosti odgovaraju odobrenom projektnom zadatku.

