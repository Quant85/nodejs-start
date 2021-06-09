// ╰─➤  npm install jsonwebtoken express dotenv
const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
app.use(cookieParser());


// Ci sono diversi modi per inviare e ricevere un token a seconda dello sviluppo dell'applicazione che stiamo realizzando
app.get('/login', (req,res) => {
  //creaiamo l'oggetto payload
  const payload = { id: 1, isLogged: true};
  const options = { expiresIn: '10s'}; // per quanto tempo deve esser valido il token 10 secondi 10 s 1 ora 1h 1 giorno 1d
  const token = jwt.sign(payload, process.env.JWT_KEY, options);
  // potremmo inviare un cookie
  res.cookie('token', token).send();
});

// Ora non siamo più noi server ad inviare il cookie ma è il client ad inviare a noi(server) il cookie(token)
app.get('/user/profile', (req,res) => {
  // prima di poter accedere ai cookie dobbiamo utilizzare il pacchetto cookie-parser
  console.log(req.cookies.token);
  res.send();
});


// ╰─➤  curl -X POST localhost:3000/login       
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNMb2dnZWQiOnRydWUsImlhdCI6MTYyMzIzNzU4NiwiZXhwIjoxNjIzMjM3NTk2fQ.KzsSopWrte7O4Bqv7X6REuWveN75BuTPN6ilOqktiu8%  

//https://jwt.io/

app.listen(3000, () => console.log('Server in ascolto sulla porta 3000..'));

// Questo consolelog ritorna l'oggetto:
//   console.log(req.cookies);

// {
//   'connect.sid': 's:8d9aeffa-2bf0-4050-8f8b-bf06ae5c80ad.Yt72QrVqcivcAnFK7zTFUVlnD2IN9NTg1xXdqGwYEls',
//   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNMb2dnZWQiOnRydWUsImlhdCI6MTYyMzIzODU4NiwiZXhwIjoxNjIzMjM4NTk2fQ.oFxKpJHKSiZeS_TcNhUBc8N5bmNm--s6K-Nfkq3gty4'
// }

//console.log(req.cookies.token);
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNMb2dnZWQiOnRydWUsImlhdCI6MTYyMzIzODU4NiwiZXhwIjoxNjIzMjM4NTk2fQ.oFxKpJHKSiZeS_TcNhUBc8N5bmNm--s6K-Nfkq3gty4