var GotBot = require('./got-bot')
var Ygritte = new GotBot()

Ygritte.params.username = 'Ygritte'
Ygritte.params.icon_url = 'https://raw.githubusercontent.com/davekinkead/bots-of-thrones/master/media/ygritte.jpg'

Ygritte.trigger = function(data) {
  //  ... know ....
  if (data.text && data.text.match(/\sknows?\??\s/i)) {
    return this.quip = 'You know nothing <@' + data.user + '>'
  }  
}

module.exports = Ygritte