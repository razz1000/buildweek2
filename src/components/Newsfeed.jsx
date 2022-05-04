import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FeedSidebarTop from './FeedSidebarTop'
import FeedSidebarRecent from './FeedSidebarRecent'

const Newsfeed = ({ profiledata }) => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <FeedSidebarTop profiledata={profiledata} />
          <FeedSidebarRecent />
        </Col>
        <Col md={6}></Col>
        <Col md={3}></Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Newsfeed
