buttons = ["cats", "dogs", "hamsters"];
function renderButtons() {
  $("#button-view").empty();
        for (i =0; i < buttons.length; i++){
          var b = $("<button>")
            b.addClass("topic");
            b.addClass("btn btn-primary")
            b.attr("data-name", buttons[i]);
            b.text(buttons[i]);
      $("#button-view").append(b);
    }
  }
$("#add-button").on("click", function() {
  event.preventDefault();
  var newbutton = $("#button-input").val().trim();
  buttons.push(newbutton);
  renderButtons();
buttonFunction();
});
function buttonFunction(){
  $(".topic").on("click", function(){
  var search = $(this).data("name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ search +"&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
      }).done(function(response) {
        console.log(response);
          var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var newurl1 = results[i].images.fixed_height_still.url
            newurl2 = newurl1.replace("http", "https");
            newurl3 = newurl2.replace("httpss", "https");
            console.log(newurl2);
            console.log(newurl3);
          var newurl4 = results[i].images.fixed_height.url
            newurl5 = newurl4.replace("http", "https");
            newurl6 = newurl5.replace("httpss", "https");
  $("#gifSpot")
   .prepend($("<div style='margin-left: 25px; margin-right: 25px;' class = 'col-md-3'>"+
   "<p id = 'gif-url'> URL: "+ results[i].images.fixed_height.url +"</p>"+
   "<img src= '"+ newurl3 +"' alt= 'results gif' data-state= 'still' class = 'gif' data-still = '"+ newurl3 +"'data-animate = '"+ newurl6+ "'"+
   "</div>"));
  }
        // ==================================
  $(".gif").on("click", function() {
    var state = $(this).attr("data-state");
      if (state == "still"){
        $(this).attr("data-state", "animate").attr("src", $(this).data("animate"));
        }else{
        $(this).attr("data-state", "still").attr("src", $(this).data("still"));
        }
  });

      });

});
}
renderButtons();
buttonFunction();

