var mysql = require('mysql');

dbConnection = mysql.createConnection({
  user: "root",
  database: "ghdb2"
});

// dbConnection.connect();

module.exports = dbConnection;

