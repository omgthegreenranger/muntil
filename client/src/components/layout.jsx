import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.css";
// import { run as runHolder } from 'holderjs/holder';
import { Display } from "./index.jsx";

export function Layout(props) {

  // let's set up our basic grid.
  const [width, setWidth] = useState(); // to get the width of the element
  const [users, setUsers] = useState(); // to get the user info (TBD)
  const [type, setType] = useState(); // To get the type of modal to open

  return (
    <>
      <div className="layout">
        <Row>
          <Col className="d-flex justify-content-center header">
            <span className="muntil-logo">MUNTIL</span>
          </Col>
        </Row>
        <Row className="d-flex direction-row w-100 justify-content-center">
          <Col sm={2} xs={0} className="left-bar">
            <h1>Left</h1>
          </Col>
          <Col sm={8} xs={12} className="display-block">
            <div className="d-flex justify-content-center">
              <Display
                type={type}
                setType={setType}
                width={width}
                setWidth={setWidth}
                modalUp={props.modalUp}
                setModalUp={props.setModalUp}
              />
            </div>
          </Col>
          <Col sm={2} xs={0} className="right-bar">
            <h1>Right</h1>
          </Col>
        </Row>
      </div>
    </>
  );
}
