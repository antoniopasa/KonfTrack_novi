const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    const podaci = {};
    res.render('index', podaci);
});

app.listen(PORT, () => {
    console.log(`Server je pokrenut na http://localhost:${PORT}`);
});