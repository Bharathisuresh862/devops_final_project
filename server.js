// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send("Hello from DevOps Project 🚀");
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });




// const express = require('express');
// const mysql = require('mysql2');

// const app = express();

// // DB connection (IMPORTANT)
// const db = mysql.createConnection({
//     host: 'db',          // service name from docker-compose
//     user: 'root',
//     password: 'root',
//     database: 'testdb'
// });

// // connect to DB
// db.connect((err) => {
//     if (err) {
//         console.error("Database connection failed:", err);
//     } else {
//         console.log("Connected to MySQL ✅");
//     }
// });

// // route
// app.get('/', (req, res) => {
//     res.send("App + MySQL Connected 🚀");
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });




const express = require('express');
const mysql = require('mysql2');

const app = express();

const connectDB = () => {
    const db = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'testdb'
    });

    db.connect((err) => {
        if (err) {
            console.log("⏳ Waiting for MySQL...");
            setTimeout(connectDB, 3000);
        } else {
            console.log("Connected to MySQL ✅");
        }
    });
};

connectDB();

app.get('/', (req, res) => {
    res.send("App + MySQL Connected 🚀");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});