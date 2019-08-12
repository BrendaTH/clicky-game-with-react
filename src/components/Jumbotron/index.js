import React from "react";
// color: #2A77AE;
function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 25, textAlign: "center", background: "#2A77AE" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
