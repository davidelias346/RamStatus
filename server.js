const express = require('express');
const app = express();
const HOST = 'http://localhost';
const PORT = 8080 || process.env.PORT;
const stats = require('./pcRamUsage');

app.get('/', function (req, res) {
  res.send('Homeee');
})

app.get('/stats', function (req, res) {
    res.send(stats);
  })

app.listen(PORT, console.log(`App is running in ${HOST}${PORT}`));
