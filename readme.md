MYSQL Schema

Pilot - 'Black History Month'
var connection =
Tags = '#BHM #RadOne'

Make script to scrape:
retweets: https://twitter.com/elonmusk/status/1371549960030842893/retweets
likes: https://twitter.com/elonmusk/status/1371549960030842893/likes

Retweet request url: https://twitter.com/i/api/graphql/pBu3jQwyMNVMEF9DNN9prQ/Retweeters?variables=%7B%22tweetId%22%3A%221371549960030842893%22%2C%22count%22%3A80%2C%22withHighlightedLabel%22%3Afalse%2C%22withTweetQuoteCount%22%3Afalse%2C%22includePromotedContent%22%3Atrue%2C%22withTweetResult%22%3Afalse%2C%22withUserResults%22%3Afalse%2C%22withNonLegacyCard%22%3Atrue%7D

Database: twitter

Table: tweets
  -id
  -created
  -author_id
  -text
  -other_tags
  -links
  -attachments
  -referenced_tweet
  -public_metrics
  -private_metrics (if possible)
  -lat
  -long
  -language

Table: users
  -id
  -username
  -followers
