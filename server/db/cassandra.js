const cassandra = require('cassandra-driver');

const database = new cassandra.Client({
  contactPoints: [],
  localDataCenter: '',
  keyspace: 'ks1'
});

database.connect();

module.exports = database;