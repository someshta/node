require("dotenv").config();
var keys = require("./keys");

var Spotify = require("spotify-web-api-js");
var s = new Spotify();

s.setAccessToken(keys.spotify.id);

s.searchTracks("Love").then(
  function(data) {
    console.log('Search by "Love"', data);
  },
  function(err) {
    console.error(err);
  }
);

//https://www.npmjs.com/package/twitter
