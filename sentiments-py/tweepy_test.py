import tweepy
import csv

consumer_key = "9gTvndP8c0qRFJlnJfWmVScj3"
consumer_secret = "2jt3deq3Uenr9pO6DH0CB6cEWd8UVGH7D0fuZ8GBjp7ukhPvB1"

auth = tweepy.AppAuthHandler(consumer_key, consumer_secret)
# Uncomment if need to access Twitter account
# auth.set_access_token(access_token, access_token_secret)

# Access Twitter api
api = tweepy.API(auth)

tweets = tweepy.Cursor(api.search, q='tesla').items(200)

with open('tweets.csv', mode='w', newline='', encoding='utf-8') as tweets_file:
    tweets_writer = csv.writer(tweets_file, delimiter=',')
    tweets_writer.writerow(['user_id', 'username', 'tweet', 'ticker', 'stock_name'])

    for tweet in tweets:
        tweets_writer.writerow([tweet.user.id_str, tweet.user.screen_name, tweet.text, "TSLA", "Tesla"])