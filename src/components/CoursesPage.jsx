import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

function CoursePage() {
  //react hooks for state
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []); //empty dependency array, prevents an infinite loop of api calls

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursePage;
