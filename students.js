import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'students.json');

// Function to read students.json
const readStudents = () => {
  // If file does not exist
  if (!fs.existsSync(filePath)) return [];
  // If file exists, read and return contents
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Read student data
    const students = readStudents();
    return res.status(200).json(students);
  }

  if (req.method === 'POST') {
    try {
      const students = readStudents();
      const newStudent = req.body;

      students.push({
        firstName: newStudent.firstName,
        lastName: newStudent.lastName,
        dateOfBirth: newStudent.dateOfBirth,
        gpa: newStudent.gpa,
      });

      // Write updated data to students.json
      fs.writeFileSync(filePath, JSON.stringify(students, null, 2));

      return res.status(201).json({ message: "Student added successfully", students });
    } catch (error) {
      return res.status(500).json({ message: "Error writing to file" });
    }
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
