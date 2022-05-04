import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './stylesheets/feedPostMainContainer.css'

const FeedPostMainContainer = () => {
  
let [allPosts, setAllPosts] = useState([])
const [postID, setPostID] = useState("")
let options = {
  headers: {
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s'
  }
}

  let fetchDynamicData = async () => {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", options)
    
    if(response.ok) {
      let body = await response.json()
      let slicedArray = body.slice(0,200)
      console.log(slicedArray)
      setAllPosts(slicedArray)
    }
  }

useEffect(() => {
  fetchDynamicData()
}, [])


  
  let EditpostsOnFeed = (event) => {
    return ( 
      <div></div>
    )
  }



  
  return (
    allPosts.map((p) => {
      return( 
    <Container className="feed-post-main-container" key={p._id}>
      <Row className="top-row">
        <Col md={2}>
          <img
            className="profile-image"
            src={p.user.image}
            alt="profile"
            height="70px"
            width="70px"
          />
        </Col>
        <Col md={8}>
          <Row>
            <span className="big-text-size">
              {p.user.name + " " + p.user.surname}
            </span>
          </Row>
          <Row>
            <span className="small-text-size">{p.user.title}</span>
          </Row>
          <Row>
            <span className="small-text-size">{p.createdAt}</span>
          </Row>
        </Col>
        <Col md={2}>
        <i className="bi bi-three-dots" style={{cursor: "pointer"}} onClick={(() => {
          EditpostsOnFeed()
          setPostID(p._id)
        })
          }></i> 
        </Col>
      </Row>
      <Row className="text-row">
        <Col>
          <p>
            {p.text}
          </p>
        </Col>
      </Row>
      <Row>
        <img src="https://placekitten.com/538/538" alt="bill" />
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
    )})
  )
}
export default FeedPostMainContainer
