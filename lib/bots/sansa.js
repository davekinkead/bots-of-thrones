var GotBot = require('./got-bot')
var Sansa = new GotBot()

Sansa.params.username = 'Sansa Stark'
Sansa.params.icon_url = 'https://raw.githubusercontent.com/davekinkead/bots-of-thrones/master/media/sansa.jpg'

Sansa.trigger = function(data) {
  //  ...hero....
  if (data.text && data.text.match(/hero/)) {
    return this.quip = 'There are no heros.  In life, the monsters win.'
  }  
}

module.exports = Sansa