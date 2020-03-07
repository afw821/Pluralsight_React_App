import React from "react";
const SelectList = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>Author</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          className="form-control"
        >
          <option value="" />
          <option value="1">Cory House</option>
          <option value="2">Scott Allen</option>
        </select>
      </div>
    </div>
  );
};

export default SelectList;
