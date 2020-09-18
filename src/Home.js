import React from "react";

import InsideOrBetween from "./InsideOrBetweenCity.js";
import { Link } from "react-router-dom";
import Traject from "./components/insidethecity/Traject";
import {DataContext} from "./context/context-api";
function Home(props) {
  const [text, setValue] = React.useState("");
  const [suggestion, setSuggestion] = React.useState([]);
  const {cityData}= React.useContext(DataContext);
  const[show,setShow]=React.useState(false);
  //const{findLineByCity}=React.useContext();
  console.log("City Data",cityData);
 
  
  {
    /* Function which transform array of object into array*/
  }
  //var finalArray = cities.map((arr) => arr.cityName);
  var finalArray = cityData.map((arr) => arr.cityName);
  console.log(finalArray);
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
    //setShow(!show);
    handdleShow();
    
  };
  const handdleShow=()=>{setShow(!show)
  setValue("")}
  const renderSuggession = () => {
    if (suggestion.length === 0) {
      return null;
    }
    
    return (
      <>
        <ul>
          {suggestion.map((item, index) => (
            <li className="Home" key={index} onClick={() => selectedText(item)}>
              {<Link>{item}</Link>}
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
        { 
              show&&
                <InsideOrBetween title={text} />
        }      
            
        </div>
      </section>
    </>
  );
}

export default Home;
