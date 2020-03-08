import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    //hey dispatcher go tell all stores a course has been created
    dispatcher.dispatch({
      //this is the ACTION
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}
