import React, { useState, useEffect } from "react";
import { Modal, Container, Col, Row, Button, Form } from "react-bootstrap";
import "./styles.css";
import axios from "axios";
import { Category } from './index';

export default function Modals(props) {
  const { type, setType, til, cats, setCats, modalUp, setModalUp, setReload, reload } = props;
  const [catType, setCatType] = useState();
  // detects which Modal interface is to be rendered based on type State
  // note that the same component is used for both editing and creating a new Til.
  function RenderSwitch() {
    switch (type) {
      case "new-til":
        return (
          <RenderTil
            type={type}
            setType={setType}
            handleClose={handleClose}
            cats={cats}
            setCats={setCats}
            setReload={setReload}
            catType={catType}
            setCatType={setCatType}
          />
        );
      case "edit-til":
        return (
          <RenderTil
            type={type}
            setType={setType}
            handleClose={handleClose}
            til={til}
            cats={cats}
            setCats={setCats}
            setReload={setReload}
            catType={catType}
            setCatType={setCatType}
          />
        );
      case "view-til":
        return (
          <RenderView
            type={type}
            setType={setType}
            handleClose={handleClose}
            til={til}
            cats={cats}
            setCats={setCats}
            catType={catType}
            setCatType={setCatType}
          />
        );
      default:
        return <h3>No Type Selected</h3>;
    }
  }

  // function handle closing the modal and resetting state.
  const handleClose = () => {
    setModalUp(false);
    setType("");
  };

  return (
    <Modal size="lg" show={modalUp} onHide={handleClose}>
      <RenderSwitch select={type} />
    </Modal>
  );
}

function RenderTil(props) {
  const { type, handleClose, til, cats, setReload, catType, setCatType  } = props;
  // set state for editing the form, and creating empty array if a new til is being created
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (type === "new-til") {
      setFormData({
        name: "",
        description: "",
        category_id: "",
        due_date: "",
        location: "",
        user_id: "1",
        category: []
      });
      setCatType("new-cat");
    }
    if (type === "edit-til") {
      setFormData(til);
      setCatType("edit-cat");
    }
  }, [type, til]);

  // submit function

  async function submitTil(e) {
    if (type === "edit-til") {
      axios
        .put(`./api/events/${formData.id}`, formData)
        .then((response) => {
          console.log(response);
          setReload(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (type === "new-til") {
      axios
        .post("./api/events/", formData)
        .then((response) => {
          console.log(response);
          setReload(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    handleClose();
  }

  // function handle changes in form data

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{formData.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="d-flex flex-row">   
            <Col>
                <Row className="d-flex">
                    <Col>
                        <Form className="mb-3">
                            <Form.Group>
                                <Form.Label>Til Name</Form.Label>
                                <Form.Control
                                type="text"
                                name="name"
                                placeholder="Name (e.g. Dads Birthday)"
                                defaultValue={formData.name}
                                onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Category</Form.Label>
                                <Form.Select
                                aria-label="Default select Example"
                                name="category_id"
                                onChange={handleChange}
                                >
                                <option>Choose category</option>
                                {cats.map((cat) => {
                                    if (cat.id === formData.category_id) {
                                    return (
                                        <option value={cat.id} selected>
                                        {cat.name}
                                        </option>
                                    );
                                    } else {
                                    return <option value={cat.id}>{cat.name}</option>;
                                    }

                                    return;
                                })}
                                <option value="new">Add new category</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="description.TextArea">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                as="textarea"
                                rows={5}
                                name="description"
                                defaultValue={formData.description}
                                onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Due Date</Form.Label>
                                <Form.Control
                                type="date"
                                name="due_date"
                                defaultValue={formData.due_date}
                                onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Col>
            <Col>
              <Category cat={til.category} catType={catType} />   
            </Col>
        </Container>
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
  );
}

function RenderView(props) {
  const { type, setType, handleClose, til, catType, setCatType } = props;
  setCatType("view-cat")
  // Because we are not editing anything, the view component is unique.

  // function fires when Edit button is selected.
  const editTil = (event) => {
    setType("edit-til");
    setCatType("edit-cat")
  };

  // Deletes the Till being viewed.
  const deleteTil = (event) => {
    axios.delete(`/api/events/${til.id}`);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{til.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="d-flex flex-row">
          <Col>
            <Row className="d-flex">
              <Col>
                <span>{til.description}</span>
                <span>{til.due_date}</span>
              </Col>
            </Row>
            <Row>
              <Col></Col>
            </Row>
          </Col>
          <Col>
            <Category cat={til.category} catType={catType} />
          </Col>
        </Container>
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
  );
}
