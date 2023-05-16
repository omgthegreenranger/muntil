import React, {useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './styles.css';
// import { run as runHolder } from 'holderjs/holder';
import { Display } from './index.jsx';
import axios from 'axios';

export function Layout() {
    // let's set up our basic grid.
    const ref = useRef();
    const [width, setWidth] = useState();
    const [users, setUsers] = useState();
    const [events, setEvents] = useState();

    useEffect(() => { axios.get('/events').then((response) => {
                setEvents(response.data);
    })}, []);

    // useEffect(() => {
    //     setWidth(ref.current ? ref.current.offsetWidth : ref.current);
    // }, [ref.current]);

    // useEffect(() => {
    //     function handleResize() {
    //       setWidth(window.innerWidth)}
    //     window.addEventListener('resize', handleResize)
    //     })


  console.log(width);

if(!events) return (<h3>Nothing yet...</h3>);
    return(
    <>
    <Container className="d-flex justify-content-center">

        <Row className="d-flex direction-row w-100 justify-content-center">
            {/* <Col xs={2}>
            <img src="holder.js/300x200" />
            </Col> */}
            <div ref={ref} className="d-flex justify-content-center">
                <Display events={events} width={width} setWidth={setWidth} />
            </div>
        </Row>
    </Container>
    </>
    )
}