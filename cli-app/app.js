const chalk = require('chalk');

//const argv_parsed = require('yargs').argv;

//console.log(argv_parsed);

// ╰─➤  node app.js cerca --nome='antonio'
// { _: [ 'cerca' ], nome: 'antonio', '$0': 'app.js' }

//console.log(argv_parsed.nome);


// ─➤  node app.js cerca --nome='antonio'
// { _: [ 'cerca' ], nome: 'antonio', '$0': 'app.js' }
// antonio

//console.log(argv_parsed._);

// ╰─➤  node app.js cerca --nome='antonio'
// { _: [ 'cerca' ], nome: 'antonio', '$0': 'app.js' }
// antonio
// [ 'cerca' ]

//console.log(argv_parsed);

// ─➤  node app.js cmd1 cmd2 --nome='antonio' --emai:'amil1'
// {
//   _: [ 'cmd1', 'cmd2' ],
//   nome: 'antonio',
//   'emai:amil1': true,
//   '$0': 'app.js'
// }

//ricerca di un cliente in base al suo nome

//node app.js get --nome='Antonio'

const yargs = require('yargs');

// yargs.command({
//   command: 'get', //nome del comando
//   describe: 'Ricerca cliente in base al suo nome',
//   builder: {
//     nome: {
//       describe: 'Nome del cliente da ricercare',
//       demandOption: true, //il valore è obbligatorio
//       type: 'string'
//     }
//   },
//   handler(argv) {
//     console.log(argv);
//   }
// });

//bisongna invocare yargs mediante parse
//yargs.parse();

// ╰─➤  node app.js get --nome='Antonio'
// { _: [ 'get' ], nome: 'Antonio', '$0': 'app.js' }

// se non passiamo il flag nome

// ╰─➤  node app.js get                                                                                                                                                                           130 ↵
// app.js get

// Ricerca cliente in base al suo nome

// Opzioni:
//   --help     Mostra la schermata di aiuto                             [booleano]
//   --version  Mostra il numero di versione                             [booleano]
//   --nome     Nome del cliente da ricercare                 [stringa] [richiesto]

// Argomento richiesto mancante: nome

//------ Se invece di un console.log() andiamo ad invocare una funzione che andremo a definire in unl'to modulo

// const { getCliente } = require('./app-fn');

// yargs.command({
//   command: 'get', //nome del comando
//   describe: 'Ricerca cliente in base al suo nome',
//   builder: {
//     nome: {
//       describe: 'Nome del cliente da ricercare',
//       demandOption: true, //il valore è obbligatorio
//       type: 'string'
//     }
//   },
//   handler(argv) {
//     const cliente = getCliente(argv.nome);
//     console.log(cliente);
//   }
// });

// yargs.parse();

// ╰─➤  node app.js get --nome='Antonio'
// { nome: 'Antonio', email: 'antonio@gmail.com', telefono: '026687958' }

// miglioriamo la funzionalità precedente dando anche dei suggerimenti e delle condizioni di status

// { getCliente } = require('./app-fn');
//const { getCliente, addCliente } = require('./app-fn');
const { getCliente, addCliente, delCliente } = require('./app-fn');

yargs.command({
  command: 'get', //nome del comando
  describe: 'Ricerca cliente in base al suo nome',
  builder: {
    nome: {
      describe: 'Nome del cliente da ricercare',
      demandOption: true, //il valore è obbligatorio
      type: 'string'
    }
  },
  handler(argv) {
    const ris = getCliente(argv.nome);
    if (ris.status) {
      console.log(chalk.green.bold('Cliente trovato: \n'));
      console.log(ris.cliente);
    } else {
      console.log(chalk.red.bold('Cliente non trovato. Forse cercavi\n'));
      console.log(ris.suggerimenti);
    }
  }
});

// yargs.parse();

// ╰─➤  node app.js get --nome='Giulia' 
// Cliente non trovato. Forse cercavi: 

// Gianni Gianluca

// Cliente trovato: 

// {
//   nome: 'Gianluca',
//   email: 'gianluca@gmail.com',
//   telefono: '025687958'
// }


//----- implementiamo la funzionalità per aggiungere un nuovo cliente  con un nuovo comando, come fatto precedentemente

yargs.command({
  command: 'add', //nome del comando - agginge nuovo cliente
  describe: 'Aggiunta nuovo cliente',
  builder: {
    nome: {
      describe: 'Nome del cliente da aggiungere',
      demandOption: true, //il valore è obbligatorio
      type: 'string'
    },
    email: {
      describe: 'Email del cliente da aggiungere',
      demandOption: true, //il valore è obbligatorio
      type: 'string'
    },
    telefono: {
      describe: 'Telefono del cliente da aggiungere',
      demandOption: true, //il valore è obbligatorio
      type: 'string'
    }
  },
  handler(argv) {
    addCliente(argv);
  }
});




//-----Implementiamo la cancellazione di un cliente dall'elenco in base al suo nome con il command del

yargs.command({
  command: 'del', //nome del comando
  describe: 'Cancellazione del cliente in base al suo nome',
  builder: {
    nome: {
      describe: 'Nome del cliente da cancellare',
      demandOption: true, //il valore è obbligatorio
      type: 'string'
    }
  },
  handler(argv) {
    const ris = delCliente(argv.nome);
    // if (ris.status) {
    //   console.log(chalk.green.bold('Cliente trovato: \n'));
    //   console.log(ris.cliente);
    // } else {
    //   console.log(chalk.red.bold('Cliente non trovato. Forse cercavi\n'));
    //   console.log(ris.suggerimenti);
    // }
  }
});

yargs.parse();
