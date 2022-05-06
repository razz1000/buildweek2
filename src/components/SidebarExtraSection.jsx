import { Container, Row, Col } from 'react-bootstrap'
import './stylesheets/sidebarExtra.css'

const SidebarExtraSection = () => {
  return (
    <Container>
      <Row className="sidebar-main-row">
        <Col>
          <Row>
            <Col className="mt-3">
              <i className="bi bi-linkedin"></i>
              <span className="display-4 some-more-about-you-text">
                Some more about you
              </span>
            </Col>
          </Row>
          <Row>
            <span className="mt-3 ml-3">
              Learn what hiring managers look for in answers to top interview
              questions
            </span>
          </Row>
          <Row className="mb-4 mt-3 border-row">
            <Col md={2}>
              <img
                style={{ height: '50px', width: '50px' }}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwritestylesonline.com%2Fwp-content%2Fuploads%2F2016%2F08%2FFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg&f=1&nofb=1"
                alt="profilePic"
              />
            </Col>
            <Col md={10} className="sidebar-extra-text">
              <span className="sidebar-extra-text">
                Tell me about yourself.
              </span>
              <hr />
            </Col>
          </Row>
          <Row className="mb-4 border-row">
            <Col md={2}>
              <img
                style={{ height: '50px', width: '50px' }}
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fassets.gcstatic.com%2Fu%2Fapps%2Fasset_manager%2Fuploaded%2F2015%2F03%2Fbusinessmen-doing-business-13-1421939344-custom-0.jpg&f=1&nofb=1"
                alt="profilePic"
              />
            </Col>
            <Col md={10} className="sidebar-extra-text">
              <span className="sidebar-extra-text">
                Do you have any questions for me?
              </span>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <img
                style={{ height: '50px', width: '50px' }}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwritestylesonline.com%2Fwp-content%2Fuploads%2F2016%2F08%2FFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg&f=1&nofb=1"
                alt="profilePic"
              />
            </Col>
            <Col md={10} className="sidebar-extra-text">
              <span className="sidebar-extra-text">
                Tell me about a time you had to persuade someone.
              </span>
            </Col>
          </Row>
          <Row className="see-all-questions-row">
            <Col className="d-flex align-items-center justify-content-center mt-4 mb-2">
              <span className="see-all-questions-text">See all quesitons</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default SidebarExtraSection
