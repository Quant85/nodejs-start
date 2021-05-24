/**
 * Modulo Nativo fs
 * 
 * Il modulo nativo ci abilita per interagire con il file system e lo fa in un modo modellato sulle funzioni dello standard POSIX
 */

// Per gestire metodi asincroni possiamo usare la sintassi asybc await, avendo codice asincrono ma gestito come se fosse codice sincrono, senza dover definire callback su callback

const fs = require('fs');

fs.readFile('f1.txt', (err, dati) => {
  if (err) throw err;
  console.log(dati);
  console.log(dati.toString());
})

//viene restituito un oggetto di tipo Buffer

// ╰─➤  node app.js
// <Buffer 43 69 61 6f>

//per convertire i dati in stringa usiamo il .toString

// ╰─➤  node app.js
// <Buffer 43 69 61 6f>
// Ciao

// ╰─➤  node app.js
// <Buffer 43 69 61 6f>
// Ciao


//analiziamo i diti in bit in base 16
// ╰─➤  node       
// Welcome to Node.js v16.2.0.
// Type ".help" for more information.
// > var dec = parseInt('63', 16);
// undefined
// > dec
// 99
// > String.fromCodePoint(99);
// 'c'
// > 


// fs.readFile('f1.txt', 'utf-8', (err, dati) => {
//   if (err) throw err;
//   console.log(dati);
//   //console.log(dati.toString()); possiamo non usare .toString perchè abbiamo dato la codifica utf-8
// })

// in alternativa possiamo passare un oggetto con proprietà { encoding : 'utf-8'}