const cassandra = require('cassandra-driver');

const database = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'mariahservice'
});

database.connect(function(err) {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log('Connected!');
  }
});

module.exports = database;