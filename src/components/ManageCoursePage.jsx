import React, { useState } from "react";
import CourseForm from "./CourseForm.jsx";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    //returns boolean
    const _errors = {};

    if (!course.title) _errors.title = "Title is Required";
    if (!course.authorId) _errors.authorId = "Title is Required";
    if (!course.category) _errors.category = "Title is Required";

    setErrors(_errors);
    //form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved.");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursePage;
