const { EventEmitter } = require('events');
const { MongoClient } = require('mongodb');

class MongoConnect extends EventEmitter {
  //costruttore in cui creiamo l'instanza MongoClient
  constructor() {
    super();
    this.mongoClient = new MongoClient(
      'mongodb+srv://antonio:mdb123@prova-node.wbyji.mongodb.net/blog?retryWrites=true&w=majority',
      { useUnifiedTopology: true }
    );
  }

  //Definizmo il metodo connect ed andiamo ad effettuare la connessione al database mongodb
  connect() {
    this.mongoClient.connect((err,mongodb) => {
      if (err) throw err;
      console.log("Connessione al database avvenuta!");
      MongoConnect.blogDB = mongodb.db('blog'); //memoriziamo il riferimento al database blog
      this.emit('dbConnection'); //solleviamo l'evento dbConnection
    })
  }
}

module.exports = MongoConnect;