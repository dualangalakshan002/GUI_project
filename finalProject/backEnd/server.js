const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database("./database/db.sqlite", (err) => {
    if (err) {
        console.error("Error connecting to database:", err);
    } else {
        console.log("Connected to SQLite database");
    }
});

// Create a table if it doesn't exist
db.run(
    `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    )`
);

// API to get all users
app.get("/users", (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Function to login user
const loginUser = (email, password, callback) => {
  if (!email || !password) {
      return callback({ status: 400, error: "Email and password are required" });
  }

  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
      if (err) {
          return callback({ status: 500, error: "Database error" });
      }
      if (!user) {
          return callback({ status: 401, error: "Invalid email or password" });
      }

      // const isMatch = await bcrypt.compare(password, user.password);
      // if (!isMatch) {
      //     return callback({ status: 401, error: "Invalid email or password" });
      // }

      callback(null, { id: user.id, username: user.username, email: user.email });
  });
};

app.post("/login", (req, res) => {
  console.log("Received login request:", req.body); // Log request body

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  loginUser(email, password, (err, user) => {
    if (err) {
      return res.status(err.status).json({ error: err.error });
    }
    res.json({ message: "Login successful", user });
  });
});




// API to register a user
app.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    db.run(
        `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
        [username, email, password],
        function (err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ id: this.lastID, username, email });
        }
    );
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
