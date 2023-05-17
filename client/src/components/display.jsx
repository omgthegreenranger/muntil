import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import './styles.css';
import {Modals} from './index';



export function Display(props) {
    const {type, setType, tils, width, cats, setCats, setWidth, modalUp, setModalUp } = props;
    const [til, setTil] = useState({});
    const ref = useRef();


useEffect(() => {
    setWidth(ref.current ? ref.current.offsetWidth : ref.current);
}, [ref.current]);


useEffect(() => {
        function handleResize() {
    setWidth(ref.current ? ref.current.offsetWidth : ref.current)}
        window.addEventListener('resize', handleResize)
        })



if(!tils) return( <h3>Loading</h3> );

    return ( 
        <>
        <div ref={ref} className="display">
            <WidthTable width={width} />
                {tils.map((til) => {
                    if(Math.floor(til.progress) >= 1) {
                    return(
                        <>             
                            <Muntil type={type} setType={setType} til={til} width={width} setWidth={setWidth} setTil={setTil} modalUp = {modalUp} setModalUp={setModalUp} />
                            <div></div>
                        </>
                    )
                }})}
                <Modals type={type} setType={setType} til={til} setTil={setTil} cats={cats} setCats={setCats} modalUp={modalUp} setModalUp={setModalUp} />
        </div>
        </>
            )
}

function Muntil(props) {
    let til = props.til;
    let progress = Math.floor(til.progress);
    let widthNodes = Math.floor(props.width / 9);
    let widthBar = Math.floor(widthNodes * progress);
    var colorStyle = "bg-primary";
    console.log("Width: " + props.width, "Progress: " + progress);
    if (progress === 1) {
        colorStyle = "bg-secondary";
    } else if (progress > 1 && progress <= 3) {
        colorStyle = "bg-success";
    } else if ( progress > 3 && progress <= 6 ) {
        colorStyle = "bg-warning";
    } else if ( progress >6 && progress <= 9 ) {
        colorStyle = "bg-danger";
    } else if ( progress > 9 ) {
        colorStyle = "passed"
    }

    const handleEventModal = (event) => {
        props.setModalUp(true)
        props.setType('view-til')
        props.setTil(til);
        console.log(til);
        return
    }

    return(
        <>
        {/* <div>Due Date: {til.due_date} Progress: {progress}</div> */}
        <Row className="display-block d-inline-flex justify-content-center align-content-center my-2">
            <div className={`til-bar ${colorStyle}`} style={{width: widthBar}} onClick={handleEventModal}>{til.name}</div>        
        </Row>

        </>
    )
}


function WidthTable(props) {
    let width = props.width;
    let width1 = width / 3;
    let width2 = width1 * 2;
    let width3 = width1 * 3;

    console.log(width1);

    return(
        <div className="gridlines">
            <div className="width width1" style={{width: width1}}></div>
            <div className="width width2" style={{width: width2}}></div>
            <div className="width width3" style={{width: width3}}></div>
        </div>
    )
}