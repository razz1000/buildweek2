import React, { useEffect } from "react"
import {Modal, Container, Button} from "react-bootstrap"
import FeedPostMainContainerModalContent from "./FeedPostMainContainerModalContent"
import {useState} from "react"
import {location} from "react"
import "../stylesheets/feedPostMainContainerModal-stylesheet.css"
import UploadPostPicture from "./UploadPostPicture"
import ProfileModal from "./ProfileModal"



let FeedPostMainContainerModal = (props) => {
  const [modalShow, setModalShow] = useState(false)
  const [modalContent, setModalContent] = useState()

   
  
 const [userInputText, setUserInputText] = useState("")
 const [postID, setpostID] = useState()

      let editDataFunction = async () => {
      let bodyData = {
         text: userInputText
            }
        let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + postID,{
            
          
          method: 'PUT',
              body: JSON.stringify(bodyData),
              headers: {
              "Content-Type": "application/json",
                authorization:
                  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s',
                 }
            })

            if(response.ok) {
                console.log(response)
                alert("Post updated")
                window.location.href = 'http://localhost:3000/feed'
            }
      }


      useEffect(() => {
        
        setpostID(props.postData._id)
      },[])



      let deleteFunction = async () => {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + postID,{
          method: 'DELETE',
              headers: {
                authorization:
                  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s',
                 }
            })
            if(response.ok) {
/*               let body = await response.json(); */

              alert("Post deleted")
            }
      }







  return(
 
<Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p>Edit or delete your post</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container
        onChange={(event) => setUserInputText(event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector(".input-field-area1").value)}><FeedPostMainContainerModalContent postData={props.postData}/></Container>
      </Modal.Body>
      <Modal.Footer className="icons-and-text-and-button">
      
        <div>
            <i class="bi bi-trash3-fill delete-button"
            onClick={() => {
              deleteFunction()
              props.onHide();
            }}
            ></i>
            <i class="bi bi-image icons-together image-icon"
            onClick={() => {
              console.log('Clicked ! yehaa')
              setModalContent(<UploadPostPicture postID={postID} />)
              setModalShow(true)
            }}
            ></i>
             <ProfileModal
          content={modalContent}
/*           putprofiledata={putprofiledata}
          profiledata={profiledata} */
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
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
            console.log(event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector(".input-field-area1").value) 
/*             setUserInputText(event.currentTarget.parentNode.parentNode.parentNode.parentNode.querySelector(".input-field-area1").value) */
            
            editDataFunction()
            props.onHide();
          }}
        >
          Edit
        </Button>
        </div>
        
      </Modal.Footer>
    </Modal>


    )
}

export default FeedPostMainContainerModal