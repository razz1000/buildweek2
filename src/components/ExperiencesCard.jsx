import { useEffect } from 'react'

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NTE1Nzc5MTAsImV4cCI6MTY1Mjc4NzUxMH0.dsdmzZvDcP2azLGh2MGVZ8-C7UCxWzuy8sAPtKFDYg4'
  }
}

const ExperiencesCard = (props) => {
  //   const [profileId, setProfileId] = useState('')

  const fetchNewId = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/' +
          props.profileId +
          '/experiences',
        options
      )
      if (response.ok) {
        const data = await response.json()
        console.log(data)
      }
    } catch (error) {
      console.log('error', error)
    }
  }
  useEffect(() => {
    fetchNewId()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="outer-container-top">
        <div>
          <h3>Experiences</h3>
        </div>
        <div>
          <i className="bi bi-plus-lg icons plus-icon"></i>
          <i className="bi bi-pencil icons edit-icon"></i>
        </div>
      </div>
      <div className="outer-lower-container">
        <div>
          <img
            src="https://www.pngkey.com/png/full/240-2401662_cbs-logo-vertical-notext-blue-rgb-copenhagen-business.png"
            className="education-logo"
            alt="CBS"
          />
        </div>
        <div className="text-next-to-logo">
          <h5 className="header-text">hello</h5>
          <p className="text-under-header">
            Master, Management of Innovation & Business Developemnt
          </p>
          <p className="year-text">2020 - 2022</p>
        </div>
      </div>
    </div>
  )
}
export default ExperiencesCard
