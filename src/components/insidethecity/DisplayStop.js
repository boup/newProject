import React from "react";

function DisplayStop(props) {
  return (
    <div className="container">
      <div className="row">
        <li>{props.line}</li>
      </div>
      <div className="row">
        <li>{props.name1}</li>

        <li>{props.name2}</li>
      </div>
    </div>
  );
}

export default DisplayStop;
