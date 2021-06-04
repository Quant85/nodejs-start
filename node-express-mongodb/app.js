const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');

const app = express();

const dbURI = 'mongodb+srv://antonio:mdb123@prova-node.wbyji.mongodb.net/blog?retryWrites=true&w=majority';

const mongoClient = new MongoClient(dbURI, { useUnifiedTopology: true });

let blogDB, articoliCollection;

app.get('/', async (req, res) => {
  const filtro = { in_evidenza: { $exists: true } };
  // Per rimuovere il campo in_evidenza da questi documenti, definiamo un oggetto update con l'0peratore $unset mediante il quale al campo in_evidenza assegnamo una stringa vuota
  const update = { $unset: { in_evidenza: "" } };
  await articoliCollection.updateMany(filtro, update);
  articoliCollection.find(filtro).forEach(articolo => {
    console.log(articolo);
  });

  res.send();
});

async function run() { 
  await mongoClient.connect();
  console.log('Siamo connessi a MongoDB Atlas!');
  app.listen(8000, () => console.log('Server in ascolto sulla porta 8000 ...'));
  blogDB = mongoClient.db('blog');
  articoliCollection = blogDB.collection('articoli');
}
run().catch(err => console.log('Errore connessione: ' + err));
