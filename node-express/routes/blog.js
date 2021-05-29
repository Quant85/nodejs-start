
const express = require('express');
const router = express.Router(); //creiamo una nuova istanza di tipo Router


// router.get('/articoli', (req, res) => {
//   //res.send('Pagina articoli\n');
//   // reindirizzamento a nuova rotta
//   res.status(301).redirect('/blog/news');
// });

// router.get('/news', (req, res) => {
//   res.send('Pagina articoli\n');
// });

router.get('/articoli', (req, res) => {
  const articoli = [
    { titolo: "Titolo articolo 1", testo: "Testo articolo 1"},
    { titolo: "Titolo articolo 2", testo: "Testo articolo 2"},
    { titolo: "Titolo articolo 3", testo: "Testo articolo 3"},
  ];
  res.render('articoli', {
    title: "Articoli del Blog",
    elencoArticoli: articoli
  })
});

router.get('/articolo/:titolo', (req, res) => {
  res.send('Pagina articoli\n');
});

module.exports = router;