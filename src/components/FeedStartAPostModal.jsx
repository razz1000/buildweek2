import React from "react"
import {Button, Modal} from "react-bootstrap"
import {useState} from "react"
import {Form, FormControl, InputGroup} from "react-bootstrap"
import "../stylesheets/feedStartAPostModal-stylesheet.css"

let FeedStartAPostModal = (props) => {

    return( 
        <div className="the-whole-modal">
        <div className="top-section-picture-and-info">
             <div>
              <img className="profile-img-top" src={props.profiledata.image} alt="" />
              </div>
              <div className="name-and-where-to-post" >
                  <p className="texts-for-the-modal">{props.profiledata.name + " " + props.profiledata.surname + " " + "▼" + " "}</p>
                  <p className="texts-for-the-modal ml-2">Anyone ▼ </p>
              </div>
        </div>
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" className="form-text-area" rows={3} placeholder="What would you like to talk about?" />
            </Form.Group>
        </Form>
        <p className="hashtag-text">Add hashtag</p>


        </div>
  
      );
  }

  export default FeedStartAPostModal


