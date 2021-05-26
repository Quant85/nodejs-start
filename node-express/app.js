// --- Invocazione dei vari moduli
const fs = require('fs');

const morgan = require('morgan');
const helmet = require('helmet');

const express = require('express');

const { userAuth, userPerms } = require('./middleware/user-auth');

const app = express(); //creiamo l'oggetto app
const log =fs.createWriteStream('logs/access.log', { flags: 'a'}); //creiamo lo stream scrivibile per il file access.log


//http://expressjs.com/it/api.html#app.set

app.use(morgan('combined', { stream: log })); //attiviamo morgan
app.use(helmet());// attiviamo helmet
app.use('/user', userAuth, userPerms); // cosi stiamo chiedendo che ad ogni richiesta che viene effettuata di applicare le funzioni userAuth e userPerms

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



app.listen(3000);