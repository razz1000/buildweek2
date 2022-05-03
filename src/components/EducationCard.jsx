import React from "react";
import "../stylesheets/education-card-stylesheet.css";

let EducationCard = () => {
  return (
    <div>
      <div className="outer-container-top">
        <div>
          <h3>Education</h3>
        </div>
        <div>
          <i className="bi bi-plus-lg icons plus-icon"></i>
          <i className="bi bi-pencil icons edit-icon"></i>
        </div>
      </div>
      <div className="outer-lower-container">
        <div>
          <img
            src="https://www.pngkey.com/png/full/240-2401662_cbs-logo-vertical-notext-blue-rgb-copenhagen-business.png"
            className="education-logo"
            alt="CBS"
          />
        </div>
        <div className="text-next-to-logo">
          <h5 className="header-text">Copenhagen Business School</h5>
          <p className="text-under-header">
            Master, Management of Innovation & Business Developemnt
          </p>
          <p className="year-text">2020 - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
