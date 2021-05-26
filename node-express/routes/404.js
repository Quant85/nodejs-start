
const express = require('express');
const router = express.Router(); //creiamo una nuova istanza di tipo Router


router.get('*', (req, res) => {
  res.status(404).send('Not Found\n');
});

module.exports = router;