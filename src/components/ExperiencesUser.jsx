import React from "react";

const ExperiencesUser = (props) => {
  return props.u.map((u) => {
    return (
      <div className="outer-lower-container m-3">
        <div>
          <img
            src="https://www.pngkey.com/png/full/240-2401662_cbs-logo-vertical-notext-blue-rgb-copenhagen-business.png"
            className="education-logo"
            alt="CBS"
          />
        </div>
        <div className="text-next-to-logo">
          <div>
            <h5 className="header-text">{u.role}</h5>
          </div>
          <p className="text-under-header">{u.company}</p>
          <p className="year-text">
            {u.startDate} - {u.endDate}
          </p>

          <p className="year-text">{u.area}</p>
        </div>
      </div>
    );
  });
};

export default ExperiencesUser;
