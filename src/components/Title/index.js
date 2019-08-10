import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div>
      <h1 className="title">{props.children}</h1>
      <p className="title">Score: {props.score}</p>
      <p className="title">Top Score: {props.topScore}</p>
    </div>
  );
}

export default Title;
