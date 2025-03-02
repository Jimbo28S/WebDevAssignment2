import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'public', 'students.json');

// Function to read students.json
const readStudents = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

export async function GET(req) {
  const students = readStudents();
  return new Response(JSON.stringify(students), {
    status: 200,
  });
}

export async function POST(req) {
  try {
    const newStudent = await req.json();
    const students = readStudents();

    students.push({
      firstName: newStudent.firstName,
      lastName: newStudent.lastName,
      dateOfBirth: newStudent.dateOfBirth,
      gpa: newStudent.gpa,
    });

    // Write updated data to students.json
    fs.writeFileSync(filePath, JSON.stringify(students, null, 2));

    return new Response(JSON.stringify({ message: "Student added successfully", students }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error writing to file" }), {
      status: 500,
    });
  }
}
