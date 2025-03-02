const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); // Allow requests from React frontend
app.use(bodyParser.json()); // Parse JSON requests

const filePath = 'students.json';

// Function to read existing students
const readStudents = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

// Route to save student data
app.post('/save-student', (req, res) => {
  const student = req.body;
  const students = readStudents(); // Read existing students
  students.push(student); // Add new student

  fs.writeFileSync(filePath, JSON.stringify(students, null, 2), 'utf8');

  res.send({ message: "Student saved successfully!" });
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
