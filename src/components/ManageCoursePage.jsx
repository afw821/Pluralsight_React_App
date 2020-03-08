import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm.jsx";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";

const ManageCoursePage = props => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    //this is what will populate the form with the info of course you clicked on
    const slug = props.match.params.slug; // from the path /courses/:slug
    if (slug) setCourse(courseStore.getCourseBySlug(slug));
  }, [props.match.params.slug]); //if dependencies listed in the array change, then the effect will re-run

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
    if (!course.authorId) _errors.authorId = "Author is Required";
    if (!course.category) _errors.category = "Category is Required";

    setErrors(_errors);
    //form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses"); //takes us back to courses page when saved
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
