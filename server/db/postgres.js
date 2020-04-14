const { Pool } = require('pg')
const pool = new Pool({
  host: 'ec2-35-182-26-74.ca-central-1.compute.amazonaws.com',
  database: 'mariahservice',
  user: 'power_user',
  password: 'power',
  port: '5432',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000
});

pool.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to postgres');
  }
});
module.exports = pool;