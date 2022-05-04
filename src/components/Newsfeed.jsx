import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import FeedStartAPostSection from "./FeedStartAPostSection";

const Newsfeed = (props) => {
  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <FeedStartAPostSection profiledata={props.profiledata}/>
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  );
};

export default Newsfeed;
