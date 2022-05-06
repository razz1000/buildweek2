import React from 'react'
import {
  ListGroup,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton
} from 'react-bootstrap'
import '../stylesheets/footer-stylesheet.css'

let Footer = () => {
  return (
    <Container>
      <i className="bi bi-linkedin linkedin-icon2"></i>
      <Row>
        <Col>
          <ListGroup className="footer-listgroup">
            <p className="p-footer">About</p>
            <p className="p-footer">Community Guidelines</p>
            <p className="p-footer">Privacy & Terms ▼</p>
            <p className="p-footer">Sales Solutions</p>
            <p className="p-footer">Safety Center</p>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className="footer-listgroup">
            <p className="p-footer">Accessibility</p>
            <p className="p-footer">Careers</p>
            <p className="p-footer">Ad Choices</p>
            <p className="p-footer">Mobile</p>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className="footer-listgroup">
            <p className="p-footer">Talent Solutions</p>
            <p className="p-footer">Marketing Solutions</p>
            <p className="p-footer">Advertising</p>
            <p className="p-footer">Small Business</p>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className="footer-listgroup">
            <div className="icon-and-text-footer">
              <i className="bi bi-question-circle-fill footer-icons"></i>
              <div>
                <p className="text-next-to-icon p-footer">Questions?</p>
                <p className="text-next-to-icon2 p-footer">
                  Visit our Help Center
                </p>
              </div>
            </div>
            <div className="icon-and-text-footer">
              <i className="bi bi-gear-fill footer-icons"></i>
              <div>
                <p className="text-next-to-icon p-footer">
                  Manage your account and privacy
                </p>
                <p className="text-next-to-icon2 p-footer">
                  Go to your your settings
                </p>
              </div>
            </div>
          </ListGroup>
        </Col>
        <Col>
          <div className="dropdown-language-area">
            <p className="select-language-text">Select Language:</p>
            <DropdownButton id="dropdown-item-button" title="English (English)">
              <Dropdown.ItemText>Select Language</Dropdown.ItemText>
              <Dropdown.Item as="button">English</Dropdown.Item>
              <Dropdown.Item as="button">German</Dropdown.Item>
              <Dropdown.Item as="button">Portuguese</Dropdown.Item>
            </DropdownButton>
          </div>
        </Col>
      </Row>
      <p className="copyright-text">LinkedIn Corporation © 2022</p>
    </Container>
  )
}

export default Footer
