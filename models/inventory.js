// Dependencies
// =============================================================
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "Inventory" model that matches up with DB
var Inventory = sequelize.define(
  "inventory",
  {
    item: Sequelize.STRING,
    amount: Sequelize.INTEGER,
    description: Sequelize.STRING
  },
  {
    timestamps: false
  }
);
// Syncs with DB
Inventory.sync();
// Makes the Inventory Model available for other files (will also create a table)
module.exports = Inventory;
