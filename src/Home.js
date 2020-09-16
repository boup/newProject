import React from "react";
import cities from "./Cities";
import InsideOrBetween from "./InsideOrBetweenCity.js";
import { Link } from "react-router-dom";
import Traject from "./components/insidethecity/Traject";
function Home(props) {
  const [text, setValue] = React.useState("");
  const [suggestion, setSuggestion] = React.useState([]);
  {
    /* Function which transform array of object into array*/
  }
  var finalArray = cities.map((arr) => arr.cityName);
  //console.log(finalArray);
  const onTextChange = (e) => {
    let suggestion = [];

    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      suggestion = finalArray.sort().filter((v) => regex.test(v));
      //console.log(suggestion);
    }
    setSuggestion(suggestion);
    setValue(value);
  };
  const selectedText = (value) => {
    setValue(value);
    setSuggestion(suggestion);
    return <InsideOrBetween title={`${props.value}`} />;
    //return ` <InsideOrBetween title=${props.value} />`;
  };
  const renderSuggession = () => {
    if (suggestion.length === 0) {
      return null;
    }
    return (
      <>
        <ul>
          {suggestion.map((item, index) => (
            <li key={index} onClick={() => selectedText(item)}>
              {<Link to="/insideorbetween">{item}</Link>}
            </li>
          ))}
        </ul>
      </>
    );
  };
  return (
    <>
      <section>
        <div id="notebooks" className="text-center">
          <input
            id="query"
            type="text"
            onChange={onTextChange}
            value={text}
            placeholder="Find your City"
          />
          {renderSuggession()}
          <span>Suggestions: {suggestion.length}</span>
        </div>
      </section>
      <section className="">
        <div>
          <Traject className="mt-5" />
        </div>
      </section>
    </>
  );
}

export default Home;
