import React from "react";

import DescriptionProfile from "./DescriptionProfile";
import ProfileModal from "./ProfileModal";
import { useState } from "react";
import { Row } from "react-bootstrap";
import EditJumbotronForm from "./EditJumbotronForm";

const ProfileJumbotron = ({ profiledata, editprofiledata, putprofiledata }) => {
  const [modalShow, setModalShow] = useState(false);
  const [image, setImage] = useState(``);
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("profile", files[0]);
    setLoading(true);
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/626fc30317c4e00015d7a082/picture",
        {
          method: "POST",
          body: data,
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s",
          },
        }
      );
      const file = await res.json();
      setLoading(false);
      console.log(file);
    } catch (error) {
      console.log(`❌error❌`, error);
    }
  };

  return (
    <div className="profile-jumbotron ">
      <input type="file" id="profile" name="profile" onChange={uploadImage} />
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
        <img className="profile-img" src={profiledata.image} alt="" />
        <div
          className={`edit-info-btn d-flex  justify-content-center align-items-center`}
          style={{ top: "11rem", right: "2rem" }}
        >
          <i
            className="fa-solid fa-pencil mr-4 mt-4 "
            style={{ position: "absolute", bottom: "0.5rem", left: "9px" }}
            onClick={() => setModalShow(true)}
          ></i>
        </div>
      </Row>
      <Row>
        <ProfileModal
          content={
            <EditJumbotronForm
              profiledata={profiledata}
              editprofiledata={editprofiledata}
            />
          }
          putprofiledata={putprofiledata}
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
