import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './styles.css';
import { run as runHolder } from 'holderjs/holder';

export function Layout() {
    // let's set up our basic grid.
    return(
    <>
    <Container className="d-flex">

        <Row className="d-flex direction-row">
            <Col xs={2}>
            <img src="holder.js/300x200" />
            </Col>
            <Col>
                <h2>THIS IS A COLUMN</h2>
                <img src="holder.js/300x200" />
            </Col>
            <Col>
            </Col>
        </Row>
    </Container>
    </>
    )
}