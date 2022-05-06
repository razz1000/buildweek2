import './stylesheets/feedSidebarTop.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const FeedSidebarTop = ({ profiledata }) => {
  const [updatedId, setUpdatedId] = useState([])

  useEffect(() => {
    console.log(profiledata)
    setUpdatedId(profiledata)
  }, [profiledata])
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
          src={updatedId.image}
          alt="kitten"
        />
        <Col className="space-for-image">
          <p className="text-center main-name">
            {updatedId.name} {updatedId.surname}
          </p>
          <p className="text-center main-title">{updatedId.title}</p>
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
            <Col>
              <i className="bi bi-card-text mr-2"></i>
              <span className="grow-your-network-text">
                Try Premium for free
              </span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="my-items-row">
        <Col>
          <i className="bi bi-bookmark mr-2"></i>
          <span className="grow-your-network-text">My items</span>
        </Col>
      </Row>
    </Container>
  )
}
export default FeedSidebarTop
