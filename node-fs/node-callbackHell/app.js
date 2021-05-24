/**
 * per risolvere il problema delle callback hell, in node sono state introdotte pe Promise
 * Qunindi possiamo leggere da un file, in modo asincrono utilizzando le Promise, utilizzndo fs.promises.readFile()
 */

const fs = require("fs");

// const ris = fs.promises.readFile('f1.txt', 'utf-8');
// console.log(ris);

// ╰─➤  node app.js                                                                 1 ↵
// Promise { <pending> }

// Per gestire la risoluzione di una promise utiliziamo il metodo .then()

// fs.promises.readFile('f.txt', 'utf-8')
// .then(dati => console.log(dati))
// .catch(err => console.log(err));

//versioni successive a ES6

async function read(file) {
  const dati = await fs.promises.readFile(file, "utf-8");
  console.log(dati);
}

//in questo modo creiamo anche un ulteriore livello di astrazione, poiché se abbiamo sia un file f1.txt e un f2.txt, basterà semplicemnte reinvocare l funzione read possiamo in questo modo legger da entrambi

read('f1.txt').catch(err => console.log(err));
read('f2.txt').catch(err => console.log(err));