import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

function CoursePage() {
  //react hooks for state
  const [courses, setCourses] = useState(courseStore.getCourses()); //on init - get all courses

  useEffect(() => {
    //check course store to see if courses have been loaded
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    //remove when unMounted
    return () => courseStore.removeChangeListener(onChange);
  }, []); //empty dependency array, prevents an infinite loop of api calls

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default CoursePage;
