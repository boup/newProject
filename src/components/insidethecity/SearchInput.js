import React from "react";
import { useHistory, useParams } from "react-router-dom";
import lineData from "../../Cities";
import { Link } from "react-router-dom";
import { BsFillForwardFill } from "react-icons/bs";
import DisplayStop from "./DisplayStop";
import SearchFunction from "./SearchFunction";
import SearchResult from "../../SearchResult";
import {DataContext} from "../../context/context-api"
function SearchInput(props) {
  const [text, setValue] = React.useState("");
  const [text1, setValue1] = React.useState("");
  const [suggestion, setSuggestion] = React.useState([]);
  const [suggestion1, setSuggestion1] = React.useState([]);
  const [filtered, setFilteredData] = React.useState([]);
  const [lineNb, setLineNb] = React.useState([]);
  //const{lineData}=React.useContext(DataContext);
  const history = useHistory();
  const line= lineData;
  console.log("Line data:",line);
  var myarray = line.map((arr) => arr.destination);
  console.log("myarray:",myarray);
  
  { 
    /* Function which transform array of object into array*/
  }
 
 
// console.log("Flat array",fiArray1);
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
  const fiArray1 = myarray.flat(1);
  var finalArray1 = getUnique(fiArray1);
  console.log("final stort",finalArray1);
  
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
            <li className="Home" key={index} onClick={() => selectedText(item)}>
              {item}
            </li>
          ))}
        </ul>
        <ul>
          {suggestion1.map((item1, index) => (
            <li className="Home" key={index} onClick={() => selectedText1(item1)}>
              {item1}
            </li>
          ))}
        </ul>
      </>
    );
  };
  const ClickMe = (e) => {
    if (text !== "" && text1 !== "") {
      const newArray = lineData.filter((item) =>item.destination.includes(`${text}`) && item.destination.includes(`${text1}`));
      var lineNumber = newArray.map((arr) => arr.number);
      var result1= newArray.map((item)=>item.destination).flat(1);
      var result=getUnique(result1)
      var findPoint= result.map((item)=>{if(result.indexOf(item)>= result.indexOf(`${text}`) && result.indexOf(item)<=result.indexOf(`${text1}`))
      return item;
    })
      const data = getUnique(findPoint);
      const linedata=lineNumber;
      filtered.push(data);
      lineNb.push(linedata);
      setLineNb([...lineNb]);
      setFilteredData([...filtered]);
     // setValue("");
     // setValue1("");
      console.log("Filtered array is",filtered);
      return (
        <div>
          {filtered.map((item, index) => {
            return <li className="Home" key={index}>{item.line}</li>;
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
      <div id="" className="Home">
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
        <span className="Home">Suggestions: {suggestion.length}</span>
        <div
          className="btn btn-success text-warning text-uppercase"
          onClick={letGo}
        >
          <strong>go</strong>
          <BsFillForwardFill className="fa-arrow-left mr-1 pb-1  weight-bold" />
        </div>
      </div>
    

      <div>{ <SearchResult datas={filtered} line={lineNb} />}</div>
    </>
  );
}

export default SearchInput;
