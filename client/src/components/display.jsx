import React, { useState, useEffect, useRef } from "react";
import { Row, Button } from "react-bootstrap";
import "./styles.css";
import { Modals, Muntils } from "./index";
import axios from "axios";
import { FaAlignCenter } from 'react-icons/fa';
import { HiCircleStack } from 'react-icons/hi2';
  
export default function Display(props) {
  const [tils, setTils] = useState([]); // These are bars that are relevant
  const [dots, setDots] = useState([]); // There are dots that are not.
  const [til, setTil] = useState({}); // this is a single Til
  const [cats, setCats] = useState(); // These are the categories
  const { type, setType, width, setWidth, modalUp, setModalUp } = props; // destructuring props
  const ref = useRef(); // ref is used for the detection of width
  const [reload, setReload] = useState(false);
  const [catType, setCatType] = useState();

  // these are the MySQL queries to get the events and the categories.
  // first, we start with events
  useEffect(() => {
    axios.get("/events").then((response) => {
      let data = response.data;
      // empty the arrays to prevent duplication
      setTils([]);
      setDots([]);
      // run a loop to split the results and normalize the progress
      data.forEach((obj, index) => {
        data[index].progress = Math.floor(data[index].progress);
        let datum = data[index];
        if (data[index].progress >= 1) {
          setTils((current) => [...current, datum]);
        } else if (data[index].progress <= 0) {
          setDots((current) => [...current, datum]);
        }
      });
    });
  }, []);

  // Then we do categories. Much easier

  useEffect(() => {
    axios.get("/categories").then((response) => {
      setCats(response.data);
    });
  }, []);

  // These two effects determine and set the width of the block, including resizes
  // First, we take width into state.
  useEffect(() => {
    setWidth(ref.current ? ref.current.offsetWidth : ref.current);
  }, [setWidth]);

  // Then, we handle changes in size
  useEffect(() => {
    function handleResize() {
      setWidth(ref.current ? ref.current.offsetWidth : ref.current);
    }
    window.addEventListener("resize", handleResize);
  });

  // Modal functions
  // Quick modal-opening function for adding a new event
  // const newModal = () => {
  //   setModalUp(true);
  //   setType("new-til");
  // };
console.log(til);
  // Without the Tils from MySQL, why do we even show anything? Let's not.
  if (!tils) return <h3>LOADING...</h3>;

  return (
    <>
      <div ref={ref} className="display">
        <DisplayNav setType={setType} setModalUp={setModalUp} setCatType={setCatType} setTil={setTil} />
        <Muntils
          tils={tils}
          setTils={setTils}
          til={til}
          setTil={setTil}
          width={width}
          setModalUp={setModalUp}
          setType={setType}
          dots={dots}
          setDots={setDots}
        />
        <Modals
          type={type}
          setType={setType}
          til={til}
          setTil={setTil}
          cats={cats}
          setCats={setCats}
          modalUp={modalUp}
          setModalUp={setModalUp}
          setReload={setReload}
          reload={reload}
          setCatType={setCatType}
          catType={catType}
        />
      </div>
    </>
  );
}

function DisplayNav(props) {
  const {setType, setModalUp, setTil, setCatType} = props;
  // Modal functions
  // Quick modal-opening function for adding a new event

  const newModal = () => {
    setModalUp(true);
    setType("new-til");
  };
  return(
    <div className="d-inline-flex flex-row justify-content-between">
      <div>
        <select>
          <option>View by...</option>
          <option value="urg-view">Urgency</option>
          <option value="ag-view">Agenda</option>
          <option value="cal-view">Calendar</option>
        </select>
        <select>
          <option>Sort by...</option>
          <option value="urg-sort">Urgency</option>
          <option value="date-sort">Due Date</option>
          <option value="cat-sort">Category</option>
          <option value="sticky-sort">Stickies</option>
        </select>
      </div>
      <div className="display-pick"><FaAlignCenter /> <HiCircleStack /></div>
      <Button className="add-new-btn" onClick={newModal}>
        +
      </Button>
    </div>
  )
}
