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



module.exports.getUrls =

  // function(err, data) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  s3.listObjectsV2(params).promise();

  ;





