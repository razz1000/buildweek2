import React from "react";
import ProfileModal from "./ProfileModal";
import { useState, useEffect } from "react";
import AddExperience from "./AddExperience";

const Experience = ({ user, edituserdata, getaction }) => {
  const [modalShow, setModalShow] = useState(false);
  const [content, setContent] = useState();
  const [title, setTitle] = useState();

  return (
    <div className="row d-flex justify-content-between">
      <div className="col-2">
        <img
          src="https://www.pngkey.com/png/full/240-2401662_cbs-logo-vertical-notext-blue-rgb-copenhagen-business.png"
          className="education-logo"
          alt="CBS"
        />
      </div>
      <div className="col-7 p-0">
        <div>
          <h5 className="header-text">{user.role}</h5>
        </div>
        <p className="text-under-header">{user.company}</p>
        <p className="year-text">
          {user.startDate} - {user.endDate}
        </p>
        <p className="year-text">{user.area}</p>
      </div>

      <div className="col-3 d-flex justify-content-end align-items-center">
        <i
          className="bi bi-plus-lg  plus-icon m-2"
          onClick={() => {
            getaction("add");
            setTitle("Add experience");
            setModalShow(true);
            setContent(() => (
              <AddExperience user={user} edituserdata={edituserdata} />
            ));
          }}
        ></i>

        <i
          className="bi bi-pencil  plus-icon m-2"
          onClick={() => {
            setTitle("Edit experience");
            getaction("edit");
            setModalShow(true);
            setContent(() => (
              <AddExperience user={user} edituserdata={edituserdata} />
            ));
          }}
        ></i>
      </div>
      <ProfileModal
        show={modalShow}
        content={content}
        title={title}
        onHide={() => setModalShow(false)}
      />
    </div>
    // </div>

    // <div className="outer-lower-container m-3">
    //   <div>
    //     <img
    //       src="https://www.pngkey.com/png/full/240-2401662_cbs-logo-vertical-notext-blue-rgb-copenhagen-business.png"
    //       className="education-logo"
    //       alt="CBS"
    //     />
    //   </div>
    //   <div className="text-next-to-logo">
    //     <div>
    //       <h5 className="header-text">{user.role}</h5>
    //     </div>
    //     <p className="text-under-header">{user.company}</p>
    //     <p className="year-text">
    //       {user.startDate} - {user.endDate}
    //     </p>

    //     <p className="year-text">{user.area}</p>
    //   </div>
    //   <div>
    //     <i
    //       className="bi bi-plus-lg  plus-icon m-2"
    //       onClick={() => {
    //         setModalShow(true);
    //         setContent(() => <h1>{"I am plus"}</h1>);
    //       }}
    //     ></i>

    //     <i
    //       className="bi bi-pencil  plus-icon m-2"
    //       onClick={() => {
    //         setModalShow(true);
    //         setContent(() => (
    //           <AddExperience user={user} edituserdata={edituserdata} />
    //         ));
    //       }}
    //     ></i>
    //   </div>
    //   <ProfileModal
    //     show={modalShow}
    //     content={content}
    //     onHide={() => setModalShow(false)}
    //   />
    // </div>
  );
};

export default Experience;
