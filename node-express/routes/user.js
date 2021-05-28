const express = require('express');
const router = express.Router(); //creiamo una nuova istanza di tipo Router


router.get('/user/risorsa-premium', (req, res) => {
  res.send('Ecco a te la risorsa premium...\n');
  // Se la risorsa premium fosse ad esempio un file pdf lo faremo scaricare mediante res.download
  //res.download('keyboard-shortcuts-linux.pdf');
});


module.exports = router;