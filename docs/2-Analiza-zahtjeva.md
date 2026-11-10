# 2. Analiza zahtjeva

**Cilj:** Iz odobrenog opsega projekta izvesti prepoznatljive, prioritetizirane i provjerljive zahtjeve. Zahtjevi se mogu mijenjati; pri završnoj predaji moraju odražavati dogovorenu aplikaciju. Izvori, odluke i poveznice u primjerima kolegija nastavni su scenariji, a ne projektni zapisi.

<details>
<summary><strong>Održavanje zahtjeva ažurnima</strong></summary>

Primjeri koriste temu projekta CrisisMap. Neki namjerno sadrže korisne nedostatke za raspravu. Izvori, odluke i poveznice na provjere u tim primjerima **nastavni su scenariji**, a ne zapisi rada stvarnog studentskog tima. Zamijenite ih zahtjevima i dokazima svojeg odobrenog projekta. Značajne promjene zabilježite u odjeljku 2.5.

</details>

## 2.1 Funkcijski zahtjevi

**Cilj:** Navesti što aplikacija mora omogućiti korisnicima, odakle pojedina mogućnost proizlazi i koji se opažljivi rezultat smatra prihvaćanjem.

| ID | Opis | Prioritet | Izvor | Kriteriji prihvaćanja |
| --- | --- | --- | --- | --- |
| F-001 | Sustav omogućuje registraciju korisničkog računa unosom potrebnih podataka | Visok | Projektni zadatak | Korisnik može poslati valjane podatke i stvoriti račun. Nevaljani podaci i već zauzeta jedinstvena e-mail adresa odbijaju se |
| F-002 | Sustav omogućuje sigurnu prijavu korisnika | Visok | Projektni zadatak | Korisnik s valjanim vjerodajnicama uspješno se prijavljuje, a korisnik s nevaljanim vjerodajnicama ne dobiva pristup zaštićenim funkcijama |
| F-003 | Sustav omogućuje sigurnu odjavu i poništavanje sesije | Visok | Projektni zadatak | Nakon odjave prethodna sesija više se ne može koristiti za pristup zaštićenim funkcijama |
| F-004 | Sustav omogućuje promjenu lozinke prijavljenog korisnika | Visok | Projektni zadatak | Korisnik može promijeniti lozinku nakon uspješne provjere potrebnih vjerodajnica; nova lozinka koristi se za sljedeću prijavu |
| F-005 | Sustav omogućuje pregled i uređivanje osobnog profila | Visok | Projektni zadatak | Prijavljeni korisnik može pregledati i ažurirati dopuštena polja vlastitog profila, ali ne može samostalno mijenjati zaštićene administrativne ovlasti |
| F-006 | Sustav podržava uloge administratora, predsjednika konferencije, recenzenta i autora | Visok | Projektni zadatak | Sustav prepoznaje definirane uloge i primjenjuje odgovarajuća pravila pristupa |
| F-007 | Sustav omogućuje dodjelu uloga korisnicima za pojedinu konferenciju | Visok | Projektni zadatak | Ovlašteni korisnik može dodijeliti dopuštenu ulogu za konferenciju, a neovlašteni korisnik ne može sam sebi dodijeliti višu ovlast |
| F-008 | Sustav provjerava prava pristupa pri izvršavanju zaštićenih operacija | Visok | Projektni zadatak | Zahtjevi korisnika bez odgovarajućih ovlasti odbijaju se, uključujući pokušaje pristupa podacima drugih korisnika ili konferencija |
| F-009 | Sustav omogućuje administratoru pregled korisničkih računa te izmjenu ili blokiranje računa | Visok | Projektni zadatak | Ovlašteni administrator može pregledati račune i provesti dopuštene administrativne radnje; obični korisnik ne može izvršiti te radnje |
| F-010 | Sustav omogućuje stvaranje nove konferencije | Visok | Projektni zadatak | Ovlašteni organizator unosi obvezne podatke i stvara konferenciju koja se sprema u sustav |
| F-011 | Ovlašteni organizator unosi obvezne podatke i stvara konferenciju koja se sprema u sustav | Visok | Projektni zadatak | Ovlašteni organizator unosi obvezne podatke i stvara konferenciju koja se sprema u sustav |
| F-012 | Sustav omogućuje ovlaštenim korisnicima uređivanje podataka i opisa konferencije | Visok | Projektni zadatak | Ovlašteni organizator može spremiti valjane izmjene, a korisnik bez odgovarajućih ovlasti ne može ih provesti |
| F-013 | Sustav omogućuje dohvat detalja pojedine konferencije | Visok | Projektni zadatak | Za odabranu konferenciju prikazuju se dostupni podaci, uključujući opis, status, datume, rokove i znanstvene teme |
| F-014 | Sustav podržava statuse konferencije: u pripremi, otvorena i zatvorena | Visok | Projektni zadatak | Konferencija ima jedan od dopuštenih statusa, a promjenu statusa može izvršiti samo ovlašteni korisnik |
| F-015 | Sustav omogućuje postavljanje i uređivanje roka za predaju radova | Visok | Projektni zadatak | Ovlašteni organizator može definirati rok, a sustav ga prikazuje i koristi pri provjeri dopuštenosti predaje |
| F-016 | Sustav omogućuje postavljanje i uređivanje roka za izradu recenzija | Visok | Projektni zadatak | Ovlašteni organizator može definirati rok koji se koristi pri praćenju i provjeri pravodobnosti recenzija |
| F-017 | Sustav omogućuje postavljanje i uređivanje roka za donošenje odluka | Visok | Projektni zadatak | Ovlašteni organizator može definirati rok za odluke te ga pregledavati u podacima konferencije |
| F-018 | Sustav omogućuje dodavanje i uređivanje znanstvenih tema konferencije | Visok | Projektni zadatak | Ovlašteni organizator može dodati ili urediti temu, a promjene su vidljive u podacima konferencije |
| F-019 | Sustav omogućuje objavljivanje konferencije i upravljanje njezinom vidljivošću | Visok | Projektni zadatak | Ovlašteni organizator može objaviti konferenciju, a neobjavljena konferencija nije dostupna javnosti ako pravila sustava ne dopuštaju drukčije |
| F-020 | Sustav odbija predaju rada nakon isteka roka za predaju | Visok | Projektni zadatak | Ako je rok istekao ili konferencija više ne dopušta predaju, backend odbija novu predaju neovisno o stanju korisničkog sučelja |
| F-021 | Sustav provjerava ovlasti organizatora nad pojedinom konferencijom | Visok | Projektni zadatak | Organizator može upravljati konferencijom za koju ima odgovarajuću ovlast, ali ne može uređivati konferencije kojima ne upravlja |
| F-022 | Sustav omogućuje autoru predaju znanstvenog rada za konferenciju | Visok | Projektni zadatak | Autor može poslati obvezne metapodatke i datoteku rada ako su konferencija i rokovi otvoreni za predaju |
| F-023 | Sustav omogućuje spremanje metapodataka rada, uključujući naslov, sažetak, ključne riječi i autore | Visok | Projektni zadatak | Valjani podaci povezuju se s odgovarajućim radom i konferencijom. |
| F-024 | Sustav provjerava format i veličinu datoteke predanog rada | Visok | Projektni zadatak | Neprihvatljiv format ili datoteka iznad dopuštene veličine odbijaju se uz odgovarajuću poruku |
| F-025 | Sustav omogućuje autoru pregled i izmjenu vlastitog rada u dopuštenom razdoblju | Visok | Projektni zadatak | Autor može pristupiti vlastitim radovima i uređivati ih samo dok pravila konferencije dopuštaju izmjene |
| F-026 | Sustav omogućuje povlačenje vlastitog rada u dopuštenim okolnostima | Visok | Projektni zadatak | Ovlašteni autor može povući vlastiti rad, a sustav evidentira promjenu statusa |
| F-027 | Sustav omogućuje dodjelu recenzenata radovima | Visok | Projektni zadatak | Ovlašteni član odbora može dodijeliti odgovarajuće recenzente, a dodjele su evidentirane |
| F-028 | Sustav omogućuje recenzentu pregled dodijeljenih radova i predaju recenzije | Visok | Projektni zadatak | Recenzent može pregledati dodijeljene radove i predati recenziju za koju ima ovlast |
| F-029 | Sustav podržava dvostruko slijepo recenziranje | Visok | Projektni zadatak | U recenzijskom postupku autor ne vidi identitet recenzenta, a recenzent ne dobiva identitet autora putem zaštićenih prikaza i dostupnih datoteka |
| F-030 | Sustav omogućuje evidentiranje konačne odluke o radu | Visok | Projektni zadatak | Ovlašteni član odbora može evidentirati odluku, a sustav sprema njezin status i pripadajuće podatke |
| F-031 | Sustav omogućuje slanje obavijesti o važnim događajima konferencije | Visok | Projektni zadatak | Za definirane događaje, poput predaje rada, dodjele recenzenta ili donošenja odluke, sustav pokreće odgovarajuću obavijest prema utvrđenim pravilima |
| F-032 | Sustav omogućuje izradu i uređivanje programa konferencije | Visok | Projektni zadatak | Ovlašteni organizator može stvoriti i ažurirati programske cjeline i raspored |
| F-033 | Sustav provjerava vremenska preklapanja programskih stavki | Visok | Projektni zadatak | Sustav prepoznaje preklapanja koja nisu dopuštena prema definiranim pravilima rasporeda |
| F-034 | Sustav omogućuje pregled programa konferencije | Visok | Projektni zadatak | Korisnik može dohvatiti objavljeni program i pregledati raspored prema dostupnim podacima |
| F-035 | Sustav omogućuje pregled osnovnih statistika o radovima konferencije | Visok | Projektni zadatak | Prikazuju se izračuni broja predanih radova i njihove raspodjele prema definiranim statusima |



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
| F-009 | Sustav omogućuje javnim posjetiteljima pregled javnih stranica konferencija. | Visok | Projektni zadatak | Neregistrirani korisnik može pregledati objavljene informacije o konferenciji, uključujući poziv na predaju radova, teme, važne datume i objavljeni program. |
| F-010 | Sustav omogućuje administratoru odobravanje novih konferencija i imenovanje predsjednika programskog odbora. | Visok | Projektni zadatak | Administrator može odobriti novu konferenciju i imenovati njezina predsjednika programskog odbora. Korisnik bez odgovarajućih ovlasti ne može odobriti konferenciju ni imenovati predsjednika. |
| F-011 | Sustav omogućuje predsjedniku programskog odbora unos i uređivanje osnovnih podataka konferencije. | Visok | Projektni zadatak | Predsjednik programskog odbora može unijeti i ažurirati naziv, mjesto i datume održavanja konferencije. |
| F-012 | Sustav omogućuje pregled detalja pojedine konferencije. | Visok | Projektni zadatak | Za odabranu konferenciju prikazuju se dostupni podaci, uključujući opis, status, datume, rokove i znanstvene teme. |
| F-013 | Sustav omogućuje predsjedniku programskog odbora postavljanje i uređivanje rokova pojedinih faza konferencije. | Visok | Projektni zadatak | Predsjednik može definirati rokove za predaju radova, recenziju, obavještavanje autora i predaju konačnih verzija. |
| F-014 | Sustav automatski onemogućuje odgovarajuće radnje nakon isteka pripadajućeg roka. | Visok | Projektni zadatak | Nakon isteka roka sustav ne dopušta radnju koja više nije vremenski dopuštena, neovisno o stanju korisničkog sučelja. |
| F-015 | Sustav omogućuje predsjedniku programskog odbora produljenje pojedinog roka. | Visok | Projektni zadatak | Predsjednik može produljiti definirani rok, a sustav evidentira novu vrijednost roka. |
| F-016 | Sustav obavještava zahvaćene korisnike o produljenju roka. | Visok | Projektni zadatak | Nakon produljenja roka sustav šalje obavijest korisnicima na koje se promjena odnosi. |
| F-017 | Sustav omogućuje dodavanje i uređivanje znanstvenih tema konferencije. | Visok | Projektni zadatak | Predsjednik programskog odbora može dodati, pregledati i urediti teme konferencije. |
| F-018 | Sustav omogućuje objavljivanje konferencije i njezinih javno dostupnih informacija. | Visok | Projektni zadatak | Objavljene informacije o konferenciji dostupne su javnim posjetiteljima, dok su zaštićene funkcionalnosti dostupne samo prijavljenim korisnicima s odgovarajućim ovlastima. |
| F-019 | Sustav omogućuje registriranom korisniku predaju znanstvenog rada za konferenciju. | Visok | Projektni zadatak | Prijavljeni korisnik može predati rad ako su konferencija i rokovi otvoreni za predaju. |
| F-020 | Sustav omogućuje unos metapodataka rada, uključujući naslov, sažetak, ključne riječi, temu i autore. | Visok | Projektni zadatak | Sustav sprema unesene podatke i povezuje ih s odgovarajućim radom i konferencijom. |
| F-021 | Sustav omogućuje odabir koautora među postojećim korisnicima ili njihovo pozivanje unosom imena i adrese e-pošte. | Visok | Projektni zadatak | Autor može odabrati postojeće korisnike kao koautore ili unijeti ime i adresu e-pošte osobe koju želi pozvati kao koautora. |
| F-022 | Sustav omogućuje određivanje jednog autora kao autora za kontakt. | Visok | Projektni zadatak | Za svaki predani rad evidentiran je jedan autor za kontakt. |
| F-023 | Sustav omogućuje prilaganje anonimiziranog rukopisa rada u PDF formatu. | Visok | Projektni zadatak | Autor može priložiti rukopis u PDF formatu, a sustav ga povezuje s odgovarajućim radom. |
| F-024 | Sustav provjerava format i najveći dopušteni broj stranica priloženog rukopisa. | Visok | Projektni zadatak | Sustav provjerava je li datoteka u PDF formatu i zadovoljava li dopušteni broj stranica. Neodgovarajuća datoteka odbija se ili se autoru prikazuje odgovarajuće upozorenje. |
| F-025 | Sustav provjerava sadrže li metapodaci PDF datoteke imena autora i upozorava autora ako ih pronađe. | Visok | Projektni zadatak | Ako se u metapodacima PDF datoteke nalaze imena autora, sustav prikazuje upozorenje prije predaje rada. |
| F-026 | Sustav omogućuje provjeru DOI oznaka referenci putem vanjskog servisa Crossref. | Srednji | Projektni zadatak | Sustav za reference s DOI oznakom dohvaća dostupne metapodatke putem servisa Crossref, a za DOI oznake koje ne postoje prikazuje upozorenje. |
| F-027 | Sustav omogućuje autoru pregled i uređivanje vlastitog rada u skladu s rokovima i trenutačnim stanjem rada. | Visok | Projektni zadatak | Autor može pregledavati vlastite radove. Sustav dopušta izmjene samo u fazama u kojima su one dozvoljene i dok pripadajući rok nije istekao. Autor ne može mijenjati rad dok je on u stanju u recenziji. |
| F-028 | Sustav omogućuje autoru povlačenje vlastitog rada u bilo kojem trenutku prije prihvaćanja. | Visok | Projektni zadatak i pojašnjenje profesora | Autor može povući rad prije njegova prihvaćanja, uključujući razdoblje recenzije. Povlačenjem se rad ne briše, nego ostaje evidentiran u sustavu sa zabilježenim statusom povučenog rada. |
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
| F-039 | Sustav omogućuje da predloženu raspodjelu recenzenata pregleda samo predsjednik programskog odbora prije njezine potvrde. | Visok | Projektni zadatak i pojašnjenje profesora | Predložena raspodjela dostupna je predsjedniku programskog odbora, dok recenzenti ne mogu vidjeti dodijeljene radove prije nego što predsjednik potvrdi raspodjelu. |
| F-040 | Sustav omogućuje predsjedniku programskog odbora potvrdu raspodjele recenzenata. | Visok | Projektni zadatak i pojašnjenje profesora | Nakon potvrde raspodjele dodijeljeni recenzenti mogu vidjeti radove koji su im dodijeljeni. |
| F-041 | Sustav omogućuje predsjedniku programskog odbora ručnu izmjenu raspodjele recenzenata, uključujući izmjene tijekom recenzije. | Visok | Projektni zadatak i pojašnjenje profesora | Predsjednik može mijenjati dodjele recenzenata i nakon početka recenzije. Sustav ne dopušta potvrdu izmjene ako bi neki rad nakon izmjene imao manje od tri recenzenta. |
| F-042 | Sustav osigurava da svaki rad koji je u postupku recenziranja ima najmanje tri dodijeljena recenzenta. | Visok | Projektni zadatak i pojašnjenje profesora | Pravilo o najmanje tri recenzenta primjenjuje se na automatski predloženu i ručno izmijenjenu raspodjelu. Sustav ne dopušta da rad ostane bez potrebnog broja recenzenata. |
| F-043 | Sustav omogućuje zamjenu dodijeljenog recenzenta drugim recenzentom. | Visok | Projektni zadatak i pojašnjenje profesora | Predsjednik programskog odbora može zamijeniti recenzenta, a sustav evidentira zamjenu i ažurira dodjelu rada. |
| F-044 | Sustav ukida pristup radu recenzentu koji je zamijenjen. | Visok | Pojašnjenje profesora | Zamijenjeni recenzent više ne može pregledavati rad ni njegove recenzijske podatke te ne može predavati recenziju niti utjecati na odluku o radu. |
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
| F-063 | Sustav omogućuje objavu programa konferencije na javnoj stranici konferencije. | Visok | Projektni zadatak | Nakon objave programa javni posjetitelji mogu pregledati raspored konferencije. |
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

| ID | Opis | Prioritet | Izvor | Način provjere |
| --- | --- | --- | --- | --- |
| NF-01 | Lozinke se moraju pohranjivati isključivo u obliku sigurnog kriptografskog sažetka dobivenog odgovarajućim algoritmom za pohranu lozinki | Visok | Sigurnosni zahtjevi projektnog tima | Pregled konfiguracije autentifikacije i provjera pohranjenih podataka |
| NF-02 | Sve zaštićene operacije moraju provoditi autentifikaciju i provjeru ovlasti na backendu | Visok | Sigurnosni zahtjevi projektnog tima | Integracijski testovi s prijavljenim i neprijavljenim korisnicima te korisnicima s različitim ulogama |
| NF-03 | Korisnik smije pristupati samo osobnim podacima i resursima za koje ima odgovarajuće ovlasti | Visok | Sigurnosni zahtjevi projektnog tima | Testiranje pokušaja pristupa tuđim profilima, radovima, recenzijama i konferencijama |
| NF-04 | Privatne PDF datoteke moraju biti dostupne samo ovlaštenim korisnicima | Visok | Sigurnosni zahtjevi projektnog tima | Testiranje pristupa datotekama s različitim korisničkim ulogama i bez prijave |
| NF-05 | Sustav mora validirati sve ulazne podatke prije obrade i spremanja | Visok | Sigurnosni zahtjevi projektnog tima | Testovi nevaljanih tipova, nedostajućih polja, nedopuštenih vrijednosti i neprihvatljivih datuma |
| NF-06 | Sustav mora čuvati povjerljivost podataka povezanih s dvostruko slijepim recenziranjem | Visok | Zahtjevi projekta | Pregled odgovora API-ja, prava pristupa i dostupnih datoteka u scenarijima recenziranja |
| NF-07 | Tehničke pogreške moraju se evidentirati centralizirano, bez zapisivanja lozinki, tokena i nepotrebnih osobnih podataka | Srednji | Sigurnosni zahtjevi projektnog tima | Pregled konfiguracije logiranja i provjera zapisa nakon simuliranih pogrešaka |
| NF-08 | Ključne funkcionalnosti moraju imati automatizirane unit ili integracijske testove | Visok | Zahtjevi projektnog tima | Pokretanje testova i pregled rezultata u razvojnom okruženju ili CI postupku |
| NF-09 | API mora vraćati dosljedne odgovore i odgovarajuće HTTP statuse za uspješne zahtjeve i pogreške | Srednji | Zahtjevi projektnog tima | ntegracijski testovi uspješnih, nevaljanih i neovlaštenih zahtjeva |
| NF-10 | Sustav mora koristiti konfiguraciju koja omogućuje sigurno upravljanje tajnama i postavkama okruženja | Visok | Sigurnosni zahtjevi projektnog tima | Pregled konfiguracije, varijabli okruženja i repozitorija radi provjere da tajne nisu pohranjene u kodu |
| NF-11 | Dokumentacija mora omogućiti članovima tima pokretanje projekta i razumijevanje osnovnih API funkcionalnosti | Srednji | Projektni proces tima | Drugi član tima prati upute za postavljanje i provjerava dokumentirane API rute |

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

| ID uloge ili aktera | Odnos prema sustavu | Relevantni zahtjevi |
| --- | --- | --- |
| A-01 | Administrator sustava – upravlja korisničkim računima i administrativnim ovlastima | F-006, F-009, F-008, NF-02 |
| A-02 | Predsjednik konferencije – upravlja konferencijom, rokovima, temama i dopuštenim organizacijskim procesima | F-007, F-010–F-021, F-027, F-030, F-032 |
| A-03 | Autor – registrira se, upravlja profilom i predaje te prati vlastite radove | F-001–F-005, F-022–F-026 |
| A-04 | Recenzent – pregledava dodijeljene radove i predaje recenzije | F-027–F-029, NF-03, NF-04, NF-06 |
| A-05 | Programsko ili organizacijsko povjerenstvo – pregledava rezultate recenzija, donosi odluke i organizira program u okviru dodijeljenih ovlasti | F-027, F-030–F-036 |
| A-06 | Javni posjetitelj – pregledava objavljene i javno dostupne konferencije te njihove dostupne informacije | F-012, F-013, F-020, F-035 |
| D-01 | Voditelj tima – prati usklađenost projekta s dogovorenim opsegom i koordinira rad |Zahtjevi projekta, dokumentacija i Issues |


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

| ID | Tip | Opis ograničenja ili pretpostavke | Izvor | Inženjerska posljedica / Provjera |
| --- | --- | --- | --- | --- |
| C-01 | Ograničenje | [Fiksni tehnički ili procesni uvjet] | [Zadatak / Pravila] | [Utjecaj na arhitekturu i oblikovanje] |
| C-02 | Ograničenje | [Sustav se razvija u okviru studentskog projekta i raspoloživog vremena kolegija] | [Projektni zadatak i rokovi kolegija] | [Prioritet imaju funkcionalnosti nužne za ostvarenje osnovnog procesa upravljanja konferencijom. OPseg dodatnih funkcionalnosti dogovara se unutar tima.] |
| C-03 | Ograničenje | [Pristup funkcionalnostima i podacima mora biti ograničen prema ulozi i ovlastima korisnika] | [Sigurnosni zahtjevi projekta; F-006-F009,NF-02 i NF-03] | [Ovlasti se moraju provjeravati na backendu, a ne samo skrivanjem opcija u korisničkom sučelju. Provjerava se pokušaj pristupa funkcionalnostima bez odgovarajućih ovlasti.] |
| C-04 | Ograničenje | [Radovi i recenzije moraju se obrađivati uz očuvanje povjerljivosti dvostruko slijepog recenziranja.] | [Projektni zadatak; F-028 i F-029, NF-04 i NF-06] | [Pristup datotekama i podacima o autorima i recenzentima mora se ograničiti prema ulozi i fazi postupka. Provjerava se jesu li identiteti skriveni neovlaštenim korisnicima.] |
| AS-01 | Pretpostavka | [Očekivani uvjet, npr. o podacima ili okolini] | [Procjena tima] | [Kako i kada će se provjeriti valjanost] |
|  |  |  |  |  |
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
|  |  |  |  |

<details>
<summary><strong>Primjer značajne promjene</strong></summary>

**Primjer scenarija — odluka tijekom pregleda CrisisMapa:**

| Datum | ID zahtjeva | Promjena i razlog | Dogovoreno s / dokaz |
| --- | --- | --- | --- |
| [Datum pregleda] | F-004, NF-01 | Dodati ručni odabir lokacije kada korisnik odbije geolokaciju preglednika; bez toga građanin ne može podnijeti prijavu kriznog događaja s lokacijom. | [Poveznica na stvarnu bilješku pregleda ili zadatak tima] |

**Razlog promjene:** Zapis navodi zahvaćene stavke i objašnjava razlog iz perspektive korisnika, a zatim upućuje na dokaz odluke.  Nakon stvarne odluke ažurirajte trenutačne zahtjeve; stilska izmjena teksta ne zahtijeva zapis u dnevniku promjena. Trenutačni red zadataka držite u alatu za praćenje zadataka.

</details>

---

## 2.6 Sljedivost zahtjeva

**Cilj:** Osigurati dvosmjernu sljedivost — povezati zahtjeve s opisanim ponašanjem, dijelovima sustava koji ih ostvaruju te ispitivanjem ili drugom provjerom. 

| ID zahtjeva | Obrazac uporabe / modul | Arhitekturna realizacija | Ispitivanje ili provjera |
| --- | --- | --- | --- |
| F-001 | [UC-001] | [Komponenta, modul ili drugo mjesto realizacije] | [ST-01, CT-01 ili druga provjera] |
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

