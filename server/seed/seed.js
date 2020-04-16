const fs = require('fs');

const faker = require('faker');



  var links = {
    properties: ["properties/1005-420x270.jpg", "properties/101-420x270.jpg", "properties/1014-420x270.jpg", "properties/102-420x270.jpg", "properties/1020-420x270.jpg", "properties/1029-420x270.jpg", "properties/1031-420x270.jpg", "properties/1040-420x270.jpg", "properties/1044-420x270.jpg", "properties/1051-420x270.jpg", "properties/1059-420x270.jpg", "properties/106-420x270 (1).jpg", "properties/106-420x270.jpg", "properties/1060-420x270.jpg", "properties/1068-420x270.jpg", "properties/1069-420x270.jpg", "properties/1076-420x270.jpg", "properties/1081-420x270.jpg", "properties/114-420x270.jpg", "properties/122-420x270.jpg", "properties/125-420x270.jpg", "properties/129-420x270.jpg", "properties/13-420x270.jpg", "properties/131-420x270.jpg", "properties/134-420x270.jpg", "properties/143-420x270.jpg", "properties/15-420x270.jpg", "properties/151-420x270.jpg", "properties/152-420x270.jpg", "properties/156-420x270.jpg", "properties/157-420x270.jpg", "properties/161-420x270.jpg", "properties/162-420x270.jpg", "properties/163-420x270.jpg", "properties/165-420x270.jpg", "properties/166-420x270.jpg", "properties/167-420x270.jpg", "properties/17-420x270.jpg", "properties/174-420x270.jpg", "properties/176-420x270.jpg", "properties/177-420x270.jpg", "properties/188-420x270.jpg", "properties/192-420x270.jpg", "properties/20-420x270.jpg", "properties/200-420x270.jpg", "properties/210-420x270.jpg", "properties/217-420x270.jpg", "properties/223-420x270.jpg", "properties/228-420x270.jpg", "properties/241-420x270.jpg", "properties/247-420x270.jpg", "properties/248-420x270.jpg", "properties/249-420x270 (1).jpg", "properties/249-420x270.jpg", "properties/254-420x270.jpg", "properties/257-420x270.jpg", "properties/259-420x270.jpg", "properties/270-420x270.jpg", "properties/273-420x270.jpg", "properties/278-420x270.jpg", "properties/289-420x270.jpg", "properties/299-420x270.jpg", "properties/30-420x270.jpg", "properties/306-420x270.jpg", "properties/307-420x270.jpg", "properties/308-420x270.jpg", "properties/311-420x270.jpg", "properties/312-420x270.jpg", "properties/316-420x270.jpg", "properties/317-420x270.jpg", "properties/318-420x270.jpg", "properties/322-420x270.jpg", "properties/324-420x270.jpg", "properties/329-420x270.jpg", "properties/34-420x270.jpg", "properties/351-420x270.jpg", "properties/356-420x270.jpg", "properties/357-420x270.jpg", "properties/361-420x270 (1).jpg", "properties/361-420x270.jpg", "properties/368-420x270.jpg", "properties/373-420x270.jpg", "properties/375-420x270.jpg", "properties/386-420x270.jpg", "properties/393-420x270.jpg", "properties/395-420x270.jpg", "properties/396-420x270.jpg", "properties/398-420x270.jpg", "properties/400-420x270.jpg", "properties/408-420x270.jpg", "properties/418-420x270.jpg", "properties/421-420x270.jpg", "properties/425-420x270.jpg", "properties/444-420x270.jpg", "properties/446-420x270.jpg", "properties/45-420x270.jpg", "properties/451-420x270.jpg", "properties/453-420x270.jpg", "properties/454-420x270.jpg", "properties/457-420x270.jpg", "properties/47-420x270.jpg", "properties/474-420x270.jpg", "properties/477-420x270.jpg", "properties/512-420x270.jpg", "properties/524-420x270.jpg", "properties/528-420x270.jpg", "properties/53-420x270.jpg", "properties/537-420x270.jpg", "properties/538-420x270.jpg", "properties/542-420x270 (1).jpg", "properties/542-420x270.jpg", "properties/556-420x270.jpg", "properties/559-420x270.jpg", "properties/560-420x270.jpg", "properties/564-420x270.jpg", "properties/573-420x270.jpg", "properties/58-420x270.jpg", "properties/585-420x270.jpg", "properties/590-420x270.jpg", "properties/591-420x270.jpg", "properties/620-420x270 (1).jpg", "properties/620-420x270 (2).jpg", "properties/620-420x270.jpg", "properties/621-420x270.jpg", "properties/623-420x270.jpg", "properties/643-420x270.jpg", "properties/648-420x270.jpg", "properties/651-420x270.jpg", "properties/656-420x270.jpg", "properties/659-420x270.jpg", "properties/663-420x270.jpg", "properties/671-420x270.jpg", "properties/677-420x270.jpg", "properties/680-420x270.jpg", "properties/685-420x270.jpg", "properties/688-420x270.jpg", "properties/689-420x270.jpg", "properties/7-420x270.jpg", "properties/703-420x270.jpg", "properties/724-420x270.jpg", "properties/735-420x270.jpg", "properties/739-420x270.jpg", "properties/743-420x270.jpg", "properties/760-420x270.jpg", "properties/777-420x270.jpg", "properties/780-420x270.jpg", "properties/784-420x270.jpg", "properties/791-420x270.jpg", "properties/800-420x270.jpg", "properties/808-420x270.jpg", "properties/816-420x270.jpg", "properties/820-420x270.jpg", "properties/822-420x270.jpg", "properties/827-420x270.jpg", "properties/835-420x270.jpg", "properties/842-420x270.jpg", "properties/846-420x270.jpg", "properties/853-420x270.jpg", "properties/861-420x270.jpg", "properties/866-420x270.jpg", "properties/868-420x270.jpg", "properties/884-420x270.jpg", "properties/89-420x270.jpg", "properties/891-420x270.jpg", "properties/906-420x270.jpg", "properties/908-420x270.jpg", "properties/910-420x270.jpg", "properties/913-420x270.jpg", "properties/94-420x270.jpg", "properties/941-420x270.jpg", "properties/942-420x270.jpg", "properties/948-420x270.jpg", "properties/96-420x270.jpg", "properties/961-420x270.jpg", "properties/966-420x270.jpg", "properties/977-420x270.jpg", "properties/981-420x270.jpg", "properties/99-420x270.jpg", "properties/city-q-c-280-180-10.jpg", "properties/city-q-c-280-180-4.jpg", "properties/city-q-c-420-270-3.jpg", "properties/city-q-c-420-270-8.jpg", "properties/city-q-c-420-270-9.jpg", "properties/nightlife-q-c-420-270-2.jpg", "properties/nightlife-q-c-420-270-6.jpg", "properties/nightlife-q-c-420-270-7.jpg", "properties/placeimg_420_270_arch (1).jpg", "properties/placeimg_420_270_arch (2).jpg", "properties/placeimg_420_270_arch (3).jpg", "properties/placeimg_420_270_arch (4).jpg", "properties/placeimg_420_270_arch (5).jpg", "properties/placeimg_420_270_arch (6).jpg", "properties/placeimg_420_270_arch (7).jpg", "properties/placeimg_420_270_arch (8).jpg", "properties/placeimg_420_270_arch (9).jpg", "properties/placeimg_420_270_arch.jpg", "properties/placeimg_420_270_nature (1).jpg", "properties/placeimg_420_270_nature (2).jpg", "properties/placeimg_420_270_nature (3).jpg", "properties/placeimg_420_270_nature (4).jpg", "properties/placeimg_420_270_nature (5).jpg", "properties/placeimg_420_270_nature (6).jpg", "properties/placeimg_420_270_nature (7).jpg", "properties/placeimg_420_270_nature.jpg", "properties/sports-q-c-420-270-1.jpg", "properties/sports-q-c-420-270-10.jpg", "properties/sports-q-c-420-270-2.jpg", "properties/sports-q-c-420-270-3.jpg", "properties/transport-q-c-420-270-1.jpg", "properties/transport-q-c-420-270-4.jpg", "properties/transport-q-c-420-270-6.jpg", "properties/transport-q-c-420-270-7.jpg"],

    things: ["things/1005-420x270.jpg", "things/101-420x270.jpg", "things/1014-420x270.jpg", "things/102-420x270.jpg", "things/1020-420x270.jpg", "things/1029-420x270.jpg", "things/1031-420x270.jpg", "things/1040-420x270.jpg", "things/1044-420x270.jpg", "things/1051-420x270.jpg", "things/1059-420x270.jpg", "things/106-420x270 (1).jpg", "things/106-420x270.jpg", "things/1060-420x270.jpg", "things/1068-420x270.jpg", "things/1069-420x270.jpg", "things/1076-420x270.jpg", "things/1081-420x270.jpg", "things/114-420x270.jpg", "things/122-420x270.jpg", "things/125-420x270.jpg", "things/129-420x270.jpg", "things/13-420x270.jpg", "things/131-420x270.jpg", "things/134-420x270.jpg", "things/143-420x270.jpg", "things/15-420x270.jpg", "things/151-420x270.jpg", "things/152-420x270.jpg", "things/156-420x270.jpg", "things/157-420x270.jpg", "things/161-420x270.jpg", "things/162-420x270.jpg", "things/163-420x270.jpg", "things/165-420x270.jpg", "things/166-420x270.jpg", "things/167-420x270.jpg", "things/17-420x270.jpg", "things/174-420x270.jpg", "things/176-420x270.jpg", "things/177-420x270.jpg", "things/188-420x270.jpg", "things/192-420x270.jpg", "things/20-420x270.jpg", "things/200-420x270.jpg", "things/210-420x270.jpg", "things/217-420x270.jpg", "things/223-420x270.jpg", "things/228-420x270.jpg", "things/241-420x270.jpg", "things/247-420x270.jpg", "things/248-420x270.jpg", "things/249-420x270 (1).jpg", "things/249-420x270.jpg", "things/254-420x270.jpg", "things/257-420x270.jpg", "things/259-420x270.jpg", "things/270-420x270.jpg", "things/273-420x270.jpg", "things/278-420x270.jpg", "things/289-420x270.jpg", "things/299-420x270.jpg", "things/30-420x270.jpg", "things/306-420x270.jpg", "things/307-420x270.jpg", "things/308-420x270.jpg", "things/311-420x270.jpg", "things/312-420x270.jpg", "things/316-420x270.jpg", "things/317-420x270.jpg", "things/318-420x270.jpg", "things/322-420x270.jpg", "things/324-420x270.jpg", "things/329-420x270.jpg", "things/34-420x270.jpg", "things/351-420x270.jpg", "things/356-420x270.jpg", "things/357-420x270.jpg", "things/361-420x270 (1).jpg", "things/361-420x270.jpg", "things/368-420x270.jpg", "things/373-420x270.jpg", "things/375-420x270.jpg", "things/386-420x270.jpg", "things/393-420x270.jpg", "things/395-420x270.jpg", "things/396-420x270.jpg", "things/398-420x270.jpg", "things/400-420x270.jpg", "things/408-420x270.jpg", "things/418-420x270.jpg", "things/421-420x270.jpg", "things/425-420x270.jpg", "things/444-420x270.jpg", "things/446-420x270.jpg", "things/45-420x270.jpg", "things/451-420x270.jpg", "things/453-420x270.jpg", "things/454-420x270.jpg", "things/457-420x270.jpg", "things/47-420x270.jpg", "things/474-420x270.jpg", "things/477-420x270.jpg", "things/5-420x270.jpg", "things/512-420x270.jpg", "things/524-420x270.jpg", "things/528-420x270.jpg", "things/53-420x270.jpg", "things/537-420x270.jpg", "things/538-420x270.jpg", "things/542-420x270 (1).jpg", "things/542-420x270.jpg", "things/556-420x270.jpg", "things/559-420x270.jpg", "things/560-420x270.jpg", "things/564-420x270.jpg", "things/573-420x270.jpg", "things/58-420x270.jpg", "things/585-420x270.jpg", "things/590-420x270.jpg", "things/591-420x270.jpg", "things/620-420x270 (1).jpg", "things/620-420x270 (2).jpg", "things/620-420x270.jpg", "things/621-420x270.jpg", "things/623-420x270.jpg", "things/643-420x270.jpg", "things/648-420x270.jpg", "things/651-420x270.jpg", "things/656-420x270.jpg", "things/659-420x270.jpg", "things/663-420x270.jpg", "things/671-420x270.jpg", "things/677-420x270.jpg", "things/680-420x270.jpg", "things/685-420x270.jpg", "things/688-420x270.jpg", "things/689-420x270.jpg", "things/703-420x270.jpg", "things/724-420x270.jpg", "things/735-420x270.jpg", "things/739-420x270.jpg", "things/743-420x270.jpg", "things/760-420x270.jpg", "things/777-420x270.jpg", "things/780-420x270.jpg", "things/784-420x270.jpg", "things/791-420x270.jpg", "things/800-420x270.jpg", "things/808-420x270.jpg", "things/816-420x270.jpg", "things/820-420x270.jpg", "things/822-420x270.jpg", "things/827-420x270.jpg", "things/835-420x270.jpg", "things/842-420x270.jpg", "things/846-420x270.jpg", "things/853-420x270.jpg", "things/861-420x270.jpg", "things/866-420x270.jpg", "things/868-420x270.jpg", "things/884-420x270.jpg", "things/89-420x270.jpg", "things/891-420x270.jpg", "things/906-420x270.jpg", "things/908-420x270.jpg", "things/910-420x270.jpg", "things/913-420x270.jpg", "things/94-420x270.jpg", "things/941-420x270.jpg", "things/942-420x270.jpg", "things/948-420x270.jpg", "things/96-420x270.jpg", "things/961-420x270.jpg", "things/966-420x270.jpg", "things/977-420x270.jpg", "things/981-420x270.jpg", "things/99-420x270.jpg", "things/city-q-c-280-180-10.jpg", "things/city-q-c-280-180-4.jpg", "things/city-q-c-420-270-3.jpg", "things/city-q-c-420-270-8.jpg", "things/city-q-c-420-270-9.jpg", "things/nightlife-q-c-420-270-2.jpg", "things/nightlife-q-c-420-270-6.jpg", "things/nightlife-q-c-420-270-7.jpg", "things/placeimg_420_270_arch (1).jpg", "things/placeimg_420_270_arch (2).jpg", "things/placeimg_420_270_arch (3).jpg", "things/placeimg_420_270_arch (4).jpg", "things/placeimg_420_270_arch (5).jpg", "things/placeimg_420_270_arch (6).jpg", "things/placeimg_420_270_arch (7).jpg", "things/placeimg_420_270_arch (8).jpg", "things/placeimg_420_270_arch (9).jpg", "things/placeimg_420_270_arch.jpg", "things/placeimg_420_270_nature (1).jpg", "things/placeimg_420_270_nature (2).jpg", "things/placeimg_420_270_nature (3).jpg", "things/placeimg_420_270_nature (4).jpg", "things/placeimg_420_270_nature (5).jpg", "things/placeimg_420_270_nature (6).jpg", "things/placeimg_420_270_nature (7).jpg", "things/placeimg_420_270_nature.jpg", "things/sports-q-c-420-270-1.jpg", "things/sports-q-c-420-270-10.jpg", "things/sports-q-c-420-270-2.jpg", "things/sports-q-c-420-270-3.jpg", "things/transport-q-c-420-270-1.jpg", "things/transport-q-c-420-270-4.jpg", "things/transport-q-c-420-270-6.jpg", "things/transport-q-c-420-270-7.jpg"],



    hosts: ["hosts/1005-420x270.jpg", "hosts/1014-420x270.jpg", "hosts/102-420x270.jpg", "hosts/1020-420x270.jpg", "hosts/1023-100x100.jpg", "hosts/1031-420x270.jpg", "hosts/1039-100x100.jpg", "hosts/1044-420x270.jpg", "hosts/1045-100x100.jpg", "hosts/106-420x270 (1).jpg", "hosts/106-420x270.jpg", "hosts/1068-420x270.jpg", "hosts/1069-420x270.jpg", "hosts/114-420x270.jpg", "hosts/125-420x270.jpg", "hosts/131-420x270.jpg", "hosts/134-420x270.jpg", "hosts/137-100x100.jpg", "hosts/143-420x270.jpg", "hosts/15-420x270.jpg", "hosts/151-420x270.jpg", "hosts/152-420x270.jpg", "hosts/157-420x270.jpg", "hosts/161-420x270.jpg", "hosts/162-420x270.jpg", "hosts/163-420x270.jpg", "hosts/165-420x270.jpg", "hosts/166-420x270.jpg", "hosts/167-420x270.jpg", "hosts/168-100x100.jpg", "hosts/17-420x270.jpg", "hosts/17.jpg", "hosts/170-100x100.jpg", "hosts/173-100x100.jpg", "hosts/174-420x270.jpg", "hosts/176-420x270.jpg", "hosts/188-420x270.jpg", "hosts/192-420x270.jpg", "hosts/1H_7AxP0.jpg", "hosts/20-420x270.jpg", "hosts/200-420x270.jpg", "hosts/21-100x100.jpg", "hosts/210-420x270.jpg", "hosts/217-420x270.jpg", "hosts/223-420x270.jpg", "hosts/228-420x270.jpg", "hosts/241-420x270.jpg", "hosts/247-420x270.jpg", "hosts/249-420x270 (1).jpg", "hosts/249-420x270.jpg", "hosts/254-420x270.jpg", "hosts/257-420x270.jpg", "hosts/259-100x100.jpg", "hosts/259-420x270.jpg", "hosts/270-420x270.jpg", "hosts/273-420x270.jpg", "hosts/278-420x270.jpg", "hosts/289-420x270.jpg", "hosts/299-420x270.jpg", "hosts/30-420x270.jpg", "hosts/306-420x270.jpg", "hosts/307-420x270.jpg", "hosts/308-420x270.jpg", "hosts/311-420x270.jpg", "hosts/312-420x270.jpg", "hosts/316-420x270.jpg", "hosts/317-420x270.jpg", "hosts/318-420x270.jpg", "hosts/322-420x270.jpg", "hosts/324-420x270.jpg", "hosts/329-420x270.jpg", "hosts/34-420x270.jpg", "hosts/351-420x270.jpg", "hosts/356-420x270.jpg", "hosts/357-420x270.jpg", "hosts/361-420x270 (1).jpg", "hosts/361-420x270.jpg", "hosts/362-100x100.jpg", "hosts/363-100x100.jpg", "hosts/368-420x270.jpg", "hosts/373-420x270.jpg", "hosts/375-420x270.jpg", "hosts/377-100x100.jpg", "hosts/386-420x270.jpg", "hosts/393-420x270.jpg", "hosts/395-420x270.jpg", "hosts/396-420x270.jpg", "hosts/398-420x270.jpg", "hosts/400 (1).jpeg", "hosts/400 (2).jpeg", "hosts/400 (3).jpeg", "hosts/400 (4).jpeg", "hosts/400 (5).jpeg", "hosts/400 (6).jpeg", "hosts/400 (7).jpeg", "hosts/400 (8).jpeg", "hosts/400-420x270.jpg", "hosts/400.jpeg", "hosts/408-420x270.jpg", "hosts/418-420x270.jpg", "hosts/421-420x270.jpg", "hosts/425-420x270.jpg", "hosts/444-420x270.jpg", "hosts/446-420x270.jpg", "hosts/45-420x270.jpg", "hosts/451-420x270.jpg", "hosts/453-420x270.jpg", "hosts/457-420x270.jpg", "hosts/47-420x270.jpg", "hosts/474-420x270.jpg", "hosts/50.jpg", "hosts/509-100x100 (1).jpg", "hosts/509-100x100.jpg", "hosts/524-420x270.jpg", "hosts/528-420x270.jpg", "hosts/53-420x270.jpg", "hosts/537-420x270.jpg", "hosts/538-420x270.jpg", "hosts/542-420x270 (1).jpg", "hosts/544-100x100.jpg", "hosts/549-100x100.jpg", "hosts/556-420x270.jpg", "hosts/560-420x270.jpg", "hosts/564-420x270.jpg", "hosts/573-420x270.jpg", "hosts/58-420x270.jpg", "hosts/585-420x270.jpg", "hosts/590-420x270.jpg", "hosts/591-420x270.jpg", "hosts/620-420x270 (1).jpg", "hosts/620-420x270 (2).jpg", "hosts/620-420x270.jpg", "hosts/621-420x270.jpg", "hosts/623-420x270.jpg", "hosts/643-420x270.jpg", "hosts/648-420x270.jpg", "hosts/651-420x270.jpg", "hosts/656-420x270.jpg", "hosts/659-420x270.jpg", "hosts/660-100x100.jpg", "hosts/663-420x270.jpg", "hosts/671-420x270.jpg", "hosts/677-420x270.jpg", "hosts/680-420x270.jpg", "hosts/685-420x270.jpg", "hosts/688-420x270.jpg", "hosts/689-420x270.jpg", "hosts/703-420x270.jpg", "hosts/721-100x100.jpg", "hosts/724-420x270.jpg", "hosts/735-420x270.jpg", "hosts/739-420x270.jpg", "hosts/743-420x270.jpg", "hosts/760-420x270.jpg", "hosts/77.jpg", "hosts/777-420x270.jpg", "hosts/784-420x270.jpg", "hosts/791-420x270.jpg", "hosts/800-420x270.jpg", "hosts/808-420x270.jpg", "hosts/816-420x270.jpg", "hosts/820-420x270.jpg", "hosts/822-420x270.jpg", "hosts/827-420x270.jpg", "hosts/835-420x270.jpg", "hosts/842-420x270.jpg", "hosts/846-420x270.jpg", "hosts/853-420x270.jpg", "hosts/861-420x270.jpg", "hosts/868-420x270.jpg", "hosts/884-420x270.jpg", "hosts/89-420x270.jpg", "hosts/891-420x270.jpg", "hosts/8Q-zGQuK.jpg", "hosts/906-420x270.jpg", "hosts/910-420x270.jpg", "hosts/941-420x270.jpg", "hosts/942-420x270.jpg", "hosts/948-420x270.jpg", "hosts/96-420x270.jpg", "hosts/961-420x270.jpg", "hosts/972-100x100.jpg", "hosts/977-420x270.jpg", "hosts/981-100x100.jpg", "hosts/981-420x270.jpg", "hosts/99-420x270.jpg", "hosts/MV5BMjIyMzgxMzc5N15BMl5BanBnXkFtZTgwNDg3NzYzMDI@._V1_UY256_CR38,0,172,256_AL_.jpg", "hosts/MV5BMjMxNzIwMjg1MV5BMl5BanBnXkFtZTgwMDc2OTMxOTE@._V1_UY256_CR14,0,172,256_AL_.jpg", "hosts/MV5BMjMyMzA1MTY2MV5BMl5BanBnXkFtZTgwMzIyNzQ3MDE@._V1_UY256_CR21,0,172,256_AL_.jpg", "hosts/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY256_CR2,0,172,256_AL_.jpg", "hosts/MV5BODM5NzU4MTI4OF5BMl5BanBnXkFtZTgwNDczMDU5ODE@._V1_UX172_CR0,0,172,256_AL_.jpg", "hosts/Photo_14.jpg", "hosts/R4dl8Rb.jpg", "hosts/a2awzVm.jpg", "hosts/bUkmHPKs.jpg", "hosts/m10.png", "hosts/photo-1476956207128-beccf17c1771.jpeg", "hosts/photo-1496203695688-3b8985780d6a.jpeg", "hosts/photo-1496213618739-f4b603bf4623.jpeg", "hosts/photo-1507003211169-0a1dd7228f2d.jpeg", "hosts/photo-1513732822839-24f03a92f633.jpeg", "hosts/photo-1534385842125-8c9ad0bd123c.jpeg"]
  }

const writeHosts = fs.createWriteStream('test.csv');

writeHosts.write('zip,name,image,city,state,body,interaction,superhost,verified,monthJoined,yearJoined,review,rulesCheckin,rulesCheckout,rulesBody,locationBody,locationGettingAround\n', 'utf8');

const writePropsAndThings = fs.createWriteStream('test2.csv');

writePropsAndThings.write('zip,propType,propImage,propRating,propReview,propDescription,propCost,thingImage,thingType,thingDescription,thingCost\n', 'utf8');

const write10Mil = async (writer, writer2, encoding, callback) => {


  function writeStuff() {

    let i = 5;
    let ok = true;

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
      i --
      if (i / 100000 === 5 || i / 100000 === 10 || i / 100000 === 15 || i / 100000 === 25  || i / 100000 === 35 || i / 100000 === 40 || i / 100000 === 45) {
        console.log(i)
      }

      // Log percentages


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
