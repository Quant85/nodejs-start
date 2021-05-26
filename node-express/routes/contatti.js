const express = require('express');
const router = express.Router(); //creiamo una nuova istanza di tipo Router


router.get('/contatti', (req, res) => {
  res.send('Pagina contatti\n');
});

module.exports = router;