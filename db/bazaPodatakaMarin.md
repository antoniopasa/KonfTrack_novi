# Baza podataka KonfTrack

Baza služi za spremanje podataka o konferencijama, korisnicima, radovima i recenzijama. Koristimo PostgreSQL i Prismu. U nastavku su ukratko opisane tablice i njihovi atributi.

## users

Ova tablica čuva podatke o korisnicima aplikacije.

id - jedinstveni broj zapisa  
email - e-mail adresa korisnika, mora biti jedinstvena ako je upisana  
first_name - ime korisnika  
last_name - prezime korisnika  
institution - ustanova kojoj korisnik pripada  
orcid - ORCID oznaka istraživača, mora biti jedinstvena ako je upisana  
expertise - područje stručnosti korisnika  
is_admin - označava ima li korisnik administratorsku ulogu  
is_active - označava je li korisnički račun aktivan  
password_hash - hashirana lozinka korisnika  
email_verified_at - vrijeme potvrde e-mail adrese, može biti prazno  
created_at - vrijeme stvaranja zapisa, automatski se upisuje trenutačno vrijeme  

## auth_tokens

Ovdje se spremaju tokeni koji se koriste za obnovu prijave i potvrdu e-mail adrese.

id - jedinstveni broj zapisa  
user_id - korisnik kojem zapis pripada  
type - vrsta tokena, refresh, email_verify ili email_add  
token_hash - jedinstveni hash tokena  
new_email - e-mail adresa koju treba potvrditi kod vrste email_add  
expires_at - vrijeme do kojeg token vrijedi  
used_at - vrijeme kada je token iskorišten  
revoked_at - vrijeme kada je token opozvan  
created_at - vrijeme stvaranja zapisa, automatski se upisuje trenutačno vrijeme  

## conferences

Ova tablica čuva osnovne podatke o konferenciji, rokove i stanje programa.

id - jedinstveni broj zapisa  
name - naziv konferencije  
location - mjesto održavanja konferencije  
start_date - datum početka konferencije  
end_date - datum završetka konferencije  
topics - teme koje konferencija obuhvaća  
submission_deadline - rok za predaju rada  
review_deadline - rok za završetak recenzija  
notification_deadline - rok za obavještavanje autora o odluci  
final_deadline - rok za predaju konačne verzije rada  
max_pages - najveći dopušteni broj stranica rada  
chair_id - korisnik koji predsjedava konferencijom  
status - trenutačni status konferencije  
program_published - označava je li program konferencije objavljen  

## committee_members

Ova tablica bilježi članstvo korisnika u odboru konferencije.

id - jedinstveni broj zapisa  
conference_id - konferencija kojoj zapis pripada  
user_id - korisnik koji je član odbora  
invitation_status - status poziva za sudjelovanje u odboru  

## papers

Ova tablica čuva podatke o znanstvenim radovima.

id - jedinstveni broj zapisa  
conference_id - konferencija kojoj zapis pripada  
created_by - korisnik koji je unio rad  
title - naslov rada  
abstract - sažetak rada  
keywords - ključne riječi rada  
topic - tema rada  
status - trenutačni status rada  
submitted_at - vrijeme predaje rada  
section_id - sekcija u kojoj je rad raspoređen  
presentation_author_id - zapis autora koji predstavlja rad  
presentation_start - vrijeme početka izlaganja  
presentation_end - vrijeme završetka izlaganja  

## paper_authors

Ova tablica bilježi autore pojedinog rada.

id - jedinstveni broj zapisa  
paper_id - rad na koji se zapis odnosi  
user_id - korisnički račun autora, ako postoji  
invited_name - ime pozvanog autora  
invited_email - e-mail adresa pozvanog autora  
is_contact_author - označava je li autor kontaktna osoba za rad  

## paper_versions

Rad može imati više verzija.

id - jedinstveni broj zapisa  
paper_id - rad na koji se zapis odnosi  
version_number - redni broj verzije rada  
version_type - vrsta verzije rada  
file_path - putanja do datoteke rada  
response_file_path - putanja do datoteke odgovora na recenzije  
statement_file_path - putanja do datoteke izjave uz rad  
submitted_at - vrijeme predaje verzije rada  

## review_assignments

Ova tablica čuva dodjele radova recenzentima, njihove ocjene i komentare.

id - jedinstveni broj zapisa  
paper_id - broj rada na koji se recenzija odnosi, trenutačno bez stranog ključa  
reviewer_id - korisnik koji je recenzent  
paper_version_id - verzija rada koja se recenzira  
assigned_at - vrijeme dodjele recenzije  
score - ocjena rada od −3 do 3  
expertise_score - ocjena stručnosti recenzenta od 1 do 5  
author_comment - komentar namijenjen autoru rada  
committee_comment - komentar namijenjen odboru  
reviewed_at - vrijeme završetka recenzije  

## review_discussions

Ovdje se spremaju poruke vezane uz recenziju.

id - jedinstveni broj zapisa  
review_assignment_id - recenzija uz koju je poruka vezana  
message - tekst poruke  
created_at - vrijeme stvaranja zapisa, automatski se upisuje trenutačno vrijeme  

## reviewer_preferences

Ova tablica sprema preferenciju recenzenta za pojedini rad.

id - jedinstveni broj zapisa  
paper_id - rad na koji se zapis odnosi  
reviewer_id - korisnik koji je recenzent  
preference - preferencija recenzenta za određeni rad  

## sections

Ova tablica opisuje sekcije konferencije.

id - jedinstveni broj zapisa  
conference_id - konferencija kojoj zapis pripada  
topic - tema sekcije  
room - prostorija u kojoj se sekcija održava  
start_time - vrijeme početka sekcije  
end_time - vrijeme završetka sekcije  
chair_id - korisnik koji vodi sekciju  

## personal_schedule

Ova tablica sprema radove koje je korisnik odabrao za svoj osobni raspored.

id - jedinstveni broj zapisa  
user_id - korisnik kojem zapis pripada  
paper_id - rad na koji se zapis odnosi  

## email_templates

Ova tablica čuva predloške e-mail poruka koje aplikacija može koristiti pri slanju obavijesti.

id - jedinstveni broj zapisa  
name - jedinstveni naziv predloška  
subject - naslov e-mail poruke  
body - tekst predloška e-mail poruke  

Isti korisnik može isti rad dodati u personal_schedule samo jednom. Jedan rad može imati više autora i verzija, a jedna verzija više recenzija. Korisnik može imati više tokena.


## Postavljanje baze

Potrebni su Node.js, Git i pokrenut PostgreSQL. Nakon preuzimanja projekta u pgAdminu treba napraviti praznu bazu, primjerice `konftrack_local`.

Za razvojne migracije korisnik PostgreSQL-a treba pravo stvaranja baza jer Prisma koristi pomoćnu shadow bazu za provjeru migracija.

Sljedeće naredbe pokreću se u Windows PowerShellu, iz mape `KonfTrack/backend`.

Pri prvom postavljanju kopira se predložak postavki.

```powershell
Copy-Item .env.example .env
```

U `.env` treba upisati vlastite podatke za povezivanje s bazom.

```env
DATABASE_URL="postgresql://KORISNIK:LOZINKA@localhost:5432/konftrack_local?schema=public"
```

Nakon spremanja datoteke pokreću se ove naredbe.

```powershell
npm.cmd ci
npx.cmd prisma migrate dev
npx.cmd prisma generate
npx.cmd prisma migrate status
```

`.env` se postavlja prije instalacije jer projekt tijekom instalacije već pokreće Prismu. Datoteka sadrži lozinku i ne sprema se u Git.

Ako je sve prošlo, posljednja naredba ispisuje `Database schema is up to date!`. Tablice se mogu pregledati u pgAdminu, a backend pokrenuti naredbom `npm.cmd run dev`.

Ako Prisma traži reset, treba provjeriti na koju je bazu spojena. Reset briše podatke pa se postupak postavljanja od nule radi na praznoj bazi.


