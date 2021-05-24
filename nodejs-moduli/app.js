// const corsi = require('./corsi');

//console.log(corsi); //{ showCorsiPubblicati: [Function: showCorsiPubblicati] }

// corsi.showCorsiPubblicati();

//console.log(corsi); // ora per invocare la funzione non necessito più di invocare corsi.showCorsiPubblicati(), ma basterà solo corsi();

// corsi();

// ╰─➤  node app.js
// [
//   { nome: 'Maestro JavaScript', pubblicato: true },
//   { nome: 'Maestro Node.js', pubblicato: true }
// ]
// Quando abbiamo del codice in un modulo, Node lo avvolge in una funzione rendendolo privato
// (funtion(exports, require, module, __filename, __dirname) {
//   //codice del modulo
// });
// In questo modo sembra che possiamo invocare la funzione in modo globale, ma in realtà è locale al modulo e le variabili che definiamo nel modulo in realta sono definite nel suo scope locale

// function fn() {
//   var f1 = 10;
//   }

//console.log(f1); 
// console.log(f1);
//             ^
// ReferenceError: f1 is not defined

//al contrario 
// var f1 =10
// function fn() { 
//   console.log(f1);
// }
// fn();

// ╰─➤  node app.js
// 10

console.log(module);

// ╰─➤  node app.js
// Module {
//   id: '.',
//   path: '/home/antonio/Code/NodeJs/nodejs-moduli',
//   exports: {},
//   filename: '/home/antonio/Code/NodeJs/nodejs-moduli/app.js',
//   loaded: false,
//   children: [],
//   paths: [ 
//     '/home/node_modules',
//     '/node_modules'
//   ]
// }