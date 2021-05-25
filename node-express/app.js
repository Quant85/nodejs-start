const express = require('express');

const app = express();

//http://expressjs.com/it/api.html#app.set

//app.set('nomeApp','Prima applicazione Express');
app.set('case sensitive routing',true);
//oppure
app.enable('case sensitive routing'); // in questo modo abbiamo abilitato l'impostazione case sensitive
app.disable('x-powered-by');
app.get('/blog',(req,res) => {
  res.send('ok\n');
});
//console.log(app.get('nomeApp'));


app.listen(3000);