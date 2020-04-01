const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3004;
const mongoose = require('mongoose');
const { Host, Area } = require('./models/Schema.js');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/area', cors(), function(req, res) {
  Area.find(req.query, (err, arr) => res.send(arr));
});

app.get('/host', cors(), function(req, res) {
  Host.find(req.query, (err, arr) => res.send(arr));
});

app.get('/app.js', cors(), function (req, res) {
  res.sendFile(path.join(__dirname, '../public/bundle.js'))
});

app.get('/zip', cors(), function (req, res) {
  Host.find({}, 'zip', (err, data) => res.send(data));
});

// post
app.post('/', cors(), function(req, res) {
  Host.create({})
});

// put
app.put('/', cors(), function(req, res) {
  Host.updateOne({}, , (err, data) => res.send('works'))
});

// delete
app.delete('/', cors(), function(req, res) {
  Host.deleteOne({}, , (err, data) => res.send('deleted'))
});