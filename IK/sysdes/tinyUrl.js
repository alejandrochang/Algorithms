

// Create a tiny url function encode and decode
var md5 = require("md5");

class tinyURL {
  constructor() {
    this.keys = {}; // shorturl -> md5
    this.urls = {}; // { md5 -> url }
  }

  shortenUrl(u) {

  }

  encode(url) {
    const key = md5(url);
    const short = shortenUrl(url);
    this.keys[short] = key;
    this.urls[key] = url;
    // url: google.com, key: 231231234124ksakfa
  }


  decode(shortUrl) {

  }
}



// md5 is for the unique key that will be used to retrieve the message
// 