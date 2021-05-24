const yargs = require('yargs');
const get = require('./cmd/get');
const add = require('./cmd/add');
const del = require('./cmd/del');


get(yargs);//Ricerca Cliente
add(yargs);//Aggiungi Cliente
del(yargs);//Aggiungi Cliente

yargs.parse();