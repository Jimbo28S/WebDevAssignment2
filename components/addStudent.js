"use client"
import { useState } from 'react';

const StudentForm = () => {
    // Set default state for a new student
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gpa: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Student added!');
      setFormData({ firstName: '', lastName: '', dateOfBirth: '', gpa: '' });
      window.location.reload();
    } else {
      alert('Error adding student');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-50">
        <label htmlFor="firstName" className="text-black">First Name</label>
      <input className="border-1 border-black text-black" type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
      <label htmlFor="lastName" className="text-black">Last Name</label>
      <input className="border-1 border-black text-black"  type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
      <label htmlFor="dateOfBirth" className="text-black">Date Of Birth</label>
      <input className="border-1 border-black text-black" type="date" name="dateOfBirth" placeholder="Date of Birth" value={formData.dateOfBirth} onChange={handleChange} required />
      <label htmlFor="GPA" className="text-black">GPA</label>
      <input className="border-1 border-black text-black"  type="number" name="gpa" min="0.0" max="4.0" step="0.1" placeholder="gpa" value={formData.gpa} onChange={handleChange} required />
      <button className="border-1 border-black bg-blue-300" type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
