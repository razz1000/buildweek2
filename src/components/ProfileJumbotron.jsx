import React from "react";

import DescriptionProfile from "./DescriptionProfile";
import ProfileModal from "./ProfileModal";
import { useState } from "react";
import { Row } from "react-bootstrap";
import EditJumbotronForm from "./EditJumbotronForm";
import UploadProfilePicture from "./UploadProfilePicture";

const ProfileJumbotron = ({ profiledata, editprofiledata, putprofiledata }) => {
  const [modalShow, setModalShow] = useState(false);

  const [modalContent, setModalContent] = useState();
  const [action, setAction] = useState(putprofiledata);

  return (
    <div className="profile-jumbotron ">
      <Row>
        <img
          className="profile-cover"
          src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />

        <div
          className={`edit-cover-btn d-flex justify-content-center align-items-center `}
          style={{ right: "2rem", top: "1rem" }}
        >
          <i
            className="fa-solid fa-pencil mr-4 mt-4  "
            style={{ position: "absolute", bottom: "0.5rem", left: "9px" }}
          ></i>
        </div>
      </Row>

      <Row>
        <img
          className="profile-img"
          src={profiledata.image}
          alt=""
          onClick={() => {
            console.log("cliock");
            setAction(console.log("close"));
            setModalContent(<UploadProfilePicture />);
            setModalShow(true);
          }}
        />

        <div
          className={`edit-info-btn d-flex  justify-content-center align-items-center`}
          style={{ top: "11rem", right: "2rem" }}
        >
          <i
            className="fa-solid fa-pencil mr-4 mt-4 "
            style={{ position: "absolute", bottom: "0.5rem", left: "9px" }}
            onClick={() => {
              setModalContent(
                <EditJumbotronForm
                  profiledata={profiledata}
                  editprofiledata={editprofiledata}
                />
              );
              setModalShow(true);
            }}
          ></i>
        </div>
      </Row>
      <Row>
        <ProfileModal
          content={modalContent}
          putprofiledata={action}
          profiledata={profiledata}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        <DescriptionProfile profiledata={profiledata} />
      </Row>
    </div>
  );
};

export default ProfileJumbotron;
