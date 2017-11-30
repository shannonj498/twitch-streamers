let usernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

let webType = ["channels", "streams"];

function findStatus() {
  usernames.forEach(function(user) {

    let status = "Offline";

    // Create url parameters
    function url(type, user) {
      return "https://wind-bow.glitch.me/twitch-api/" + type + "/" + user;
    };
    // Get stream info
    $.ajax({
      type: "GET",
      url: url(webType[1], user),
      success: function(response){
        if (response.stream.game) {
        status = response.stream.game + ": " + response.stream.channel.status;
      }
      }
  });
    // Get channel info
    $.ajax({
      type: "GET",
      url: url(webType[0], user),
      success: function(response){
        let url = response.url;
        let name = response.display_name;
        let icon = response.logo;
        $(".userInfo").append(
          "<div class='user'><a href=" + url + " target='_blank'><img class='image' src=" + icon + "></a><span class='name'><a href=" + url + " target='_blank' >" + name + "</a></span><span class='status'>" + status + "</span></div>"
        )
        }
    });
})
}

findStatus();
