const { userAuth, userPerms } = require('../middleware/user-auth');
const express = require('express');
const router = express.Router(); //creiamo una nuova istanza di tipo Router

router.use( userAuth, userPerms); // cosi stiamo chiedendo che ad ogni richiesta che viene effettuata di applicare le funzioni userAuth e userPerms


router.get('/risorsa-premium', (req, res) => {
  res.send('Ecco a te la risorsa premium...\n');
  // Se la risorsa premium fosse ad esempio un file pdf lo faremo scaricare mediante res.download
  //res.download('keyboard-shortcuts-linux.pdf');
});


module.exports = router;