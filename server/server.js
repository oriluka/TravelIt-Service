const path = require('path');
const express = require('express');
const app = express();

const cors = require('cors');
const port = 3005;
const psql = require('./db/queries.js');
const bodyParser = require('body-parser');


app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


///////// POSTGRES ENDPOINTS /////

app.get('/host', (req, res) => {
  psql.get(req.body, (err, data) => {
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
  psql.post(req.body, (err, data) => {
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
  psql.put(req.body, (err, data) => {
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
  psql.delete(req.body, (err, data) => {
    if (err) {
      res.status(400);
      res.send(err);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

module.exports = app;