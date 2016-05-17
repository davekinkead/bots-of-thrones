var GotBot = require('./got-bot')
var Ygritte = new GotBot()

Ygritte.params.username = 'Ygritte'
Ygritte.params.icon_url = 'https://raw.githubusercontent.com/davekinkead/davekinkead.github.io/master/media/ygritte.jpg'
Ygritte.trigger = function(data) {
  //  Does anyone know what ....
  if (data.text && data.text.match(/\sknow\s/)) {
    this.quip = 'You know nothing <@' + data.user + '>'
  }  
}

module.exports = Ygritte