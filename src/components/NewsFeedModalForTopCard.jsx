import React, { useEffect } from "react";
import { Modal, Container, Button } from "react-bootstrap";
import "../stylesheets/newsFeedModalForTopCard-stylesheet.css"
import {useState} from "react"
import ProfileModal from "./ProfileModal"
import UploadPostPicture from "./UploadPostPicture";
import UploadPostPictureForNewPost from "./UploadPostPictureForNewPost"
import ProfileModal2 from "./ProfileModal2";

const NewsFeedModalForTopCard = (props) => {
  const [modalShow, setModalShow] = useState(false)
  const [modalContent, setModalContent] = useState()
  const [userInputData, setUserInputData] = useState("")
  const [postID, setPostID] = useState("")
  const [image, setImage] = useState(``);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false)


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
                let data = await response.json()
                console.log("This is the data : ")
                console.log(data)
                setPostID(data._id)  
              }
        }
        
        useEffect(() =>{
        postNewPostFunction()
        },[userInputData])
       
        useEffect(() => {
          uploadImage()
        },[postID])

        useEffect(()=> {
/*           window.location.reload() */
      }, [reload]);

        let imageUploadFunction = () => {
          setModalShow(true)
          console.log('Clicked ! yehaa')
          console.log(postID)
          setModalContent(<UploadPostPictureForNewPost postID={postID} />)
          
        }

        const selected = (e) => {
          setImage(e.target.files[0]);
        };

        const uploadImage = async (e) => {
          const data = new FormData();
          data.append("post", image);
          setLoading(true);
          try {
            const res = await fetch(
              "https://striveschool-api.herokuapp.com/api/posts/" + postID,
              {
                method: "POST",
                body: data,
                headers: {
                  authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s",
                },
              }
            );
            if(res.ok) { 
            const file = await res.json();
            setLoading(false);
            console.log("Files details: ", file);
           window.location.href = 'http://localhost:3000/feed'
} } catch (error) {
            console.log(`❌error❌`, error);
          }
        };



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
        <div>
      <div class="form-group">
        <label for="exampleFormControlFile1">Upload a post image</label>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
          onChange={selected}
        />
      </div>
      <button
        type="button"
        onClick={() => {
        console.log("click")
        
    }}
        class="btn btn-primary"
      >
        Upload your new post picture
      </button>
    </div>

            <i class="bi bi-image icons-together image-icon"
            /*  onClick={() => {
              console.log('Clicked ! yehaa new on w')
              setModalContent(<UploadPostPicture postID={postID} />)
              setModalShow(true)
            }}
             */
            ></i>
           {/*   <ProfileModal2
                content={modalContent}
                show={modalShow}
                onHide={() => setModalShow(false)}
          /> */}
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
