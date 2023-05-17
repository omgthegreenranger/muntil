import React, {useState, useEffect, useRef} from 'react';
import {Modal, Container, Col, Row, Button, Form} from 'react-bootstrap';
import './styles.css';
import axios from 'axios';


export function Modals(props) {
    const { til, setTil, cats, setCats, modalUp, setModalUp } = props; 
    const [selector, setSelector] = useState(modalUp.select);
// This will have a series of modal popups depending on which one is selected.
// The component will select and render the correct UI in this case.
    console.log(cats);

    function RenderSwitch(props) {
        switch(props.select) {
            case 'new-til':
                return <RenderTil type={props.select} handleClose={handleClose} cats={cats} setCats={setCats} />;
            case 'edit-til':
                return <RenderTil type={props.select} handleClose={handleClose}  til={til} cats={cats} setCats={setCats} />
            case 'view-til':
                return <RenderView />
            default:
                return <h3>No Type Selected</h3>;
        }
    }
        const handleClose = () => setModalUp(false);
    return(
        <Modal show={modalUp.show} onHide={handleClose}>
        <RenderSwitch select={modalUp.select} />
        </Modal>
    )
}

function RenderTil(props) {
    const { handleClose, type, til, setTil, cats, setCats } = props;
    const [formData, setFormData] = useState({});
    console.log(type);

    useEffect(() => {
        if(type === 'new-til') {
            setFormData({"name": "",
                "description": "",
                "category_id": '',
                "due_date": "",
                "location": "",
                "user_id": ''})
        }
        if(type === "edit-til") {
            setFormData(til)
        }
        }, [])
    console.log(formData);

    async function submitTil(e) {
        axios.post('/api/events')

    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        }
        );
        console.log(formData);
    }

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="mb-3">
                    <Form.Group>
                        <Form.Label>Til Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Name (e.g. Dads Birthday)" defaultValue={formData.name} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Select aria-label="Default select Example" name="category" onChange={handleChange}>
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
                        <Form.Control as="textarea" rows={5} name="description" defaultValue={formData.description} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" name="due_date" defaultValue={formData.due_date} onChange={handleChange} />
                    </Form.Group>
                </Form>
            </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={submitTil}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </>
    )
}

function RenderView(props) {
    return (
    <h3>For the king!</h3>    
    )
}