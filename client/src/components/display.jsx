import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import rd3 from 'react-d3-library';
import './styles.css';



export function Display(props) {
    const ref = useRef();
let events = props.events;
console.log(props.width);

useEffect(() => {
    props.setWidth(ref.current ? ref.current.offsetWidth : ref.current);
}, [ref.current]);

useEffect(() => {
    function handleResize() {
      props.setWidth(window.innerWidth)}
    window.addEventListener('resize', handleResize)
    })

console.log(events);

if(!events) return( <h3>Loading</h3> );

    return ( 
        <>
        <div className="w-100" ref={ref}>
                {events.map((event) => {
                    return(
                        <>{props.width}
                {/* <ul>
                    <li>{event.name}</li>
                    <li>{event.due_date}</li>
                    <li>{event.description}</li>
                    <li>{event.category.name}</li>
                    <li>{event.t1pct}</li>
                    <li>{event.t2pct}</li>
                    <li>{event.t3pct}</li>
                    <li>Progress - {event.progress}</li>
                </ul> */}
                
                <Muntil event = {event}/>
                </>
                )})}
            
        </div>
        </>
            )
}

function Muntil(props) {
    
    let event = props.event;
    let progress = Math.floor(event.progress);
    if(progress < 1) {
        progress = 1
    }
    if(progress > 9) {
        progress = 9
    }
    console.log(progress);
    for (let i = 1; i <= progress; i++) {
        let bulbSearch = "bulb"+i;
        let bulb = document.getElementsByTagName(bulbSearch);
        
        console.log(bulb, bulbSearch);
    }

    return(
        <>
        <Row className="d-inline-flex display">
            {/* <Col className="barcounter">
                <div className="bulb bulb9">&nbsp;</div>
                <div className="bulb bulb8">&nbsp;</div>
                <div className="bulb bulb7">&nbsp;</div>
                <div className="bulb bulb6">&nbsp;</div>
                <div className="bulb bulb5">&nbsp;</div>
                <div className="bulb bulb4">&nbsp;</div>
                <div className="bulb bulb3">&nbsp;</div>
                <div className="bulb bulb2">&nbsp;</div>
                <div className="bulb bulb1">&nbsp;</div>
            </Col> */}
            <div className={`bg-success til-bar col-md-${progress}`} />
            <div className={`bg-success til-bar col-md-${progress}`} />
            {/* <Col className="barcounter">
                <div className="bulb bulb1">&nbsp;</div>
                <div className="bulb bulb2">&nbsp;</div>
                <div className="bulb bulb3">&nbsp;</div>
                <div className="bulb bulb4">&nbsp;</div>
                <div className="bulb bulb5">&nbsp;</div>
                <div className="bulb bulb6">&nbsp;</div>
                <div className="bulb bulb7">&nbsp;</div>
                <div className="bulb bulb8">&nbsp;</div>
                <div className="bulb bulb9">&nbsp;</div>
            </Col>   */}
        </Row>
        </>
    )
}