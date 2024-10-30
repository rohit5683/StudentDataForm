const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Your MySQL username
  database: "studentdb",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database.");
});

// Endpoint to add a student
app.post("/api/add-student", (req, res) => {
  const { name, age, course, email } = req.body;
  const sql =
    "INSERT INTO students (name, age, course, email) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, age, course, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Student added successfully!");
  });
});

// Endpoint to fetch all students
app.get("/api/students", (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
