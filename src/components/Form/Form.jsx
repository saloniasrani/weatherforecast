import React from "react";
import "./Form.css";
function form() {
  return (
    <div>
      <form>
        <input
          aria-label="location"
          type="text"
          className="input"
          placeholder="Search for Coordinates"
          required
        />

        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default form;
