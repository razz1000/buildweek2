import React from "react";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const EditJumbotronForm = (props) => {
  const [newData, setNewData] = useState(props.profiledata);

  console.log("newData: ", newData);
  console.log("props: ", props.profiledata);
  useEffect(() => setNewData(props.profiledata), []);

  return (
    <Form>
      <Form.Group>
        <br />
        <Form.Control
          value={props.profiledata.name}
          type="text"
          placeholder="First Name"
          onChange={(e) => props.editprofiledata(e, "name")}
        />
        <br />
        <Form.Control
          value={props.profiledata.surname}
          type="text"
          placeholder="Last name"
          onChange={(e) => props.editprofiledata(e, "surname")}
        />
        <br />
        <Form.Control
          value={props.profiledata.email}
          type="email"
          placeholder="Email"
          onChange={(e) => props.editprofiledata(e, "email")}
        />
        <br />
        <Form.Group
          value={props.profiledata.bio}
          controlId="exampleForm.ControlTextarea1"
          onChange={(e) => props.editprofiledata(e, "bio")}
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
    </Form>
  );
};

export default EditJumbotronForm;
