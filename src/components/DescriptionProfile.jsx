import React from "react";
import { Row, Col } from "react-bootstrap";

const DescriptionProfile = ({ profiledata }) => {
  return (
    <div>
      <Row className="description-section">
        <Col md={9}>
          <div className="bio-text">
            <h3>{profiledata.name + " " + profiledata.surname} </h3>
            <p>{profiledata.bio}</p>
          </div>
          <div>
            <p style={{ textAlign: "start", marginLeft: "2rem" }}>
              {profiledata.area}
              <a href="#" className="links " style={{ marginLeft: "0.5rem" }}>
                Contact Info
              </a>
            </p>
          </div>
          <div>
            <p style={{ textAlign: "start", marginLeft: "2rem" }}>
              <a href="#" className="links ">
                60 connections
              </a>
            </p>
          </div>
          <div className="d-flex ml-4 mb-2">
            <button
              type="button"
              className="btn full-blue-btn text-white rounded-pill ml-1"
            >
              Open to
            </button>
            <button
              type="button"
              className="btn blue-border-btn rounded-pill mx-2"
            >
              Add profile section
            </button>
            <button
              type="button"
              className="btn gray-border-btn rounded-pill mx-2"
            >
              more
            </button>
          </div>
        </Col>

        <Col md={3} className="d-flex justify-content-start">
          <div>
            <p>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_200_200/0/1647618816994?e=2147483647&v=beta&t=hgwtIzbwPl5z4OGvOxQSn6QWkVk3C_GlW2lrqqbJkYA"
                alt=""
                width={"30px"}
              />
              <a
                href="https://www.linkedin.com/school/epicodeglobal/"
                target="_blank"
              >
                Strive School
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DescriptionProfile;
