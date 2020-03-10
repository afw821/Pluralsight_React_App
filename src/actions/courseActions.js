import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    //hey dispatcher go tell all stores a course has been created
    dispatcher.dispatch({
      //this is the ACTION
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}

export function loadCourses() {
  //get all courses from course store
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses
    });
  });
}

export function deleteCourse(id) {
  //get all courses from course store
  return courseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id: id
    });
    toast.success("Course Deleted");
  });
}
