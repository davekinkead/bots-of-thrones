var bots = {
  Ygritte: require('./bots/ygritte'),
  JohnSnow: require('./bots/john-snow')
}

function doYouHaveSomethingToSay (data) {
  bots.Ygritte.trigger(data)
  return bots.Ygritte
}

bots.doYouHaveSomethingToSay = doYouHaveSomethingToSay

module.exports = bots
