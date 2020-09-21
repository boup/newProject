import React from "react";

import InsideOrBetween from "./InsideOrBetweenCity.js";
import { Link } from "react-router-dom";
import {DataContext} from "./context/context-api";
import video from "./assets/video/cover_video.mp4"
function Home(props) {
  const [text, setValue] = React.useState("");
  const [suggestion, setSuggestion] = React.useState([]);
  const {cityData}= React.useContext(DataContext);
  const[show,setShow]=React.useState(false);
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
     <div>
        {/*<!-- header -->*/}
        <header className="header" id="home">
          <section id="video-motion">
            <div className="video-background">
              <div className="video-wrap">
                <div id="video">
                 { /*<video id="video-item" autoplay muted loop playsinline>
                    <source src={video} type="video/mp4" />
  </video>*/}
                </div>
              </div>
            </div>
          </section>
            {/*<!-- text on video -->*/}
            <section id="text-on-video">
            <div className="text text-uppercase text-center font-weight-bold">
              <h1>Welcome to city adviser</h1>
              <h5>were we help you move around the city</h5>
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
        <div>
        { 
              show&&
                <InsideOrBetween title={text} />
        }      
            
        </div>
            {/**  <a>
                <button
                  type="button"
                  className="btn btn_green btn-lg text-uppercase mr-2"
                >
                  <Link to="/insidecity">Inside City</Link>
                </button>
              </a>
              <a>
                <button
                  type="button"
                  className="btn btn_green btn-lg text-uppercase"
                >
                  <Link to="/betweencity">Between City</Link>
                </button>
              </a> */}
            </div>
          </section>
        
        {/*<!-- end of header -->*/}
     
      <section className="">
 
      </section>
      </header>
      </div>
    </>
  );
}

export default Home;
