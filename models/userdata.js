// Dependencies
// =============================================================
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
//var sequelize = require("../config/connection.js");
// Creates a "Inventory" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
  var UserData = sequelize.define("UserData",
    {
      // id: {
      //   type: Sequelize.INTEGER,
      //   autoIncrement: true,
      //   primaryKey: true
      // },
      type: Sequelize.STRING, //donor, recipient or delivery
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      streetNumber: Sequelize.INTEGER,
      streetName: Sequelize.STRING,
      streetAddress2: Sequelize.STRING,
      city: Sequelize.STRING,
      province: Sequelize.STRING,
      postalCode: Sequelize.STRING,
    }
    // {
    //   timestamps: false
    // }
  );
  return UserData;
};
// Syncs with DB
//UserData.sync();
// Makes the Inventory Model available for other files (will also create a table)
// module.exports = UserData;
