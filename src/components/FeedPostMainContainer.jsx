import { useEffect, useState } from 'react'

import './stylesheets/feedPostMainContainer.css'

import SinglePost from './SinglePost'
const FeedPostMainContainer = (props) => {
  let [allPosts, setAllPosts] = useState([])

  let options = {
    headers: {
      authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s'
    }
  }

  let fetchDynamicData = async () => {
    let response = await fetch(
      'https://striveschool-api.herokuapp.com/api/posts/',
      options
    )

    if (response.ok) {
      let body = await response.json()
      let slicedArray = body.reverse().slice(0, 20)
      console.log(slicedArray)
      setAllPosts(slicedArray)
    }
  }

  useEffect(() => {
    fetchDynamicData()
  }, [])

  return allPosts.map((p) => {
    return <SinglePost post={p} />
  })
}
export default FeedPostMainContainer
