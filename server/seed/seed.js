const urls = require('./e3urls.js');



var links;

urls.getUrls(function(retrieved) {
  // Links now is the object that contains all url info.
  links = retrieved;
});

