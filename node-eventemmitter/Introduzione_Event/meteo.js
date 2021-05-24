const { EventEmitter } = require('events'); // è una classe va on la maiuscola EventEmitter
const { get } = require('node:http');

const eventEmitter = new EventEmitter(); //Instanzio la classe EventEmitter

// class Meteo extends EventEmitter {
//   getMeteo() {
//     this.emit('meteo', { condizioni : 'sole', temperatura : 28 });//e se questa info va ricavata da una api esterna?
//   }
// }

//simuliamo che la risorsa vada sollevata da una API esterna per ottenere la risorsa meteo risolvendo una promis passando in input l'oggetto

class Meteo extends EventEmitter {
  async getMeteo() {
    //poichè await possiamo usarla solo nelle funzioni asincrone, facciamo async getMeteo

    //API Esterna
    const meteoInfo = await Promise.resolve({ condizioni : 'sole', temperatura : 28 }); // o usiamo la parolachiave .then oppure .await
    this.emit('meteo', meteoInfo);//e se questa info va ricavata da una api esterna?
  }
}

module.exports = Meteo;