import React from "react";
import inside from "./assets/inside.jpg";
import outside from "./assets/outside.jpg";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
function InsideOrBetweenCity(props) {
  return (
    <>
      <section className="mb-5 text">
        <div className="container-fluid bg-warning">header</div>
      </section>
      <section className="bgm1">
        <div className="container  pt-5 text-center Link">
          <div className="row btn btn-warning  Link--position">
            <Link to="/">
              <BiArrowBack className="fa-arrow-left mr-1" />
              <span>Back Home</span>
            </Link>
          </div>
          <div className="text-center">Dakar</div>
          <div className="row text-center mb-5">
            <div className="col-6">
              <div className="card" style={{ width: "30rem", height: "20rem" }}>
                <div className="card-body">
                  {/*<h5 className="card-title">dakar</h5>*/}
                  <img
                    src={outside}
                    className="card-img-top my-0 "
                    alt="inside"
                  />

                  <a href="#" className="btn btn-secondary">
                    <Link to="/insidecity">Inside City</Link>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                className="card "
                style={{ width: "30rem", height: "20rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <img
                    src={outside}
                    className="card-img-top my-0 mb-0"
                    alt="outside"
                  />

                  <a href="#" className="btn btn-secondary">
                    <Link to="/betweencity">Between City</Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
}
export default InsideOrBetweenCity;
