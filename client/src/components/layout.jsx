import React, {useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Container, Col, Row, Button} from 'react-bootstrap';
import './styles.css';
// import { run as runHolder } from 'holderjs/holder';
import { Display, Modals } from './index.jsx';
import axios from 'axios';

export function Layout(props) {
    // let's set up our basic grid.
    const [width, setWidth] = useState();
    const [users, setUsers] = useState();
    const [tils, setTils] = useState();
    const [cats, setCats] = useState();
    const [type, setType] = useState();

    useEffect(() => { axios.get('/events').then((response) => {
                setTils(response.data);
    })}, []);

    useEffect(() => { axios.get('/categories').then((response) => {
                setCats(response.data);
    })},[]);

    const newModal = () => {
        props.setModalUp(true);
        setType('new-til')
    }

console.log("Categories", cats);

    return(
    <>

    <div className="layout">
        <Row>
            <Col className="d-flex justify-content-center header"><span className="muntil-logo">MUNTIL</span></Col>
        </Row>
        <Row className="d-flex direction-row w-100 justify-content-center">
            <Col xs={2} className="left-bar"><h1>Left</h1></Col>
            <Col xs={8} className="display-block">
            <select>
                <option>View by...</option>
                <option>Urgency</option>
                <option>Agenda</option>
                <option>Calendar</option>
            </select>
            <select>
                <option>Sort by...</option>
                <option>Urgency</option>
                <option>Due Date</option>
                <option>Category</option>
                <option>Stickies</option>
            </select>
            <Button className="add-new-btn" onClick={newModal}>+</Button>
                {/* <WidthTable width={width} /> */}
                <div className="d-flex justify-content-center">
                    <Display type={type} setType={setType} tils={tils} width={width} cats={cats} setCats={setCats} setWidth={setWidth} modalUp = {props.modalUp} setModalUp={props.setModalUp} />
                </div>
            </Col>
            <Col xs={2} className="right-bar"><h1>Right</h1></Col>
        </Row>
    </div>
    </>
    )
}

// function WidthTable(props) {
//     let width = props.width;
//     let width1 = width / 3;
//     let width2 = width1 * 2;
//     let width3 = width1 * 3;

//     console.log(width1);

//     return(
//         <div className="gridlines">
//             <div className="width width1" style={{width: width1}}></div>
//             <div className="width width2" style={{width: width2}}></div>
//             <div className="width width3" style={{width: width3}}></div>
//         </div>
//     )
// }