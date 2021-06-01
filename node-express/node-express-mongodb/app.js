
const { MongoClient } = require('mongodb');
const dbURI = 'mongodb+srv://antonio:mdb123@prova-node.wbyji.mongodb.net/blog?retryWrites=true&w=majority';

const mongoClient = new MongoClient(dbURI, { useUnifiedTopology: true });

async function run() { 
  await mongoClient.connect();
  console.log('Siamo connessi a MongoDB Atlas!');
}
run().catch(err => console.log('Errore connessione: ' + err));