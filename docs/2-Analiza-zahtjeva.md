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
| F-001 | Sustav omogućuje registraciju korisnika putem važeće adrese e-pošte ili ORCID računa. | Visok | Projektni zadatak | Korisnik može pokrenuti registraciju jednim od ponuđenih načina. Sustav odbija nevaljane podatke za registraciju. |
| F-002 | Sustav omogućuje prijavu korisnika putem adrese e-pošte ili ORCID računa, uz primjenu odgovarajućeg mehanizma autentifikacije i OAuth 2.0 tokena. | Visok | Projektni zadatak | Korisnik koji se uspješno autentificira jednim od podržanih načina dobiva pristup funkcionalnostima za koje ima ovlasti, dok neuspješna autentifikacija ne omogućuje pristup. |
| F-003 | Sustav omogućuje sigurnu odjavu i poništavanje korisničke sesije. | Visok | Projektni zadatak | Nakon odjave prethodna sesija više se ne može koristiti za pristup zaštićenim funkcijama. |
| F-004 | Sustav omogućuje pregled i uređivanje osobnog profila, uključujući ime, prezime, ustanovu, ORCID identifikator i područja ekspertize. | Visok | Projektni zadatak | Prijavljeni korisnik može pregledati i ažurirati dopuštena polja vlastitog profila, ali ne može samostalno mijenjati zaštićene administrativne ovlasti. |
| F-005 | Sustav podržava uloge administratora, predsjednika programskog odbora, recenzenta i autora. | Visok | Projektni zadatak | Sustav prepoznaje navedene uloge i primjenjuje odgovarajuća pravila pristupa. |
| F-006 | Sustav omogućuje dodjelu uloga korisnicima za pojedinu konferenciju. | Visok | Projektni zadatak | Ovlašteni korisnik može dodijeliti dopuštenu ulogu za konferenciju. Isti korisnik može imati različite uloge na različitim konferencijama. |
| F-007 | Sustav provjerava prava pristupa pri izvršavanju zaštićenih operacija. | Visok | Projektni zadatak | Zahtjevi korisnika bez odgovarajućih ovlasti odbijaju se, uključujući pokušaje pristupa podacima drugih korisnika ili konferencija. |
| F-008 | Sustav omogućuje administratoru pregled korisničkih računa te upravljanje njima, uključujući deaktivaciju računa. | Visok | Projektni zadatak | Administrator može pregledati korisničke račune i deaktivirati račun u slučaju zlouporabe. Korisnik bez administrativnih ovlasti ne može provesti te radnje. |
| F-009 | Sustav omogućuje neregistriranim korisnicima pregled javne stranice konferencije. | Visok | Projektni zadatak | Neregistrirani korisnik može pregledati objavljene informacije o konferenciji, uključujući poziv na predaju radova, teme, važne datume i objavljeni program. |
| F-010 | Sustav omogućuje administratoru odobravanje novih konferencija i imenovanje predsjednika programskog odbora. | Visok | Projektni zadatak | Administrator može odobriti novu konferenciju i imenovati njezina predsjednika programskog odbora. Korisnik bez odgovarajućih ovlasti ne može odobriti konferenciju ni imenovati predsjednika. |
| F-011 | Sustav omogućuje predsjedniku programskog odbora unos i uređivanje osnovnih podataka konferencije. | Visok | Projektni zadatak | Predsjednik programskog odbora može unijeti i ažurirati naziv, mjesto i datume održavanja konferencije. |
| F-012 | Sustav omogućuje pregled detalja pojedine konferencije. | Visok | Projektni zadatak | Za odabranu konferenciju prikazuju se dostupni podaci, uključujući opis, status, datume, rokove i znanstvene teme. |
| F-013 | Sustav omogućuje predsjedniku programskog odbora postavljanje i uređivanje rokova pojedinih faza konferencije. | Visok | Projektni zadatak | Predsjednik može definirati rokove za predaju radova, recenziju, obavještavanje autora i predaju konačnih verzija. |
| F-014 | Sustav automatski onemogućuje odgovarajuće radnje nakon isteka pripadajućeg roka. | Visok | Projektni zadatak | Nakon isteka roka sustav ne dopušta radnju koja više nije vremenski dopuštena, neovisno o stanju korisničkog sučelja. |
| F-015 | Sustav omogućuje predsjedniku programskog odbora produljenje pojedinog roka. | Visok | Projektni zadatak | Predsjednik može produljiti definirani rok, a sustav evidentira novu vrijednost roka. |
| F-016 | Sustav obavještava zahvaćene korisnike o produljenju roka. | Visok | Projektni zadatak | Nakon produljenja roka sustav šalje obavijest korisnicima na koje se promjena odnosi. |
| F-017 | Sustav omogućuje dodavanje i uređivanje znanstvenih tema konferencije. | Visok | Projektni zadatak | Predsjednik programskog odbora može dodati, pregledati i urediti teme konferencije. |
| F-018 | Sustav omogućuje objavljivanje konferencije i njezinih javno dostupnih informacija. | Visok | Projektni zadatak | Objavljene informacije o konferenciji dostupne su i neregistriranim korisnicima, dok su zaštićene funkcionalnosti dostupne samo prijavljenim korisnicima s odgovarajućim ovlastima. |
| F-019 | Sustav omogućuje registriranom korisniku predaju znanstvenog rada za konferenciju. | Visok | Projektni zadatak | Prijavljeni korisnik može predati rad ako su konferencija i rokovi otvoreni za predaju. |
| F-020 | Sustav omogućuje unos metapodataka rada, uključujući naslov, sažetak, ključne riječi, temu i autore. | Visok | Projektni zadatak | Sustav sprema unesene podatke i povezuje ih s odgovarajućim radom i konferencijom. |
| F-021 | Sustav omogućuje odabir koautora među postojećim korisnicima ili njihovo pozivanje unosom imena i adrese e-pošte. | Visok | Projektni zadatak | Autor može odabrati postojeće korisnike kao koautore ili unijeti ime i adresu e-pošte osobe koju želi pozvati kao koautora. |
| F-022 | Sustav omogućuje određivanje jednog autora kao autora za kontakt. | Visok | Projektni zadatak | Za svaki predani rad evidentiran je jedan autor za kontakt. |
| F-023 | Sustav omogućuje prilaganje anonimiziranog rukopisa rada u PDF formatu. | Visok | Projektni zadatak | Autor može priložiti rukopis u PDF formatu, a sustav ga povezuje s odgovarajućim radom. |
| F-024 | Sustav provjerava format i najveći dopušteni broj stranica priloženog rukopisa. | Visok | Projektni zadatak | Sustav provjerava je li datoteka u PDF formatu i zadovoljava li dopušteni broj stranica. Neodgovarajuća datoteka odbija se ili se autoru prikazuje odgovarajuće upozorenje. |
| F-025 | Sustav provjerava sadrže li metapodaci PDF datoteke imena autora i upozorava autora ako ih pronađe. | Visok | Projektni zadatak | Ako se u metapodacima PDF datoteke nalaze imena autora, sustav prikazuje upozorenje prije predaje rada. |
| F-026 | Sustav omogućuje provjeru DOI oznaka referenci putem vanjskog servisa Crossref. | Srednji | Projektni zadatak | Sustav za reference s DOI oznakom dohvaća dostupne metapodatke putem servisa Crossref, a za DOI oznake koje ne postoje prikazuje upozorenje. |
| F-027 | Sustav omogućuje autoru pregled i uređivanje vlastitog rada u skladu s rokovima i trenutačnim stanjem rada. | Visok | Projektni zadatak i pitanje za pojašnjenje | Autor može pregledavati vlastite radove. Sustav dopušta izmjene samo u fazama u kojima su one dozvoljene i dok pripadajući rok nije istekao. |
| F-028 | Sustav omogućuje autoru povlačenje vlastitog rada u bilo kojem trenutku prije prihvaćanja. | Visok | Projektni zadatak i pitanje za pojašnjenje | Autor može povući rad prije njegova prihvaćanja, uključujući razdoblje recenzije. |
| F-029 | Sustav podržava definirane statuse znanstvenog rada tijekom njegova životnog ciklusa. | Visok | Projektni zadatak | Sustav evidentira odgovarajuće statuse rada: nacrt, predan, u recenziji, potrebna revizija, prihvaćen, odbijen, konačna verzija predana i uvršten u program. |
| F-030 | Sustav omogućuje autoru ponovnu predaju rada nakon zatražene revizije, zajedno s dokumentom odgovora recenzentima. | Visok | Projektni zadatak | Autor može ponovno predati revidirani rad i dokument s odgovorima recenzentima. Rad se vraća u stanje u recenziji i dodjeljuje istim recenzentima. |
| F-031 | Sustav omogućuje autoru predaju konačne verzije prihvaćenog rada. | Visok | Projektni zadatak | Autor može predati konačnu, neanonimiziranu verziju rada i priložiti potpisanu izjavu o autorskim pravima. |
| F-032 | Sustav omogućuje autoru navođenje osobe koja će izlagati prihvaćeni rad. | Visok | Projektni zadatak | Prilikom predaje konačne verzije autor može navesti izlagača rada, a taj se podatak evidentira uz rad. |
| F-033 | Sustav omogućuje predsjedniku programskog odbora slanje pozivnica recenzentima putem e-pošte. | Visok | Projektni zadatak | Predsjednik može poslati pozivnicu odabranom korisniku za sudjelovanje u programskom odboru u ulozi recenzenta. |
| F-034 | Sustav omogućuje pozvanom korisniku prihvaćanje ili odbijanje pozivnice za recenziranje. | Visok | Projektni zadatak | Pozvani korisnik može prihvatiti ili odbiti poziv, a sustav evidentira njegov odgovor. |
| F-035 | Sustav omogućuje recenzentima iskazivanje interesa za recenziranje pojedinih radova nakon isteka roka za predaju. | Visok | Projektni zadatak | Recenzent za pojedini rad može odabrati jednu od ponuđenih mogućnosti: „želim recenzirati”, „mogu recenzirati”, „ne želim recenzirati” ili „sukob interesa”. |
| F-036 | Sustav omogućuje recenzentu prijavu sukoba interesa za pojedini rad. | Visok | Projektni zadatak | Recenzent može označiti da je u sukobu interesa s pojedinim radom, a sustav tu informaciju uzima u obzir pri raspodjeli radova. |
| F-037 | Sustav automatski provjerava moguće sukobe interesa između recenzenata i autora. | Visok | Projektni zadatak | Sustav prepoznaje sukob interesa ako recenzent radi na istoj ustanovi kao neki od autora ili je s nekim od autora bio koautor u posljednje tri godine, koristeći podatke dohvaćene iz ORCID-a. |
| F-038 | Sustav predlaže raspodjelu radova recenzentima uz poštovanje pravila o broju recenzenata, ravnomjernom opterećenju i sukobima interesa. | Visok | Projektni zadatak | Sustav predlaže raspodjelu tako da svaki rad ima najmanje tri recenzenta, opterećenje recenzenata bude ravnomjerno, a prijavljeni i automatski prepoznati sukobi interesa budu uzeti u obzir. |
| F-039 | Sustav omogućuje da predloženu raspodjelu recenzenata pregleda  predsjednik programskog odbora. | Visok | Projektni zadatak i pitanje za pojašnjenje | Predložena raspodjela dostupna je predsjedniku programskog odbora. |
| F-040 | Sustav omogućuje predsjedniku programskog odbora potvrdu raspodjele recenzenata. | Visok | Projektni zadatak i pitanje za pojašnjenje |Dodijeljeni recenzenti mogu vidjeti radove koji su im dodijeljeni. |
| F-041 | Sustav omogućuje predsjedniku programskog odbora ručnu izmjenu raspodjele recenzenata. | Visok | Projektni zadatak i pitanje za pojašnjenje | Predsjednik može mijenjati dodjele recenzenata. |
| F-042 | Sustav predlaže raspodjelu radova tako da svaki rad dobije najmanje tri dodijeljena recenzenta. | Visok | Projektni zadatak i pitanje za pojašnjenje | Pravilo o najmanje tri recenzenta primjenjuje se na automatski predloženu raspodjelu. |
| F-043 | Sustav omogućuje zamjenu dodijeljenog recenzenta drugim recenzentom. | Visok | Projektni zadatak i pitanje za pojašnjenje | Predsjednik programskog odbora može zamijeniti recenzenta, a sustav evidentira zamjenu i ažurira dodjelu rada. |
| F-044 | Sustav ukida pristup radu recenzentu koji je zamijenjen. | Visok | Pitanje za pojašnjenje | Zamijenjeni recenzent više ne može pregledavati rad ni njegove recenzijske podatke te ne može predavati recenziju niti utjecati na odluku o radu. |
| F-045 | Sustav omogućuje recenzentu pregled dodijeljenih radova i pripadajućih rokova. | Visok | Projektni zadatak | Recenzent na pregledu „Moje recenzije” vidi radove koji su mu dodijeljeni i rokove za predaju recenzija. |
| F-046 | Sustav omogućuje recenzentu unos i predaju recenzije s propisanim podacima. | Visok | Projektni zadatak | Recenzent za rad može unijeti ocjenu od −3 do +3, procjenu vlastite stručnosti za temu od 1 do 5, komentar za autore i povjerljivi komentar za programski odbor. |
| F-047 | Sustav ograničava vidljivost identiteta autora i recenzenata tijekom dvostruko slijepog recenziranja. | Visok | Projektni zadatak | Recenzent ne vidi imena autora, a autor ne vidi imena recenzenata tijekom recenzijskog postupka. |
| F-048 | Sustav omogućuje recenzentima pregled međusobnih recenzija nakon što su predane sve recenzije za pojedini rad. | Visok | Projektni zadatak | Recenzenti dodijeljeni istom radu mogu vidjeti međusobne recenzije tek nakon predaje svih recenzija za taj rad. |
| F-049 | Sustav omogućuje raspravu recenzenata o pojedinom radu. | Visok | Projektni zadatak | Recenzenti mogu raspravljati o radu, pri čemu su u raspravi prikazani anonimnim oznakama poput „Recenzent 1”, „Recenzent 2” i sl. |
| F-050 | Sustav šalje recenzentima automatske podsjetnike o približavanju roka za predaju recenzije. | Srednji | Projektni zadatak | Sustav šalje podsjetnike e-poštom sedam i dva dana prije isteka roka za recenziju. |
| F-051 | Sustav posebno označava recenzije koje kasne. | Visok | Projektni zadatak | Recenzija kojoj je istekao rok, a nije predana, označena je kao zakašnjela i vidljiva je predsjedniku programskog odbora. |
| F-052 | Sustav omogućuje predsjedniku programskog odbora dodjelu zamjenskog recenzenta za rad s recenzijom koja kasni. | Visok | Projektni zadatak | Predsjednik može dodijeliti zamjenskog recenzenta, a sustav ažurira raspodjelu i primjenjuje pravila o najmanje tri recenzenta i ukidanju pristupa zamijenjenom recenzentu. |
| F-053 | Sustav omogućuje predsjedniku programskog odbora pregled rezultata recenziranja svih radova. | Visok | Projektni zadatak | Na pregledu „Odluke” prikazuju se radovi, prosječne ocjene, broj pristiglih recenzija i oznake znatnog neslaganja među ocjenama recenzenata. |
| F-054 | Sustav omogućuje predsjedniku programskog odbora donošenje odluke o pojedinom radu. | Visok | Projektni zadatak | Predsjednik za svaki rad može odabrati jednu od odluka: prihvaćen, potrebna revizija ili odbijen. |
| F-055 | Sustav omogućuje slanje obavijesti o odlukama svim autorima radova. | Visok | Projektni zadatak | Predsjednik programskog odbora može jednom radnjom poslati obavijesti svim autorima prema predlošku poruke. |
| F-056 | Sustav u obavijesti o odluci uključuje odluku i recenzije, ali izostavlja povjerljive komentare. | Visok | Projektni zadatak | Autor u obavijesti može vidjeti odluku i recenzije, ali ne može vidjeti povjerljive komentare namijenjene samo programskom odboru. |
| F-057 | Sustav omogućuje predsjedniku programskog odbora izradu i uređivanje programa konferencije. | Visok | Projektni zadatak | Predsjednik može izraditi i uređivati program koji se sastoji od sekcija s pripadajućim podacima. |
| F-058 | Sustav omogućuje definiranje podataka pojedine sekcije programa. | Visok | Projektni zadatak | Za svaku sekciju mogu se definirati tema, dvorana, termin i predsjedavajući. |
| F-059 | Sustav predlaže grupiranje radova u programske sekcije prema temama i ključnim riječima. | Srednji | Projektni zadatak | Sustav predlaže grupiranje radova u sekcije na temelju njihovih tema i ključnih riječi. |
| F-060 | Sustav provjerava vremenska preklapanja izlaganja istog izlagača. | Visok | Projektni zadatak | Sustav upozorava ako isti izlagač ima dva izlaganja u isto vrijeme. |
| F-061 | Sustav provjerava da predsjedavajući sekcije nije autor rada u toj sekciji. | Visok | Projektni zadatak | Sustav prepoznaje i upozorava na slučaj u kojem je predsjedavajući sekcije autor nekog od radova u istoj sekciji. |
| F-062 | Sustav evidentira uvrštavanje rada u program konferencije. | Visok | Projektni zadatak | Nakon uvrštavanja rada u program njegov se status mijenja u „uvršten u program”. |
| F-063 | Sustav omogućuje objavu programa konferencije na javnoj stranici konferencije. | Visok | Projektni zadatak | Nakon objave programa i neregistrirani korisnici mogu pregledati raspored konferencije. |
| F-064 | Sustav omogućuje registriranim korisnicima dodavanje odabranih izlaganja u osobni raspored. | Srednji | Projektni zadatak | Prijavljeni korisnik može odabrati izlaganja i dodati ih u vlastiti raspored. |
| F-065 | Sustav omogućuje izvoz osobnog rasporeda u Google Calendar. | Srednji | Projektni zadatak | Korisnik može izvesti odabrana izlaganja u svoj Google Calendar. |
| F-066 | Sustav automatski generira zbornik sažetaka prihvaćenih radova u PDF formatu. | Visok | Projektni zadatak | Sustav generira PDF zbornika koji sadržava prihvaćene radove, sadržaj organiziran po sekcijama i kazalo autora. |
| F-067 | Sustav omogućuje predsjedniku programskog odbora pregled statistike konferencije. | Visok | Projektni zadatak | Na pregledu „Statistika” prikazuju se broj predanih radova po temama, udio prihvaćenih radova, prosječno trajanje recenzije i opterećenje pojedinih recenzenata. |
| F-068 | Sustav omogućuje izvoz statističkih podataka u CSV formatu. | Srednji | Projektni zadatak | Predsjednik programskog odbora može izvesti dostupne statističke podatke u CSV datoteku. |
| F-069 | Sustav omogućuje administratoru uređivanje predložaka poruka e-pošte. | Srednji | Projektni zadatak | Administrator može pregledati i urediti predloške poruka koje sustav koristi za slanje obavijesti. |
| F-070 | Sustav omogućuje administratoru pregled statistike korištenja platforme. | Srednji | Projektni zadatak | Administrator može pregledati dostupne statističke podatke o korištenju sustava. |

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
| NF-01 | Sustav mora sigurno obrađivati autentifikacijske podatke i OAuth 2.0 tokene te spriječiti njihovo neovlašteno otkrivanje. | Visok | Sigurnosni zahtjevi projektnog tima | Pregled načina obrade i pohrane autentifikacijskih podataka i tokena te provjera da se tokeni ne izlažu neovlaštenim korisnicima. |
| NF-02 | Sve zaštićene operacije moraju provoditi autentifikaciju i provjeru ovlasti na backendu, neovisno o ograničenjima prikazanim u korisničkom sučelju. | Visok | Sigurnosni zahtjevi projektnog tima | Integracijski testovi s prijavljenim i neprijavljenim korisnicima te korisnicima s različitim ulogama. |
| NF-03 | Korisnik smije pristupati samo osobnim podacima i resursima za koje ima odgovarajuće ovlasti. | Visok | Sigurnosni zahtjevi projektnog tima | Testiranje pokušaja pristupa tuđim profilima, radovima, recenzijama i konferencijama. |
| NF-04 | Privatne PDF datoteke radova moraju biti dostupne samo ovlaštenim korisnicima. | Visok | Sigurnosni zahtjevi projektnog tima | Testiranje pristupa datotekama s različitim korisničkim ulogama i bez prijave. |
| NF-05 | Sustav mora validirati sve ulazne podatke prije njihove obrade i spremanja. | Visok | Sigurnosni zahtjevi projektnog tima | Testiranje nevaljanih tipova, nedostajućih polja, nedopuštenih vrijednosti i neprihvatljivih datuma. |
| NF-06 | Sustav mora očuvati anonimnost dvostruko slijepe recenzije u svim dijelovima aplikacije, uključujući korisničko sučelje, nazive datoteka koje recenzenti preuzimaju, obavijesti e-poštom i odgovore programskog sučelja (API). | Visok | Projektni zadatak – Ostali zahtjevi | Pregled korisničkog sučelja, preuzetih datoteka, poslanih obavijesti i API odgovora tijekom postupka recenziranja, uz provjeru da se identiteti autora i recenzenata ne otkrivaju neovlaštenim osobama. |
| NF-07 | Tehničke pogreške moraju se evidentirati centralizirano, bez zapisivanja lozinki, autentifikacijskih tokena i nepotrebnih osobnih podataka. | Srednji | Sigurnosni zahtjevi projektnog tima | Pregled konfiguracije logiranja i provjera zapisa nakon simuliranih pogrešaka. |
| NF-08 | Ključne funkcionalnosti sustava moraju imati odgovarajuće automatizirane unit ili integracijske testove. | Visok | Zahtjevi razvojnog procesa projektnog tima | Pokretanje automatiziranih testova i pregled njihovih rezultata u razvojnom okruženju ili CI postupku. |
| NF-09 | API mora vraćati dosljedne odgovore i odgovarajuće HTTP statuse za uspješne zahtjeve i različite vrste pogrešaka. | Srednji | Tehnički zahtjevi projektnog tima | Integracijski testovi uspješnih, nevaljanih i neovlaštenih API zahtjeva. |
| NF-10 | Sustav mora koristiti konfiguraciju koja omogućuje sigurno upravljanje tajnama i postavkama različitih okruženja, bez pohranjivanja tajnih podataka izravno u izvornom kodu. | Visok | Sigurnosni zahtjevi projektnog tima | Pregled konfiguracije, varijabli okruženja i repozitorija radi provjere da tajni podaci nisu pohranjeni u izvornom kodu. |
| NF-11 | Dokumentacija projekta mora omogućiti članovima tima pokretanje aplikacije i razumijevanje osnovnih API funkcionalnosti. | Srednji | Zahtjevi razvojnog procesa projektnog tima | Drugi član tima prati upute za postavljanje aplikacije i provjerava dokumentirane API rute. |
| NF-12 | Korisničko sučelje aplikacije mora biti prilagođeno različitim veličinama zaslona, uključujući zaslone mobilnih uređaja. | Visok | Projektni zadatak – Ostali zahtjevi | Testiranje prikaza i korištenja aplikacije na različitim veličinama zaslona, uključujući mobilne uređaje, tablete i stolna računala. |
| NF-13 | Sustav mora podržavati vremensku zonu koju odabere predsjednik programskog odbora za određivanje rokova te prikazivati rokove korisnicima preračunate u njihovo lokalno vrijeme. | Visok | Projektni zadatak – Ostali zahtjevi | Postavljanje roka u odabranoj vremenskoj zoni i provjera prikaza istog roka korisnicima koji se nalaze u različitim vremenskim zonama, uključujući prijelaz na ljetno i zimsko računanje vremena. |
| NF-14 | Sustav mora podržavati istodobni rad većeg broja korisnika, osobito u razdobljima neposredno prije isteka roka za predaju radova. | Visok | Projektni zadatak – Ostali zahtjevi | Provođenje testova opterećenja s većim brojem istodobnih korisnika, uz simulaciju predaje radova i drugih uobičajenih operacija. |

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
| A-01 | Administrator sustava – upravlja korisničkim računima i konferencijama, odobrava nove konferencije, imenuje predsjednike programskih odbora, uređuje predloške poruka e-pošte i pregledava statistiku korištenja sustava. | F-008, F-010, F-069, F-070, NF-02 |
| A-02 | Predsjednik programskog odbora – upravlja dodijeljenom konferencijom, njezinim podacima, temama i rokovima, poziva recenzente, upravlja raspodjelom radova, donosi odluke o radovima, organizira program i pregledava statistiku konferencije. | F-011–F-018, F-033, F-038–F-044, F-052–F-063, F-067–F-068 |
| A-03 | Autor – registrira se i upravlja svojim profilom, predaje radove, unosi podatke o radovima i koautorima, prati stanja svojih radova, predaje revizije i konačne verzije te prima obavijesti o odlukama. | F-001–F-004, F-019–F-032, F-055–F-056, NF-03, NF-04, NF-06 |
| A-04 | Recenzent – prihvaća ili odbija poziv za sudjelovanje u programskom odboru, iskazuje interes za recenziranje radova, pregledava dodijeljene radove, predaje recenzije i sudjeluje u anonimnoj raspravi o radovima. | F-001–F-007, F-034–F-037, F-045–F-051, NF-03, NF-04, NF-06 |
| A-05 | Registrirani korisnik – pregledava objavljeni program konferencije te odabrana izlaganja dodaje u osobni raspored i izvozi raspored u Google Calendar. | F-064–F-065 |
| A-06 | Neregistrirani korisnik – bez registracije pregledava javne stranice konferencija, njihove osnovne informacije, teme, važne datume i objavljeni program. | F-009, F-012, F-018, F-063 |
| A-07 | ORCID – vanjski sustav putem kojeg se omogućuje registracija i prijava korisnika te dohvaćaju podaci potrebni za prepoznavanje sukoba interesa. | F-001, F-002, F-004, F-037 |
| A-08 | Crossref – vanjski servis putem kojeg sustav provjerava DOI oznake referenci i dohvaća pripadajuće metapodatke. | F-026 |
| A-09 | Google Calendar – vanjski sustav u koji registrirani korisnik može izvesti svoj osobni raspored izlaganja. | F-065 |



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
| C-01 | Ograničenje | Sustav mora podržavati prijavu putem adrese e-pošte ili ORCID računa te koristiti OAuth 2.0 tokene za odgovarajuću autentifikaciju i autorizaciju. | Projektni zadatak; F-001, F-002, NF-01 | Potrebno je odabrati i implementirati odgovarajući mehanizam autentifikacije i sigurno rukovati tokenima. Provjerava se uspješna i neuspješna prijava te zaštita tokena od neovlaštenog pristupa. |
| C-02 | Ograničenje | Sustav se razvija u okviru studentskog projekta i raspoloživog vremena kolegija. | Projektni zadatak i rokovi kolegija | Prioritet imaju funkcionalnosti nužne za ostvarenje osnovnog procesa upravljanja konferencijom. Opseg dodatnih funkcionalnosti dogovara se unutar tima. |
| C-03 | Ograničenje | Pristup funkcionalnostima i podacima mora biti ograničen prema ulozi i ovlastima korisnika. | Projektni zadatak; F-005–F-008, NF-02, NF-03 | Ovlasti se moraju provjeravati na backendu, a ne samo skrivanjem opcija u korisničkom sučelju. Provjerava se pokušaj pristupa funkcionalnostima i podacima bez odgovarajućih ovlasti. |
| C-04 | Ograničenje | Radovi i recenzije moraju se obrađivati uz očuvanje povjerljivosti dvostruko slijepog recenziranja. | Projektni zadatak; F-047, NF-04, NF-06 | Pristup datotekama i podacima o autorima i recenzentima mora se ograničiti prema ulozi i fazi postupka. Anonimnost se provjerava u korisničkom sučelju, nazivima preuzetih datoteka, obavijestima e-poštom i API odgovorima. |
| C-05 | Ograničenje | Rukopisi radova predaju se u PDF formatu, a sustav mora provjeravati format i najveći dopušteni broj stranica. | Projektni zadatak; F-023, F-024 | Potrebno je implementirati provjeru formata datoteke i broja stranica. Konkretna najveća dopuštena duljina rada ne smije se pretpostaviti bez dodatnog dogovora ili podatka za pojedinu konferenciju. |
| C-06 | Ograničenje | Rokovi konferencije moraju poštovati vremensku zonu koju odabere predsjednik programskog odbora, uz prikaz rokova korisnicima u njihovu lokalnom vremenu. | Projektni zadatak – Ostali zahtjevi; NF-13 | Potrebno je pravilno pohranjivati i preračunavati datume i vremena. Provjerava se prikaz istog roka korisnicima u različitim vremenskim zonama, uključujući prijelaz na ljetno i zimsko računanje vremena. |
| C-07 | Ograničenje | Svaki rad u postupku recenziranja mora imati najmanje tri dodijeljena recenzenta. | Projektni zadatak i pojašnjenje profesora; F-038, F-041, F-042 | Pravilo se mora poštovati pri automatskoj raspodjeli i svim ručnim izmjenama dodjela. Provjerava se da sustav ne dopušta raspodjelu kojom bi neki rad ostao s manje od tri recenzenta. |
| AS-01 | Pretpostavka | Vanjski servisi ORCID, Crossref i Google Calendar bit će dostupni za povezivanje sa sustavom i korištenje njihovih predviđenih funkcionalnosti. | Projektni zadatak; F-001, F-002, F-026, F-037, F-065 | Tijekom razvoja potrebno je provjeriti dostupnost i mogućnosti potrebnih API-ja. Potrebno je razmotriti ponašanje sustava u slučaju privremene nedostupnosti vanjskog servisa. |
| AS-02 | Pretpostavka | Za svaku konferenciju bit će poznat najveći dopušteni broj stranica predanog rada. | Projektni zadatak; F-024; pretpostavka projektnog tima | Potrebno je dogovoriti na koji se način određuje dopušteni broj stranica, primjerice kroz upute za predaju rada za pojedinu konferenciju. Pretpostavku treba potvrditi prije implementacije provjere. |
| AS-03 | Pretpostavka | Ciljani broj istodobnih korisnika i prihvatljivo vrijeme odziva bit će određeni ako bude potrebno preciznije definirati kriterije opterećenja sustava. | NF-14; pretpostavka projektnog tima | Potrebno je dogovoriti mjerljive ciljeve opterećenja i odziva ako ih projektni tim bude specificirao. Do tada se opterećenje provjerava testovima s većim brojem istodobnih korisnika, osobito tijekom predaje radova. |

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

