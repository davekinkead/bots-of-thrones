var Slackbot = require('slackbots')
var express = require('express')()
var http = require('http').Server(express)
var bots = require('./lib/bots')

//  Slackbot
var bot = new Slackbot({
  token: process.env.SLACK_API_TOKEN,
  name: "Bot of Thrones"
})

bot.on('start', function() {

  bot.postMessage('#sandpit', 'Winter is coming...', bots.characters.Eddard.params)
    .fail(function(data) {
      console.log('Failed to connect somehow...')
      console.log(data)
    })
})

bot.on('message', function(data) {
  if (data.type === 'message' && data.subtype !== 'bot_message') {
    var character = bots.doYouHaveSomethingToSay(data)
    if (character) {
      bot.postMessage('#sandpit', character.quip, character.params)
    }
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