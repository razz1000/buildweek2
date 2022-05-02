import { Container, Row, Col, Button } from 'react-bootstrap'
import './stylesheets/singlePerson.css'

const SinglePerson = () => {
  return (
    <Container fluid className="py-1">
      <Row>
        <Col md={2}>
          <img
            style={{ height: '50px', width: '50px', borderRadius: '50%' }}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsm.askmen.com%2Ft%2Faskmen_in%2Farticle%2Ff%2Ffacebook-p%2Ffacebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg&f=1&nofb=1"
            alt="profilePic"
          />
        </Col>
        <Col md={10}>
          <Row>
            <span className="name">John O'Brien</span>{' '}
            <span className="dash">-</span> <span className="number">3rd</span>
          </Row>
          <Row>
            <p className="occupation">
              Lead Biotech Production Specialist at Regeneron Pharmaceuticals,
              Inc.
            </p>
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
