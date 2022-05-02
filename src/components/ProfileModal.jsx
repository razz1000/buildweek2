import React from "react";
import { Modal, Container, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

const ProfileModal = (props) => {
  const [newData, setNewData] = useState(props.profiledata);

  console.log("newData: ", newData);
  console.log("props: ", props.profiledata);
  useEffect(() => setNewData(props.profiledata), []);
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit your personal informations
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form>
            <Form.Group>
              <br />
              <Form.Control
                value={props.profiledata.name}
                type="text"
                placeholder="First Name"
                onChange={(e) => props.editprofiledata(e, "name")}
              />
              <br />
              <Form.Control
                value={props.profiledata.surname}
                type="text"
                placeholder="Last name"
                onChange={(e) => props.editprofiledata(e, "surname")}
              />
              <br />
              <Form.Control
                value={props.profiledata.email}
                type="email"
                placeholder="Email"
                onChange={(e) => props.editprofiledata(e, "email")}
              />
              <br />
              <Form.Group
                value={props.profiledata.bio}
                controlId="exampleForm.ControlTextarea1"
                onChange={(e) => props.editprofiledata(e, "bio")}
              >
                <Form.Control as="textarea" rows={3} placeholder="Bio" />
              </Form.Group>
              <br />
              <Form.Control
                value={props.profiledata.title}
                type="text"
                placeholder="Title"
              />
              <br />
              <Form.Control
                value={props.profiledata.area}
                type="text"
                placeholder="Location"
              />
              <br />
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="onSubmit"
          onClick={() => {
            console.log("Click");
            props.putprofiledata();
            props.onHide();
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
