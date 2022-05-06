import { Container, Row, Col, Button } from 'react-bootstrap'
import './stylesheets/underLinkedInNews.css'

const UnderLinkedInNews = () => {
  return (
    <Container className="under-linked-in-news-main-container">
      <Row>
        <Col className="d-flex justify-content-end">
          <span>Ad</span>
          <i className="bi bi-three-dots ml-2"></i>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="small-text text-center">
            Global automotive brand that's redefining luxury
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <img
            className="under-news-image"
            src="https://placekitten.com/100/100"
            alt="kitten"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="big-text text-center">
            Learn more about our mindful innovation
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Button variant="outline-info">Follow</Button>{' '}
      </Row>
    </Container>
  )
}
export default UnderLinkedInNews
