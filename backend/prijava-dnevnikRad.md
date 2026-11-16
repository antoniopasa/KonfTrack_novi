# Dnevnik rada: Registracija, prijava i autorizacija korisnika (KonfTrack)

**Područje rada:** registracija, prijava, profil korisnika, ORCID OAuth 2.0 i autorizacija tokenima  
**Tehnologije:** Node.js, Express, EJS, `express-session`, `jsonwebtoken`, ORCID OAuth 2.0

---

## 1. Opis izvršenog rada

| Aktivnost |
|---|
| **ORCID konfiguracija (`config/orcid.js`)** — Odabir sandbox ORCID okruženja na temelju varijable `ORCID_SANDBOX`. |
| **Registracija e-poštom (`authController.register`)** — Implementirana je validacija obaveznih polja, formata e-pošte, minimalne duljine lozinke (8 znakova) i podudaranja lozinke s ponovljenom lozinkom. Nakon uspješne registracije kreiraju se sesija i token, a korisnik se preusmjerava na profil. |
| **Prijava i odjava (`login`, `logout`)** — Implementirana je provjera e-pošte i lozinke, regeneracija sesije radi zaštite od napada *session fixation* te uništavanje sesije i brisanje kolačića `konftrack.sid` prilikom odjave. |
| **Prijava ORCID-om (`routes/orcidRoutes.js`, `services/orcidService.js`)** — Implementiran je OAuth 2.0 *authorization code* postupak. Korisnik se preusmjerava na ORCID uz nasumični parametar `state` radi zaštite od CSRF-a. Pri povratku se provjerava `state`, a autorizacijski kod zamjenjuje se za token pozivom ORCID-ova endpointa `/oauth/token`. Iz odgovora se dohvaćaju ORCID iD i ime, nakon čega se korisnik pronalazi ili automatski kreira. |
| **Rute (`routes/authRoutes.js`) i povezivanje u `app.js`** — Konfigurirane su rute `/login`, `/register`, `/profile`, `/logout` (i `/odjava`) te `/auth/orcid`. Postavljene su sesije s opcijama `httpOnly`, `sameSite: lax`, `secure` ovisno o okolini i trajanjem od 24 sata. Dodani su Helmet s pravilima Content Security Policy i `trust proxy` u produkcijskom okruženju. |
| **Ispravak registracije** — Uočeno je da nazivi polja u obrascu (`ime`, `prezime`, `lozinka`) nisu odgovarali nazivima koje je kontroler očekivao (`firstName`, `lastName`, `password`). Zbog toga je poslužitelj vraćao poruku „Popuni sva obavezna polja”. Kontroler je prilagođen nazivima polja iz obrasca. |
| **Autorizacija tokenima (JWT, Bearer)** — Implementirana je datoteka `services/tokenService.js` za potpisivanje i provjeru JWT-a pomoću tajne `JWT_SECRET`, uz valjanost tokena od 24 sata. `authMiddleware.js` prihvaća token iz zaglavlja `Authorization: Bearer ...` ili iz sesije. API rute vraćaju HTTP status `401` u JSON formatu, dok web rute preusmjeravaju korisnika na prijavu. Token se izdaje pri prijavi e-poštom, registraciji i prijavi ORCID-om. Dodani su endpointi `POST /api/auth/token` za izdavanje tokena i `GET /api/me` za dohvat podataka prijavljenog korisnika putem zaštićene rute. Endpointi su dokumentirani Swagger (OpenAPI) komentarima. |
| **Testiranje** — Registracija e-poštom, prijava, odjava, izdavanje tokena i poziv zaštićene rute testirani su alatom Thunder Client. Potvrđeno je očekivano ponašanje: status `200` s valjanim tokenom i status `401` bez tokena. Prijava ORCID-om provjerena je na sandbox okruženju: [upiši samo ako je testiranje provedeno]. |


---

## 2. Pokretanje aplikacije

### Preduvjeti

- Instaliran Node.js
- Pokrenuta baza podataka dostupna putem varijable `DATABASE_URL`
- Instalirane ovisnosti projekta

### Koraci za pokretanje

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm.cmd run dev   

Aplikacija je dostupna na adresi:

[http://127.0.0.1:3000](http://127.0.0.1:3000)

U terminalu se prikazuje poruka „KonfTrack radi na ...”. Ako `.env` datoteka nije ispravno konfigurirana, poslužitelj se neće pokrenuti, nego će ispisati informaciju o neispravnoj varijabli.

---

## 3. Konfiguracija `.env` datoteke

Kopiraj `.env.example` u `backend/.env` i popuni potrebne vrijednosti:

```dotenv
NODE_ENV=development
PORT=3000
APP_URL=http://127.0.0.1:3000
DATABASE_URL=<veza na bazu>

SESSION_SECRET=<nasumični niz od najmanje 32 znaka>
JWT_SECRET=<drugi nasumični niz od najmanje 32 znaka>

COOKIE_SECURE=false
DEV_LOGIN=false

ORCID_SANDBOX=true
ORCID_CLIENT_ID=<Client ID sa sandbox.orcid.org>
ORCID_CLIENT_SECRET=<Client secret sa sandbox.orcid.org>
ORCID_CALLBACK_URL=http://127.0.0.1:3000/auth/orcid/callback

# SMTP (nije obavezno)
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
MAIL_FROM=
```

### Generiranje tajnih ključeva

Tajne vrijednosti `SESSION_SECRET` i `JWT_SECRET` mogu se generirati sljedećom naredbom:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Naredbu pokreni dvaput kako bi dobila dvije različite vrijednosti — jednu za svaku tajnu.

### Važne napomene

- Adresa koju koristiš u pregledniku, vrijednost `APP_URL` i vrijednost `ORCID_CALLBACK_URL` moraju koristiti isti host.
- Ako aplikaciju otvaraš putem `127.0.0.1`, a callback koristi `localhost`, preglednik možda neće poslati isti kolačić sesije. Prijava tada može završiti porukom „Neispravna ORCID autorizacija”.
- Isti redirect URI mora biti upisan i u postavkama ORCID sandbox klijenta (**Developer tools → Redirect URIs**).
- Datoteka `.env` ne smije se predati u Git repozitorij. Potrebno je osigurati da se nalazi u `.gitignore` datoteci.

---

## 4. Provjera ORCID sandbox prijave

1. Otvori [ORCID Sandbox](https://sandbox.orcid.org), izradi sandbox račun (odvojen od stvarnog ORCID računa) i u odjeljku **Developer tools** registriraj klijenta.
2. Kao redirect URI postavi:

   ```text
   http://127.0.0.1:3000/auth/orcid/callback
   ```

3. Dobiveni Client ID i Client Secret upiši u `.env` datoteku te postavi `ORCID_SANDBOX=true`.
4. Pokreni aplikaciju i otvori [http://127.0.0.1:3000/login](http://127.0.0.1:3000/login).
5. Odaberi prijavu putem ORCID-a. Adresa u pregledniku trebala bi sadržavati `sandbox.orcid.org`, što potvrđuje da se koristi sandbox okruženje, a ne produkcijski ORCID.
6. Prijavi se sandbox računom i odobri traženi pristup.
7. Nakon uspješne autorizacije korisnik se preusmjerava na `/profile`. U profilu bi trebao biti prikazan ORCID iD u obliku `0000-000X-XXXX-XXXX`.

### Rješavanje mogućih problema

- **`redirect_uri_mismatch`** — Redirect URI u ORCID postavkama ne odgovara vrijednosti `ORCID_CALLBACK_URL` iz `.env` datoteke.
- **„Neispravna ORCID autorizacija”** — Provjeri koristiš li isti host u pregledniku i u `APP_URL` vrijednosti (u ovom primjeru `127.0.0.1`).

---

## 5. Provjera tokena u Thunder Clientu (VS Code)

Prije testiranja provjeri je li poslužitelj pokrenut.

### 5.1. Izdavanje tokena

1. U Thunder Clientu odaberi **New Request**.
2. Postavi metodu na `POST` i adresu na:

   ```text
   http://127.0.0.1:3000/api/auth/token
   ```

3. Otvori **Body → JSON** i unesi podatke korisnika:

   ```json
   {
     "email": "tvoj@mail.com",
     "password": "tvojaLozinka"
   }
   ```

4. Klikni **Send**.

Očekivani rezultat: HTTP status `200` i odgovor koji sadrži `access_token`, `token_type: "Bearer"` i `expires_in: 86400`. Kopiraj vrijednost `access_token` za sljedeći korak.

### 5.2. Poziv zaštićene rute s tokenom

1. Kreiraj novi zahtjev s metodom `GET`.
2. Kao adresu unesi:

   ```text
   http://127.0.0.1:3000/api/me
   ```

3. Otvori karticu **Auth**, odaberi **Bearer** i zalijepi kopirani token.
4. Klikni **Send**.

Očekivani rezultat: HTTP status `200` i podaci prijavljenog korisnika, primjerice ime, prezime, e-pošta, ustanova, ORCID i područje ekspertize.

### 5.3. Poziv bez tokena

Ponovi isti `GET` zahtjev bez postavljene autentifikacije.

Očekivani rezultat: HTTP status `401` i poruka „Neautoriziran pristup.”

> **Napomena:** Endpoint za izdavanje tokena namijenjen je korisnicima koji se prijavljuju e-poštom i lozinkom. Korisnici koji se prijavljuju isključivo putem ORCID-a dobivaju token kroz web prijavu, a token se sprema u sesiju.

---

## 6. Dodatne napomene i moguća proširenja

- JWT token vrijedi 24 sata.
- Odjava uništava sesiju, uključujući token spremljen u njoj. Međutim, već izdani Bearer token ostaje valjan do isteka svojeg roka valjanosti, što je očekivano ponašanje JWT-a.

