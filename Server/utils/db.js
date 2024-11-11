import mysql from 'mysql2';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "blackpink04", // Ensure this is the correct pass`word
    database: "Logger"
});

con.connect(function(err) {
    if (err) {
        console.error("Connection error:", err);
    } else {
        console.log("Connected to MySQL database!");
    }
});

// Optionally, export the connection if needed elsewhere
export default con;
