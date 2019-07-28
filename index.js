const express = require('express');
const axios = require('axios');

const port = process.env.PORT || 3000;
const token = process.env.TOKEN || 'token';

const server = express();
server.use(express.json());

server.get('/ping', (req, res) => {
  res.status(200).send('pong!');

  return;
});

// https://github.com/fbsamples/graph-api-webhooks-samples/blob/master/heroku/index.js
server.get('/facebook', (req, res) => {
  const isVerifyRequest = req.query['hub.mode'] == 'subscribe'
  && req.query['hub.verify_token'] == token;
  if(isVerifyRequest) {
    res.send(req.query['hub.challenge']);
  } else {
    res.status(400).send('What u tryna do?');
  }

  return;
})

server.post('/facebook', (req, res) => {
  // example does a auth check using x-hub to make sure the request did come from fb webhook I guess?
  console.log('fb data recieved?\n', req.body);
  res.status(200).send('Thank you kind sir!');

  return;
});

server.listen(port, () => console.log('Server up on port:', port));