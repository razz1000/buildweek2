import React from "react";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const AddExperience = ({
  setEditExp,
  experience,
  setexperiences,
  allExperiences,
}) => {
  const [userExperience, setUserExperience] = useState(experience);

  // const [userExperience, setUserExperience] = useState(user);

  // useEffect(() => setUserExperience(user), []);
  // //   console.log(userExperience);
  let obj = experience;
  let change = (e, field) => {
    obj = {
      ...obj,
      [field]: e.target.value,
    };

    console.log("experience: ", experience);
    console.log("all: experiences: ", allExperiences);

    console.log("ue:", userExperience);

    return (
      <Form>
        <Form.Group>
          <br />
          <Form.Control
            value={"a role"}
            onChange={(e) => change(e, "role")}
            type="text"
            placeholder="Role"
          />
          {/* <br />
        <Form.Control value={""} type="text" placeholder="Company" />
        <br /> */}
          {/* <Form.Control
          value={startDate}
          type="date"
          placeholder="Start date"
          onChange={(e) => change(e, "startDate")}
        />
        <br />
        <Form.Control
          value={endDate}
          type="date"
          placeholder="End date"
          onChange={(e) => change(e, "endDate")}
        />
        <br />
        <Form.Group
          value={description}
          controlId="exampleForm.ControlTextarea1"
          onChange={(e) => change(e, "description")}
        >
          <Form.Control as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <br />
        <Form.Control
          value={area}
          type="text"
          placeholder="Location"
          onChange={(e) => change(e, "area")}
        /> */}
          <br />
        </Form.Group>
      </Form>
    );
  };
};

export default AddExperience;
