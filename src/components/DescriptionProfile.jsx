import React from "react";
import { Row, Col } from "react-bootstrap";

const DescriptionProfile = ({ profileData }) => {
  return (
    <div>
      <Row className="description-section">
        <Col md={8}>
          <div className="bio-text">
            <h3>{profileData.name + profileData.surname} </h3>
            <p>{profileData.bio}</p>
          </div>
          <div>
            <p style={{ textAlign: "start", marginLeft: "2rem" }}>
              {profileData.area}
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
          <div className="d-flex ml-4">
            <button
              type="button"
              class="btn full-blue-btn text-white rounded-pill ml-1"
            >
              Open to
            </button>
            <button type="button" class="btn blue-border-btn rounded-pill mx-2">
              Add profile section
            </button>
            <button type="button" class="btn gray-border-btn rounded-pill mx-2">
              more
            </button>
          </div>
        </Col>

        <Col md={4} className="d-flex justify-content-center">
          <div>
            <p>Strive School</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DescriptionProfile;
