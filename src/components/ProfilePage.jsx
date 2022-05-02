import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from './SideBar'
const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col md={8}></Col>
        <Col md={4}>
          <SideBar heading="People also viewed" />
        </Col>
      </Row>
    </Container>
  )
}

export default ProfilePage
