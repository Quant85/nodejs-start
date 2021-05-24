const express = require('express');

/**dalla versione 4.16.0+ body-parser è integrato 
 * in express
*/
//const bodyParser = require('body-parser');

const app = express();

//app.use(express.json());
//app.use(express.text());
app.use(express.urlencoded({extended: true}));

const port = 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
  });

app.post('/', function (req,res) {
  
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  //console.log(result);
  res.send("La somma dei valori inseriti è pari a: " + result );
  })


app.get('/bmicalculator', function (req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
  });

app.post('/bmicalculator', function (req,res) {

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight /(height *height);

  res.send("Your BMI is n " + bmi.toFixed(2) );
  })

  app.listen(port, function (param) {

    });