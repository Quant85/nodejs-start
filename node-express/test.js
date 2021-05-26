const morgan = require('morgan')
const responseTime = require('response-time')
const path = require('path');
const express = require('express');
const app = express();


//app.use( express.static('public')); //express.static() ritorna una funzione middleware
//public è la cartella root delle risorse statiche, quindi nell'url non va inserita

//http://localhost:3000/img/sfondo.jpeg

//uso di una cartella virtuale /assets
//app.use('/assets', express.static('public')); //express.static() ritorna una funzione middleware
///assets è una cartella virtuale dove troveremo i nostri file statici. In questo caso per accedere a questa risorsa dobbiamo indicare questa cartella

//http://localhost:3000/assets/img/sfondo.jpeg

// -- possiamo anche usare un percorso assoluto grazie all'impiego del modulo nativo path

app.use( express.static(path.join(__dirname,'public'))); //path.join() ci permette di unire due percorsi e risolverli in un percorso assoluto

//http://localhost:3000/img/sfondo.jpeg

app.use(responseTime());

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send();
})

//╰─➤  curl -D - localhost:3000/   
//X-Response-Time: 0.393ms // tempo di risposta alla richiesta

//╰─➤  curl localhost:3000/ 
//GET / 200 - - 1.522 ms

//Un'informazione più interessante è quella di poter trascrivere le informazioni sulle richieste in un file log

app.listen(3000);
