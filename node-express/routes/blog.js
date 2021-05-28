
const express = require('express');
const router = express.Router(); //creiamo una nuova istanza di tipo Router


router.get('/articoli', (req, res) => {
  //res.send('Pagina articoli\n');
  // reindirizzamento a nuova rotta
  res.status(301).redirect('/blog/news');
});

router.get('/news', (req, res) => {
  res.send('Pagina articoli\n');
});

router.get('/articolo/:titolo', (req, res) => {
  res.send('Pagina articoli\n');
});

module.exports = router;