const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

const dbURI = 'mongodb+srv://antonio:mdb123@prova-node.wbyji.mongodb.net/blog?retryWrites=true&w=majority';

const mongoClient = new MongoClient(dbURI, { useUnifiedTopology: true });

let blogDB, articoliCollection;

//Creare 
app.get('/nuovo-articolo', async (req,res) => {
  const articoli = [
    { titolo: "Titolo articolo 2", testo: "Testo articolo 2", autore: "Lidia"},
    { titolo: "Titolo articolo 3", testo: "Testo articolo 3", autore: "Michele"},
    { titolo: "Titolo articolo 4", testo: "Testo articolo 4", autore: "Simone"},
  ];
  const ris = await articoliCollection.insertMany(articoli);
  if (ris.insertedCount >= 1) {
    res.send(`Sono stati inseriti ${ris.insertedCount} nella collezione articoli!`);
  }
});

//Read
app.get('/articolo', (req,res) => {});

//Update
app.get('/modifica-articolo', (req,res) => {});

//Delete
app.get('/cancella-articolo', (req,res) => {});


async function run() { 
  await mongoClient.connect();
  console.log('Siamo connessi a MongoDB Atlas!');
  app.listen(8000, () => console.log('Server in ascolto sulla porta 8000 ...'));
  blogDB = mongoClient.db('blog');
  articoliCollection = blogDB.collection('articoli');
}
run().catch(err => console.log('Errore connessione: ' + err));