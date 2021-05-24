const fs = require("fs");

function add(yargs) {
  yargs.command({
    command: "add", //nome del comando - agginge nuovo cliente
    describe: "Aggiunta nuovo cliente",
    builder: {
      nome: {
        describe: "Nome del cliente da aggiungere",
        demandOption: true, //il valore è obbligatorio
        type: "string",
      },
      email: {
        describe: "Email del cliente da aggiungere",
        demandOption: true, //il valore è obbligatorio
        type: "string",
      },
      telefono: {
        describe: "Telefono del cliente da aggiungere",
        demandOption: true, //il valore è obbligatorio
        type: "string",
      },
    },
    handler(argv) {
      addCliente(argv);
    },
  });
}

function addCliente({ nome, email, telefono }) {
  const clientiJSON = fs.readFileSync("clienti.json", "utf-8"),
        clienti = JSON.parse(clientiJSON);

  clienti.push({ nome, email, telefono });
  fs.writeFileSync("clienti.json", JSON.stringify(clienti));
  console.log(clienti);
}

module.exports = add;