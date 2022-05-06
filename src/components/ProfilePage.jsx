import SideBar from './SideBar'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProfileJumbotron from './ProfileJumbotron'
import { useEffect, useState } from 'react'
import SidebarTop from './SidebarTop'
import SidebarExtraSection from './SidebarExtraSection'
import { useParams } from 'react-router-dom'
import ExperiencesCard from './ExperiencesCard'
import EducationCard from './EducationCard'

const ProfilePage = ({ profiledata, setprofiledata }) => {
  const [allProfiles, setAllProfiles] = useState([])
  const [experiencesId, setExperiencesId] = useState('')
  const [profile, setProfile] = useState()

  const editProfileData = (e, field) => {
    console.log(field)
    setprofiledata({
      ...profiledata,
      [field]: e.target.value
    })
  }

  const putProfileData = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/',
        {
          method: 'PUT',
          body: JSON.stringify(profiledata),
          headers: {
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s',
            'Content-type': 'application/json'
          }
        }
      )

      const data = await response.json()

      setprofiledata(data)
      console.log('✅Everything went well, infos were updated!', data)
    } catch (error) {
      console.log('❌ something went wrong: ', error)
    }
  }

  const fetchAllProfiles = async () => {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/',
      {
        headers: {
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NTE0OTM1NzcsImV4cCI6MTY1MjcwMzE3N30.9qnwR5Y-5lsD8GLJZNjp5T6Z__FJku-we3Sn6MwRpp0'
        }
      }
    )

    const data = await response.json()

    console.log(data.slice(0, 8))
    setAllProfiles(data)
  }
  const fetchProfileData = async (userId) => {
    const linkToFetch = `https://striveschool-api.herokuapp.com/api/profile/${userId}`
    const response = await fetch(linkToFetch, {
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s'
      }
    })

    const data = await response.json()

    setProfile(data)
  }
  let params = useParams()
  useEffect(() => {
    fetchAllProfiles()
    console.log('PARAMS', params.userId)
    if (params !== 'undefined') {
      fetchProfileData(params.userId)
    } else {
      setProfile(profiledata)
    }
  }, [])

  return (
    <Container>
      {console.log('this data is important:', profile)}
      <Row>
        <Col md={8}>
          {profile ? (
            <ProfileJumbotron
              profiledata={profile}
              editprofiledata={editProfileData}
              putprofiledata={putProfileData}
            />
          ) : (
            <ProfileJumbotron
              profiledata={profiledata}
              editprofiledata={editProfileData}
              putprofiledata={putProfileData}
            />
          )}

          {profile ? (
            <ExperiencesCard
              profiledata={profile}
              setprofiledata={setprofiledata}
              profileId={profiledata._id}
            />
          ) : (
            <ExperiencesCard
              profiledata={profiledata}
              setprofiledata={setprofiledata}
              profileId={profiledata._id}
            />
          )}
          <EducationCard />
        </Col>
        <Col md={4}>
          <SidebarTop />
          <SideBar
            data={allProfiles.slice(0, 5)}
            heading="People also viewed"
          />
          <SideBar
            data={allProfiles.slice(6, 11)}
            heading="People you may know"
          />
          <SidebarExtraSection />
        </Col>
      </Row>
    </Container>
  )
}

export default ProfilePage
