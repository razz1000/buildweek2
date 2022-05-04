import './stylesheets/feedSidebarTop.css'
import { Container, Row, Col } from 'react-bootstrap'

const FeedSidebarTop = () => {
  return (
    <Container className="feed-sidebar-top-main-container">
      <Row>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.divinestoneworks.net%2Fwp-content%2Fuploads%2F2017%2F04%2Fmystic-black-a.jpg&f=1&nofb=1"
          alt="profile"
          height="70px"
          width="100%"
          className="bordered-image"
        />
        <img
          className="rounded-profile-image"
          src="https://placekitten.com/85/85"
          alt="kitten"
        />
        <Col className="space-for-image">
          <p className="text-center main-name">Leon Bourke</p>
          <p className="text-center main-title">Co Founder</p>
        </Col>
      </Row>
      <Row className="connections-row">
        <Col md={10}>
          <Row>
            <Col>
              <span className="connections-text">Connections</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="grow-your-network-text">Grow your network</span>
            </Col>
          </Row>
        </Col>
        <Col md={2}>
          <span>14</span>
        </Col>
      </Row>

      <Row className="access-exclusive-row">
        <Col>
          <Row>
            <Col>
              <span>Access exclusive tools & insights</span>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <i class="bi bi-card-text"></i>
            </Col>
            <Col md={10}>
              <span className="grow-your-network-text">
                Try Premium for free
              </span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="my-items-row">
        <Col md={2}>
          <i class="bi bi-bookmark"></i>
        </Col>
        <Col md={10}>
          <span className="grow-your-network-text">My items</span>
        </Col>
      </Row>
    </Container>
  )
}
export default FeedSidebarTop
