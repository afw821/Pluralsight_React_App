import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

function CoursePage() {
  //react hooks for state
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []); //empty dependency array, prevents an infinite loop of api calls

  return (
    <>
      <h2>Courses</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author Id</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => {
            return (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CoursePage;
