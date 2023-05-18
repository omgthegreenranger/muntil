import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Muntils(props) {
  const { tils, setTils, til, setTil, width, setModalUp, setType, dots } =
    props;
  // We're setting the colour of the bar based on the Progress level. Urgency is the name of the game.
  let progress = til.progress; // Progress has already been normalized.

  function colorStyle(params) {
    let progress = params;
    if (progress === 1) {
      return "bg-secondary";
    } else if (progress > 1 && progress <= 3) {
      return "bg-success";
    } else if (progress > 3 && progress <= 6) {
      return "bg-warning";
    } else if (progress > 6 && progress <= 9) {
      return "bg-danger";
    } else if (progress > 9) {
      return "passed"; // this is a custom CSS to make completed tils fancy.
    }
  }

  function widthBar(params) {
    let progress = params;
    let widthNodes = Math.floor(width / 9); // Get width for the three thresholds
    let widthNo = Math.floor(widthNodes * progress); // get the width of the bar itself.
    return widthNo;
  }

  // Making sure we can open Tils for viewing.
  const handleEventModal = (selected) => {
    setModalUp(true);
    setType("view-til");
    setTil(selected);
    console.log(til);
    return;
  };

  return (
    <>
      <WidthTable width={width} />
      <Tils
        tils={tils}
        colorStyle={colorStyle}
        widthBar={widthBar}
        handleEventModal={handleEventModal}
      />
      <Dots 
        dots={dots}
        handleEventModal={handleEventModal} 
      />
    </>
  );
}

function Tils(props) {
  const { tils, colorStyle, widthBar, handleEventModal } = props;
  return (
    <>
      {tils.map((til) => {
        // iterating the Tils to return Muntils. Should we move this into the component itself?
        return (
          <>
            <Row
              className="display-block d-inline-flex justify-content-center align-content-center my-2"
              width={widthBar}
            >
              <div
                className={`til-bar ${colorStyle(til.progress)}`}
                style={{ width: widthBar(til.progress) }}
                onClick={() => handleEventModal(til)}
                ariaKey={til}
              >
                {til.name}
              </div>
            </Row>
          </>
        );
      })}
    </>
  );
}

function Dots(props) {
  const { dots, handleEventModal } = props;
  console.log(dots);
  return (
    <>
      <div className="dot-bar">
        {dots.map((dot) => {
          return (
            <div className="dot" onClick={() => handleEventModal(dot)}>
              <span className="dot-name">{dot.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

// This is the background lines - there is probably an easier way to do this.
function WidthTable(props) {
  let width = props.width;
  let width1 = width / 3;
  let width2 = width1 * 2;
  let width3 = width1 * 3;

  return (
    <div className="gridlines">
      <div className="width width1" style={{ width: width1 }}></div>
      <div className="width width2" style={{ width: width2 }}></div>
      <div className="width width3" style={{ width: width3 }}></div>
    </div>
  );
}
