require("dotenv").config();
var Twitter = require('twitter')
var Spotify = require('node-spotify-api')
var keys = require('./keys.js')
var request = require('request');
var userCommand = process.argv[2];
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// console.log(keys.twitter)
 
switch(userCommand) {

  case "my-tweets":
    twitterTweets()
    break;

  case "spotify-this-song":
    spotifyThis()
    break;

  case "movie-this":
    movieThis()
    break;

  case "do-what-it-says":
    // doWhatItSays()
  break;

  default:
    console.log("Try Something New");
}
// Twitter

function twitterTweets() {

  var params = {screen_name: 'DalaiLama'};
client.get('statuses/user_timeline', params, function (error, tweets, response) {
  if (error) {
    console.log(error);
  }

  // console.log(tweets)
  for (var i = 0; i < tweets.length; i++) {
    console.log (tweets[i].text);
  }
  })
}

// spotify

function spotifyThis(){
  spotify.search({ type: 'track', query: "despacito" }, function(err, data) {
    if (err) {
      console.log('Error occurred: ' + err);
      return;
    }
    else {
      // Artist(s)-song's name -preview link of the song-album that the song is from
    for (i=0; i<data.tracks.items.length; i++){
    console.log('');
    console.log("Artist Name: " + data.tracks.items[i].artists[0].name);
    console.log("Track Name: " + data.tracks.items[i].name);
    console.log("Album Name: " + data.tracks.items[i].album.name);
    console.log("Preview Link: " + data.tracks.items[i].preview_url);
        }
      }
  });
};
//  Movie 

function movieThis(){

	// var movieName = userInput;
	// if(!movieName){
	// 	movieName = "mr nobody";
  // }
  var movieName = "";

	// var params = movieName;

	var movieQueryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

	request(movieQueryUrl, function(error, response, body){

	  
	if (process.argv[3]){

    var movieResponse = "\n" + "--------------------- " + JSON.parse(body).Title + " ----------------------" + "\n" + 
    "Year: " + JSON.parse(body).Year  + "\n" + 
    "IMDB Rating: " + JSON.parse(body).imdbRating + "\n" + 
    "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\n" + 
    "Country: " + JSON.parse(body).Country + "\n" + 
    "Language: " + JSON.parse(body).Language + "\n" + 
    "Plot: " + JSON.parse(body).Plot + "\n" + 
    "Actors: " + JSON.parse(body).Actors + "\n" + "\n" +
    "-----------------------------------------------------" + "\n";

        console.log(movieResponse);


		}
		
	else {
    console.log("No movie entered");
    }
	});
}

//Do what it says function

function doWhatItSays(){

fs.readFile("random.txt", "utf8", function(error, data){
		if (error) {
			return console.log(error);
		}

		// split data to get user input
		var data = data.split(",");
		userinput = data[0];
		specify = data[1];

		// user input logic
		if (userinput == "my-tweets") {
			myTweets();
		} else if (userinput == "spotify-this-song") {
			findSong();
		} else if (userinput == "movie-this") {
			findMovie();
		} else {
			console.log("Try Something New");
		}
	});
}