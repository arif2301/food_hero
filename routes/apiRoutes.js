/* var db = require("../models");



  // 
  // app.get("/api/example", function(req, res) {
  //   db.foodherodb.findAll({}).then(function(foodherodb) {
  //     res.json(foodherodb);
  //   });
  // });


  // Create a new registration for each :type
  app.post("/api/register/:type", function(req, res) {
    if (req.params.type === "hero") {
      db.registration
        .create({
          type: "hero",
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
          //type: req.params.type
        })
        .then(function(user) {
          res.json(user);
        });
    } else if (req.params.type === "donor") {
      db.registration
        .create({
          type: "donor",
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          type: req.params.type,
          streetnumber: req.body.streetnumber,
          streetname: req.body.streetname,
          suite: req.body.suite,
          city: req.body.city,
          postal: req.body.postal,
          province: req.body.province,
          country: req.body.country
        })
        .then(function(user) {
          res.json(user);
        });
    } else {
      db.registration
        .create({
          type: "recipient",
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          type: req.params.type,
          streetnumber: req.body.streetnumber,
          streetname: req.body.streetname,
          suite: req.body.suite,
          city: req.body.city,
          postal: req.body.postal,
          province: req.body.province,
          country: req.body.country
        })
        .then(function(user) {
          res.json(user);
        });
    }

    //Do a login check

    app.post("/api/login", function(req, res) {
      db.registration
        .findOne({ where: { email: req.body.email } })
        .then(function(user) {
          if (req.body.password === user.password) {
            return res.json(user);
          }
          res.send("Please try again!");
        });
    });
  })
  

 //LOCATION API ROUTE. Not sure if we should be doing all of this in one route or multiple!

  app.post("/api/location", function(req, res) {   

     //location request - html5 and opens map to that location. This could be tinkered to just grab 
     //the location and not publish the map until we have the herolocation, donorlocation, and recipient location

    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var heropos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(heropos);
        infoWindow.setPosition(heropos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(heropos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  

  function handleLocationError(browserHasGeolocation, infoWindow, heropos) {
    infoWindow.setPosition(heropos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
  });
    

//This Opens a map and can plot a route between points and is tailored to parse out the distance between the points
//this could be used to compare distances. 

      var directionsService;
      var directionsDisplay;
      //initMap is the function that builds the map - NOTE: Previously we had to include 
      //this code  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"async defer></script>
      //on the html page that the map was loading. I would imagine we'll need to do this for the mission page.
      function initMap() {
        directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer();
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 7,
          center: { lat: 43.6629, lng: -79.3957 }
        });
        directionsDisplay.setMap(map);
        
      }
      var herolocation = heropos // get from html5 function
      var donorlocation //get from database
      //This is where we can do the hero to donor locate and distance
      //Ideally I'd like to add a waypoint here and just do one request with herolocation, donorlocation and reciplocation
      //to minimize the coding. I haven't been able to figure out how to include the waypoints properly and
      //still researching. 
      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route(
          {
            origin: document.getElementById(herolocation).value,
            destination: document.getElementById(donorlocation).value,
            travelMode: "DRIVING"
          },
          function(response, status) {
            console.log(response);
            if (status === "OK") {
              directionsDisplay.setDirections(response);
              var distance = response.routes[0].legs[0].distance.value;
              console.log(distance/ 1000);
              //$("#tripdistance").val(distance / 1000);
            } else {
              window.alert("Directions request failed due to " + status);
            }

      //This would be a similar function to get the donor to recipient distance

      //This is where we can do the hero to donor locate and distance
      var donorlocation //get from database
      var reciplocation //get from database

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route(


          {
            origin: document.getElementById(donorlocation).value,
            destination: document.getElementById(reciplocation).value,
            travelMode: "DRIVING"
          },
          function(response, status) {
            console.log(response);
            if (status === "OK") {
              directionsDisplay.setDirections(response);
              var distance = response.routes[0].legs[0].distance.value;
              console.log(distance/ 1000);
              //$("#tripdistance").val(distance / 1000);
            } else {
              window.alert("Directions request failed due to " + status);
            }
  }

//};



   
      

  //Waypoints directions request example

//   https://maps.googleapis.com/maps/api/directions/json?
// origin=Boston,MA&destination=Concord,MA
// &waypoints=Charlestown,MA|Lexington,MA
// &key=YOUR_API_KEY 

// //limits search paramter to canada
// &region=ca

//limits to walking directions

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //     dbExample
  //   ) {
  //     res.json(dbExample);
  //   });


 */