/**
 * EventEmitter
 */

const Meteo = require('./meteo');
const meteoObj = new Meteo();
//const { EventEmitter } = require('events'); // è una classe va on la maiuscola EventEmitter

//const eventEmitter = new EventEmitter(); //Instanzio la classe EventEmitter

// Metodo di gestione 

// eventEmitter.on('evento1', evtObj => {
//   console.log('Evento catturato');
//   console.log(evtObj.infoEvento);
//   });

// // Emettere/sollevare l'evento
// eventEmitter.emit('evento1', { infoEvento : 'Primo Evento' });

meteoObj.on('meteo', evtObj => {
  console.log(' Evento Meteo Catturato');
  console.log(evtObj);
})

meteoObj.getMeteo(); // questo è un bind implicito grazie al this in meteo.js