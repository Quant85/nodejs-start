const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');

const app = express();

const dbURI = 'mongodb+srv://antonio:mdb123@prova-node.wbyji.mongodb.net/blog?retryWrites=true&w=majority';

const mongoClient = new MongoClient(dbURI, { useUnifiedTopology: true });

let blogDB, articoliCollection;

app.get('/', async (req, res) => {
  //60b5f6ba89e19f6f0943ba0e
  // incrementiamo il campo voto con l'operatore $inc
  const filtro = { _id: ObjectID('60b5f6ba89e19f6f0943ba0e') };
  // cosa vogliamo incrementare e di quanto
  const update = { $pull: { tags: { $lt: 9 } } };
  await articoliCollection.updateOne(filtro, update);

  articoliCollection.findOne({}).then(articolo => {
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
