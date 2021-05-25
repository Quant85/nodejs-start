const express = require('express');

const app = express();

//routing

app.get('/', (req, resp) => {
  console.log('Nuova richiesta GET alla rotta root');
  resp.send("<h1>Benvenuto</h1>\n")
}); // per ottenere una risorsa

app.post('/', (req, resp) => {
  console.log('Nuova richiesta POST alla rotta root');
  resp.send("<h1>Benvenuto</h1>\n")
});// per creare una nuova risorsa

app.put('/', (req, resp) => {
  console.log('Nuova richiesta PUT alla rotta root');
  resp.send("<h1>Benvenuto</h1>\n")
});//per aggiornarla

app.delete('/', (req, resp) => {
  console.log('Nuova richiesta DELETE alla rotta root');
  resp.send("<h1>Benvenuto</h1>\n")
});// per eliminarla
// con express utiliziamo send al posnto di end per inviare una risposta

app.get('/blog', (req, resp) => {
  console.log('nuova richiesta GET alla rotta /blog');
  resp.send("<h1>Benvenuto nel blog</h1>")
});


app.listen(3000);
