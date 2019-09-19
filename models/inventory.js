// Dependencies
// =============================================================
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
//var sequelize = require("../config/connection.js");
// Creates a "Inventory" model that matches up with DB
//module.exports = function(sequelize, DataTypes) {
module.exports = function(sequelize) {
  var Inventory = sequelize.define(
    "Inventory",
    {
      // id: {
      //   type: Sequelize.INTEGER,
      //   autoIncrement: true,
      //   primaryKey: true
      // },
      item: Sequelize.STRING,
      weight: Sequelize.STRING,
      size: Sequelize.STRING,
      description: Sequelize.STRING
    },
    {
      timestamps: false
    }
  );
  //Inventory.sync()
  return Inventory;
};
// Syncs with DB
//Inventory.sync();
// Makes the Inventory Model available for other files (will also create a table)
//module.exports = Inventory;
