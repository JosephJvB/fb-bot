const express = require('express');
const axios = require('axios');

const server = express();

server.use(express.json());

server.get('/ping', (req, res) => {
  res.status(200).send('pong!');
  return;
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log('Server up on port:', port));