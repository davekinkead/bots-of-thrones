var GotBot = require('./got-bot')
var Ygritte = new GotBot()

Ygritte.params.username = 'Ygritte'
Ygritte.params.icon_url = 'https://raw.githubusercontent.com/davekinkead/bot-of-thrones/master/media/ygritte.jpg'
Ygritte.trigger = function(data) {
  //  ... know ....
  if (data.text && data.text.match(/\sknow\s/)) {
    return this.quip = 'You know nothing <@' + data.user + '>'
  }  
}

module.exports = Ygritte