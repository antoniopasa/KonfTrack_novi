## Pokretanje backenda

### Preduvjeti

- [Node.js](https://nodejs.org/) 20 ili noviji
- [PostgreSQL](https://www.postgresql.org/download/) (lokalno instaliran ili preko Dockera)
- Git

### 1. Kloniranje i instalacija

```bash
git clone <URL repozitorija>
cd KonfTrack/backend
npm install
```

Sve naredbe iz ovih uputa pokreću se iz mape `backend`.

### 2. Baza podataka

Napravi praznu bazu `konftrack` (npr. u pgAdminu: desni klik na _Databases → Create → Database_).

Ili, ako koristiš Docker:

```bash
docker run --name konftrack-db -e POSTGRES_USER=konftrack -e POSTGRES_PASSWORD=konftrack -e POSTGRES_DB=konftrack -p 5432:5432 -d postgres:16
```

### 3. Varijable okruženja

Kopiraj predložak i upiši svoje podatke:

```bash
cp .env.example .env
```

U `.env` postavi `DATABASE_URL` prema svojoj bazi:

```
DATABASE_URL="postgresql://KORISNIK:LOZINKA@127.0.0.1:5432/konftrack?schema=public"
```

Datoteka `.env` se nikad ne commita.

Provjera veze s bazom:

```bash
echo "SELECT 1" | npx prisma db execute --stdin --schema prisma/schema.prisma
```

Ako sve radi, ispisat će se `Script executed successfully.`

### 4. Postavljanje tablica migracijama

Sve naredbe pokreću se iz mape `backend`.

Nakon postavljanja prazne baze i `.env` datoteke primijeni migracije spremljene u repozitoriju.

```powershell
npx.cmd prisma migrate dev
npx.cmd prisma generate
npx.cmd prisma migrate status
```

Korisnik baze treba imati pravo stvaranja baza jer Prisma tijekom razvoja koristi pomoćnu shadow bazu.

Migracija `init` stvara početne tablice. Migracija `auth_tokens` dodaje tablicu tokena te polja `email_verified_at` i `created_at` u tablicu `users`.

Naredba `prisma migrate status` treba ispisati `Database schema is up to date!`.

Svaki član tima treba isprobati ovaj postupak na svojoj praznoj bazi. Ako Prisma traži reset baze s važnim podacima, prekini postupak jer reset briše podatke.

### 5. Pokretanje

```bash
npm run dev
```

Server se pokreće na portu iz `.env` (varijabla `PORT`).

- `http://localhost:PORT/health` – provjera radi li server
- `http://localhost:PORT/api-docs` – Swagger dokumentacija API-ja

### Skripte

| Naredba                  | Opis                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `npm run dev`            | Pokretanje za razvoj, server se restarta pri svakoj promjeni |
| `npm start`              | Pokretanje za produkciju                                     |
| `npm test`               | Pokretanje testova                                           |
| `npm run lint`           | Provjera koda ESLintom                                       |
| `npm run lint:fix`       | Automatski popravak grešaka koje ESLint može popraviti       |
| `npm run format`         | Formatiranje koda Prettierom                                 |
| `npm run format:check`   | Provjera formatiranja bez izmjena                            |
| `npm run prisma:migrate` | Pokretanje Prisma migracija                                  |
| `npx prisma studio`      | Pregled baze u pregledniku                                   |

### Česti problemi

- **`Could not read package.json`** – naredba nije pokrenuta iz mape `backend`.
- **`P1001: Can't reach database server`** – PostgreSQL nije pokrenut ili je u `DATABASE_URL` krivi port. Port se provjerava naredbom `netstat -ano | findstr LISTENING | findstr 543` (na Windowsu).
- **`P1000: Authentication failed`** – kriva lozinka u `DATABASE_URL`. Posebni znakovi u lozinki (`@`, `#`, `%`...) moraju se zapisati URL-kodirano (npr. `@` → `%40`).
- **`@prisma/client did not initialize yet`** – pokreni `npx prisma generate`. Klijent se generira tek kad u shemi postoji barem jedan model.

### ORCID Sandbox konfiguracija

Za lokalno testiranje ORCID prijave potrebno je registrirati aplikaciju u [ORCID Sandbox Developer Tools](https://sandbox.orcid.org/developer-tools).

1. Registriraj Sandbox račun i potvrdi e-mail adresu.
2. Kreiraj aplikaciju KonfTrack.
3. Kao lokalni redirect URI registriraj:

   `http://127.0.0.1:3000/auth/orcid/callback`

4. Spremi dobiveni Client ID i Client Secret u lokalnu datoteku `.env`.
5. U `.env` postavi:

   ```env
   ORCID_SANDBOX=true
   ORCID_CLIENT_ID=
   ORCID_CLIENT_SECRET=
   ORCID_CALLBACK_URL=http://127.0.0.1:3000/auth/orcid/callback
   ```

Client ID i Client Secret povjerljivi su podaci. Ne smiju se spremati u Git repozitorij, README, frontend kod ili javne poruke.

### Generiranje tajnih ključeva

Za `SESSION_SECRET` i `JWT_SECRET` generiraj dva različita nasumična ključa:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Dobivene vrijednosti upiši u lokalni `.env`. Nemoj koristiti isti ključ za obje varijable.

### Produkcijska konfiguracija

U produkciji potrebno je:

- postaviti `NODE_ENV=production`
- postaviti `ORCID_SANDBOX=false`
- koristiti produkcijski ORCID Client ID i Client Secret
- registrirati HTTPS redirect URI na produkcijskoj ORCID aplikaciji
- postaviti `ORCID_CALLBACK_URL` na registrirani HTTPS URI
- postaviti `APP_URL` na HTTPS adresu aplikacije
- postaviti `COOKIE_SECURE=true`
- konfigurirati `trust proxy` ako aplikacija radi iza reverse proxyja

Stvarni pristupni podaci moraju se postaviti kroz sigurne varijable okruženja na poslužitelju, a ne u Git repozitoriju.

Funkcijski zahtjevi:

Korisnici i prava pristupa:
-Registracija korisnika i unos podataka
-Sigurna prijava (autentifikacija)
-Sigurna odjava i uništavanje sesije
-Generiranje i provjera sesija
-Hashiranje i sigurno spremanje lozinki
-Promjena lozinke prijavljenog korisnika
-Zahtjev i postupak za resetiranje lozinke
-Pregled i uređivanje osobnog profila
-Definiranje sistemskih uloga (admin, predsjednik, recenzent, autor)
-Dodjela uloga korisniku po pojedinoj konferenciji
-Backend provjera prava pristupa

Upravljanje konferencijama:
-Izrada nove konferencije
-Pregled popisa dostupnih konferencija
-Dohvat detaljnih informacija o konferenciji
-Ažuriranje podataka i opisa konferencije
-Promjena statusa konferencije (u pripremi, otvorena, zatvorena)
-Postavljanje roka za predaju radova
-Postavljanje roka za izradu recenzija
-Postavljanje roka za donošenje odluka
-Dodavanje i uređivanje znanstvenih tema konferencije
-Objavljivanje konferencije (postavljanje vidljivosti)
-Automatska blokada predaje radova nakon isteka roka
-Dodjela i provjera prava organizatora nad konferencijom

Sigurnost, validacija i tehnička kvaliteta:
-Sanitizacija i validacija svih ulaznih podataka iz zahtjeva
-Zaštita lozinki pomoću jakih algoritmima
-Sigurna provjera prava preuzimanja privatnih PDF datoteka
-Zaštita od curenja osobnih podataka
-Centralizirano bilježenje tehničkih pogrešaka
-Pisanje unit i integracijskih testova za ključne rute

Predaja znanstvenih radova
Unos metapodataka rada (naslov, sažetak, ključne riječi)
Povezivanje rada s odabranom konferencijom i temom
Unos i povezivanje svih suautora s radom
Upload PDF datoteke rada
Provjera dopuštenog formata datoteke (PDF)
Provjera veličine prenesene datoteke
Spremanje datoteke na poslužitelj ili pohranu
Slanje novih verzija rada (ako pravila dopuštaju)
Praćenje statusa rada (predan, u recenziji, prihvaćen, odbijen)
Dohvat popisa vlastitih predanih radova za autora
Uređivanje predanog rada prije isteka roka
Povlačenje rada od strane autora
Generiranje i slanje potvrde o uspješnoj predaji

Program konferencije
Kreiranje sekcija i dvorana/prostorija
Definiranje satnice i trajanja pojedinih sesija
Dodjeljivanje prihvaćenih radova u sesije
Postavljanje prezentera za svaki prihvaćeni rad
Algoritamska provjera vremenskih preklapanja sesija
API ruta za javni dohvat objavljenog rasporeda
Izmjena i ažuriranje rasporeda programa

Statistika i izvještaji
Agregacija ukupnog broja radova po konferenciji
Brojanje radova po trenutnim statusima
Izračun postotka dovršenih i zakašnjelih recenzija
Sumarno brojanje prihvaćenih i odbijenih radova
Generiranje i izvoz izvještaja u CSV formatu

Mia: - Dvostruko slijepa recenzija (Double-Blind)
Bilježenje područja stručnosti i interesa recenzenta
Ručna dodjela recenzenta pojedinom radu
Automatska detekcija i blokada sukoba interesa
Prikaz popisa radova dodijeljenih pojedinom recenzentu
Uklanjanje imena i metapodataka autora iz odgovora recenzentu
Uklanjanje autorskih podataka iz PDF datoteke (ili provjera anonimnosti)
Prihvaćanje ili odbijanje zadatka recenziranja
Pohrana nacrta recenzije (spremak bez konačne predaje)
Unos ocjena po definiranim kriterijima
Unos tekstualnih komentara za odbor i za autora
Zaključavanje i konačna predaja recenzije
Praćenje rokova i detekcija zakašnjelih recenzija
Omogućavanje dodjele više recenzenata na isti rad
Prikaz svih recenzija rada ovlaštenim članovima odbora

    - Odluke o radovima
    Pregled svih pristiglih recenzija za članove odbora
    Unos konačne odluke (prihvaćen, odbijen, potrebna revizija)
    Spremanje vremena i osobe koja je donijela odluku
    Automatska promjena konačnog statusa rada
    Slanje službene obavijesti autoru o odluci
    Dohvat i pregled povijesti svih donesenih odluka

    - Komunikacija i obavijesti
    Slanje e-mail obavijesti o primljenom radu
    Slanje e-mail obavijesti recenzentu o novoj dodjeli
    Slanje e-mail obavijesti autoru o rezultatu recenzije
    Automatizirani pozadinski zadaci (Cron) za slanje podsjetnika
    Korištenje i popunjavanje predložaka e-mail poruka
    Pohrana dnevnika (loga) poslanih i neuspjelih obavijesti

    - Zbornik radova i vanjske integracije (opcionalno)
    Skupljanje svih prihvaćenih radova u zbornik
    Generiranje metapodataka zbornika (naslovi, autori, kazalo)
    Integracija s Crossref API-jem za dohvat/provjeru DOI podatak
    Izvoz rasporeda i programa u vanjske formate (npr. iCal)
    Integracija s ORCID API-jem za verifikaciju identiteta
