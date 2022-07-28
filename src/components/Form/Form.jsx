import React from "react";
import "./Form.css";
function form() {
  return (
    <div>
      <form>
        {/* <input
          aria-label="location"
          type="text"
          className={`${styles.input} form-control`}
          placeholder="Search for location"
          required
        /> */}

        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default form;
