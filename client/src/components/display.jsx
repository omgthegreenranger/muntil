import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import './styles.css';
import {Modals} from './index';
import axios from 'axios';



export function Display(props) {
    const [datas, setDatas] = useState(); // This is response data
    const [tils, setTils] = useState([]); // These are bars that are relevant
    const [dots, setDots] = useState([]); // There are dots that are not.
    const [til, setTil] = useState({}); // this is a single Til
    const [cats, setCats] = useState(); // These are the categories
    const {type, setType, width, setWidth, modalUp, setModalUp } = props; // destructuring props
    const ref = useRef(); // ref is used for the detection of width

        // these are the MySQL queries to get the events and the categories.
        // first, we start with events
    useEffect(() => { 
        axios.get('/events').then((response) => {
            let data = response.data;
            setDatas(response.data);
            // empty the arrays to prevent duplication
            setTils([]);
            setDots([]);
            // run a loop to split the results and normalize the progress
            data.forEach((obj, index) => {
                data[index].progress = Math.floor(data[index].progress)
                let datum = data[index]
                if(data[index].progress >= 1) {
                    console.log("Yas!")
                    setTils((current) => [...current,datum]
                    )
                } else if (data[index].progress <= 0) {
                    setDots((current) => [...current,datum]
                        )
                }
            })})
    },
    []);

        // Then we do categories. Much easier

    useEffect(() => { axios.get('/categories').then((response) => {
        setCats(response.data);
    })},[]);

    // These two effects determine and set the width of the block, including resizes
        // First, we take width into state.
    useEffect(() => {
        setWidth(ref.current ? ref.current.offsetWidth : ref.current);
    }, [ref.current]);

        // Then, we handle changes in size
    useEffect(() => {
        function handleResize() {
            setWidth(ref.current ? ref.current.offsetWidth : ref.current)}
        window.addEventListener('resize', handleResize)
    })

    // Quick modal-opening function for adding a new event
    const newModal = () => {
        props.setModalUp(true);
        setType('new-til')
    }

    // Without the Tils from MySQL, why do we even show anything? Let's not.
    if(!tils) return <h3>LOADING...</h3>

    return ( 
        <>
        <div ref={ref} className="display">
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
                <Button className="add-new-btn" onClick={newModal}>+</Button>
            </div>
            <WidthTable width={width} />
                {tils.map((til) => {
                    // iterating the Tils to return Muntils. Should we move this into the component itself?
                        return(
                            <>             
                                <Muntil type={type} setType={setType} til={til} width={width} setWidth={setWidth} setTil={setTil} modalUp = {modalUp} setModalUp={setModalUp} />
                            </>
                        )
                })}
            <Tildots dots={dots} setDots={dots} />
            <Modals type={type} setType={setType} til={til} setTil={setTil} cats={cats} setCats={setCats} modalUp={modalUp} setModalUp={setModalUp} />
        </div>
        </>
            )
}

// This function deploys individual Til bars for now
function Muntil(props) {
    // Not much to destructure
    let til = props.til // set the individual til
    let progress = til.progress; // Progress has already been normalized.
    let widthNodes = Math.floor(props.width / 9); // Get width for the three thresholds
    let widthBar = Math.floor(widthNodes * progress); // get the width of the bar itself.

    // We're setting the colour of the bar based on the Progress level. Urgency is the name of the game.

    var colorStyle = "bg-primary";
    if (progress === 1) {
        colorStyle = "bg-secondary";
    } else if (progress > 1 && progress <= 3) {
        colorStyle = "bg-success";
    } else if ( progress > 3 && progress <= 6 ) {
        colorStyle = "bg-warning";
    } else if ( progress >6 && progress <= 9 ) {
        colorStyle = "bg-danger";
    } else if ( progress > 9 ) {
        colorStyle = "passed" // this is a custom CSS to make completed tils fancy.
    }

    // Making sure we can open Tils for viewing.
    const handleEventModal = (event) => {
        props.setModalUp(true)
        props.setType('view-til')
        props.setTil(til);
        console.log(til);
        return
    }
    // Here is the actual render.
    return(
        <>
        <Row className="display-block d-inline-flex justify-content-center align-content-center my-2" width={widthBar}>
            <div className={`til-bar ${colorStyle}`} style={{width: widthBar}} onClick={handleEventModal}>{til.name}</div>        
        </Row>

        </>
    )
}

// This is the background lines - there is probably an easier way to do this.
function WidthTable(props) {
    let width = props.width;
    let width1 = width / 3;
    let width2 = width1 * 2;
    let width3 = width1 * 3;

    return(
        <div className="gridlines">
            <div className="width width1" style={{width: width1}}></div>
            <div className="width width2" style={{width: width2}}></div>
            <div className="width width3" style={{width: width3}}></div>
        </div>
    )
}

function Tildots(props) {
    const {dots, setDots } = props;
console.log(dots);
    return (
        <>
        <div className="d-flex flex-row justify-content-center">
        {dots.map((dot) => {
            return(
                <div className="dot">{dot.name}</div>
            )
        })}
        </div>
        </>
    )
}