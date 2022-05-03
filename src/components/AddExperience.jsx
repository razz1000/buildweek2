import React from "react";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const AddExperience = (props) => {
  const [userExperience, setUserExperience] = useState(props.userexp);

  //   useEffect(() => setNewData(props.profiledata), []);

  return (
    <Form>
      <Form.Group>
        <br />
        <Form.Control
          value={userExperience.role}
          type="text"
          placeholder="Role"
          onChange={(e) => console.log(e.target.value)}
          //   onChange={(e) => props.editprofiledata(e, "role")}
        />
        <br />
        <Form.Control
          value={userExperience.company}
          type="text"
          placeholder="Last name"
          //   onChange={(e) => props.editprofiledata(e, "company")}
        />
        <br />
        <Form.Control
          value={userExperience.startDate}
          type="date"
          placeholder="Start date"
          //   onChange={(e) => props.editprofiledata(e, "startDate")}
        />
        <br />
        <Form.Control
          value={userExperience.endDate}
          type="date"
          placeholder="End date"
          //   onChange={(e) => props.editprofiledata(e, "endDate")}
        />
        <br />
        <Form.Group
          value={userExperience.description}
          controlId="exampleForm.ControlTextarea1"
          //   onChange={(e) => props.editprofiledata(e, "description")}
        >
          <Form.Control as="textarea" rows={3} placeholder="Description" />
        </Form.Group>

        <Form.Control
          value={userExperience.area}
          type="text"
          placeholder="Location"
        />
        <br />
      </Form.Group>
    </Form>
  );
};

export default AddExperience;
