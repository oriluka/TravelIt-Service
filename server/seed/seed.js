const { Host, Area } = require('./Schema.js');
const faker = require('faker');
const urls = require('./e3urls.js');

// Define functions

var createHostsData = function() {
  // for (let i = 0; i < 10; i++) {
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
    let zip = faker.address.zipCode().slice(0, 5);
    zips.push(zip);
    host.zip = zip;
    host.name = faker.name.firstName();

    host.image = 'https://sdc-mtservice.s3.amazonaws.com/hosts/' + links.hosts[Math.floor(Math.random() * links.hosts.length)];
    host.city = faker.address.city();
    host.state = faker.address.stateAbbr();
    host.body = faker.lorem.paragraphs();
    host.interaction = faker.lorem.paragraph();
    host.monthJoined = faker.date.month();
    host.yearJoined = 2020 - Math.floor(Math.random() * 11);
    host.review = Math.floor(Math.random() * 500);
    host.rules.body = faker.lorem.paragraphs();
    host.location.body = faker.lorem.paragraphs();
    hosts.push(host);
  // }
};

var createAreasData = function() {
  // for (let i = 0; i < zips.length; i++) {
    let area = {
      zip: '',
      properties: [],
      thingsToDo: []
    };
    area.zip = zips[Math.floor(Math.random() * 10)];
    area.properties = [];
    area.thingsToDo = [];
    for (let j = 0; j < 6; j++) {
      let prop = {
        propType: '',
        image: '',
        ratings: '',
        review: '',
        description: '',
        cost: ''
      };
      let things = {
        image: '',
        thingsType: '',
        description: '',
        cost: ''
      };
      prop.propType = faker.lorem.words();
      prop.image = 'https://sdc-mtservice.s3.amazonaws.com/properties/' + links.properties[Math.floor(Math.random() * links.properties.length)];
      prop.ratings = Math.random() * 5;
      prop.review = Math.floor(Math.random() * 500);
      prop.description = faker.lorem.words();
      prop.cost = Math.floor(Math.random() * 250) + '$/night';
      area.properties.push(prop);

      things.image = 'https://sdc-mtservice.s3.amazonaws.com/things/' + links.things[Math.floor(Math.random() * links.things.length)];
      things.thingsType = faker.lorem.word();
      things.description = faker.lorem.words();
      things.cost = Math.floor(Math.random() * 150) + '$/person';
      area.thingsToDo.push(things);
    }
    areas.push(area);

};


// Retrieve links from s3
var links;

urls.getUrls(function(retrieved) {
  // Links now is the object that contains all url info.
  links = retrieved;

  // Now start creating stuf
  for (var y = 0; y < 10000; y ++) {
    const zips = [];
    const hosts = [];
    const areas = [];
    const propertyImages = links.properties;
    const thingsImages = links.thing;
    const hostImages = links.hosts;

    for (var z = 0; z < 1000; z ++) {
      createHostsData();
      createAreasData();
    }

    /////// Add data to database ////

    Host.create(hosts, (err, docs) => {
      if (err) {
        console.log(err);
      }
    });

    Area.create(areas, (err, docs) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
