import React from "react";
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import UploadExperiencePicture from "./UploadExperiencePicture";
const EditExperience = ({
  setEditExp,
  experience,
  setexperiences,
  allExperiences,
  editExp,
  profiledata,
  setprofiledata,
}) => {
  const [userExperience, setUserExperience] = useState(experience);

  let change = (e, field) => {
    setUserExperience({
      ...userExperience,
      [field]: e.target.value,
    });
    setEditExp({
      ...userExperience,
      [field]: e.target.value,
    });

    console.log("inside setUserExp: ", userExperience);
  };
  console.log("User Experience: ", userExperience);

  return (
    <Form>
      <h1>Edit Experience</h1>
      <Form.Group>
        <br />
        <Form.Control
          value={userExperience.role}
          type="text"
          placeholder="Role"
          onChange={(e) => change(e, "role")}
        />
        <br />
        <UploadExperiencePicture expId={experience._id} />
        <br />
        <Form.Control
          value={userExperience.company}
          type="text"
          placeholder="Company"
          onChange={(e) => change(e, "company")}
        />
        <br />
        <Form.Control
          value={userExperience.startDate}
          type="date"
          placeholder="Start date"
          onChange={(e) => change(e, "startDate")}
        />
        <br />
        <Form.Control
          value={userExperience.endDate}
          type="date"
          placeholder="End date"
          onChange={(e) => change(e, "endDate")}
        />
        <br />
        <Form.Group
          value={userExperience.description}
          type="text"
          controlId="exampleForm.ControlTextarea1"
          onChange={(e) => change(e, "description")}
        >
          <Form.Control as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <br />
        <Form.Control
          value={userExperience.area}
          type="text"
          placeholder="Location"
          onChange={(e) => change(e, "area")}
        />
        <br />
      </Form.Group>
    </Form>
  );
};

export default EditExperience;
