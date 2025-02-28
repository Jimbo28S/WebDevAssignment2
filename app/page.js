// pages/index.js
import StudentList from "@/components/studentList";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <StudentList />
    </div>
  );
}
