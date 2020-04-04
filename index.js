const dotenv=require('dotenv').config();
const express = require('express');
const twitter = require('twitter');

const app = express();



//middleware
app.use((req,resp,next) => {
    console.log('Middlewae');  
    console.log("TWITTER_CONSUMER_KEY : ",process.env.TWITTER_CONSUMER_KEY); 
    console.log("TWITTER_CONSUMER_SECRET : ", process.env.TWITTER_CONSUMER_SECRET);
    console.log("TWITTER_ACCES_TOKEN_KEY : ", process.env.TWITTER_ACCES_TOKEN_KEY);
    console.log("TWITTER_ACCES_TOKEN_SECRET : ", process.env.TWITTER_ACCES_TOKEN_SECRET); 
    next();
}
);

client = new twitter ({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCES_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCES_TOKEN_SECRET
});

client.get('search/tweets',{q: 'teleton'}, (error, tweets, response) => {
    //console.log(tweets);
    tweets.statuses.forEach(tweet => {
        console.log(tweet.id, tweet.text);
        if (tweet.id=="1246527195029418000")
        {
            console.log(tweet.id, tweet.text);
            console.log(tweet);
        }
    });

});

app.listen(3000);
