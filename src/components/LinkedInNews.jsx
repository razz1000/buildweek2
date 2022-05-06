import { Container, Row, Col } from 'react-bootstrap'
import './stylesheets/linkedInNews.css'

const LinkedInNews = () => {
  return (
    <Container className="linked-in-news-container">
      <Row className="heading-row">
        <Col>
          <span>LinkedIn News</span>
        </Col>
        <Col className="d-flex justify-content-end">
          <i class="bi bi-info-square-fill"></i>
        </Col>
      </Row>
      <Row className="news-item-row">
        <Row>
          <Col>
            <i className="bi bi-dot"></i>
            <span className="news-item-big">
              EU nears total ban of Russian oil
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="news-item-small">5h ago - 11,501 readers</span>
          </Col>
        </Row>
      </Row>
      <Row className="news-item-row">
        <Row>
          <Col>
            <i className="bi bi-dot"></i>
            <span className="news-item-big">CRA to refund teachers' taxes</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="news-item-small">16h ago - 2,318 readers</span>
          </Col>
        </Row>
      </Row>
      <Row className="news-item-row">
        <Row>
          <Col>
            <i className="bi bi-dot"></i>
            <span className="news-item-big">
              Will Musk take Twitter public again?
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="news-item-small">4h ago - 4,509 readers</span>
          </Col>
        </Row>
      </Row>
      <Row className="news-item-row">
        <Row>
          <Col>
            <i className="bi bi-dot"></i>
            <span className="news-item-big">
              Canada airport chaos amid travel boom
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="news-item-small">16h ago - 2318 readers</span>
          </Col>
        </Row>
      </Row>
      <Row className="news-item-row">
        <Row>
          <Col>
            <i className="bi bi-dot"></i>
            <span className="news-item-big">
              Analysts worry, pull back on Shopify
            </span>
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="news-item-small">17h ago - 964 readers</span>
          </Col>
        </Row>
      </Row>
      <Row className="discover-more-sidebar-button hover-row mb-3">
        <Col className="mt-3 discover-more-sidebar-button">
          <span>Show more</span>
          <i className="bi bi-arrow-down ml-2"></i>
        </Col>
      </Row>
    </Container>
  )
}
export default LinkedInNews
