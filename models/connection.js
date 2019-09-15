var mysql=require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection ({
        host: "localhost",
        user: "root",
        password: "",
        database: "food_hero"
    })
};

connection.connect();
module.exports = connection;