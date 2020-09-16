import React from "react";

function SearchFunction(props) {
  return (
    <section className="bg_image">
      <div className="container">
        {/*props.data.map((item, index) => (
          <li key={index}>{item.line}</li>
        ))*/}
        <p className="text-warning">Hello from inside city detail</p>
      </div>
    </section>
  );
}

export default SearchFunction;
