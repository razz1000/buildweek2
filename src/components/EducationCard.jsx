import React from 'react'
import '../stylesheets/education-card-stylesheet.css'
import { Container, Row, Col } from 'react-bootstrap'

let EducationCard = () => {
  return (
    <Container className="education-main-container">
      <Row>
        <Col>
          <div>
            <Row className="d-flex justify-content-between">
              <div className="outer-container-top d-flex justify-content-between">
                <Col>
                  <div>
                    <h3>Education</h3>
                  </div>
                </Col>
                <Col>
                  <div className="icons-box">
                    <i className="bi bi-plus-lg icons plus-icon"></i>
                    <i className="bi bi-pencil icons edit-icon"></i>
                  </div>
                </Col>
              </div>
            </Row>
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
        </Col>
      </Row>
    </Container>
  )
}

export default EducationCard
