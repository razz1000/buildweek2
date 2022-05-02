import SideBar from "./SideBar";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileJumbotron from "./Profile-Jumbotron";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [allProfiles, setAllProfiles] = useState([]);

  useEffect(() => {
    fetchAllProfiles();
  }, []);

  const fetchAllProfiles = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NTE0OTM1NzcsImV4cCI6MTY1MjcwMzE3N30.9qnwR5Y-5lsD8GLJZNjp5T6Z__FJku-we3Sn6MwRpp0",
        },
      }
    );

    const data = await response.json();

    console.log(data.slice(0, 8));
    setAllProfiles(data);
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <ProfileJumbotron />
        </Col>
        <Col md={4}>
          <SideBar data={allProfiles} heading="People also viewed" />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
