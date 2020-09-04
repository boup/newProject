import React from "react";
import cities from "./Cities";
import InsideOrBetween from "./InsideOrBetweenCity.js";
import { Link } from "react-router-dom";
function Autocomplete() {
  const [text, setValue] = React.useState("");
  const [suggestion, setSuggestion] = React.useState([]);

  const onTextChange = (e) => {
    let suggestion = [];

    const value = e.target.value;
    console.log(cities);
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      suggestion = cities.sort().filter((v) => regex.test(v));
      console.log(suggestion);
    }
    setSuggestion(suggestion);
    setValue(value);
  };
  const selectedText = (value) => {
    setValue(value);
    setSuggestion(suggestion);
    return <InsideOrBetween title={`${text}`} />;
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
              <Link to="/insideorbetween">{item}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  };
  return (
    <div id="notebooks">
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
  );
}

export default Autocomplete;
