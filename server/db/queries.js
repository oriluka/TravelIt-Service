const client = require('./cassandra.js');


module.exports = {

  get: (params, callback) => {

    var query = `SELECT * FROM hosts WHERE id = ${params.id};`;
    client.execute(query, (err, res) => {
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
    client.execute(query)
      .then((host) => {
        var response = `${host.command}: ${host.rowCount}`;
        callback(null, response);
      })
      .catch((err) => {
        console.log(err);
        callback(err);
      });
  },

  put: (params, callback) => {

    var query = `UPDATE hosts SET name = '${params.name}' WHERE id=${params.id};`;

    client.execute(query)
      .then((res) => {
        callback(null, res.rows);
      })
      .catch((err) => {
        console.log(err);
        callback(err);
      });
  },

  delete: (params, callback) => {

    var query = `DELETE FROM hosts WHERE id = ${params.id};`;
    client.execute(query)
      .then((host) => {
        var response = `${host.command}: ${host.rowCount}`;
        callback(null, response);
      })
      .catch((err) => {
        console.log(err);
        callback(err);
      });
  },
};