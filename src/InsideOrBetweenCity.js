import React from "react";
import inside from "./assets/inside.jpg";
import outside from "./assets/outside.jpg";
function InsideOrBetweenCity(props) {
  return (
    <div className="container center bg-warning">
      <div className="row text-center mt-5">
        <div className="col-6">
          <div className="card" style={{ width: "30rem", height: "20rem" }}>
            <img src={outside} className="card-img-top my-0 " alt="inside" />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text"></p>
              <a href="#" className="btn btn-primary">
                Inside City
              </a>
            </div>
          </div>
        </div>
        <div classNameName="col-6">
          <div className="card" style={{ width: "30rem", height: "20rem" }}>
            <img
              src={outside}
              className="card-img-top my-0 mb-0"
              alt="outside"
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text"></p>
              <a href="#" className="btn btn-primary">
                Between City
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InsideOrBetweenCity;
