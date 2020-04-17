require('newrelic');

const path = require('path');
const express = require('express');
const app = express();

const cors = require('cors');
const port = 3004;
const host = require('./db/hostQueries.js');
const thing = require('./db/thingQueries.js');
const bodyParser = require('body-parser');



app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/', express.static(path.resolve(__dirname, '../public/loaderio-94da5df3431a90f8e36912477fb2596b.txt')));
app.use(bodyParser());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


///////// POSTGRES ENDPOINTS /////
app.get('/hostrandom', cors(), (req, res) => {
  host.getRandom((err, data) => {
    if (err) {
      console.log('error');
      res.status(400);
      res.send(err);
    } else {
      res.status(200);
      res.send(data[0]);
    }
  });
});


app.get('/host', (req, res) => {

  host.get(req.body, (err, data) => {
    if (err) {
      console.log('error');
      res.status(400);
      res.send(err);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

app.post('/host', cors(), (req, res) => {
  host.post(req.query, (err, data) => {
    if (err) {
      res.status(400);
      res.send(err);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

// put
app.put('/host', (req, res) => {
  host.put(req.body, (err, data) => {
    if (err) {
      res.status(400);
      res.send(err);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

// delete
app.delete('/host', (req, res) => {
  host.delete(req.body, (err, data) => {
    if (err) {
      res.status(400);
      res.send(err);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

////// THING ENDPOINTS

app.get('/things', cors(), (req, res) => {
  thing.get(req.query, (err, data) => {
    if (err) {
      console.log('error');
      res.status(400);
      res.send(err);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});
module.exports = app;