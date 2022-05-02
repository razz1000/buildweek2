import React from "react";
import { Modal, Container, Button, Form } from "react-bootstrap";
const ProfileModal = (props) => {
  let object = {};
  const getDataFromForm = (e, field) => {
    object = {
      ...object,
      [field]: "" + e.target.value,
    };
    console.log(object);
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit your personal informations
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form onSubmit={() => props.editprofiledata("how about now?")}>
            <Form.Group>
              <br />
              <Form.Control
                value={props.profiledata.name}
                type="text"
                placeholder="First Name"
                onInput={(e) => getDataFromForm(e, "name")}
              />
              <br />
              <Form.Control
                value={props.profiledata.surname}
                type="text"
                placeholder="Last name"
              />
              <br />
              <Form.Control
                value={props.profiledata.email}
                type="email"
                placeholder="Email"
              />
              <br />
              <Form.Group
                value={props.profiledata.bio}
                controlId="exampleForm.ControlTextarea1"
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
            <Button type="onSubmit">Save</Button>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="onSubmit"
          onClick={() => {
            props.editprofiledata("clicked");
            // props.onHide();
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
