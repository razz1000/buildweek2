import { Container, Row, Col } from 'react-bootstrap'
import './stylesheets/sidebarTop.css'

const SidebarTop = () => {
  return (
    <Container className="sidebar-row">
      <Row className="d-flex side-top-hover align-items-center-end">
        <Col md={10}>
          <span className="sidebar-top-text top-text">
            Edit public profile & URL
          </span>
        </Col>
        <Col md={2}>
          <i className="bi bi-question question-mark"></i>
        </Col>
      </Row>
      <hr></hr>
      <Row className="d-flex side-top-hover">
        <Col md={10}>
          <span className="sidebar-top-text bottom-text">
            Add profile in another language
          </span>
        </Col>
        <Col md={2}>
          <i className="bi bi-question question-mark"></i>
        </Col>
      </Row>
    </Container>
  )
}
export default SidebarTop
