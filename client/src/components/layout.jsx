import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './styles.css';
// import { run as runHolder } from 'holderjs/holder';
import { Display } from './index.jsx';

export function Layout() {
    // let's set up our basic grid.
    return(
    <>
    <Container className="d-flex">

        <Row className="d-flex direction-row">
            {/* <Col xs={2}>
            <img src="holder.js/300x200" />
            </Col> */}
            <Col>
                <Display />
            </Col>
            <Col>
            </Col>
        </Row>
    </Container>
    </>
    )
}