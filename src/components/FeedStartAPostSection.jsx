import React from "react";
import {Form, FormControl} from "react-bootstrap"
import "../stylesheets/feedStartAPostSection-Stylesheet.css"
import FeedStartAPostModal from "../components/FeedStartAPostModal"
import ProfileModal from "./ProfileModal";
import {useState} from "react"
import NewsFeedModalForTopCard from "./NewsFeedModalForTopCard"

let FeedStartAPostSection = (props) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="the-whole-card-news-feed-top">
            <div className="top-section-profile-pic-and-search-bar">
                  <img className="profile-img-top" src={props.profiledata.image} alt="" />
            <Form inline className="form-top-news-top">
                  <FormControl type="text" placeholder="Start a post" className="mr-sm-2 search-field-top-bar-news-feed" onClick={()=>setModalShow(true)} />
            </Form>
            <NewsFeedModalForTopCard
          show={modalShow}
         content={<FeedStartAPostModal profiledata={props.profiledata}/>}
            title={<p>Create a post</p>}
            onHide={() => setModalShow(false)}
      />
        </div>
        <div className="icons-section-top-news-section">
            
        <i class="bi bi-image actual-icons-news-feed-top"><p className="text-next-to-icons">Photo</p></i>
        
        <i class="bi bi-play-btn actual-icons-news-feed-top"><p className="text-next-to-icons">Video</p></i>
        <i class="bi bi-calendar4-event actual-icons-news-feed-top"><p className="text-next-to-icons">Event</p></i>
        <i class="bi bi-pencil-square actual-icons-news-feed-top"><p className="text-next-to-icons">Write article</p></i>


        </div>

        </div>
    )
}

export default FeedStartAPostSection