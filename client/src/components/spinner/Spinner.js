import React from "react";

const Spinner = () => (
  <div>
    <div
      className="spinner-border"
      role="status"
      style={{ width: "4rem", height: "4rem" }}
    >
      <span className="sr-only">Loading...</span>
    </div>
    Loading...
  </div>
);

export default Spinner;
