// html-routes.js - for Food Hero

var path = require("path");

module.exports = function(app) {
  //home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  //main page - for log
  //registration page for all
  app.get("/registration", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  //page to enter donation - for donor
  app.get("/donor", function(req, res) {
    res.sendFile(path.join(__dirname, "../donor.html"));
  });

  //recipient page, after they logged in or registered - let them know they are on the list for recieving donations
  app.get("/recipient", function(req, res) {
    res.sendFile(path.join(__dirname, "../recipient.html"));
  });

  //mission offer page - accept or decline - for food hero
  app.get("/foodhero/offer", function(req, res) {
    res.sendFile(path.join(__dirname, "../hero.html"));
  });

  //mission page, it will show route and have buttons to click when pickup and the dropoff-food hero
  app.get("/foodhero/mission", function(req, res) {
    res.sendFile(path.join(__dirname, "../mission.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
