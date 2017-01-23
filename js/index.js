$(document).ready(function() {

  $('#search').click(function() {
    var userSearch = $('#userSearch').val();
    console.log("Search");
    var url = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&api_key=dc6zaTOxFJmzC";

    $.ajax({
      type: "GET",
      url: url,
      Async: false,
      dataType: "json",
      success: function(data) {
        console.log("success");
        $('#searchResults').html('');
        var response = JSON.parse(JSON.stringify(data));
        console.log(response);

        for (var i = 0; i <= response.data.length; i++) {
          console.log(data.images);
          $('#searchResults').prepend("<img src=" + response.data[i].images.fixed_width.url + "\>");
        }

        $('#userSearch').val('');
      },
      error: function(errorMessage) {
        $('#searchResults').prepend("<h1>Whoops! Something went wrong, please try again.</h1>");
      }

    });

  });

  $('#userSearch').keypress(function(e) {
    if (e.which == 13) {
      $('#search').click();
    }
  });
});