module.exports = {
  Ygritte: require('./bots/ygritte'),
  JohnSnow: require('./bots/john-snow'),
  doYouHaveSomethingToSay: function (data) {
    return this.JohnSnow
  }
}