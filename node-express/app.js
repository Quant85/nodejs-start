// --- Invocazione dei vari moduli
const fs = require('fs');

const morgan = require('morgan');
const helmet = require('helmet');

const express = require('express');

const { userAuth, userPerms } = require('./middleware/user-auth');

// le cinque sotto-applicazioni
const homeRouter = require('./routes/home');
const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');
const contattiRouter = require('./routes/contatti');
const _404Router = require('./routes/404');

const app = express(); //creiamo l'oggetto app
const log =fs.createWriteStream('logs/access.log', { flags: 'a'}); //creiamo lo stream scrivibile per il file access.log


//http://expressjs.com/it/api.html#app.set

app.use(morgan('combined', { stream: log })); //attiviamo morgan
app.use(helmet());// attiviamo helmet
app.use('/user', userAuth, userPerms); // cosi stiamo chiedendo che ad ogni richiesta che viene effettuata di applicare le funzioni userAuth e userPerms

app.use(homeRouter);
app.use(userRouter);
app.use(blogRouter);
app.use(contattiRouter);
app.use(_404Router);

app.listen(3000);