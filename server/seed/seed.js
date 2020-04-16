const fs = require('fs');
const info = require('./e3urls.js');

const faker = require('faker');


const writeHosts = fs.createWriteStream('maxhosts2.csv');

writeHosts.write('zip,name,image,city,state,body,interaction,superhost,verified,monthJoined,yearJoined,review,rulesCheckin,rulesCheckout,rulesBody,locationBody,locationGettingAround\n', 'utf8');

const writePropsAndThings = fs.createWriteStream('miniprops.csv');

writePropsAndThings.write('zip,propType,propImage,propRating,propReview,propDescription,propCost,thingImage,thingType,thingDescription,thingCost\n', 'utf8');

const write10Mil = async (writer, writer2, encoding, callback) => {

  let i = 5000000;
  let ok = true;

  var links = {
    properties: [],
    hosts: [],
    things: []
  }
  await info.getUrls.then((data) => {
    //console.log(JSON.stringify(data.contents));
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
    // console.log(JSON.stringify(links));
    // console.log('/////////////////////////////')
    // console.log('Done retrieving links');

  })
    .catch((err) => {
      console.log('ERRRRR')
      console.log(err);
    });

  function writeStuff() {


    do {
      let host = {
        zip: 0,
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

      let propAndThing = {
        zip: 0,
        propType: '',
        propImage: '',
        propRating: '',
        propReview: '',
        propDescription: '',
        propCost: '',
        thingImage: '',
        thingType: '',
        thingDescription: '',
        thingCost: ''
      }

      if (i / 100000 === 5 || i / 100000 === 10 || i / 100000 === 15 || i / 100000 === 25  || i / 100000 === 35 || i / 100000 === 40 || i / 100000 === 45) {
        console.log(i)
      }

      // Log percentages
      console.log(i)

      const zips = [];
      const hosts = [];
      const areas = [];
      const propertyImages = links.properties;
      const thingImages = links.things;
      const hostImages = links.hosts;


      host.zip = Number(faker.address.zipCode().slice(0, 5));
      host.name = faker.name.firstName();

      // Generate random Host data
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

      // Generate random prop data
      for (var j = 0; j < 1; j ++) {

        propAndThing.propType = faker.lorem.words();
        propAndThing.propImage = 'https://sdc-mtservice.s3.amazonaws.com/' + propertyImages[Math.floor(Math.random() * propertyImages.length)];
        propAndThing.propRatings = Math.random() * 5;
        propAndThing.propReview = Math.floor(Math.random() * 500);
        propAndThing.propDescription = faker.lorem.words();
        propAndThing.propCost = Math.floor(Math.random() * 250) + '$/night';

        propAndThing.thingImage = 'https://sdc-mtservice.s3.amazonaws.com/' + thingImages[Math.floor(Math.random() * thingImages.length)];
        propAndThing.thingType = faker.lorem.word();
        propAndThing.thingDescription = faker.lorem.words();
        propAndThing.thingCost = Math.floor(Math.random() * 150) + '$/person';

        const data2 = `${host.zip}^${propAndThing.propType}^${propAndThing.propImage}^${propAndThing.propRating}^${propAndThing.propReview}^${propAndThing.propDescription}^${propAndThing.propCost}^${propAndThing.thingImage}^${propAndThing.thingType}^${propAndThing.thingDescription}^${propAndThing.thingCost}\n`;

        writer2.write(data2, encoding);

      }


      const data = `${host.zip}^${host.name}^${host.image}^${host.city}^${host.state}^${host.body}^${host.interaction}^${host.superhost}^${host.verified}^${host.monthJoined}^${host.yearJoined}^${host.review}^${host.rules.checkin}^${host.rules.checkout}^${host.rules.body}^${host.location.body}^${host.location.gettingAround}\n`;



      if (i === 0) {
        writer.write(data, encoding, callback);

      } else {

        ok = writer.write(data, encoding);

      }



    } while (i > 0 && ok);

    if (i > 0) {
      writer.once('drain', writeStuff)

    }

  };
  writeStuff()

};

write10Mil(writeHosts, writePropsAndThings, 'utf-8', async () => {

  writeHosts.end();
  writePropsAndThings.end();
  console.log('DONE')
});
