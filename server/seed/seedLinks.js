const { Host, Area } = require('../models/Schema.js');
const fs = require('fs');
const faking = require('./seedFaker.js');
const info = require('./e3urls.js');


////////// Retrieve links from s3 ////
var s3links;

module.exports = info.getUrls(function(retrieved) {
  // Links now is the object that contains all url info.
  s3links = retrieved;
  // for (var y = 0; y < 10; y++) {
  // const zips = [];
  // const hosts = [];
  // const areas = [];
  const propertyImages = s3links.properties;
  const thingsImages = s3links.things;
  const hostImages = s3links.hosts;

  faking();




  // Host.create(hosts, (err, docs) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('Success creating host!');
  //   }
  // });

  // Area.create(areas, (err, docs) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('Success creating areas!');
  //   }
  // });
});
