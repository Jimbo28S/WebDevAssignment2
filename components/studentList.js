'use client'
import { useEffect, useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students from the API
    fetch('/api/students')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data); 
        setStudents(data);
      })
      .catch((error) => console.error('Error fetching students:', error));
  }, []);
 
  return (
    <div className="flex flex-col bg-white w-full h-fit">
        <h2 className="text-black flex justify-center bg-green-600 mb-4">Students</h2>
        <div className="flex justify-center">
            <ul>
                {/* Take each student from json and put into list*/}
                {students.map((student) => (
                    <li key={student.firstName} className="mb-7 bg-blue-300 border-3 text-black w-60">
                        <p>Name: {student.firstName} {student.lastName}</p>
                        <p>Date of Birth: {student.dateOfBirth}</p>
                        <p>GPA: {student.gpa}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div> 
  )
}

export default StudentList;