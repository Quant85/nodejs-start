const debugGenerale = require('debug')('app:generale');//  il valore di ritorno di questa funzione è a sua volta una funzione
const debugDB = require('debug')('app:db');

debugGenerale('Debug point 1'); //abbilittare mediante variabile d'ambiente
// export DEBUG=app:generale
// [nodemon] starting `node test.js`
//   app:generale Debug point 1 +0ms
// Con il namespace possiamo differenziare i messaggi di debug

debugDB('Debug point su database n.1');
debugDB('Debug point su database n.2');
//export DEBUG=app:generale,app:db
// oppure 
//export DEBUG=app:*

  // app:generale Debug point 1 +0ms
  // app:db Debug point su database n.1 +1ms
  // app:db Debug point su database n.2 +0ms
