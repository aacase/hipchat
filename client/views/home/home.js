Template['home'].helpers({
  signedIn:function(){return Meteor.user();}
});


Template['home'].events({
  'click .meeting': function(){
    //posts data to the room.

    HTTP.call("POST", "https://api.hipchat.com/v2/room/1533760/notification?auth_token=CIYHZeAxQQ5BNzWEDYnsbDs5GO8kLjRnb2JnUflg", {
        data: {
          "color": "green",
          "message": "A virtual meeting has been started. Join now",
          "notify": true,
          "message_format": "text"
        }

      },
      function(error, result) {
        if (!error) {
          console.log('success');
          window.close();
        }
      });
  }
});
