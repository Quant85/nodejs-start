// const fs = require('fs');

//come e dove possiamo gestire l'eccezione ?? 

// fs.readFile('f2.txt', (err, dati) => {
//   //if (err) throw err; // in questo modo solleviamo in modo asincrono un'eccezioe (un errore)

//   if (err) {
//     return handError(new Error(err));
//   }
//   console.log(err, dati);
// });

//un modo semplice per gestireun errore è definire una funzione

// function handError(errore) { 
//   console.log('Errore gestito');
// }

// Il file f2.txt non esiste quindi ci saranno degli errori, ed informazioni sull'errore

// ╰─➤  node app.js
// [Error: ENOENT: no such file or directory, open 'f2.txt'] {
//   errno: -2,
//   code: 'ENOENT',
//   syscall: 'open',
//   path: 'f2.txt'
// } undefined

// un'altra soluzione per gestire l'errore è con gli eveniti

const fs = require('fs');

const { EventEmitter } = require('events');

//istanza

const eventEmitter = new EventEmitter();

fs.readFile('f2.txt', (err, data) => {
  if(err) {
    //solleviamo un evento
    return eventEmitter.emit('error', err)
  }

  console.log(err, data);
})

//definiamo un listner per l'evento error

eventEmitter.on('error', evtErr => console.log(evtErr.errno)); //abbiamo il numero dell'errore