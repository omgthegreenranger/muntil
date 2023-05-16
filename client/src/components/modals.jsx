import React, {useState, useEffect, useRef} from 'react';
import {Modal, Container, Col, Row, Button, Form} from 'react-bootstrap';
import './styles.css';


export function Modals(props) {
    const { til, setTil, cats, setCats, modalUp, setModalUp } = props; 
    const [selector, setSelector] = useState(modalUp.select);
// This will have a series of modal popups depending on which one is selected.
// The component will select and render the correct UI in this case.
    console.log(cats);

    function RenderSwitch(props) {
        switch(props.select) {
            case 'new-til':
                return <RenderNewTil cats={cats} setCats={setCats} />;
            case 'edit-til':
                return <RenderEditTil til={til} cats={cats} setCats={setCats} />
            default:
                return <h3>No Type Selected</h3>;
        }
    }
        const handleClose = () => setModalUp(false);
    return(
        <Modal show={modalUp.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Til</Modal.Title>
            </Modal.Header>
            <Modal.Body>
        <RenderSwitch select={modalUp.select} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}


function RenderNewTil(props) {
    const { cats, setCats } = props;
    return(
        <>
            <Form className="mb-3" controlId="newTil">
                <Form.Group>
                    <Form.Label>Til Name</Form.Label>
                    <Form.Control type="text" placeholder="Name (e.g. Dads Birthday)" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Select aria-label="Default select Example">
                    <option>Choose category</option>
                    {cats.map((cat) => {
                        return(
                            <option value={cat.id}>{cat.name}</option>
                        )
                    })}
                    <option value="new">Add new category</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="description.TextArea">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" placeholder="Name (e.g. Dads Birthday)" />
                </Form.Group>
                </Form>
        </>
  )
}

function RenderEditTil(props) {
    const { til, setTil, cats, setCats } = props;
    console.log(props);
    return (
        <>
            <Form className="mb-3" controlId="newTil">
                <Form.Group>
                    <Form.Label>Til Name</Form.Label>
                    <Form.Control type="text" placeholder="Name (e.g. Dads Birthday)" value={til.name} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Select aria-label="Default select Example">
                    <option>Choose category</option>
                    {cats.map((cat) => {
                        return(
                            <option value={cat.id}>{cat.name}</option>
                        )
                    })}
                    <option value="new">Add new category</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="description.TextArea">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} value={til.description} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" value={til.due_date} />
                </Form.Group>
            </Form>
        </>
    )
}
