import React from "react";
import {Button,Modal} from "react-bootstrap";
import {BsThreeDots,BsArrowLeftRight} from "react-icons/bs"

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" >
           <div className="text-center"> {props.from} <BsArrowLeftRight/> {props.to} </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <h4>Price:XOF{props.price}</h4>
    <p>Departure:{props.departure}</p>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function InsideCityModal(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
         <BsThreeDots/>
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          price={props.price}
          departure={props.time}
          from={props.from}
          to={props.to}

        />
      </>
    );
  }
  export default InsideCityModal;
