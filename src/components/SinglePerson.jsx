import { Container, Row, Col, Button } from 'react-bootstrap'
import './stylesheets/singlePerson.css'

const SinglePerson = (props) => {
  return (
    <Container fluid className="py-1">
      <Row>
        <Col md={3}>
          <img
            style={{ height: '50px', width: '50px', borderRadius: '50%' }}
            src={props.profile.image}
            alt="profilePic"
          />
        </Col>
        <Col md={9}>
          <Row>
            <span className="name">
              {props.profile.name} {props.profile.surname}
            </span>{' '}
            <span className="dash">-</span> <span className="number">3rd</span>
          </Row>
          <Row>
            <p className="occupation">{props.profile.title}</p>
          </Row>
          <Row>
            <Button variant="outline-secondary" className="rounded-pill">
              Connect
            </Button>{' '}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default SinglePerson
