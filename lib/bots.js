var bots = {
  characters: {
    Hodor:    require('./bots/hodor'),
    Ygritte:  require('./bots/ygritte'),
    Eddard:   require('./bots/eddard')
  }
  // JohnSnow:  require('./bots/john-snow')

}

function doYouHaveSomethingToSay (data) {
  var winner
  Object.keys(bots.characters).forEach(function(key) {
    var match = bots.characters[key].trigger(data)
    if (match) {
      return winner = bots.characters[key]
    }
  })
  return winner
}

bots.doYouHaveSomethingToSay = doYouHaveSomethingToSay

module.exports = bots
