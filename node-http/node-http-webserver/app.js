const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const host = 'localhost';

console.log(process.env.HOME);

//creazione web server
const server = http.createServer((request, response) => {
  console.log('Nuova richiesta');

  // response.statusCode = 200;
  // response.setHeader('Content-Type', 'text/html; charset=utf-8');
  // response.write('<h1>Testo semplice</h1>');
  // response.write(' <p>Possiamo inviare più di un write, questo è in html realizzato da Antonio</p>');
  // response.end();

  let htmlfile = '';


  // switch (request.url) {
  //   case '/':
  //   case '/home': htmlfile = 'index.html'; break;
  //   case '/contatti': htmlfile ='contatti.html'; break;
  
  //   default:
  //     break;
  // }

//Mappare i percorsi, le risorse con i rispettivi file
const routing = {
  '/': 'index.html',
  '/home': 'index.html',
  '/contatti': 'contatti.html'
};

  response.setHeader('Contanti-Type', 'text/html');
  render(response, routing[request.url]);
  // const body = 'Questo è un test per la configurazione del server';
  // response.writeHead(200, {
  //   'Content-Type': 'text/plain; charset=utf-8',
  //   'Content-Length': Buffer.byteLength(body),
  // });
  // response.end(body); 
});

// function render(response, htmlfile) { 
//   if (htmlfile) {
//     //usa soluzione più efficiente è quella di utilizzare gli stream, cosi da creare un flusso di file leggibile che viene trasferito al client in risposta
//     fs.readFile(`./${htmlfile}`, 'utf8', (err, dati) => {
//       if (err) {
//         response.statusCode = 500;
//         return response.end('Errore interno al sistema');
//       }
//       response.statusCode = 200;
//       response.end(dati);
//     })
//   } else {
//     response.statusCode = 404;
//     response.end('Risorsa non trovata');
//   }
// }

function render(response, htmlfile) { 
  fs.stat(`./${htmlfile}`, (err, stats) => {
    if (stats) {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html');
      fs.createReadStream(htmlfile).pipe(response);
    } else {
      response.statusCode = 404;
      response.end('Risorsa non trovata');
    }
  })
};

//attivazione web server - messo in ascolo
server.listen(port);


// //gestione errori
// server.on('error', err => console.log(err));