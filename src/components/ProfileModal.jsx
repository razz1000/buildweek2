import React from "react";
import { Modal, Container, Button } from "react-bootstrap";

const ProfileModal = (props) => {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>{props.content}</Container>
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
