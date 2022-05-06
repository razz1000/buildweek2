import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";



const FeedPostMainContainerModalContent = (props) => {
  const [postDataState, setpostDataState] = useState(props.postData);
  const [text, setText] = useState("");

  let onChangeFunction = (e, key) => {
    setpostDataState({
      ...postDataState,
      [key]: e.target.value,
    });
  };

  /* 
    useEffect(() => {
        setpostDataState(props.postData)
    }, []) */
   console.log(postDataState); 

  return (
    <div className="the-whole-modal">
      <div className="top-section-picture-and-info">
        <div>
          <img className="profile-img-top" src="" alt="" />
        </div>
        <div className="name-and-where-to-post">
          <p className="texts-for-the-modal">
            <p>
              {props.postData.user.name + " " + props.postData.user.surname}
            </p>
          </p>
          <p className="texts-for-the-modal ml-2">Anyone ▼ </p>
        </div>
      </div>
      <div>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          {/*                <Form.Control as="textarea" className="form-text-area" rows={3} placeholder="Hello" value={postDataState.text} onChange={((e) => onChangeFunction(e, "text"))}> */}
          <input
            className="input-field-area1"
            placeholder={postDataState.text}
            value={text}
            onChange={(e) => {  
                setText(e.target.value)
            console.log(e.target.value)}}
          />

          {/*                     <p></p></Form.Control> */}
        </Form.Group>
        

      </div>
      <p className="hashtag-text">Add hashtag</p>
    </div>
  );
};

export default FeedPostMainContainerModalContent;
