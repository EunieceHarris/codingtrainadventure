// Server Code for node.js

const express = require('express');
const Datastore = require('nedb');
const app = express();

app.listen(3000,() => console.log('listening at 3000'));

app.use(express.static('public'));

// Have server understand incoming data
app.use(express.json({limit: '2mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

// Address location and a callback: request and response for all.innerHTML
app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

// Address location and a callback; request and response
app.post('/api', (request, response) => {
  console.log('I got a request!');
  //console.log(request.body);
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  console.log(data);
  response.json({
    status: 'success',
    timestamp: timestamp,
    latitude: data.lat,
    longitude: data.lon
  })
});
