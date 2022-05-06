import React from 'react'
import ProfileModal from './ProfileModal'
import { useState, useEffect } from 'react'
import EditExperience from './EditExperience'
import AddExperience from './AddExperience'
import { parseISO, format } from 'date-fns'

const Experience = ({
  allExperiences,
  experience,
  getaction,
  setexperiences,
  profiledata,
  setprofiledata,
  action
}) => {
  const [modalShow, setModalShow] = useState(false)
  const [content, setContent] = useState()
  const [title, setTitle] = useState()
  const [editExp, setEditExp] = useState(experience)
  const [postExp, setPostExp] = useState()

  let putExperience = async () => {
    try {
      let response = await fetch(
        `
  https://striveschool-api.herokuapp.com/api/profile/${profiledata._id}/experiences/${experience._id}`,
        {
          method: 'PUT',
          body: JSON.stringify(editExp),
          headers: {
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s',
            'Content-type': 'application/json'
          }
        }
      )

      let data = await response.json()

      setEditExp(data)

      console.log('✅Everything went well, infos were updated!', data)
    } catch (error) {
      console.log('❌ something went wrong ON PUT: ', error)
    }
  }
  let delExperience = async () => {
    try {
      let response = await fetch(
        `
  https://striveschool-api.herokuapp.com/api/profile/${profiledata._id}/experiences/${experience._id}`,
        {
          method: 'DELETE',

          headers: {
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s'
          }
        }
      )

      let data = await response.json()

      setEditExp(profiledata)

      console.log('✅Everything went well, infos were DELETED!', data)
    } catch (error) {
      console.log('❌ something went wrong ON DELETE: ', error)
    }
  }
  let postExperience = async () => {
    try {
      let response = await fetch(
        `
  https://striveschool-api.herokuapp.com/api/profile/${profiledata._id}/experiences/`,
        {
          method: 'POST',
          body: JSON.stringify(postExp),
          headers: {
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s',
            'Content-type': 'application/json'
          }
        }
      )

      let data = await response.json()

      setEditExp(profiledata)

      console.log('✅Everything went well, infos were ADDED!', data)
    } catch (error) {
      console.log('❌ something went wrong ON POST: ', error)
    }
  }
  useEffect(() => setprofiledata(profiledata), [editExp])
  return (
    <div className="row d-flex  justify-content-between">
      <div className="col-2 d-flex justify-content-center ">
        <img
          src={
            editExp.image
              ? editExp.image
              : "https://previews.123rf.com/images/roxanabalint/roxanabalint1701/roxanabalint170100138/69079014-nicht-verf%C3%BCgbar-grunge-stempel-auf-wei%C3%9Fen-hintergrund-vektor-illustration.jpg"
          }
          style={{ height: "65px", width: "65px", objectFit: "cover" }}
          alt="CBS"
        />
      </div>
      <div className="col-7 p-0">
        <div>
          <h5 className="header-text">{editExp.role}</h5>
        </div>
        <p className="text-under-header">{editExp.company}</p>
        <p className="year-text">
          {/* format(new Date(2014, 1, 11), 'yyyy-MM-dd')
           */}
          {}
          {format(parseISO(editExp.startDate), 'MMMM do yyyy')}
          {/* -{' '} */}
          {/* {format(parseISO(editExp.endDate), 'MMMM do yyyy')} */}
        </p>
        <p className="year-text">{editExp.area}</p>
      </div>

      <div className="col-3 d-flex justify-content-end align-items-center">
        <i
          className="bi bi-plus-lg  plus-icon m-2"
          onClick={() => {
            getaction('add')
            setTitle('Add experience')
            setModalShow(true)
            setContent(() => (
              <AddExperience
                profiledata={profiledata}
                setprofiledata={setprofiledata}
                experience={experience}
                setexperiences={setexperiences}
                postExp={postExp}
                setPostExp={setPostExp}
              />
            ))
          }}
        ></i>
        {console.log('??', postExp)}

        <i
          className="bi bi-pencil  plus-icon m-2"
          onClick={() => {
            setTitle('Edit experience')
            getaction('edit')
            setModalShow(true)
            setContent(() => (
              <EditExperience
                profiledata={profiledata}
                setprofiledata={setprofiledata}
                experience={experience}
                setexperiences={setexperiences}
                setEditExp={setEditExp}
                editExp={editExp}
              />
            ))
          }}
        ></i>
        <i
          className="bi bi-trash3-fill m-2"
          onClick={() => {
            delExperience()
            setEditExp(profiledata)
          }}
        ></i>
      </div>
      <ProfileModal
        putprofiledata={action === 'edit' ? putExperience : postExperience}
        show={modalShow}
        content={content}
        title={title}
        onHide={() => setModalShow(false)}
      />
    </div>
    // </div>

    // <div className="outer-lower-container m-3">
    //   <div>
    //     <img
    //       src="https://www.pngkey.com/png/full/240-2401662_cbs-logo-vertical-notext-blue-rgb-copenhagen-business.png"
    //       className="education-logo"
    //       alt="CBS"
    //     />
    //   </div>
    //   <div className="text-next-to-logo">
    //     <div>
    //       <h5 className="header-text">{user.role}</h5>
    //     </div>
    //     <p className="text-under-header">{user.company}</p>
    //     <p className="year-text">
    //       {user.startDate} - {user.endDate}
    //     </p>

    //     <p className="year-text">{user.area}</p>
    //   </div>
    //   <div>
    //     <i
    //       className="bi bi-plus-lg  plus-icon m-2"
    //       onClick={() => {
    //         setModalShow(true);
    //         setContent(() => <h1>{"I am plus"}</h1>);
    //       }}
    //     ></i>

    //     <i
    //       className="bi bi-pencil  plus-icon m-2"
    //       onClick={() => {
    //         setModalShow(true);
    //         setContent(() => (
    //           <AddExperience user={user} edituserdata={edituserdata} />
    //         ));
    //       }}
    //     ></i>
    //   </div>
    //   <ProfileModal
    //     show={modalShow}
    //     content={content}
    //     onHide={() => setModalShow(false)}
    //   />
    // </div>
  )
}

export default Experience
