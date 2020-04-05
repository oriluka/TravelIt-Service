const { Pool, Client } = require('pg')
const client = new Client({
  host: 'localhost',
  database: 'mariahservice',
  password: null
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to postgres');
  }
})
module.exports = client;