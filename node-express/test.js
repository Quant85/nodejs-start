const express = require('express');
const app = express();

//app.use(express.json()); //express.json() ritorna una funzione middleware

app.use(express.text()); //express.text() ritorna una funzione middleware

app.post('/',(req,res) => {
  console.log(req.body);
  res.send();
})

app.listen(3000);


// ╰─➤  curl -d '{ "nome": "Sara" }' -H "Content-Type: application/json"  -X POST localhost:3000

// [nodemon] starting `node test.js`
// { nome: 'Sara' }


// ╰─➤  curl -d 'Invio di testo semplice' -H "Content-Type: text/plain" -X POST localhost:3000

// [nodemon] starting `node test.js`
// Invio di testo semplice