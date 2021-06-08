const express = require('express');
// Importo la classe MongoConnect
const MongoConnect = require('./mongo-connect');
const blogRouter = require('./routes/blog');

const app = express();
app.set('view engine', 'ejs');
app.use('/blog', blogRouter);

//Creiamo un'istanza mongoConnect

const mongoConnect = new MongoConnect();

// Dato che stiamo sollevando un evento lo andiamo a gestire con un listne sulla stessa istanza nongoConnect
//Mettiamo in ascolto il server node soltanto dopo che abbiamo effettuato la connessione a mongoDB
mongoConnect.on('dbConnection', () => app.listen(8000));
mongoConnect.connect();

// ╰─➤  curl localhost:8000/blog/articoli    