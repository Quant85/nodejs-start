const express = require('express');

const app = express();

//routing
app.all('/api/*', (req, res) => {
  const isLogged = false;
  if (!isLogged) {
    res.status(401).send('Non sei loggato\n')
  }
});

app.listen(3000);
