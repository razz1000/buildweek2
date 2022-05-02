import React from "react";

import DescriptionProfile from "./DescriptionProfile";
import ProfileModal from "./ProfileModal";
import { useState } from "react";
import { Row } from "react-bootstrap";

const ProfileJumbotron = ({ profiledata, editprofiledata }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="profile-jumbotron ">
      <Row>
        <img
          className="profile-cover"
          src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />

        <i className="fa-solid fa-pencil mr-4 mt-4 edit-cover-btn"></i>
      </Row>
      <Row>
        <img className="profile-img" src={profiledata.image} alt="" />
        <i
          className="fa-solid fa-pencil mr-4 mt-4 edit-info-btn"
          onClick={() => setModalShow(true)}
        ></i>
      </Row>
      <Row>
        <ProfileModal
          profiledata={profiledata}
          editprofiledata={editprofiledata}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        <DescriptionProfile profiledata={profiledata} />
      </Row>
    </div>
  );
};

export default ProfileJumbotron;
