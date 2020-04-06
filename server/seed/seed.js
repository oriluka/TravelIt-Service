const fs = require('fs');
const info = require('./e3urls.js');

const faker = require('faker');


const writeHosts = fs.createWriteStream('hosts2.csv');

writeHosts.write('id,zip,name,image,city,state,body,interaction,superhost,verified,monthJoined,yearJoined,review,rulesCheckin,rulesCheckout,rulesBody,locationBody,locationGettingAround\n', 'utf8');

const write10Mil = async (writer, encoding, callback) => {

  let i = 5000000;
  let ok = true;

  var links = {
    properties: [],
    hosts: [],
    things: []
  }
  await info.getUrls.then((data) => {

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


    do {
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

      // Log percentages
      if (i % 500000  === 10) {
        console.log(i/50000)
      }
      // if (i === 9950000) {
      //   console.log('1%')
      // }
      // if (i === 9500000) {
      //   console.log('10%')
      // }
      // if (i === 9000000) {
      //   console.log('20%')
      // }
      // if (i === 7500000) {
      //   console.log('50%')
      // }
      // if (i === 6250000) {
      //   console.log('75%')
      // }
      // if (i === 5050000) {
      //   console.log('99%')
      // }

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



      const data = `${i}^${host.zip}^${host.name}^${host.image}^${host.city}^${host.state}^${host.body}^${host.interaction}^${host.superhost}^${host.verified}^${host.monthJoined}^${host.yearJoined}^${host.review}^${host.rules.checkin}^${host.rules.checkout}^${host.rules.body}^${host.location.body}^${host.location.gettingAround}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);

      } else {
        ok = writer.write(data, encoding);

      }



    } while (i > 0 && ok);

    if (i > 0) {
      writer.once('drain', write)

    }

  };
  write();
};

write10Mil(writeHosts, 'utf-8', async () => {

  console.log('DONE')
  writeHosts.end();
});
