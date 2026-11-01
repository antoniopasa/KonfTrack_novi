// Privremeni server samo za pregled izgleda (mock podaci dok backend nije gotov)
const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// mock korisnik — kasnije zamijeniti s req.user iz OAuth sesije
app.use((req, res, next) => {
  res.locals.korisnik = { ime: 'Ivan', prezime: 'Horvat', ustanova: 'FER, Sveučilište u Zagrebu' };
  next();
});

const mockRadovi = [
  { naslov: 'Primjer rada 1', konferencija: 'Konferencija 1', tema: 'Tema 1', datum: '—', stanje: 'Nacrt', stanjeKljuc: 'nacrt' },
  { naslov: 'Primjer rada 2', konferencija: 'Konferencija 1', tema: 'Tema 2', datum: '—', stanje: 'U recenziji', stanjeKljuc: 'recenzija' },
  { naslov: 'Primjer rada 3', konferencija: 'Konferencija 2', tema: 'Tema 3', datum: '—', stanje: 'Prihvaćen', stanjeKljuc: 'prihvacen' },
];

app.get('/korisnik', (req, res) => res.render('korisnik/pocetna'));
app.get('/korisnik/predaja', (req, res) => res.render('korisnik/predaja'));
app.get('/korisnik/moji-radovi', (req, res) => res.render('korisnik/moji-radovi', { radovi: mockRadovi }));
app.get('/korisnik/kontakt', (req, res) => res.render('korisnik/kontakt'));
app.get('/', (req, res) => res.redirect('/korisnik'));

app.listen(3000, () => console.log('http://localhost:3000/korisnik'));
