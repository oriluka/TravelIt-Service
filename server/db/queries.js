const client = require('./postgres.js');


module.exports = {

  get: (params, callback) => {

    var query = `SELECT * FROM hosts WHERE id = ${params.id};`;
    console.log(query);
    client.query(query, (err, res) => {
      if (err) {
        callback(err);
        console.log(err);
      } else {
        callback(null, res.rows);
      }
    })
  },

  post: (params, callback) => {

    var query = `INSERT INTO hosts VALUES (default, '${params.zip}', '${params.name}', '${params.image}', '${params.city}', '${params.state}', '${params.body}', '${params.interaction}', '${params.superhost}', '${params.verified}', '${params.monthJoined}', ${params.yearJoined}, ${params.review}, '${params.rulesCheckin}', '${params.rulesCheckout}', '${params.rulesBody}', '${params.locationBody}', '${params.locationGettingAround}');`;
    console.log('QUERY: ' + query);
    client.query(query)
      .then((host) => {
        console.log('HEY');
        console.log(host);
        callback(null, host.rows);
      })
      .catch((err) => {
        console.log('ERRRORRRRR')
        console.log(err);
        callback(err);
      });
  },

  put: (params, callback) => {

    var query = `DELETE FROM hosts WHERE id=${params.id};`;
    client.query(query, value)
      .then((res) => {
        callback(null, res.rows);
      })
      .catch((err) => {
        console.log(err);
        callback(err);
      });
  },

  delete: (params, callback) => {

    var query = `DELETE FROM hosts WHERE id=${params.id};`;
    client.query(query, value)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        console.log(err);
        callback(err);
      });
  },
};
