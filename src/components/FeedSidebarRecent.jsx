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
        <Col>
          <i className="bi bi-hash mr-2"></i>
          <span>technology</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col>
          <i className="bi bi-hash mr-2"></i>
          <span>marketing</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col>
          <i className="bi bi-hash mr-2"></i>
          <span>covid19</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col className="mb-2">
          <i className="bi bi-hash mr-2"></i>
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
        <Col className="mt-2 mb-2">
          <i class="bi bi-person-video2 mr-2"></i>
          <span>Music Industry Network</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col>
          <p className="margin-for-text-top">See all</p>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <a href="/Events">Events</a>
        </Col>
        <Col className="d-flex justify-content-end">
          <i className="bi bi-plus"></i>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="/Hashtags">Followed Hashtags</a>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col className="mt-1">
          <i className="bi bi-hash mr-2"></i>
          <span>technology</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col>
          <i className="bi bi-hash mr-2"></i>
          <span>marketing</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col>
          <i className="bi bi-hash mr-2"></i>
          <span>covid19</span>
        </Col>
      </Row>
      <Row className="hover-row">
        <Col>
          <p className="margin-for-text-bottom">See all</p>
        </Col>
      </Row>
      <hr></hr>
      <Row className="discover-more-sidebar-button hover-row">
        <Col className="text-center mt-3">
          <p>Discover more</p>
        </Col>
      </Row>
    </Container>
  )
}
export default FeedSidebarRecent
