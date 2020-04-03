
const faker = require('faker');

// module.exports = function() {


  // Define functions

  module.exports = function (host, propertyImages, thingsImages, hostImages) {
    // for (let i = 0; i < 10; i++) {
    // let host = {
    //   zip: '',
    //   name: '',
    //   image: '',
    //   city: '',
    //   state: '',
    //   body: '',
    //   interaction: '',
    //   superhost: 'Superhost',
    //   verified: 'Verified',
    //   monthJoined: '',
    //   yearJoined: '',
    //   review: '',
    //   rules: {
    //     checkin: '10AM - 4PM',
    //     checkout: '11AM',
    //     body: '',
    //   },
    //   location: {
    //     zip: '',
    //     body: '',
    //     gettingAround: 'Rental car is advisable.'
    //   }
    // };
    let zip = faker.address.zipCode().slice(0, 5);
    host.zip = zip;
    host.name = faker.name.firstName();

    host.image = 'https://sdc-mtservice.s3.amazonaws.com/' + hostImages[Math.floor(Math.random() * hostImages.length)];
    host.city = faker.address.city();
    host.state = faker.address.stateAbbr();
    host.body = faker.lorem.paragraphs();
    host.interaction = faker.lorem.paragraph();
    host.monthJoined = faker.date.month();
    host.yearJoined = 2020 - Math.floor(Math.random() * 11);
    host.review = Math.floor(Math.random() * 500);
    host.rules.body = faker.lorem.paragraphs();
    host.location.body = faker.lorem.paragraphs();
    // hosts.push(host);
    // }

    return host;
  };

  // var createAreasData = function () {
  //   // for (let i = 0; i < zips.length; i++) {
  //   // let area = {
  //   //   zip: '',
  //   //   properties: [],
  //   //   thingsToDo: []
  //   // };
  //   area.zip = zips[Math.floor(Math.random() * 10)];
  //   area.properties = [];
  //   area.thingsToDo = [];
  //   for (let j = 0; j < 6; j++) {
  //     let prop = {
  //       propType: '',
  //       image: '',
  //       ratings: '',
  //       review: '',
  //       description: '',
  //       cost: ''
  //     };
  //     let things = {
  //       image: '',
  //       thingsType: '',
  //       description: '',
  //       cost: ''
  //     };
  //     prop.propType = faker.lorem.words();
  //     prop.image = 'https://sdc-mtservice.s3.amazonaws.com/' + propertyImages[Math.floor(Math.random() * propertyImages.length)];
  //     prop.ratings = Math.random() * 5;
  //     prop.review = Math.floor(Math.random() * 500);
  //     prop.description = faker.lorem.words();
  //     prop.cost = Math.floor(Math.random() * 250) + '$/night';
  //     area.properties.push(prop);

  //     things.image = 'https://sdc-mtservice.s3.amazonaws.com/' + thingsImages[Math.floor(Math.random() * thingsImages.length)];
  //     things.thingsType = faker.lorem.word();
  //     things.description = faker.lorem.words();
  //     things.cost = Math.floor(Math.random() * 150) + '$/person';
  //     area.thingsToDo.push(things);
  //   }
  //   // areas.push(area);

  // };


  // change 1 -> 1000
  // for (var z = 0; z < 1; z++) {

  // }
  // console.log(JSON.stringify(hosts));
  /////// Add data to database ////
// };