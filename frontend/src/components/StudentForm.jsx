import React, { useEffect, useState } from "react";
import axios from "axios";
// import "../components/StudentForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Data() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    email: "",
  });

  const [students, setStudents] = useState([]); // State for all students

  // Fetch students data from the backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/students");
        setStudents(response.data); // Store fetched students
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST request to add the student
      await axios.post("http://localhost:5000/api/add-student", formData);
      // alert("Student data submitted successfully!");
      toast("Student data submitted successfully!!");

      // Fetch the updated list of students
      const response = await axios.get("http://localhost:5000/api/students");
      setStudents(response.data);

      // Reset form data
      setFormData({ name: "", age: "", course: "", email: "" });
    } catch (error) {
      console.error("There was an error submitting the data!", error);
    }
  };
  return (
    <>
      <div className="container flex flex-col md:flex-row-reverse">
        <div className="section_one p-3 my-5 mx-5 flex flex-col gap-4">
          <h1 className="text-xl text-center">Student Details</h1>
          <form
            onSubmit={handleSubmit}
            className="student-form flex flex-col gap-4 bg-white p-6 rounded-lg shadow-2xl w-full max-w-md mx-auto md:w-96"
          >
            <input
              className="w-full h-10 p-4"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full h-10 p-4"
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <input
              className="w-full h-10 p-4"
              type="text"
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleChange}
              required
            />
            <input
              className="w-full h-10 p-4"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button
              className="max-w-full rounded-md bg-green-400 hover:bg-green-500 p-3 shadow-md hover:shadow-xl hover:translate-y-1 duration-300"
              type="submit"
            >
              Add Student
            </button>
            <ToastContainer />;
          </form>
        </div>

        <div
          className="section_two mx-auto p-3 my-auto md:my-10"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }}
        >
          <h1 className="text-xl text-center">Stored Students:</h1>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  ID
                </th>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  Name
                </th>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  Age
                </th>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  Course
                </th>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {student.id}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {student.name}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {student.age}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {student.course}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {student.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Data;
