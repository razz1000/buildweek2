import React, { useState } from 'react'
import FeedPostMainContainerModal from './FeedPostMainContainerModal'
import { Container, Row, Col } from 'react-bootstrap'
import './stylesheets/feedPostMainContainer.css'

export default function SinglePost({ post }) {
  const [modalShow, setModalShow] = useState(false)

  return (
    <Container className="feed-post-main-container" key={post._id}>
      <Row className="top-row">
        <Col md={2}>
          <img
            className="profile-image"
            src={post.user.image}
            alt="profile"
            height="70px"
            width="70px"
          />
        </Col>
        <Col md={8} className="padding-for-middle-row">
          <Row>
            <span className="big-text-size">
              {post.user.name + ' ' + post.user.surname}
            </span>
          </Row>
          <Row>
            <span className="small-text-size">{post.user.title}</span>
          </Row>
          <Row>
            <span className="small-text-size">{post.createdAt}</span>
          </Row>
        </Col>
        <Col md={2} className="d-flex justify-content-end">
          <i
            className="bi bi-three-dots"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setModalShow(true)
            }}
          ></i>
          <FeedPostMainContainerModal
            show={modalShow}
            postData={post}
            title={<p>Edit Your post</p>}
            onHide={() => setModalShow(false)}
          />
        </Col>
      </Row>
      <Row className="text-row">
        <Col>
          <p>{post.text}</p>
        </Col>
      </Row>
      <Row>
        <img className="post-image" src={post.image} alt="bill" />
      </Row>
      <Row className="likes-under-picture-row mt-2 small-text-size">
        <Col md={6}>
          <i className="bi bi-hand-thumbs-up"></i>
          <i className="bi bi-balloon-heart"></i>
          <i className="bi bi-chat-right-quote mr-3"></i>
          <span>11,561</span>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <span>446 comments - 258 shares</span>
        </Col>
      </Row>
      <hr className="hr-line" />
      <Row className="bottom-row">
        <Col md={3} className="flex-icons hover-1">
          <i className="bi bi-hand-thumbs-up mr-2"></i>
          <span>Like</span>
        </Col>
        <Col md={3} className="flex-icons hover-2">
          <i className="bi bi-chat-square-dots mr-2"></i>
          <span>Comment</span>
        </Col>
        <Col md={3} className="flex-icons hover-3">
          <i className="bi bi-arrow-90deg-right mr-2"></i>
          <span>Share</span>
        </Col>
        <Col md={3} className="flex-icons hover-4">
          <i className="bi bi-send-fill mr-2"></i>
          <span>Send</span>
        </Col>
      </Row>
    </Container>
  )
}
