const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();

const dbURI = 'mongodb+srv://antonio:mdb123@prova-node.wbyji.mongodb.net/blog?retryWrites=true&w=majority';

const mongoClient = new MongoClient(dbURI, { useUnifiedTopology: true });

let blogDB, articoliCollection;

//Creare 
app.get('/nuovo-articolo', (req,res) => {});

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