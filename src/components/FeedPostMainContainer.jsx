import { Container, Row, Col } from 'react-bootstrap'
import './stylesheets/feedPostMainContainer.css'

const FeedPostMainContainer = () => {
  return (
    <Container className="feed-post-main-container">
      <Row className="top-row">
        <Col md={2}>
          <img
            className="profile-image"
            src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427"
            alt="profile"
            height="70px"
            width="70px"
          />
        </Col>
        <Col md={8}>
          <Row>
            <span className="big-text-size">
              f.name l.name - logo - following
            </span>
          </Row>
          <Row>
            <span className="small-text-size">Co-chair - Foundation</span>
          </Row>
          <Row>
            <span className="small-text-size">19h - logo</span>
          </Row>
        </Col>
        <Col md={2}>
          <span>...</span>
        </Col>
      </Row>
      <Row className="text-row">
        <Col>
          <p>
            post text goes here post text goes here post text goes here post
            text goes here post text goes here post text goes here post text
            goes here post text goes here post text goes here post text goes
            here.
          </p>
        </Col>
      </Row>
      <Row>
        <img src="https://placekitten.com/538/538" alt="bill" />
      </Row>
      <Row className="likes-under-picture-row mt-2 small-text-size">
        <Col md={6}>
          <i className="bi bi-hand-thumbs-up"></i>
          <i className="bi bi-balloon-heart"></i>
          <i className="bi bi-chat-right-quote mr-3"></i>
          <span>11,561</span>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <span>446 comments - 258 shares</span>
        </Col>
      </Row>
      <hr className="hr-line" />
      <Row className="bottom-row">
        <Col md={3} className="flex-icons hover-1">
          <i className="bi bi-hand-thumbs-up mr-2"></i>
          <span>Like</span>
        </Col>
        <Col md={3} className="flex-icons hover-2">
          <i className="bi bi-chat-square-dots mr-2"></i>
          <span>Comment</span>
        </Col>
        <Col md={3} className="flex-icons hover-3">
          <i className="bi bi-arrow-90deg-right mr-2"></i>
          <span>Share</span>
        </Col>
        <Col md={3} className="flex-icons hover-4">
          <i className="bi bi-send-fill mr-2"></i>
          <span>Send</span>
        </Col>
      </Row>
    </Container>
  )
}
export default FeedPostMainContainer
