const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "sync_user",
    password: "sync_password",
    database: "sync_db",
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.log("connection failed", err.message);
        return;
    }
    console.log("connection successful");
    connection.end();
});