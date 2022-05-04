import './stylesheets/feedSidebarRecent.css'
import { Container, Row, Col } from 'react-bootstrap'

const FeedSidebarRecent = () => {
  return (
    <Container className="sidebar-recent-main-container">
      <Row>
        <Col className="mt-3">
          <p>Recent</p>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col md={2}>
          <i class="bi bi-hash"></i>
        </Col>
        <Col md={10}>
          <span>tech</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col md={2}>
          <i class="bi bi-hash"></i>
        </Col>
        <Col md={10}>
          <span>marketing</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col md={2}>
          <i class="bi bi-hash"></i>
        </Col>
        <Col md={10}>
          <span>covid 19</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col md={2}>
          <i class="bi bi-hash"></i>
        </Col>
        <Col md={10}>
          <span>Music Industry Network</span>
        </Col>
      </Row>
      {/* end of recent */}
      <Row>
        <Col>
          <a href="/groups">Groups</a>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col md={2}>
          <i class="bi bi-hash"></i>
        </Col>
        <Col md={10}>
          <span>Music Industry Network</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col md={2}></Col>
        <Col md={10}>
          <p>See all</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="/Events">Events</a>
        </Col>
        <Col className="d-flex justify-content-end">
          <i class="bi bi-plus"></i>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="/Hashtags">Followed Hashtags</a>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col md={2}>
          <i class="bi bi-hash"></i>
        </Col>
        <Col md={10}>
          <span>technology</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col md={2}>
          <i class="bi bi-hash"></i>
        </Col>
        <Col md={10}>
          <span>marketing</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col md={2}>
          <i class="bi bi-hash"></i>
        </Col>
        <Col md={10}>
          <span>covid19</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col md={2}></Col>
        <Col md={10}>
          <p>See all</p>
        </Col>
      </Row>
      <hr></hr>
      <Row className="discover-more-sidebar-button hover-row">
        <Col className="text-center">
          <p>Discover more</p>
        </Col>
      </Row>
    </Container>
  )
}
export default FeedSidebarRecent
