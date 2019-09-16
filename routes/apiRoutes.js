var db = require("../models");

module.exports = function(app) {
  //
  app.get("/api/example", function(req, res) {
    db.foodherodb.findAll({}).then(function(foodherodb) {
      res.json(foodherodb);
    });
  });

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
  });
};
