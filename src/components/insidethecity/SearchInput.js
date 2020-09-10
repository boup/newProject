import React from "react";
import cities from "../../Cities";
import stops from "../../Stop";
import { BsFillForwardFill } from "react-icons/bs";
import DisplayStop from "./DisplayStop";
function SearchInput(props) {
  const [text, setValue] = React.useState("");
  const [text1, setValue1] = React.useState("");
  const [suggestion, setSuggestion] = React.useState([]);
  const [suggestion1, setSuggestion1] = React.useState([]);
  {
    /* Function which transform array of object into array*/
  }
  //var finalArray = cities.map((arr) => arr.cityName);
  var Array1 = stops.map((arr) => arr.stop);
  const fiArray1 = Array1.flat(1);
  //get unique value;
  function getUnique(array) {
    var uniqueArray = [];

    // Loop through array values
    for (var value of array) {
      if (uniqueArray.indexOf(value) === -1) {
        uniqueArray.push(value);
      }
    }
    return uniqueArray;
  }
  const finalArray1 = getUnique(fiArray1);
  const onTextChange = (e) => {
    let suggestion = [];

    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      suggestion = finalArray1.sort().filter((v) => regex.test(v));
      //console.log(suggestion);
    }
    setSuggestion(suggestion);
    setValue(value);
  };
  const ClickMe = () => {
    if (text !== "" && text1 !== "") {
      //const newArray = cities.filter((item) => item.cityName === `${text}`);
      const newArray = stops.filter((item) =>
        item.stop.filter(
          (item) => item.stop === `${text}` && item.stop === `${text1}`
        )
      );

      //const newArray1 = cities.filter((item) => item.cityName === `${text1}`);
      //const newArray1 = stops.filter((item) =>item.stop.filter((item) => item === `${text1}`));
      //const finalArray = newArray.concat(newArray1);
      //console.log(finalArray);
      console.log(newArray);
      //console.log(finalArray1);
      console.log(stops);

      alert(`Hello from ${text} to ${text1}`);
      setValue("");
      setValue1("");
      newArray.map((item) => {
        return (
          <DisplayStop line={item.line} name1={`${text}`} name2={`${text}`} />
        );
      });
    } else {
      alert("You need to fill at first");
    }
    return (
      <div class="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
    );
  };
  const onTextChange1 = (e) => {
    let suggestion1 = [];

    const value = e.target.value;
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      suggestion1 = finalArray1.sort().filter((v) => regex.test(v));
      //console.log(suggestion);
    }
    setSuggestion1(suggestion1);
    setValue1(value);
  };

  const selectedText = (value) => {
    setValue(value);
    //setSuggestion(suggestion);
    setSuggestion([]);
  };
  const selectedText1 = (value) => {
    setValue1(value);
    //setSuggestion(suggestion);
    setSuggestion1([]);
  };
  const renderSuggession = (props) => {
    if (suggestion.length === 0 && suggestion1.length === 0) {
      return null;
    }
    return (
      <>
        <ul>
          {suggestion.map((item, index) => (
            <li key={index} onClick={() => selectedText(item)}>
              {item}
            </li>
          ))}
        </ul>
        <ul>
          {suggestion1.map((item1, index) => (
            <li key={index} onClick={() => selectedText1(item1)}>
              {item1}
            </li>
          ))}
        </ul>
      </>
    );
  };
  return (
    <>
      <div id="notebooks">
        <input
          id="query"
          type="text"
          onChange={onTextChange}
          value={text}
          placeholder="from"
        />
        <input
          id="query"
          type="text"
          onChange={onTextChange1}
          value={text1}
          placeholder="to"
        />
        {renderSuggession()}
        <span>Suggestions: {suggestion.length}</span>
        <div
          className="btn btn-success text-warning text-uppercase"
          onClick={ClickMe}
        >
          <strong> go</strong>
          <BsFillForwardFill className="fa-arrow-left mr-1 pb-1  weight-bold" />
        </div>
      </div>
    </>
  );
}

export default SearchInput;
