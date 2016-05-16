var Slackbot = require('slackbots')

var bot = new Slackbot({
  token: process.env.SLACK_API_TOKEN,
  name: "Bot of Thrones"
})

bot.on('start', function() {
  var params = {
    as_user: false,
    icon_url: 'https://raw.githubusercontent.com/davekinkead/davekinkead.github.io/master/media/ygritte.jpg'
  }

  bot.postMessage('#exiled', 'Winter is coming...', params)
})

bot.on('message', function(data) {
    // all ingoing events https://api.slack.com/rtm
    console.log(data);
})