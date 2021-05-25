const express = require('express');

const app = express();

app.disable('x-powered-by');

//routing
app.all('/api/*', (req, res) => {
  const isLogged = false;
  if (!isLogged) {
    res.status(401).send('Non sei loggato\n')
  }
});

// rotte multiple con array
app.get(['/blog', '/blog2'], (req, res) => {
    res.status(200).send('<h1>Benvenuto nel Blog</h1>\n')
});

// ╰─➤  curl localhost:3000/blog2
// <h1>Benvenuto nel Blog</h1>

//rotte multiple con espressioni regolari
app.get('/admin[0-6]{2,}', (req, res) => {
    res.status(200).send('<h1>Benvenuto nel Blog</h1>\n')
});

// ╰─➤  curl localhost:3000/admin123          
// <h1>Benvenuto nel Blog</h1>

// possiamo combinarle
app.get(['/blog','/admin[0-6]{2,}'], (req, res) => {
    res.status(200).send('<h1>Benvenuto nel Blog</h1>\n')
});


app.listen(3000);

// ╰─➤  curl -D -  localhost:3000/api/risorsa2
// HTTP/1.1 401 Unauthorized
// X-Powered-By: Express
// Content-Type: text/html; charset=utf-8
// Content-Length: 16
// ETag: W/"10-EGUUSmMhrKaavSvKP0AivdLOmio"
// Date: Tue, 25 May 2021 09:43:06 GMT
// Connection: keep-alive
// Keep-Alive: timeout=5

// Non sei loggato