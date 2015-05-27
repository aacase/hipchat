Router.route('/', function() {
  this.render('home');
  SEO.set({
    title: 'Home -' + Meteor.App.NAME
  });
});

Router.route('/signIn', function() {
  this.render('signIn');
  SEO.set({
    title: 'Sign in to -' + Meteor.App.NAME
  });
});


Router.route('/api/hipchat', {
  where: 'server'
})

.post(function(data) {
  console.log(data.body.item.message.from.id)
  var name = data.body.item.message.from.id

  //call to create a lifesize VMR goes here. is this a pm with a link, or what.

  //posts data to the room.

  // HTTP.call("POST", "https://api.hipchat.com/v2/room/1533760/notification?auth_token=CIYHZeAxQQ5BNzWEDYnsbDs5GO8kLjRnb2JnUflg", {
  //     data: {
  //       "color": "green",
  //       "message": ""+ name + " started a lifesize virtual meeting",
  //       "notify": false,
  //       "message_format": "text"
  //     }
  //
  //   },
  //   function(error, result) {
  //     if (!error) {
  //       console.log('success');
  //     }
  //   });
  HTTP.call("POST", "https://api.hipchat.com/v2/user/"+name+"/message?auth_token=7yzXMjIZ0bHo4WnDHdwNAAW0lfrxoOtffc4oyO5G", {
      data: {
        "color": "green",
        "message": 'Click the link to start a meeting http://lifesizeHipchat.meteor.com/signIn',
        "notify": true,
        "message_format": "text"
      }

    },
    function(error, result) {
      if (!error) {
        console.log('success');
      }
    });

});
