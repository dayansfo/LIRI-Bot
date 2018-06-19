LIRI-Bot is a Language Interpretation and Recognition Interface. It's a powerful node.js application that runs in the terminal.

*What it does:

	- Search Spotify a song
	- Show my Tweets 
	- Search OMBD for a movie
	- Do what I say (reads text file and perform action)


*How To Use:

*For Tweets run: 
	
	node liri my-tweets
		
my-tweets This will show your last 20 tweets and when they were created at in your terminal/bash window.


*For Spotify run: 
	
	node liri spotify-this-song <'song name'> 
	
This will show the following information about the song in your terminal/bash window *Artist(s) *The song's name *A preview link of the song from Spotify *The album that the song is from

*For Movies run: 
	
	node liri movie-this <'movie name'>
	
This will output the movie title, year, IMDB rating, Rotten Tomatoes rating, country it was produce,language, 
plot and actors.

*For Do What I Say run: 
	
	node liri do-what-I-Say

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands. -It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt. 
