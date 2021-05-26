// --- Invocazione dei vari moduli
const fs = require('fs');

const morgan = require('morgan');
const helmet = require('helmet');

const express = require('express');

const app = express(); //creiamo l'oggetto app
const log = fs.createReadStream('logs/access.log', { flags: a}); //creiamo lo stream scrivibile per il file access.log


//http://expressjs.com/it/api.html#app.set
app.use(morgan('combined', { stream: log})); //attiviamo morgan
app.use(helmet());// attiviamo helmet
app.use('/user',checkAuthentication,checkAuthorization); // cosi stiamo chiedendo che ad ogni richiesta che viene effettuata di applicare le funzioni checkAuthentication e checkAuthorization

app.get('/user/risorsa-premium', (req, res) => {
  res.send('Ecco a te la risorsa premium...\n');
});

app.get('/', (req, res) => {
  res.send('Pagina Home\n');
});

app.get('/contatti', (req, res) => {
  res.send('Pagina contatti\n');
});

app.get('/blog/articoli', (req, res) => {
  res.send('Pagina articoli\n');
});

app.get('/blog/articoli/:titolo', (req, res) => {
  res.send('Pagina articoli\n');
});

app.get('*', (req, res) => {
  res.status(404).send('Not Found\n');
});

//Controllo autenticazione
function checkAuthentication(req,res,next) { 
  const isLogged = true; // false - non loggato, true loggato
  if(!isLogged) return res.status(401).send('Non sei autenticato\n'); 
  //termina il ciclo
  //modificare l'oggeto req o res ci permette di passare delle informazioni da una funzione middleware ad un'altra
  req.user = { nome: 'Sara', tipo: 'Standard' }; // informazione passata all'altra funzione middleware - Premium
  next();
}

//Controllo autorizzazione
function checkAuthorization(req,res,next) { 
  const isAutorizzato = req.user.tipo === 'Premium'? true : false;
  if(!isAutorizzato) return res.status(403).send('Non sei autorizzato\n');
  next();
}

app.listen(3000);