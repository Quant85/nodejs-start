// --- Invocazione dei vari moduli
const express = require('express');

// le cinque sotto-applicazioni
const homeRouter = require('./routes/home');
const userRouter = require('./routes/user');
const blogRouter = require('./routes/blog');
const _404Router = require('./routes/404');
const { userAuth, userPerms } = require('./middleware/user-auth');

const app = express(); //creiamo l'oggetto app


//http://expressjs.com/it/api.html#app.set

app.use('/user', userAuth, userPerms); // cosi stiamo chiedendo che ad ogni richiesta che viene effettuata di applicare le funzioni userAuth e userPerms

app.use(homeRouter);
app.use(userRouter);
app.use('/blog',blogRouter);
app.use(_404Router);

app.listen(3000);


