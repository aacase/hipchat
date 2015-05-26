Router.route('/', function() {
  this.render('home');
  SEO.set({
    title: 'Home -' + Meteor.App.NAME
  });
});


Router.route('/api/hipchat', {
  where: 'server'
})

.post(function(data) {

  var name = data.body.item.message.from.name;

  //call to create a lifesize VMR goes here. is this a pm with a link, or what.


  //posts data to the room.

  HTTP.call("POST", "https://api.hipchat.com/v2/room/1533760/notification?auth_token=CIYHZeAxQQ5BNzWEDYnsbDs5GO8kLjRnb2JnUflg", {
      data: {
        "color": "green",
        "message": ""+ name + " started a lifesize virtual meeting",
        "notify": false,
        "message_format": "text"
      }

    },
    function(error, result) {
      if (!error) {
        console.log('success');
      }
    });

});
