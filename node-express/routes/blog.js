
const express = require('express');
const router = express.Router(); //creiamo una nuova istanza di tipo Router


router.get('/articoli', (req, res) => {
  res.send('Pagina articoli\n');
});

router.get('/articoli/:titolo', (req, res) => {
  res.send('Pagina articoli\n');
});

module.exports = router;