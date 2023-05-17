import React, {useState, useEffect, useRef} from 'react';
import {Modal, Container, Col, Row, Button, Form} from 'react-bootstrap';
import './styles.css';
import axios from 'axios';


export function Modals(props) {
    const { type, setType, til, setTil, cats, setCats, modalUp, setModalUp } = props; 

    // detects which Modal interface is to be rendered based on type State
    // note that the same component is used for both editing and creating a new Til.
    function RenderSwitch() {
        console.log(type);
        switch(type) {
            case 'new-til':
                return <RenderTil type={type} setType={setType} handleClose={handleClose} cats={cats} setCats={setCats} />;
            case 'edit-til':
                return <RenderTil type={type} setType={setType} handleClose={handleClose}  til={til} cats={cats} setCats={setCats} />
            case 'view-til':
                return <RenderView type={type} setType={setType} handleClose={handleClose}  til={til} cats={cats} setCats={setCats} />
            default:
                return <h3>No Type Selected</h3>;
        }
    }

    // function handle closing the modal and resetting state.
        const handleClose = () => {
            setModalUp(false)
            setType('');
        };

    return(
        <Modal show={modalUp} onHide={handleClose}>
            <RenderSwitch select={type} />
        </Modal>
    )
}

function RenderTil(props) {
    const { type, setType, handleClose, til, setTil, cats, setCats } = props;
    // set state for editing the form, and creating empty array if a new til is being created
    const [formData, setFormData] = useState({});

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

    // submit function

    async function submitTil(e) {
        axios.post('/api/events')
    }

    // function handle changes in form data

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
                <Modal.Title>{formData.title}</Modal.Title>
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
    const { type, setType, handleClose, til, setTil, cats, setCats } = props;
    
    // Because we are not editing anything, the view component is unique.

    // function fires when Edit button is selected.
    const editTil = (event) => {
        setType("edit-til");
    }
    
    // Deletes the Till being viewed.
    const deleteTil = (event) => {
        axios.delete(`/api/events/${til.id}`)
    }

    return (
        <>
        <Modal.Header closeButton>
        <Modal.Title>{til.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <span>{til.name}</span>
      <span>{til.description}</span>
      <span>{til.due_date}</span>
      <span>{til.category.name}</span>
    </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        <Button variant="primary" type="submit" onClick={editTil}>
            Edit Til
        </Button>
        <Button variant="danger" type="submit" onClick={deleteTil}>
            Delete Til
        </Button>
    </Modal.Footer>
    </>
    )
}