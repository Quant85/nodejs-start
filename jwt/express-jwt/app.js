// ╰─➤  npm install jsonwebtoken express dotenv
const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();



// Simuliamo con post la rotta di destinazione dei moduli di login
app.post('/login', (req,res) => {
  //creaiamo l'oggetto payload
  const payload = { id: 1, isLogged: true};
  const options = { expiresIn: '10s'}; // per quanto tempo deve esser valido il token 10 secondi 10 s 1 ora 1h 1 giorno 1d
  const token = jwt.sign(payload, process.env.JWT_KEY, options);
  res.send(token);
})


// ╰─➤  curl -X POST localhost:3000/login       
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNMb2dnZWQiOnRydWUsImlhdCI6MTYyMzIzNzU4NiwiZXhwIjoxNjIzMjM3NTk2fQ.KzsSopWrte7O4Bqv7X6REuWveN75BuTPN6ilOqktiu8%  

//https://jwt.io/

app.listen(3000, () => console.log('Server in ascolto sulla porta 3000..'));