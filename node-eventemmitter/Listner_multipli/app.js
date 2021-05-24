/**
 * Listner multipli
 */

const events = require('events');
const { emit } = require('node:process');

const eventEmitter = new events.EventEmitter();

// eventEmitter.on('meteo', function () {  
//   console.log('Evento meteo catturato dal primo listener');
// });

// eventEmitter.on('meteo', function () {  
//   console.log('Evento meteo catturato dal secondo listener');
// });

// eventEmitter.emit('meteo');

// ╰─➤  node app.js                                                       
// Evento meteo catturato dal primo listener
// Evento meteo catturato dal secondo listener


//altri metodi utili forniti da EventEmitter

//-"listener usa e getta"


// function handlerFn() { 
//   console.log('Evento meteo Caturato');
// };

//   eventEmitter.on('meteo',handlerFn); //quest listner invoca la funzione  e poichè ci sono due emit esso viene sollevato due volte

// eventEmitter.emit('meteo');
// eventEmitter.emit('meteo');

// ╰─➤  node app.js
// Evento meteo Caturato
// Evento meteo Caturato


// se utilizzo eventEmitter.on('meteo',handlerFn); ottengo un solo 
// ╰─➤  node app.js
// Evento meteo Caturato

// perché dopo la prima emissione e cattura il listner viene rimosso

// infatti se facciamo 

function handlerFn() { 
  console.log('Evento meteo Caturato');
};

//eventEmitter.once('meteo',handlerFn);

// console.log(eventEmitter.eventNames()); // ritorna un array degli eventi con listner registrati

// eventEmitter.emit('meteo');

// console.log(eventEmitter.eventNames());
// eventEmitter.emit('meteo');

// ╰─➤  node app.js
// [ 'meteo' ]
// Evento meteo Caturato

//ma se lo facciamo dopo il primo emit otterremo un array vuoto, questo vuoldire che non ha nessun evento registrato

// ╰─➤  node app.js
// [ 'meteo' ]
// Evento meteo Caturato
// []

//ma se torniamo ad eventEmitter.on('meteo',handlerFn); otteniamo un listner registrato 
// ╰─➤  node app.js
// [ 'meteo' ]
// Evento meteo Caturato
// [ 'meteo' ]
// Evento meteo Caturato

//se volessimo rimuovere un emit, possiamo usare il metodo 

//eventEmitter.removeListener('meteo', handlerFn); //con primo parametro l'evento meteo e secondo parametro la funzione di gestione, in questo caso  handlerFn

eventEmitter.on('meteo',handlerFn);

eventEmitter.emit('meteo');
eventEmitter.emit('meteo');
eventEmitter.removeListener('meteo', handlerFn);
eventEmitter.emit('meteo');


// ╰─➤  node app.js
// Evento meteo Caturato
// Evento meteo Caturato
//in questo punto stiamo eliminando i listener sull'evento meteo