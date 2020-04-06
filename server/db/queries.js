const db = require('./cassandra.js');

module.exports = {
  get: (params, callback) => {

    var query = `SELECT * FROM hosts WHERE id = ${params.id}`;
  },

  post: (params, callbacks) => {

    var query = `INSERT `;
  }
};