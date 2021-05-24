const fs = require('fs');

/**
 * .watch() accetta tre parametri
 * nome del file o della cartella da monitorare
 * un secondo parametro che definiamo esternamente
 * terzo parametro la callback di gestione che riceverà il tipo di evento ed il filename, cioè il nome della cartella o file che stiamo monitorando
 */

// const opz = { persistent: true}; // in questo modo facciamo si che il proccesso node non termini ma resti persistente

// fs.watch('f1.txt', opz, (evt, filename) => {
//   console.log(evt, filename);
// })

// il processo non termina e nel caso effettuiamo una modifica nel file f1.txt riceviamo 

// ╰─➤  node app.js
// change f1.txt
// change f1.txt // notiamo come problema che l'evento viene registrato due volte

// const monitorato = fs.watch('f1.txt', opz, (evt, filename) => {
//     console.log(evt, filename);
// })

// console.log(monitorato); 
// monitorato è un oggetto istanza della classe fs.watch
// La classe fs.watch estende fs.emit, quindi mediante fs.watch possiamo lavorare con il meccanismo degli eventi

// In particolare node emette un evento change ogni volta che una cartella monitorata subisce un cambiamneto. Quindi possiamo eliminare la callback

// const monitorato = fs.watch('f1.txt', opz);

// monitorato
//   .on('change', (evt, f) => console.log(evt, f))
//   .on('error', () => console.log('Errore sul file monitorato'))
//   .on('close',() => console.log('File non più monitorato'));

// function rimuoviMonitoraggio() { 
//   monitorato.close();
// }

// const timeout = 5000; // il file f1.txt in questo modo viene monitorato solo per 5000 millisecondi
// setTimeout(rimuoviMonitoraggio, timeout);

// dopo 5000 millisecondi il monitoraggio termina

// ╰─➤  node app.js
// File non più monitorato

// Effettuando delle modifiche dall'editor da terminale vim riscontriamo questa sequenza ripetuti di eventi

// ╰─➤  node app.js
// rename f1.txt
// change f1.txt
// rename f1.txt
// rename f1.txt

// Per poter risolvere questo tipo di problemi ed altri, ci affidiamo al pacchetto npm chokidar

const chokidar = require('chokidar');

// One-liner for current directory
chokidar.watch('f1.txt').on('all', (event, path) => {
  console.log(event, path);
});

// chokidar ha una buona gestione degl monitoraggio degli eventi
// ╰─➤  node app.js   
// add f1.txt
// change f1.txt
// unlink f1.txt
// add f1.txt
// change f1.txt
