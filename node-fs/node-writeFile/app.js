const fs = require('fs');

// fs.writeFile('f1.txt','Corso sovrascritto', err => {
//   if(err) throw err;
//   console.log('File scritto correttamente');
// });

fs.promises.writeFile('f1.txt', 'Node')
  .then(() =>console.log('scrittura avvenuta'));

//Se non vogliamo sovrascrivere il contenuto ma aggiungerne altro

// fs.appendFile('f1.txt','\nAltro contenuto', err => {
//   if (err) throw err;
//   console.log('contenuto aggiunto');
// })

// Come il caso precedente possiamo usare il metodo che fa uso delle promise

fs.promises.appendFile('f1.txt','\nAltro contenuto con promises', err => {
  if (err) throw err;
  console.log('contenuto aggiunto');
})