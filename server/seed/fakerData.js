const { Host, Area } = require('./Schema.js');
const faker = require('faker');

const zips = [];
const hosts = [];
const areas = [];
const propertyImages = [];
const thingsImages = [];
const hostImages = [];

(function getPropertyImages() {
  for (let i = 1; i < 120; i++) {
    let url = `https://fechrr.s3.amazonaws.com/properties/properties+(${i}).jpg`;
    propertyImages.push(url);
  }
})();

(function getThingsImages() {
  for (let i = 1; i < 105; i++) {
    let url = `https://fechrr.s3.amazonaws.com/things/things+(${i}).jpg`;
    thingsImages.push(url);
  }
})();

(function getHostImages() {
  for (let i = 1; i < 11; i++) {
    let url = `https://fechrr.s3.amazonaws.com/host/host+(${i}).jpg`;
    hostImages.push(url);
  }
})();

(function createHostsData() {
  for (let i = 0; i < 10; i++) {
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
    host.image = hostImages.shift();
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
  }
})();

(function createAreasData() {
  for (let i = 0; i < zips.length; i++) {
    let area = {
      zip: '',
      properties: [],
      thingsToDo: []
    };
    area.zip = zips[i];
    area.properties = [];
    area.thingsToDo = [];
    for (let j = 0; j < 10; j++) {
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
      prop.image = propertyImages.shift();
      prop.ratings = Math.random() * 5;
      prop.review = Math.floor(Math.random() * 500);
      prop.description = faker.lorem.words();
      prop.cost = Math.floor(Math.random() * 250) + '$/night';
      area.properties.push(prop);

      things.image = thingsImages.shift();
      things.thingsType = faker.lorem.word();
      things.description = faker.lorem.words();
      things.cost = Math.floor(Math.random() * 150) + '$/person';
      area.thingsToDo.push(things);
    }
    areas.push(area);
  }
})();