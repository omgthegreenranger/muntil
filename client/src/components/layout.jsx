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

    useEffect(() => { axios.get('/events').then((response) => {
                setTils(response.data);
    })}, []);

    useEffect(() => { axios.get('/categories').then((response) => {
                setCats(response.data);
    })},[]);

console.log("Categories", cats);

    return(
    <>
    <Container className="d-flex justify-content-center flex-column">
        <Row className="d-flex direction-row w-100 justify-content-center">
            <Col>
                <WidthTable width={width} />
                <div className="d-flex justify-content-center">
                    <Display tils={tils} width={width} cats={cats} setCats={setCats} setWidth={setWidth} modalUp = {props.modalUp} setModalUp={props.setModalUp} />
                </div>
            </Col>
        </Row>
    </Container>
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
            <div className="width" style={{width: width1}}></div>
            <div className="width" style={{width: width2}}></div>
            <div className="width" style={{width: width3}}></div>
        </div>
    )
}