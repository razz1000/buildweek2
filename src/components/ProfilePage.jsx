import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileJumbotron from "./ProfileJumbotron";

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <ProfileJumbotron />
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
