var AWS = require('aws-sdk')
var s3 = require('aws-sdk/clients/s3');

var params = {
  Bucket: 'sdc-mtservice'
};

var s3 = new AWS.S3({ apiVersion: '2006-03-01' });


s3.listObjectsV2(params, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    for (var i = 0; i < data.Contents.length; i ++) {
      console.log(JSON.stringify(data.Contents[i].Key))
    }
  }
})

module.exports = {
  properties: [
    "properties / 1200x1200bb.jpg",
    "properties/17.jpg",
    "properties/1H_7AxP0.jpg",
    "properties/400 (1).jpeg",
    "properties/400 (2).jpeg",
    "properties/400 (3).jpeg",
    "properties/400 (4).jpeg",
    "properties/400 (5).jpeg",
    "properties/400 (6).jpeg",
    "properties/400 (7).jpeg",
    "properties/400 (8).jpeg"
    "properties/400.jpeg",
    "properties/50.jpg",
    "properties/61fCRGMOASL._SY355_.jpg",
    "properties/63a3f2bbaf7d4aa10ef8849d931591a9.jpg",
    "properties/71b30e1GGML._SL1071_.jpg",
    "properties/8Q-zGQuK.jpg"
    "properties/77.jpg",
    "properties/ABBA-Album-Covers-16.jpg",
    "properties/ABBA-Album-Covers-6.jpg",
    "properties/ABBAKnowingMeKnowingYouHappyHawaiiA.jpg",
    "properties/ABBA_-_The_Album_(Polar).jpg",
    "properties/Hits-Collection-CD2-cover.jpg",
    "properties/MV5BMjIyMzgxMzc5N15BMl5BanBnXkFtZTgwNDg3NzYzMDI@._V1_UY256_CR38,0,172,256_AL_.jpg",
    "properties/MV5BMjMxNzIwMjg1MV5BMl5BanBnXkFtZTgwMDc2OTMxOTE@._V1_UY256_CR14,0,172,256_AL_.jpg",
    "properties/MV5BMjMyMzA1MTY2MV5BMl5BanBnXkFtZTgwMzIyNzQ3MDE@._V1_UY256_CR21,0,172,256_AL_.jpg",
    "properties/MV5BNTczMzk1MjU1MV5BMl5BanBnXkFtZTcwNDk2MzAyMg@@._V1_UY256_CR2,0,172,256_AL_.jpg",
    "properties/MV5BODM5NzU4MTI4OF5BMl5BanBnXkFtZTgwNDczMDU5ODE@._V1_UX172_CR0,0,172,256_AL_.jpg",
    "properties/Mamma_Mia_Intermezzo_No_1.jpg",
    "properties/Photo_14.jpg",
    "properties/R-3365228-1505192441-2722.jpeg.jpg",
    "properties/R-465186-1155759954.jpeg.jpg",
    "properties/R4dl8Rb.jpg",
    "properties/a2awzVm.jpg",
    "properties/a7942dc139ad732d2fa2c8c0e58890fd.jpg",
    "properties/abba-mamma_mia_s_19.jpg",
    "properties/abba_the_backstage_stories_svensk_utgava-palm_carl_magnus-25470075-370230561-frntl,.jpg"
    "properties/bUkmHPKs.jpg",
    "properties/download.jpeg",
    "properties/images.jpeg",
    "properties/m10.png",
    "properties/maxresdefault.jpg",
    "properties/photo-1476956207128-beccf17c1771.jpeg",
    "properties/photo-1496203695688-3b8985780d6a.jpeg",
    "properties/photo-1496213618739-f4b603bf4623.jpeg",
    "properties/photo-1507003211169-0a1dd7228f2d.jpeg",
    "properties/photo-1513732822839-24f03a92f633.jpeg",
    "properties/photo-1534385842125-8c9ad0bd123c.jpeg",
    "properties/s-l300.jpg",
    "properties/unnamed.jpg"
  ],
  hosts: [

  ],
  things: [

  ]
}