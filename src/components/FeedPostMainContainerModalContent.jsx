import React, { useEffect, useState } from "react";
import {Form} from "react-bootstrap"




let FeedPostMainContainerModalContent = (props) => {

    const [postDataState, setpostDataState] = useState([])

    let onChangeFunction = (e) => { 
        return(
            setpostDataState(e.target.value)
        )
    }



    useEffect(() => {
        setpostDataState(props.postData)
    }, [])

    return(
        <div className="the-whole-modal">
        <div className="top-section-picture-and-info">
             <div>
              <img className="profile-img-top" src="" alt="" />
              </div>
              <div className="name-and-where-to-post" >
                  <p className="texts-for-the-modal"><p>{props.postData.user.name + " " + props.postData.user.surname}</p></p>
                  <p className="texts-for-the-modal ml-2">Anyone ▼ </p>
              </div>
        </div>
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" className="form-text-area" rows={3} placeholder="Hello" value={postDataState.text}  onChange={onChangeFunction}><p></p></Form.Control>
            </Form.Group>
        </Form>
        <p className="hashtag-text">Add hashtag</p>


        </div>
  
    )
}

export default FeedPostMainContainerModalContent