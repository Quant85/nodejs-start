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
  // const articoli = articoliCollection.find({}).limit(3).skip(1).sort({voto: -1}); // i primi tre articoli con voto più alto ma dopo il primo articolo, uso skip
  // for await(articolo of articoli) {
  //   console.log(articolo);
  // }

  //Andiamo ad aggiornare gli articoli che rispettano la condisione voto maggiore o uguale a 3.5, andando ad aggiungere con l'operatore $set, il campo in_veidenza: true
  // const ris = await articoliCollection.updateMany({ voto: { $gte: 3.5 } }, { $set: { in_evidenza: true } });
  // console.log(ris.result.nModified);

  // const articolo = await articoliCollection.findOne({});
  // console.log(articolo._id); //60b5f6ba89e19f6f0943ba0e

  // const update = { $set: { testo: "Articolo che parla di es58" } };
  // const ris = await articoliCollection.updateOne({ _id: ObjectID('60b5f6ba89e19f6f0943ba0e') }, update);
  // console.log(ris.result.nModified);

  const reg = { 
    testo: { 
      //vogliamo la sequesnza con es seguito da zero oppure -, a cui deve seguire un numero 5 oppure 6
      $regex: /es-?[5-6]/
    }
  };
  const articoli = articoliCollection.find(reg);
  for await(articolo of articoli) {
    console.log(articolo); // stiamo recuperando la "sequenza es5 non la parola es5" prima di es5 o dopo es5 può esserci qualsiasi cosa. Per recuperare "la parola es5 o es6, dovremmo utilizzare i limitatori di bordo  $regex: /\bes-?[5-6]\b/"
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

// {
//   _id: 60b5f6ba89e19f6f0943ba0e,
//   titolo: 'Titolo articolo 1',
//   testo: 'Articolo che parla di es58',
//   autore: 'Andrea',
//   tag: [ 'node.js', 'javascript', 'mongodb' ],
//   voto: 1.7
// }