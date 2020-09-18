import React from "react";
import SearchInput from "./SearchInput";
import ShowDataContainer from "./ShowDataContainer";
import dakarMap from "../../assets/mapDakar.PNG"

function InsiteCity() {
  return (
    <div className="container-fluid text-center InsideCity">
      <div className="row">
<div className="col-4">
      <ShowDataContainer/>
  
</div>
<div className="col-8">
<img src={dakarMap} style={{width:"100%",height:"80vh"}} atl="Dakar"/>
<div/>

  </div>
    </div>
    </div>
  );
}

export default InsiteCity;
