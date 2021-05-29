// --- Invocazione dei vari moduli
const express = require('express');

// le cinque sotto-applicazioni
const home = require('./routes/home');
const user = require('./routes/user');
const blog = require('./routes/blog');
const _404 = require('./routes/404');
const appError = require('./middleware/error');

const app = express(); //creiamo l'oggetto app
//app.set('views','/views'); // indichiamo il set della cartella di default views dove saranno allocati i template. Essendo la cartella views la cartella di default potrebbe esser eliminata questa riga di codice
app.set('view engine', 'ejs'); // indichiamo il tipo di template engine utilizzato, in questo caso ejs

app.use(express.static('public'));
//http://expressjs.com/it/api.html#app.set
app.use('/blog',blog);
app.use('/user',user);
app.use(home);
app.use(_404);

//Gestione personalizzata degli errori
app.use(appError);

app.listen(3000);


