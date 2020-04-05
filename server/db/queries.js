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
    client.query(query)
      .then((host) => {
        callback(null, host.rowCount);
      })
      .catch((err) => {
        console.log(err);
        callback(err);
      });
  },
// {
//   "query": {
//     "id": 10000001
//   },
//   "update" : {
//     "name": "HASDLFKASDFKJ",
//       "city": "IDK",
//         "state": "YEAH"


//   }
// }
  put: (params, callback) => {
    // params.update, params.values
    var query = `UPDATE hosts SET name = '${params.name}' WHERE id=${params.id};`;

    console.log('QUERY: ' + query);
    client.query(query)
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
    client.query(query)
      .then((res) => {
        callback(null, res.rowCount);
      })
      .catch((err) => {
        console.log(err);
        callback(err);
      });
  },
};
