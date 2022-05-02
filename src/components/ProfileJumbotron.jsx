import React from "react";
import { Row, Col } from "react-bootstrap";
import DescriptionProfile from "./DescriptionProfile";

const ProfileJumbotron = ({ profileData }) => {
  return (
    <div className="profile-jumbotron ">
      <Row>
        <img
          className="profile-cover"
          src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />

        <i
          className="fa-solid fa-pencil mr-4 mt-4 edit-cover-btn"
          style={{ color: "white" }}
        ></i>
      </Row>
      <Row>
        <img className="profile-img" src={profileData.image} alt="" />
        <i
          className="fa-solid fa-pencil mr-4 mt-4 edit-cover-btn"
          style={{ color: "black" }}
        ></i>
      </Row>
      <Row>
        <DescriptionProfile profileData={profileData} />
      </Row>
    </div>
  );
};

export default ProfileJumbotron;
