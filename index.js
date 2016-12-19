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
  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ c +"&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
      }).done(function(response) {
        console.log(response);
          var results = response.data;

        for (var i = 0; i < results.length; i++) {

  $("#gifSpot")
    .prepend($("<p>")
      .text("Rating : " + results[i].rating)
      .attr("class", "gifText"))
    .prepend($("<img>")
      .attr("src", results[i].images.fixed_height_still.url)
      .attr("alt", "animal gif")
      .attr("data-state", "still")
      .attr("class", "gif")
      .attr("data-still", results[i].images.fixed_height_still.url)
      .attr("data-animate", results[i].images.fixed_height.url));
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

  $("#gifSpot")
    .prepend($("<p>").text("Rating : " + results[i].rating))
    .prepend($("<img>")
      .attr("src", results[i].images.fixed_height_still.url)
      .attr("alt", "animal gif")
      .attr("data-state", "still")
      .attr("class", "gif")
      .attr("data-still", results[i].images.fixed_height_still.url)
      .attr("data-animate", results[i].images.fixed_height.url));
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
