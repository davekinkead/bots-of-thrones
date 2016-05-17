var GotBot = require('./got-bot')
var Hodor = new GotBot()

Hodor.params.username = 'Hodor'
Hodor.params.icon_url = 'https://raw.githubusercontent.com/davekinkead/bots-of-thrones/master/media/hodor.jpg'

Hodor.trigger = function(data) {
  //  ... hodor ...
  if (data.text && data.text.match(/hodor/i)) {
    return this.quip = 'Hodor!'
  }  
}

module.exports = Hodor