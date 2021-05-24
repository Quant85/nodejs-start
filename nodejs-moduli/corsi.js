// Moduli Node.js

/**
 * I moduli usati n node.j possono esser:
 * Moduli nativi di Node.js
 * Moduli realizzati da noi
 * Moduli di terze parti
 */

//Creiamo un Modulo

var corsi = [
  {nome: 'Maestro JavaScript', pubblicato: true},
  {nome: 'Maestro Node.js', pubblicato: true},
  {nome: 'Maestro PHP', pubblicato: false},
];

function showCorsiPubblicati() {  
  const corsiPubblicati = corsi.filter(corso => corso.pubblicato);
  console.log(corsiPubblicati);
};

//module.exports.showCorsiPubblicati = showCorsiPubblicati;

//se da module.exports.showCorsiPubblicati elimino showCorsiPubblicati, ciò che mi verrà restituito non è più un oggetto ma una proprietà

module.exports = showCorsiPubblicati;

//  a questo punto per invocarla non necessito di invocare showCorsiPubblicati, ma mi basterà invocare corsi()