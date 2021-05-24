const fs = require('fs');
const chalk = require('chalk');

function get(yargs) {
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
}


function getCliente(nome) {
  const clientiJSON = fs.readFileSync('clienti.json', 'utf-8'),
    clienti = JSON.parse(clientiJSON),
    cliente = clienti.find(clienteItem => clienteItem.nome === nome),
    ris = {
      status: false,
      suggerimenti: '',
      cliente: null
    };

  if (!cliente) {
    //diamo dei suggerimenti restituendo tutti i clienti con la prima lettera del nome ricercato
    clienti.map(clienteItem => {
      if (clienteItem.nome[0] === nome[0]) {
        ris.suggerimenti += `${clienteItem.nome} `;
      }
    });
    return ris;
  }

  ris.status = true;
  ris.cliente = cliente;
  return ris;
}
module.exports = get;