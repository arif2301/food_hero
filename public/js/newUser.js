// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  // Make a newBook object
  var newuser = {
    type: $("#type")
      .val()
      .trim(),
    email: $("#email")
      .val()
      .trim(),
    name: $("#contact name")
      .val()
      .trim(),
    password: $("#password")
      .val()
      .trim(),
    streetAddress1: $("#streetAdress")
      .val()
      .trim(),
    streetAddress2: $("#detailAdress")
      .val()
      .trim(),
    city: $("#city")
      .val()
      .trim(),
    province: $("#province")
      .val()
      .trim(),
    postalCode: $("#postalCode")
      .val()
      .trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new/user", newuser)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#type").val("");
  $("#email").val("");
  $("#contact name").val("");
  $("#password").val("");
  $("#streetAdress").val("");
  $("#detailAdress").val("");
  $("#city").val("");
  $("#province").val("");
  $("#postalCode").val("");
});
