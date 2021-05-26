const express = require('express');
const router = express.Router(); //creiamo una nuova istanza di tipo Router


router.get('/user/risorsa-premium', (req, res) => {
  res.send('Ecco a te la risorsa premium...\n');
});


module.exports = router;