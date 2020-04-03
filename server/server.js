const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3008;
const mongoose = require('mongoose');
const { Host, Area } = require('./models/Schema.js');
const bodyParser = require('body-parser');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/area', cors(), function(req, res) {
  Area.find(req.query, (err, arr) => res.send(arr));
});

app.get('/host', cors(), function(req, res) {
  Host.find(req.query, (err, arr) =>{
    if (err) {
      res.status(400);
      res.send(err);
    } else {
      res.status(200);
      res.send(arr);
    }
  });
});

app.get('/app.js', cors(), function (req, res) {
  res.sendFile(path.join(__dirname, '../public/bundle.js'))
});

app.get('/zip', cors(), function (req, res) {
  Host.find({}, 'zip', (err, data) => res.send(data));
});

// post
app.post('/host', cors(), function(req, res) {
  console.log(req.body);
  Host.create(req.body, (err, arr) => {
    if (err) {
      console.log(err);
      res.status(400);
    } else {
      res.status(200);
      res.send(arr);
    }
  });
});

// put
app.put('/host', cors(), function(req, res) {
  Host.updateOne(req.body.query, req.body.update, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

// delete
app.delete('/host', cors(), function(req, res) {
  Host.deleteOne(req.query, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200);
      res.send('deleted: ' + JSON.stringify(data));
    }
  });
});

module.exports = app;