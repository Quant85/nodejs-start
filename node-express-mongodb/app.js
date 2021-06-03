const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');

const app = express();

const dbURI = 'mongodb+srv://antonio:mdb123@prova-node.wbyji.mongodb.net/blog?retryWrites=true&w=majority';

const mongoClient = new MongoClient(dbURI, { useUnifiedTopology: true });

let blogDB, articoliCollection;

app.get('/', async (req, res) => {
  //Procedura di generazione dinamica dei documenti
  // titolo, testo, autore, tags, voto
  // const autori = ["Sofia", "Lidia", "Antonio"];
  // const tags = ["node", "javascript", "ract", "html", "css"];
  // const documenti = [];

  // for (let i = 1; i < 25; i++) {
  //   let randomIndexAutore = ~~(Math.random() * autori.length); //  ~~ questo operatore mi permette di troncare la parte decimale
  //   let randomIndexTags = ~~(Math.random() * tags.length); //  ~~ questo operatore mi permette di troncare la parte decimale
  //   let votoRandom = Math.random() * 5;
  //   documenti.push({
  //     titolo: `Titolo articolo ${i}`,
  //     testo: `Testo articolo ${i}`,
  //     autore: autori[randomIndexAutore],
  //     tags:[tags[randomIndexTags]],
  //     voto: +votoRandom.toFixed(1) // coercizione +
  //   });
  // }
  // const ris = await articoliCollection.insertMany(documenti);
  // console.log(ris.insertedCount);
  // -- End -- Procedura di generazione dinamica dei documenti -- End --

  //const articoli = articoliCollection.find({}).limit(3); // il metodo limit mi restituisce un numero limitato di risultati
  //const articoli = articoliCollection.find({}).sort({voto: 1}); // ordinare in valore crescente di voto con il metodo sort 
  //const articoli = articoliCollection.find({}).sort({voto: -1}); // ordinare in valore decrescente di voto con il metodo sort 
  //const articoli = articoliCollection.find({}).limit(3).sort({voto: -1}); // concatenazione di limit e sort, ottengo solo i primi tre articoli con voto più alto 
  const articoli = articoliCollection.find({}).limit(3).skip(1).sort({voto: -1}); // i primi tre articoli con voto più alto ma dopo il primo articolo, uso skip
  for await(articolo of articoli) {
    console.log(articolo);
  }
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