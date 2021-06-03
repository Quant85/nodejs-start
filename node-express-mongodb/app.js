const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');

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
app.get('/articolo', async (req,res) => {
  //const articolo = await articoliCollection.findOne({ titolo: "Titolo articolo 1"});
  const cursor = articoliCollection.find({});
  console.log(await cursor.count());
  // await cursor.forEach(articolo => {
  //   console.log(articolo);
  // });
  // for await (articolo of cursor) {
  //   console.log(articolo);
  // };
  // const articolo1 = await cursor.next();
  // const articolo2 = await cursor.next();
  // console.log(articolo1,articolo2);
  while (await cursor.hasNext()) {
    const articolo = await cursor.next();
    console.log(articolo);
  }
  //console.log(articolo.testo);
  res.send();
});

//Update
app.get('/modifica-articolo', async (req,res) => {
  // const update =  {
  //   $set: {
  //     autore: "Andrea"
  //   }
  // };
  // const filter = { _id:ObjectID("60b5f6ba89e19f6f0943ba0e")};

  // const ris = await articoliCollection.updateOne(filter, update);
  // console.log(ris.result.nModified);

  // articoliCollection.find({}).forEach(articolo => {
  //   let voto = Math.random() * 5;
  //   articoliCollection.updateOne({ _id: articolo._id}, { $set: { voto: +voto.toFixed(1) } })
  // });
  // aggiornare più di un singolo documento updateMany

  const ris = await articoliCollection.updateMany({}, { $inc: { voto: 0.5}}); // incremento il voto di ogni oggetto di 0.5
  res.send();
});

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