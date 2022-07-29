import React from "react";
import "./Form.css";
function form(props) {
  const { getData } = props;
  return (
    <div className="container2">
      <form onSubmit={getData}>
        <input
          name="city"
          aria-label="location"
          type="text"
          className="input-box"
          placeholder="Search for Country"
          required
        />

        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default form;
