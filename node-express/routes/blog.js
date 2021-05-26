
const express = require('express');
const router = express.Router(); //creiamo una nuova istanza di tipo Router


router.get('/blog/articoli', (req, res) => {
  res.send('Pagina articoli\n');
});

router.get('/blog/articoli/:titolo', (req, res) => {
  res.send('Pagina articoli\n');
});

module.exports = router;