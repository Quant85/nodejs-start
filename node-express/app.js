const express = require('express');

const app = express();

//http://expressjs.com/it/api.html#app.set

//app.set('nomeApp','Prima applicazione Express');
app.set('case sensitive routing',true);
//oppure
app.enable('case sensitive routing'); // in questo modo abbiamo abilitato l'impostazione case sensitive
app.disable('x-powered-by');



// Funzioni middleware
//http://expressjs.com/it/guide/using-middleware.html#utilizzo-del-middleware

/**
 * Express è un framework Web di routing e middleware, con funzionalità sua propria minima: 
 * un’applicazione Express è essenzialmente a serie di chiamate a funzioni middleware.
 */

app.get('/', prima, seconda, terza);

//definiamo le funzioni middleware esternamente

/** Cosa può fare una funzione middleware?
 * Può eseguire qualsiasi codice necessario
 * Può terminare il ciclo richiesta risposta
 * Può invocaree la successiva funzione middleware
 * Può modificare l'oggetto response request
 */

function prima(req, res, next) {
  console.log('Nuova richiesta ricevuta dalla prima middleware');
  next();
};

function seconda(req, res, next) {
  console.log('Nuova richiesta ricevuta dalla seconda middleware');
  next();
};

function terza(req, res) {
  console.log('Nuova richiesta ricevuta dalla terza middleware');
  res.send('ok\n');// termina il cilco richiesta-risposta
};


//------

app.get('/user/risorsa-premium', checkAuthentication, checkAuthorization, (req, res) => {
  res.send('Ecco a te la risorsa premium...\n');// termina il cilco
  //contiene tre funzioni middleware, l'ultima definita direttamente
});

function checkAuthentication(req,res,next) { 
  const isLogged = true; // false - non loggato, true loggato
  if(!isLogged) return res.status(401).send('Non sei autenticato\n'); 
  //termina il ciclo
  //modificare l'oggeto req o res ci permette di passare delle informazioni da una funzione middleware ad un'altra
  req.user = { nome: 'Sara', tipo: 'Standard' }; // informazione passata all'altra funzione middleware - Premium
  next();
}


function checkAuthorization(req,res,next) { 
  const isAutorizzato = req.user.tipo === 'Premium'? true : false;
  if(!isAutorizzato) return res.status(403).send('Non sei autorizzato\n');
  next();
}

app.listen(3000);