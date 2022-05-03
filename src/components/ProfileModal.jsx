import React from "react";
import { Modal, Container, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import EditJumbotronForm from "./EditJumbotronForm";

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
          <EditJumbotronForm
            profiledata={props.profiledata}
            editprofiledata={props.editprofiledata}
          />
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
