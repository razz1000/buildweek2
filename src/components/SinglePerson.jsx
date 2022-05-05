import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./stylesheets/singlePerson.css";
import { useLocation } from "react-router-dom";

const SinglePerson = (props) => {
  return (
    <Container fluid className="py-1">
      <Row>
        <Col md={3}>
          <img
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            src={props.profile.image}
            alt="profilePic"
          />
        </Col>
        <Col md={9}>
          <Row>
            {console.log("Use location: ", useLocation())}
            <Link to={`/profile-page/${props.profile._id}`}>
              <span className="name">
                {props.profile.name} {props.profile.surname}
              </span>
              <span className="dash">-</span>
              <span className="number">3rd</span>
            </Link>
          </Row>
          <Row>
            <p className="occupation">{props.profile.title}</p>
          </Row>
          <Row>
            <button
              type="button"
              className="btn gray-border-btn rounded-pill mx-2"
            >
              Connect
            </button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default SinglePerson;
