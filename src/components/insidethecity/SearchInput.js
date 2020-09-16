import React from "react";
import { useHistory, useParams } from "react-router-dom";
import stops from "../../Stop";
import { Link } from "react-router-dom";
import { BsFillForwardFill } from "react-icons/bs";
import DisplayStop from "./DisplayStop";
import SearchFunction from "./SearchFunction";
import SearchResult from "../../SearchResult";
function SearchInput(props) {
  const [text, setValue] = React.useState("");
  const [text1, setValue1] = React.useState("");
  const [suggestion, setSuggestion] = React.useState([]);
  const [suggestion1, setSuggestion1] = React.useState([]);
  const [filtered, setFilteredData] = React.useState([]);
  const history = useHistory();

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
  const renderSuggession = () => {
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
  const ClickMe = (e) => {
    if (text !== "" && text1 !== "") {
      const newArray = stops.filter(
        (item) =>
          item.stop.includes(`${text}`) && item.stop.includes(`${text1}`)
      );
      // console.log(newArray);
      const data = newArray;
      filtered.push(data);
      //alert(`Hello from ${text} to ${text1}`);
      setFilteredData([...filtered]);
      setValue("");
      setValue1("");
      ///console.log(filtered);
      return (
        <div>
          {filtered.map((item, index) => {
            return <li key={index}>{item.line}</li>;
          })}
          <span>${text}</span>
          <span>${text1}</span>
        </div>
      );
    }
  };
  console.log(filtered);
  const letGo = (e) => {
    e.preventDefault();
    //history.push(`/insidecity}`);
    ClickMe();
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
          onClick={letGo}
        >
          <strong>go</strong>
          <BsFillForwardFill className="fa-arrow-left mr-1 pb-1  weight-bold" />
        </div>
      </div>
      {/*<div className="container mt-5">
        {filtered &&
          filtered.map((item, index) => {
            return (
              <div>
                <li className="bg-warning mt-5 text-success" key={index}>
                  {item.map((item, index) => (
                    <li key={index}>{item.line}</li>
                  ))}
                </li>
                <p>{text}</p>
                <p>{text1}</p>
              </div>
            );
          })}
        </div>*/}

      <div>{filtered && <SearchResult datas={filtered} />}</div>
    </>
  );
}

export default SearchInput;
