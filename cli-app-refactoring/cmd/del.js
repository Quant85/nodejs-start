const fs = require('fs');

function del(yargs) {

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
}

function delCliente(nome) {
  const clientiJSON = fs.readFileSync('clienti.json', 'utf-8'),
    clienti = JSON.parse(clientiJSON), // leggiamo il file 
    clienteIndex = clienti.findIndex(cliente => cliente.nome === nome); //ricerchiamo nell'area cliente l'indice del cliente che vogliamo cancellare, con findIndex a cui va passato una callback, ed il metodo ci ritorna l'indice del primo valore che rispetta la callback
  //console.log(clienteIndex);

  //gestiamo il caso in cui il cliente non sia nell'elenco/trovato
  if (clienteIndex === -1) {
    console.log('Cliente non trovato');
    return;
  }
  //se viene trovato va rimosso, utilizzando splice, primo paramento l'indice del cliente da eliminare. e secondo paramentro quanti elementi vogliamo eliminare
  clienti.splice(clienteIndex, 1);

  // Ora va riscritto il file cliente.json con i clienti aggiornati
  fs.writeFileSync('clienti.json', JSON.stringify(clienti));
  //per confermoa
  console.log(clienti);
}

module.exports = del;