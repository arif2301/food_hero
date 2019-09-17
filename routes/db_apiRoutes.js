var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/user", function(req, res) {
    db.UserData.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // find use by type
  app.get("/api/user/:type", function(req, res) {
    db.UserData.findAll({}).then(function(results) {
      where: {
        type: req.params.type
      }
      res.json(results);
    });
  });

  // see all donations
  app.get("/api/donation", function(req, res) {
    db.Inventory.findAll({}).then(function(results) {
      res.json(results);
    });
  
  // find a donation by id
  app.get("/api/donation/:id", function(req, res) {
    db.Inventory.findAll({}).then(function(results) {
      where: {
        id: req.params.id
      }
      res.json(results);
    });  
  });

    // Add a new user
    app.post("/api/new/user", function(req, res) {
      console.log("User Data:");
      console.log(req.body);
      db.UserData.create({  
        type: req.body.type,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        streetAddress1: req.body.streetAddress1,
        streetAddress2: req.body.streetAddress2,
        city: req.body.city,
        province: req.body.province,
        postalCode: req.body.postalCode,
        longitude: req.body.longitude,
        latitude: req.body.latitude,
      }).then(function(results) {
        res.json(results);
      });
    });

    // add a new donation
    app.post("/api/new/donation", function(req, res) {
      console.log("Donation Data:");
      console.log(req.body);
      db.Inventory.create({
        item: req.body.item,
        amount: req.body.amount,
        description: req.body.description
      }).then(function(results) {
        res.json(results);
      });
    });
  
    // Delete a book
    app.delete("/api/donation/:delete", function(req, res) {
      console.log("donation id :");
      console.log(req.params.id);
      Book.destroy({
        where: {
          id: req.params.delete
        }
      }).then(function() {
        res.end();
      });
    });

};
