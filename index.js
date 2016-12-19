animals = ["cats", "dogs", "hamsters"];
function renderButtons() {
  $("#animal-view").empty();
        for (i =0; i < animals.length; i++){
          var b = $("<button>")
            b.addClass("animal");
            b.addClass(" btn btn-primary")
            b.attr("data-name", animals[i]);
            b.text(animals[i]);
      $("#animal-view").append(b);
    }
  }
$("#add-animal").on("click", function() {
  event.preventDefault();
  var a = $("#animal-input").val().trim();
  animals.push(a);
  renderButtons();
$(".animal").on("click", function(){
  console.log("hi");
  var c = $(this).data("name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ c +"&api_key=dc6zaTOxFJmzC&limit=10";
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
    .prepend($("<p>").text("Rating : " + results[i].rating))
    .prepend($("<img>")
      .attr("src", newurl3)
      .attr("alt", "animal gif")
      .attr("data-state", "still")
      .attr("class", "gif")
      .attr("data-still", newurl3)
      .attr("data-animate", newurl6));
        // ==================================
        }
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
      });
renderButtons();

$(".animal").on("click", function(){
  console.log("hi");
  var c = $(this).data("name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ c +"&api_key=dc6zaTOxFJmzC&limit=10";
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
    .prepend($("<p>").text("Rating : " + results[i].rating))
    .prepend($("<img>")
      .attr("src", newurl3)
      .attr("alt", "animal gif")
      .attr("data-state", "still")
      .attr("class", "gif")
      .attr("data-still", newurl3)
      .attr("data-animate", newurl6));
        // ==================================
        }
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
