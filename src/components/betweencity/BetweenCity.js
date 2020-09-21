import React from "react";
import SearchInput from "./SearchInput";
import ShowDataContainer from "./ShowDataContainer";
//import dakarMap from "../../assets/mapDakar.PNG"
const dakarMap="https://goo.gl/maps/LquV4Vh5eJ42eeeS7"
function BetweenCity() {
  return (
    <div className="container-fluid text-center InsideCity inside_city_section">
      <div className="row pl-0">
<div className="col-3 ml-0 pl-0">
      <ShowDataContainer/>
  
</div>
<div className="col-9 pr-0 ">
{/*<img src="https://goo.gl/maps/LquV4Vh5eJ42eeeS7" style={{width:"100%",height:"80vh"}} atl="Dakar"/>*/}
<div/>
<div className="embed-responsive embed-responsive-16by9 pt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977931.034440509!2d-15.638115763199181!3d14.476272859136234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0x5a46a55099615940!2sSenegal!5e0!3m2!1sen!2spl!4v1593002034219!5m2!1sen!2spl"
                width="400"
                height="300"
                frameborder="0"
                style={{ border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                
              ></iframe>
            </div>

  </div>
    </div>
    </div>
  );
}

export default BetweenCity;
