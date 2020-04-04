const client = require('./postgres.js');


module.exports = {

  get: (params, callback) => {

    var query = `SELECT * FROM hosts WHERE id=${params.id};`;
    client.query(query)
      .then((host) => {
        callback(null, host.fields);
      })
      .catch((err) => {
        console.log(err);
        callback(err);
      });
  },

  post: (params, callback) => {

    var query = `INSERT INTO hosts VALUES (${params.zip}, ${params.name}), ${params.image}, ${params.city}, ${params.state}, ${params.body}, ${params.interaction}, ${params.superhost}, ${params.verified}, ${params.monthJoined}, ${params.yearJoined}, ${params.review}, ${params.rulesCheckin}, ${params.rulesCheckout}, ${params.rulesBody}, ${params.locationBody}, ${params.locationGettingAround});`;

    client.query(query)
      .then((host) => {
        callback(null, host.fields);
      })
      .catch((err) => {
        console.log(err);
        callback(err);
      });
  },

  put: (params, callback) => {

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
