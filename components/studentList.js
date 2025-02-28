'use client'
import { useState, useEffect } from 'react'
 
export default function StudentList() {
  const [students, setStudents] = useState([])
 
  useEffect(() => {
    async function fetchStudents() {
      // Get Data from json file
      const jsonData = await fetch('/students.json')
      // Parse Data
      const studentData = await jsonData.json()
      setStudents(studentData)
    }
    fetchStudents()
  }, [])
 
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
                        <p>GPA: {student.GPA}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div> 
  )
}