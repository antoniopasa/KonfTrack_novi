# Dnevnik rada: Planiranje i inicijalizacija backenda (KonfTrack)

**Područje rada:** planiranje backend zadataka, početna postavka poslužiteljskog projekta, alati za kvalitetu koda, povezivanje s bazom, upute za pokretanje  
**Tehnologije:** Node.js, Express 5, Prisma 6, PostgreSQL, Zod, Helmet, Swagger (OpenAPI 3), ESLint, Prettier

---

## 1. Opis izvršenog rada

| Aktivnost                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Planiranje backend zadataka (GitHub Issues)**: napisani su backend zadaci BE-01 do BE-24 raspoređeni u četiri faze, od registracije i konferencija do zbornika, testova anonimnosti i rada pod opterećenjem. Zadaci su podijeljeni na tri člana backend tima prema području (korisnici, konferencije i program; radovi i raspodjela recenzenata; recenzije, odluke, e-pošta i integracije), uz procjenu trajanja i redoslijed rada koji poštuje međusobne ovisnosti (npr. servis e-pošte prije pozivnica recenzentima). |
| **Inicijalizacija projekta (`package.json`)**: postavljene su ovisnosti (Express 5, Helmet, CORS, dotenv, Zod, Swagger) i Prisma 6 (`prisma` kao razvojna ovisnost, `@prisma/client` kao ovisnost). Prisma je zadržana na verziji 6 jer verzija 7 zahtijeva ESM i drukčiju konfiguraciju. Dodane su skripte `dev`, `start`, `test`, `lint`, `format` i Prisma naredbe te `postinstall` koji automatski generira Prisma klijent.                                                                                           |
| **Alati za kvalitetu koda**: postavljeni su ESLint (flat konfiguracija, `eslint.config.js`) i Prettier (`.prettierrc`, `.prettierignore`) uz zajedničke postavke za VS Code, kako bi svi članovi tima pisali kod u istom stilu.                                                                                                                                                                                                                                                                                           |
| **Konfiguracija okruženja (`.env.example`, `.gitignore`)**: dodan je predložak varijabli okruženja kako bi novi član tima znao koje varijable treba postaviti, a `.env` je isključen iz Gita.                                                                                                                                                                                                                                                                                                                             |
| **Express poslužitelj i Swagger**: početni Node `http` poslužitelj zamijenjen je Express aplikacijom s rutama `GET /` i `GET /health` (`healthController.js`, `healthRoutes.js`). Postavljena je Swagger dokumentacija (`config/swagger.js`) s unaprijed definiranom shemom `bearerAuth` za kasniju autorizaciju tokenima.                                                                                                                                                                                                |
| **Povezivanje s PostgreSQL bazom (`prisma.config.ts`, `config/prisma.js`)**: postavljena je veza s bazom i jedan zajednički Prisma klijent koji koriste svi moduli. Modeli i migracije namjerno nisu dodani dok se tim nije dogovorio oko sheme, kako ne bi nastali sukobi u povijesti migracija.                                                                                                                                                                                                                         |
| **Usklađivanje SQL sheme i Prisme**: budući da je shemu baze pisao član tima zadužen za baze u SQL-u, predložen je pristup u kojem se tablice stvaraju SQL skriptom, a Prisma ih zatim čita naredbama `prisma db pull` i `prisma generate`.                                                                                                                                                                                                                                                                               |
| **Prijedlozi za ER model**: pripremljeni su prijedlozi entiteta za dio sustava vezan uz recenzije (dodjela i recenzija, rasprava recenzenata, predložak e-pošte, odluka), uz preporuku da povjerljivi komentar bude zasebno polje kako bi ga bilo lako isključiti iz obavijesti autorima i API odgovora.                                                                                                                                                                                                                  |
| **Upute za pokretanje (`backend/README.md`)**: napisani su odjeljci o preduvjetima, instalaciji, bazi podataka, varijablama okruženja, pokretanju i skriptama te popis čestih problema. Popis čestih problema temelji se na stvarnim problemima iz postavljanja (npr. PostgreSQL na portu 5433 umjesto 5432, zaboravljena lozinka baze, naredbe pokrenute iz pogrešne mape).                                                                                                                                              |
| **Testiranje**: provjereno je da se poslužitelj pokreće naredbom `npm run dev`, da `GET /health` vraća status `200` i da je Swagger dostupan na `/api-docs`. Veza s bazom provjerena je naredbom `prisma db execute`.                                                                                                                                                                                                                                                                                                     |

---

## 2. Struktura backenda

| Mapa              | Namjena                                              |
| ----------------- | ---------------------------------------------------- |
| `src/routes`      | Definicija ruta i Swagger (`@openapi`) opisi         |
| `src/controllers` | Obrada HTTP zahtjeva i odgovora                      |
| `src/services`    | Poslovna logika i pozivi vanjskih servisa            |
| `src/models`      | Pristup bazi preko Prisma klijenta                   |
| `src/middleware`  | Provjera prijave i ostali međukoraci obrade zahtjeva |
| `src/config`      | Konfiguracija (okruženje, Prisma, Swagger, ORCID)    |
| `prisma/`         | Shema baze i migracije                               |

---

## 3. Dogovori za tim

- Svaki novi endpoint dobiva `@openapi` komentar kako bi se pojavio u Swagger dokumentaciji.
- Prije commita pokreću se `npm run lint` i `npm run format`.
- Za pristup bazi koristi se samo zajednički Prisma klijent iz `src/config/prisma.js`.
- Svaka nova varijabla okruženja dodaje se i u `.env.example`.
- Svaki zadatak radi se na zasebnoj grani i spaja pull requestom koji u opisu sadrži `Closes #broj-issuea`.

---

## 4. Napomene i otvorena pitanja

- U trenutnoj verziji `src/app.js` rute `/health` i Swagger (`/api-docs`) nisu spojene, iako ih README navodi. Treba ih ponovno uključiti ili ažurirati README.
- U `package.json` nedostaju ovisnosti `jsonwebtoken`, `multer` i `axios`, koje koristi postojeći kod.
