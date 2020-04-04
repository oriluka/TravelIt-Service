const { Pool, Client } = require('pg')
const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'mariahservice',
  password: '',
  port: 3211,
});


module.exports = client;