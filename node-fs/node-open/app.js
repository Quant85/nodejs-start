/**
 * open(file,flag di apertura, mode, callback)
 * file: percorso del file con estensione
 * flag: indica come vogliamo aprire il file, in lettura, scrittura o lettura più scrittura
 * mode: indica i permessi da assegnare al file, ma solo la dove il file non esiste
 *
 */

const fs = require('fs');
const { write } = require('node:fs');

// fs.open('f1.txt', (err, fd) => {
//   fs.write(fd, 'Ciao','utf8', ( err, written, str) => {
//     console.log(err, written, str);
//   })
// })

// ╰─➤  node app.js
// [Error: EBADF: bad file descriptor, write] {
//   errno: -9,
//   code: 'EBADF',
//   syscall: 'write'
// } 0 Ciao

// Abbiamo un errore, e lo si capisce anche dallo 0 che indica che son stati scritti 0 bite nel file (0 Ciao)

// Questo errore si manifesta perchè il file viene aperto in lettura, quindi non abbiamo i permessi in scrittura. Quindi dobbiamo specificare il flag di scrittura 'w'

fs.open('f1.txt', 'w', (err, fd) => {
  fs.write(fd, 'Ciao','utf8', ( err, written, str) => {
    console.log(err, written, str);
  })
});

// ╰─➤  node app.js
// null 4 Ciao // di fatto ora non abbiamo errori e sono stati scritti 4 bite nel file
