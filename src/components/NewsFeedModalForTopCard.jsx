import React from "react";
import { Modal, Container, Button } from "react-bootstrap";
import "../stylesheets/newsFeedModalForTopCard-stylesheet.css"

const NewsFeedModalForTopCard = (props) => {
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
      <Modal.Footer className="icons-and-text-and-button">
      
        <div>
            <i class="bi bi-image icons-together image-icon"></i>
            <i class="bi bi-play-btn icons-together"></i>
            <i class="bi bi-file-earmark-text icons-together"></i>
            <i class="bi bi-briefcase-fill icons-together"></i>
            <i class="bi bi-star icons-together"></i>
            <i class="bi bi-graph-up icons-together"></i>
            <i class="bi bi-three-dots icons-together"></i>
        </div>
            <div className="anyone-and-button">
            <div className="anyone-text-and-icon">
            <i class="bi bi-chat-text"></i>
            <p className="anyone-text">Anyone</p>
            </div>
        
        <Button
          type="onSubmit"
          onClick={() => {
            console.log("Click");
            props.putprofiledata();
            props.onHide();
          }}
        >
          Post
        </Button>
        </div>
        
      </Modal.Footer>
    </Modal>
  );
};

export default NewsFeedModalForTopCard;
