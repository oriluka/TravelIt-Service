var AWS = require('aws-sdk')
var s3 = require('aws-sdk/clients/s3');

var params = {
  Bucket: 'sdc-mtservice'
};

var s3 = new AWS.S3({ apiVersion: '2006-03-01' });


// Object for the links to go
module.exports.info = info = {
  links: {
    properties: [],
    hosts: [],
    things: []
  },
  zips: [],
  hosts: [],
  areas: []
};



module.exports.getUrls = function(callback) {
  s3.listObjectsV2(params, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      for (var i = 0; i < data.Contents.length; i ++) {
        var key = data.Contents[i].Key;

        // Put in properties
        if (key[0] === 'p' && key[key.length - 1] !== '/') {
          info.links.properties.push(key);
        }
        // Put in hosts
        if (key[0] === 'h' && key[key.length - 1] !== '/') {
          info.links.hosts.push(key);
        }
        // Put in things
        if (key[0] === 't' && key[key.length - 1] !== '/') {
          info.links.things.push(key);
        }
      }
      console.log('Done retrieving links');
      callback(info.links)
    }
  });
};


