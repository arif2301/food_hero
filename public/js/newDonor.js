// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  // Make a newdonor object
  var newdonor = {
    item: $("#item")
      .val()
      .trim(),
    weight: $("#weight")
      .val()
      .trim(),
      size: $("#size")
      .val()
      .trim(),  
    description: $("#description")
      .val()
      .trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new/donation", newdonor)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#item").val("");
  $("#amount").val("");
  $("#description").val("");
});
