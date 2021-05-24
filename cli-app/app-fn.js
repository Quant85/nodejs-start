// importiamo il modulo fs di node 

const fs = require('fs');

//definiamo la funzione getCliente che  riceverà in input il nome del cliente cercato


// function getCliente(nome) {  
//   //sfrutteremo il modo sincrono del metodo readFile per leggere il contenuto di un file
//   const clientiJSON = fs.readFileSync('clienti.json','utf-8');
//   //console.log(clientiJSON);
//   //per trasformare la strinca in array javascript usiamo un JSON.parse(clientiJSON)
//   //console.log(JSON.parse(clientiJSON)); //cosi da avere un array di oggetti javascript con cui poter lavorare

//   const clienti = JSON.parse(clientiJSON);

//   //per poter ricercare il cui nome è il contenuto all'interno della variabile nome
//   const cliente = clienti.find(clienteItem => clienteItem.nome === nome);

//   return cliente;
// }


// miglioriamo la funzione definita prima 

function getCliente(nome) {  
  const clientiJSON = fs.readFileSync('clienti.json','utf-8'),
        clienti = JSON.parse(clientiJSON),
        cliente = clienti.find(clienteItem => clienteItem.nome === nome),
        ris = { status : false, suggerimenti: '', cliente : null };

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


//definiamo la funzione addCliente - {} destrutturazione

function addCliente({ nome, email, telefono }) { 
  const clientiJSON = fs.readFileSync('clienti.json','utf-8'),
        clienti = JSON.parse(clientiJSON);
  
  clienti.push({nome, email, telefono});
  fs.writeFileSync('clienti.json', JSON.stringify(clienti));
  console.log(clienti);

}

function delCliente(nome) { 
  const clientiJSON = fs.readFileSync('clienti.json','utf-8'),
        clienti = JSON.parse(clientiJSON), // leggiamo il file 
        clienteIndex =  clienti.findIndex(cliente => cliente.nome === nome); //ricerchiamo nell'area cliente l'indice del cliente che vogliamo cancellare, con findIndex a cui va passato una callback, ed il metodo ci ritorna l'indice del primo valore che rispetta la callback
  //console.log(clienteIndex);

  //gestiamo il caso in cui il cliente non sia nell'elenco/trovato
  if(clienteIndex === -1) {
    console.log('Cliente non trovato');
    return;
  }
  //se viene trovato va rimosso, utilizzando splice, primo paramento l'indice del cliente da eliminare. e secondo paramentro quanti elementi vogliamo eliminare
  clienti.splice(clienteIndex, 1);

  // Ora va riscritto il file cliente.json con i clienti aggiornati
  fs.writeFileSync('clienti.json',JSON.stringify(clienti));
  //per confermoa
  console.log(clienti);
}


//esportimao le funzioni

module.exports = {
  getCliente,
  addCliente,
  delCliente
}