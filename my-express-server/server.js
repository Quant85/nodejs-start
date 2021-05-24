const express = require('express');

const app = express();

// il metodo listen ci permette di ascoltare su una specifica porta tutte le richieste HTTP che vengono inviate al nostro server

//Definisco varie rotte e le informazionei da restituire

app.get('/',function (req, res) {
  //console.log(request);
  res.send('<h1>Hello Hello</h1>');
  });

app.get('/contact',function (req, res) {
  //console.log(request);
  res.send('<h1>Contact me at: antonio.85.q@gmai.com</h1>');
  });

app.get('/hobbies', function (req, res) {
  res.send('<ul><li>Caffè</li><li>Manga</li><li>Moto</li></ul>');
  })
//-end

app.listen(3000, function () {
  console.log("Server in esecuzione sulla porta 3000");
  });
