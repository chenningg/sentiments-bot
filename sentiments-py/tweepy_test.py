import tweepy
import csv
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Access Twitter API
auth = tweepy.AppAuthHandler(os.getenv("TWITTER_KEY"), os.getenv("TWITTER_SECRET"))
api = tweepy.API(auth)

tweets = tweepy.Cursor(api.search, q='tesla').items(5000)

with open('tweets.csv', mode='w', newline='', encoding='utf-8') as tweets_file:
    tweets_writer = csv.writer(tweets_file, delimiter=',')
    tweets_writer.writerow(['user_id', 'username', 'tweet', 'ticker', 'stock_name'])

    for tweet in tweets:
        tweets_writer.writerow([tweet.user.id_str, tweet.user.screen_name, tweet.text, "TSLA", "Tesla"])