const morgan = require('morgan');
const express = require('express');
const app = express();
require('dotenv').config({
  path: `.env.${app.get('env')}`
});

// Configurazioni diverse in base ai diversi ambienti - configurazioni delle variabili d'ambiente
console.log(process.env.NODE_ENV); // undefined
console.log(app.get('env'));//development


console.log(process.env.DB_CONN_STRING); //mongodb://localhost/db1
console.log(process.env.APP_PWD); //123

//supponiamo che vogliamo abilitare morgan solo se siamo nel nostro ambient di sviluppo

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
}

app.get('/', (req, res) => {
  res.send('Home page\n')
});
app.listen(3000);

// morgan abilitato in development
// GET / 200 10 - 2.370 ms

// setiamo la variabile d'ambiente su production
// ╰─➤  export NODE_ENV=production 

//Monragn non è abilitato e non abbiamo informazioni sul processo

// Settare la variabile d'ambiente ed eseguire l'applicazione in una singola istruzione 
//╰─➤  NODE_ENV=development nodemon test 
// GET / 200 10 - 3.324 ms

// Per gestire la configurazione della nostra applicazione abbiamo più di un pacchetto npm. 
// dotenv prevede la configurazione diun semplice file .env in cui inserire le variabili d'ambiente che utilizzeremo nell'applicazione
//https://www.npmjs.com/package/dotenv