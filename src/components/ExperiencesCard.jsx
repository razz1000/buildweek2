import { useEffect,useState } from "react";
import "../stylesheets/experiencesCard-stylesheet.css"
import ExperiencesUser from "./ExperiencesUser"

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NTE1Nzc5MTAsImV4cCI6MTY1Mjc4NzUxMH0.dsdmzZvDcP2azLGh2MGVZ8-C7UCxWzuy8sAPtKFDYg4",
  },
};

const ExperiencesCard = (props) => {
  const [user, setUser] = useState([])

  const fetchNewId = async (id) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NTE1Nzc5MTAsImV4cCI6MTY1Mjc4NzUxMH0.dsdmzZvDcP2azLGh2MGVZ8-C7UCxWzuy8sAPtKFDYg4",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("this is the data : " + data)
        
        setUser(data)
        


      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    console.log("props prof: ", props.profileId);
    fetchNewId(props.profileId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.profileId]);

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


    <ExperiencesUser u={user}/>
    
  </div>
  
  
  )  



  
};
export default ExperiencesCard;
