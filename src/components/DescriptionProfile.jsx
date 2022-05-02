import React from "react";
import { Row, Col } from "react-bootstrap";

const DescriptionProfile = () => {
  return (
    <div>
      <Row className="description-section">
        <Col md={8}>
          <div>
            <h3>Daria Alexandra</h3>
            <p className="bio-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
              corporis magnam perspiciatis deserunt rerum odio iure fuga nisi?
              Commodi, soluta!
            </p>
          </div>
          <div>
            <p style={{ textAlign: "start", marginLeft: "2rem" }}>
              London Area, United Kingdom
              <a href="#" className="links ">
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
