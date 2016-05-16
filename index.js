var Slackbot = require('slackbots')
var express = require('express')
var http = require('http').Server(express);

//  we need express to stop Heroku crashing on 404
express.set('port', (process.env.PORT || 5000));

express.on('/', function(req, res) {
  res.send('<h1>Winter is coming</h1>')
})

express.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})

//  Slackbot
var bot = new Slackbot({
  token: process.env.SLACK_API_TOKEN,
  name: "Bot of Thrones"
})

bot.on('start', function() {
  var params = {
    as_user: false,
    icon_url: 'https://raw.githubusercontent.com/davekinkead/davekinkead.github.io/master/media/ygritte.jpg'
  }

  bot.postMessage('#sandpit', 'Winter is coming...', params)

  bot.on('message', function(data) {
      // all ingoing events https://api.slack.com/rtm
      console.log(data);
  })
})

bot.on('message', function(data) {
    // all ingoing events https://api.slack.com/rtm
    console.log(data);
})