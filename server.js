const Twitter = require('twitter-v2')
const mysql = require('mysql')

const client = new Twitter({
  bearer_token: 'AAAAAAAAAAAAAAAAAAAAAL28NgEAAAAACcfmoDaF5uoF0gkHBUhnXLibdUM%3D7haLn1q0CKqx9N0VswPkpidtfKEBxf5jHKNoOzqG7df7kcOld3',
})

client.get('tweets/search/recent?tweet.fields=id,text,attachments,author_id,created_at,entities,geo,lang,public_metrics,referenced_tweets', {
  query: '#eisc'
}).then((resolved) => {
  console.log('resolved')
  console.log(resolved)
}, (rejected) => {
  console.log('rejected')
  console.log(rejected)
})

// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'ianneedswork',
//   database: 'twitter'
// })
//
// connection.connect();
//
// connection.end()
