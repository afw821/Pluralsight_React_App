import React from "react";
import TextInput from "./common/TextInput.jsx";
import SelectList from "./common/SelectList.jsx";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        onChange={props.onChange}
        value={props.course.title}
        error={props.errors.title}
        name="title"
      />
      <SelectList
        id="author"
        onChange={props.onChange}
        value={props.course.authorId || ""}
        name="authorId"
        error={props.errors.authorId}
      />

      <TextInput
        id="category"
        label="Category"
        onChange={props.onChange}
        name="category"
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
