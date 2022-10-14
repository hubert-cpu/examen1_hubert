var mysql = require("mysql2");

export const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "bd_biblioteca",
  port: 3306

});



