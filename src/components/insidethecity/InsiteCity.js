import React from "react";
import SearchInput from "./SearchInput";
import ShowDataContainer from "./ShowDataContainer";
import dakarMap from "../../assets/mapDakar.PNG"

function InsiteCity() {
  return (
    <div className="container-fluid text-center InsideCity inside_city_section">
      <div className="row pl-0">
<div className="col-3 ml-0 pl-0">
      <ShowDataContainer/>
  
</div>
<div className="col-9 pr-0">
<img src={dakarMap} style={{width:"100%",height:"80vh"}} atl="Dakar"/>
<div/>

  </div>
    </div>
    </div>
  );
}

export default InsiteCity;
