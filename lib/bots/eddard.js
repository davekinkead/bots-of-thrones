var GotBot = require('./got-bot')
var Eddard = new GotBot()

Eddard.params.username = 'Eddard Stark'
Eddard.params.icon_url = 'https://raw.githubusercontent.com/davekinkead/bots-of-thrones/master/media/eddard.jpg'

Eddard.trigger = function(data) {
  //  ... coming ....
  if (data.text && data.text.match(/\scoming\s/)) {
    return this.quip = 'Winter.  Winter is coming.'
  }  
}

module.exports = Eddard