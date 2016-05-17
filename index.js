var Slackbot = require('slackbots')
var express = require('express')()
var http = require('http').Server(express)

var Ygritte = {
  params: {
    as_user: false,
    icon_url: 'https://raw.githubusercontent.com/davekinkead/davekinkead.github.io/master/media/ygritte.jpg'
  }
}

var JohnSnow = {
  params: {
    as_user: false,
    username: 'John Snow',
    icon_url: 'https://avatars3.githubusercontent.com/u/611877?v=3&s=460'
  }
}

//  Slackbot
var bot = new Slackbot({
  token: process.env.SLACK_API_TOKEN,
  name: "Bot of Thrones"
})

bot.on('start', function() {

  bot.postMessage('#sandpit', 'Winter is coming...', Ygritte.params)
    .fail(function(data) {
      console.log('Failed to connect somehow...')
      console.log(data)
    })
})

bot.on('message', function(data) {
  console.log(data);

  if (data.type === 'message' && data.subtype !== 'bot_message') {
    bot.postMessage('#sandpit', 'You said..' + data.text, JohnSnow.params)
  }
})


//  we need express to stop Heroku crashing on 404
express.set('port', process.env.PORT || 5000)

express.get('/', function(req, res) {
  res.send('<h1>Winter is coming...</h1>')
})

express.listen(express.get('port'), function() {
  console.log('Node app is running on port', express.get('port'))
})