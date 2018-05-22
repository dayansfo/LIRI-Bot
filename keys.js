console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// # Spotify API keys

// SPOTIFY_ID=1a4fdb6526c44e73b83fb60ac092ce00
// SPOTIFY_SECRET=0d89b4970a1c4043baab308fa9c2bf80

// # Twitter API keys

// TWITTER_CONSUMER_KEY=OldQSJjADQEIojUWJ4IutDV7Z 
// TWITTER_CONSUMER_SECRET=y8qDfHRdyEOVkZm4OXnV3T2259irA6NDm04P3u5BlPPXNTCTpI
// TWITTER_ACCESS_TOKEN_KEY=2390464536-mynIU85sPIj8n78MSX0IyXeeJu39JGtVu8h1jCF
// TWITTER_ACCESS_TOKEN_SECRET=hMgUEUt89mAwhJiMZjLaWXS2R2G9QlAzS1OLiGhzA0Phw