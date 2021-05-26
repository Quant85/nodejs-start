const express = require('express');
const router = express.Router(); //creiamo una nuova istanza di tipo Router


router.get('/', (req, res) => {
  res.send('Pagina Home\n');
});

module.exports = router;