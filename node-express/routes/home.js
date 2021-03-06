const express = require('express');
const ErrorHandler = require('../helper/ErrorHandler');
const router = express.Router(); //creiamo una nuova istanza di tipo Router

const timeout = 50;

router.get('/', (req, res, next) => {
  //solleviamo l'errore e lo gestiamo nel modulo middleware/error.js
  //throw new ErrorHandler(401,'Richiesta non corretta. Dovevi fare...');
  res.render('index', {
    title: "Home Page",
    intestazione: "Home Page App",
    info: "Applicazione creata con Node.js",
  });
});

module.exports = router;


//gestione errore sincrono e asincrono

// -- Errore Sincrono gestito da NODE
//Definizione variabile ambienre
//echo $NODE_ENV
// ╰─➤  export NODE_ENV=development // per ambiente di sviluppo
//passando in ambiente di produzione, lato client avremo solo la comunicazione "Internal Server Error"
//export NODE_ENV=production

// --- Errori che avvengono in codice Asincrono - Dobbiamo esplicitamente invocare next

// [nodemon] app crashed - waiting for file changes before starting...

//Invochiamo next e all'interno invochiamo un'istanza Error
//  setTimeout(() => {
//     next(new Error('Errore...'));
//   }, timeout);

// Error: Errore...
//     at Timeout._onTimeout (/home/utente/percorso/node-express/routes/home.js:8:10)
//     at listOnTimeout (node:internal/timers:557:17)
//     at processTimers (node:internal/timers:500:7)