$(function () {
  $("#click-test").on('click', function () {
    console.log("CLICKED");

  })
  $(".devourIt").on("click", function (event) {
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function () {
        console.log("changed devoured to", devouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".create-form").on("submit", function (event) {
    console.log("the click workeded");

    event.preventDefault();

    var newBurger = {
      name: $("#burgerToAdd").val().trim()

      // Send the POST request.
    }
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      })
  });

});


