Meteor.startup(function() {
  // if (Meteor.isClient) {
  //   var hippinIt = function doHipchat(user, callback) {
  //     Meteor.call(doHipchat());
  //   };
  // }

  if (Meteor.isServer) {
    Meteor.methods({
      doHipchat: function() {
        var HipChatClient = require('hipchat-client');
        var hipchat = new HipChatClient('YEKupo2Hkb50rURGEhev7VlxTJYNRscNSvwd5lhY');
      }
    });
    
  }
});
