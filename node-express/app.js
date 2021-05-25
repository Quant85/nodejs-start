const express = require('express');

const app = express();

//http://expressjs.com/it/api.html#app.set

//app.set('nomeApp','Prima applicazione Express');
app.set('case sensitive routing',true);
//oppure
app.enable('case sensitive routing'); // in questo modo abbiamo abilitato l'impostazione case sensitive
app.disable('x-powered-by');


app.get('/blog',(req,res) => {
  console.log(req.query);
  res.send('ok\n');
});

//http://localhost:3000/blog?anno=2020&mese=8
// { anno: '2020', mese: '8' }


app.get('/blog/:anno/:mese',(req,res) => {
  console.log(req.params);
  res.send('ok\n');
});

//http://localhost:3000/blog/2020/8
// { anno: '2020', mese: '8' }

//Possiamo anche combianre i due metodi
app.get('/blog/:anno/:mese',(req,res) => {
  console.log(req.params);
  console.log(req.query);
  res.send('ok\n');
});

//http://localhost:3000/blog/2020/8?ordinaPer=titolo



app.listen(3000);