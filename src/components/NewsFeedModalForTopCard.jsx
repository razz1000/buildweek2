import React, { useEffect } from "react";
import { Modal, Container, Button } from "react-bootstrap";
import "../stylesheets/newsFeedModalForTopCard-stylesheet.css"
import {useState} from "react"



const NewsFeedModalForTopCard = (props) => {

    
        const [userInputData, setUserInputData] = useState("")


    let bodyData = {
        text: userInputData
    }



        let postNewPostFunction = async () => {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/",{
                method: 'POST',
                body: JSON.stringify(bodyData),
                headers: {
                "Content-Type": "application/json",
                  authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s',
                   }
              })

              if(response.ok) {
                  console.log(response)
              }
        }
        

        useEffect(() =>{
        postNewPostFunction()
        },[userInputData])


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
          onClick={(event) => {

/*             props.putprofiledata(); */
            console.log(event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector(".form-text-area").value) 
            setUserInputData(event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector(".form-text-area").value)
            
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
