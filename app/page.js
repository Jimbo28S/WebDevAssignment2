{/* 
  James Smith
  Kaljit Kaur
  Jaspreet Kaur
  Jashandeep
  
  March 1, 2025
  
  This program can display a list of students stored on the students.json file. 
  There is also a form that allows the user to write new students into the student.json file and have them displayed.
  The form takes inputs in it's input boxes, parses them, and adds them to the file.
  The list then creates an <li> element for each student on the file*/}


import StudentList from "@/components/studentList";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AddStudent from "@/components/addStudent";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="bg-white">
        <StudentList />
        <AddStudent />
      </div>
      <Footer />
    </div>
  );
}
