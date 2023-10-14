import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import './create.scss';
import { ADD_ITEM } from '../../utils/constant';

function Create({ status, handleClose,
    handleChange, submitCreateForm, state }) {
    const { id, firstName, lastName, contactNumber, email, age, dob, imageUrl } = state;
    return (
        <Modal show={status} onHide={handleClose} animation={true} centered>
            <Modal.Header closeButton className='modal-content_add'>
                <Modal.Title>{ADD_ITEM}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={submitCreateForm}>
                <Form.Group controlId="formBasicTitle">
              <Form.Label>Enter ID</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter ID"
                name="id"
                value={id || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
              <Form.Label>Enter FirstName</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter FirstName"
                name="firstName"
                value={firstName || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Enter LastName</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter LastName"
                name="lastName"
                value={lastName || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Enter ContactNumber</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter ContactNumber"
                name="contactNumber"
                value={contactNumber || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Email"
                name="email"
                value={email || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Enter Age</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Age"
                name="age"
                value={age || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Enter DOB</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter dob"
                name="dob"
                value={dob || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Enter Image URL</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Image URL"
                name="imageUrl"
                value={imageUrl || ''}
                onChange={handleChange}
              />
            </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
          </Button>
                <Button variant="success" onClick={submitCreateForm}>
                    Save
          </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Create;