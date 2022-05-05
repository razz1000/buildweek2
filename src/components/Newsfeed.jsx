import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FeedStartAPostSection from './FeedStartAPostSection'
import FeedSidebarTop from './FeedSidebarTop'
import FeedSidebarRecent from './FeedSidebarRecent'
import FeedPostMainContainer from './FeedPostMainContainer'
import LinkedInNews from './LinkedInNews'
import UnderLinkedInNews from './UnderLinkedInNews'

const Newsfeed = ({ profiledata }) => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <FeedSidebarTop profiledata={profiledata} />
          <FeedSidebarRecent />
        </Col>
        <Col md={6}>
          <FeedStartAPostSection profiledata={profiledata} />
          <FeedPostMainContainer />
        </Col>
        <Col md={3}>
          <LinkedInNews />
          <UnderLinkedInNews />
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Newsfeed
