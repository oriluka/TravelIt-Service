const fs = require('fs');
const info = require('./e3urls.js');
// const seedLinks = require('./seedLinks.js');
// const faking = require('./seedFaker.js');
const faker = require('faker');


const writeHosts = fs.createWriteStream('hosts.csv');

writeHosts.write('zip,name,image,city,state,body,interaction,superhost,verified,monthJoined,yearJoined,review,rules,location\n', 'utf8');

const write10Mil = async (writer, encoding, callback) => {
  // console.log('1')
  var links = {
    properties: [],
    hosts: [],
    things: []
  }
  await info.getUrls.then((data) => {
    console.log('')
    // console.log(data)
    for (var i = 0; i < data.Contents.length; i++) {
      var key = data.Contents[i].Key;

      // Put in properties
      if (key[0] === 'p' && key[key.length - 1] !== '/') {
        links.properties.push(key);
      }
      // Put in hosts
      if (key[0] === 'h' && key[key.length - 1] !== '/') {
        links.hosts.push(key);
      }
      // Put in things
      if (key[0] === 't' && key[key.length - 1] !== '/') {
        links.things.push(key);
      }
    }
    console.log('Done retrieving links');
  })
    .catch((err) => {
      console.log('ERRRRR')
      console.log(err);
    });
  function write() {

    let i = 10000000;
    let j = 0;
    let ok = true;


    do {
      // run get urls etc.
      let host = {
        zip: '',
        name: '',
        image: '',
        city: '',
        state: '',
        body: '',
        interaction: '',
        superhost: 'Superhost',
        verified: 'Verified',
        monthJoined: '',
        yearJoined: '',
        review: '',
        rules: {
          checkin: '10AM - 4PM',
          checkout: '11AM',
          body: '',
        },
        location: {
          zip: '',
          body: '',
          gettingAround: 'Rental car is advisable.'
        }
      };


      i--;
      j++;
      // console.log('4')
      // var asyncFunc = info.getUrls()


      // Links now is the object that contains all url info.
      // console.log('5')
      // s3links = retrieved;
      // for (var y = 0; y < 10; y++) {
      const zips = [];
      const hosts = [];
      const areas = [];
      const propertyImages = links.properties;
      const thingsImages = links.things;
      const hostImages = links.hosts;


      host.zip = faker.address.zipCode().slice(0, 5);
      host.name = faker.name.firstName();

      host.image = 'https://sdc-mtservice.s3.amazonaws.com/' + hostImages[Math.floor(Math.random() * hostImages.length)];
      host.city = faker.address.city();
      host.state = faker.address.stateAbbr();
      host.body = faker.lorem.sentences();
      host.interaction = faker.lorem.sentences();
      host.monthJoined = faker.date.month();
      host.yearJoined = 2020 - Math.floor(Math.random() * 11);
      host.review = Math.floor(Math.random() * 500);
      host.rules.body = faker.lorem.sentences();
      host.location.body = faker.lorem.sentences();

      var jsonrules = JSON.stringify(host.rules);
      var jsonlocation = JSON.stringify(host.location)

      const data = `${host.zip},${host.name},${host.image},${host.city},${host.state},${host.body},${host.interaction},${host.superhost},${host.verified},${host.monthJoined},${host.yearJoined},${host.review},${jsonrules},${jsonlocation}\n`;

      if (i === 5000000) {
        writer.write(data, encoding, callback);

      } else {
        ok = writer.write(data, encoding);

      }

      // });
      // console.log('End s6')
      // Add counters

    } while (i > 5000000 && ok);

    if (i > 5000000) {
      writer.once('drain', write)

    }

  };
  write();
};

write10Mil(writeHosts, 'utf-8', async () => {
  // console.log('7')
  writeHosts.end();
});
