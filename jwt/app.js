// ╰─➤  npm i express mongodb uuid express-session connect-mongo
const express = require('express');
const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');
//uuidv4();

const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();
const dbURI = 'mongodb+srv://antonio:mdb123@prova-node.wbyji.mongodb.net/blog?retryWrites=true&w=majority';
const mongoClient = new MongoClient(dbURI, { useUnifiedTopology: true});

// Inviamo sia l'ID di sessione in chiaro che quello cifrato mediante una funzione hash crittografica
app.use(session({
  secret: 'miaChiaveSegreta123', //chiave - andrebbero usate le variabili d'ambiente
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // impostazioni sui cookie
  genid: () => uuidv4(),
  store: MongoStore.create({ mongoUrl: dbURI})
}))

// Test - qui memorizziamo l'informazione
app.get('/', (req,res) => {
  console.log(req.session.id);
  req.session.colorePreferito = 'Verde';
  res.send();
})

// qui vogliamo accedere all'informazione memorizzata precedentemente
app.get('/rotta-2', (req,res) => {
  res.send(`Il tuo colore preferito è ${req.session.colorePreferito}`); // riusciamo a conservare lo stato tra richieste http multiple
})

app.get('/login', (req,res) => {
  console.log(req.session.id);
  req.session.isLogged = true;
  res.send();
})

app.get('/logout', (req,res) => {
  //req.session.isLogged = false; // oppure possiamo "distruggere la sessione"
  req.session.destroy(err => console.log(err));
  res.send();
})

app.get('/rotta-3', (req,res) => {
  if (req.session.isLogged) {
    res.send(`Sei loggato...`);    
  } else {
    res.send('Non sei loggato')
  }
})

const connect = async function () { 
  await mongoClient.connect();
  console.log('Connessione a MongoDB avvenuta!');
  app.listen(3000, () => console.log('Server in ascolto sulla porta 3000 ...'));
};

// Gestiamo eventuali errori con un catch

connect().catch(err => console.log(err));