var express = require('express')
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

var app = express()

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname,'logs', 'access.log'), { flags: 'a' }) //questa istruzione permette di creare in automatico uno stream scrivibile (access.log) aperto in modalità append che permette appunto di aprire un file in maniera che sia possibile scrivere in coda al contentuto

// setup the logger
app.use(morgan('combined', { stream: accessLogStream })) //per attivare morgan e scrivere le info nel file 

app.get('/prova', function (req, res) {
  res.send('hello, world!\n')
})

app.listen(3000);