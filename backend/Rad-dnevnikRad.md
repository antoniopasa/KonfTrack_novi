## Implementacija predaje i upravljanja znanstvenim radovima

### 1. Kontroler za upravljanje radovima (`paperController.js`)

Datoteka `paperController.js` zadužena je za obradu HTTP zahtjeva povezanih s predajom, spremanjem nacrta, pregledom, ažuriranjem i povlačenjem znanstvenih radova. Sadrži sljedeće funkcije:

- `submitPaper` – predaja znanstvenog rada
- `saveDraft` – spremanje nacrta rada
- `getMyPapers` – dohvat radova povezanih s prijavljenim korisnikom
- `getPaper` – dohvat detalja pojedinog rada
- `updatePaper` – ažuriranje podataka o radu
- `withdrawPaper` – povlačenje predanog rada

Funkcije provjeravaju autorizaciju korisnika i rokove za predaju te vraćaju odgovarajuće JSON odgovore.

Tijekom prijenosa datoteka se privremeno sprema na poslužitelj. Ako se proces predaje ne uspije dovršiti, primjerice zbog isteka roka, nedostatka obveznih podataka ili nevaljanog PDF dokumenta, datoteka se briše pomoću funkcije `obrisiDatoteku` kako ne bi nepotrebno zauzimala prostor na disku.

### 2. Predaja rada i spremanje nacrta

Funkcije `submitPaper` i `saveDraft` koriste zajedničku funkciju `spremiRad`, čime se izbjegava ponavljanje logike. Razlikuju se prema zastavici koja određuje sprema li se rad kao nacrt ili se predaje.

Za spremanje nacrta obvezan je samo naslov rada, dok su za konačnu predaju obvezni:

- naslov rada
- sažetak
- odabrana konferencija
- PDF rukopis
- barem jedan kontaktni autor

Funkcija `spremiRad` provjerava postoji li odabrana konferencija i je li istekao rok za predaju. Ako zahtjev sadrži `paperId`, dohvaća se postojeći rad pomoću funkcije `dohvatiVlastitiRad`. Ta funkcija provjerava postoji li rad (HTTP 404) i pripada li prijavljenom korisniku (HTTP 403). Postojeći rad moguće je nadopunjavati samo ako se nalazi u stanju `draft`.

Prilikom predaje PDF dokument provjerava se funkcijom `validatePdf`, koja provjerava prelazi li dokument maksimalan dopušteni broj stranica i sadrži li metapodatke s imenom autora. Reference koje sadrže DOI oznaku provjeravaju se pomoću funkcije `verifyDoi`, koja komunicira s Crossref servisom.

Popis autora obrađuje se funkcijom `pripremiAutore`, koja priprema zapise za tablicu `paper_authors`. Ako koautor ima adresu e-pošte koja već postoji u sustavu, povezuje se s postojećim korisničkim računom putem identifikatora `user_id`.

Rad i pripadajući autori spremaju se u bazu podataka unutar jedne transakcije. Ovisno o načinu spremanja, rad dobiva status `submitted` ili `draft`. Rukopis se zatim sprema pomoću funkcije `spremiRukopis` kao nova verzija u tablicu `paper_versions`:

- za predani rad koristi se tip verzije `initial`
- za nacrt se koristi tip verzije `draft`

Ako rukopis već postoji, nova datoteka zamjenjuje prethodnu, koja se pritom briše.

Nakon uspješnog spremanja sustav vraća HTTP status `201` za novu predaju, odnosno `200` pri izmjeni nacrta. Odgovor sadrži podatke o radu i objekt `warnings`, u kojem se nalaze upozorenja nastala tijekom provjera.

### 3. Pregled radova

Funkcija `getMyPapers` dohvaća popis radova koje je prijavljeni korisnik predao ili na kojima sudjeluje kao koautor. Uz podatke o radu vraća i naziv konferencije te oznaku `isOwner`, koja označava je li prijavljeni korisnik vlasnik rada.

Funkcija `getPaper` dohvaća detalje pojedinog rada korisnika. Vraćeni podatci uključuju:

- naslov i sažetak rada
- ključne riječi
- temu rada
- podatke o konferenciji
- status rada
- popis autora
- informaciju o postojanju rukopisa

Dohvat detalja omogućuje autoru nastavak uređivanja prethodno spremljenog nacrta.

### 4. Ažuriranje i povlačenje radova

Funkcija `updatePaper` omogućuje autoru promjenu naslova, sažetka, ključnih riječi i teme rada. Ažuriranje je dopušteno samo ako je korisnik vlasnik rada i ako rok za predaju nije istekao.

Funkcija `withdrawPaper` omogućuje povlačenje rada pod uvjetom da:

- prijavljeni korisnik jest vlasnik rada
- rok za predaju nije istekao
- rad se ne nalazi u jednom od stanja u kojima povlačenje nije dopušteno

Stanja definirana u popisu `NE_MOZE_POVUCI` su:

- `accepted`
- `rejected`
- `withdrawn`
- `final_submitted`
- `in_program`

### 5. Prijenos PDF datoteka (`upload.js`)

Datoteka `upload.js` zadužena je za preuzimanje PDF datoteka iz HTTP zahtjeva i njihovo privremeno spremanje na poslužitelj.

Tijekom prijenosa provode se sljedeće provjere i postupci:

- provjera je li datoteka u PDF formatu
- ograničenje veličine datoteke na 10 MB
- generiranje nasumičnog naziva datoteke
- spremanje datoteke u lokalnu mapu `uploads`

Mapa `uploads` automatski se stvara pri pokretanju aplikacije ako već ne postoji.

U datoteci `paperRoutes.js` prijenos datoteka omotan je funkcijom `uploadPdf`, koja obrađuje pogreške tijekom prijenosa. Ako datoteka nije PDF ili prelazi dopuštenu veličinu, korisniku se vraća JSON odgovor s HTTP statusom `400`.

Sve rute za upravljanje radovima zaštićene su middleware funkcijom `requireLogin`, koja osigurava da im mogu pristupiti samo prijavljeni korisnici.

### 6. Provjera PDF dokumenata i DOI referenci

Za provjeru PDF dokumenata i DOI referenci koriste se zasebni servisi, čime je logika provjere odvojena od kontrolera.

**`pdfService.js`**

Sadrži funkciju `procitajPdf`, koja dohvaća broj stranica i metapodatke PDF dokumenta, te funkciju `validatePdf`, koja provjerava zadovoljava li dokument definirana ograničenja. Rad se odbija ako prelazi maksimalni dopušteni broj stranica.

Provjeravaju se i metapodatci dokumenta, odnosno polja autor, kreator i naslov, kako bi se otkrila moguća prisutnost imena autora.

**`crossrefService.js`**

Sadrži funkciju `verifyDoi`, koja pomoću Crossref API-ja provjerava postoje li reference označene DOI identifikatorom.

Ako DOI nije pronađen ili PDF dokument sadrži ime autora u metapodatcima, predaja rada se ne odbija automatski. Umjesto toga, korisniku se prikazuju upozorenja putem objekta `warnings`, koji sadrži polja:

- `pdfWarnings` – upozorenja vezana uz PDF dokument
- `doiWarnings` – upozorenja vezana uz DOI reference

### 7. Ograničenja implementacije

Trenutačna implementacija ima nekoliko poznatih ograničenja:

- **Ovisnost o Crossref servisu:** Ako Crossref API nije dostupan, proces predaje može potrajati jer se reference provjeravaju jedna po jedna. Osim toga, mrežna pogreška trenutačno se može prikazati kao da DOI ne postoji, iako njegova valjanost zapravo nije potvrđena.
- **Ograničena provjera anonimnosti:** Anonimnost PDF dokumenta provjerava se analizom metapodataka (autor, kreator i naslov). Sadržaj dokumenta ne pretražuje se, pa se imena autora navedena u tekstu ili unutar slika neće otkriti.
- **Lokalno spremanje datoteka:** PDF dokumenti trenutačno se spremaju u lokalnu mapu `uploads` na poslužitelju, umjesto u zasebni sustav za pohranu datoteka.
