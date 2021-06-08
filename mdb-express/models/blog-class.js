const MongoConnect = require('../mongo-connect');

class BlogClass {

  getArticoli(numeroArticoli = 10) {
    const articoliCollection = MongoConnect.blogDB.collection('articoli');
    return articoliCollection.find({}).limit(numeroArticoli).toArray();//find ritorna un cursore quindi usiamo toArray per risolvere
  }

}

module.exports = BlogClass;