import { useEffect, useState } from "react";
import "../stylesheets/experiencesCard-stylesheet.css";
import ExperiencesUser from "./ExperiencesUser";
import ProfileModal from "./ProfileModal";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YmQxZGE5MDIzOTAwMTVkOTY1YzgiLCJpYXQiOjE2NTE1Nzc5MTAsImV4cCI6MTY1Mjc4NzUxMH0.dsdmzZvDcP2azLGh2MGVZ8-C7UCxWzuy8sAPtKFDYg4",
  },
};

const ExperiencesCard = (props) => {
  const [user, setUser] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [content, setContent] = useState();

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
        console.log("this is the data : " + data);

        setUser(data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    console.log("props prof: ", props.profileId);
    if (props.profileId) {
      fetchNewId(props.profileId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.profileId]);

  return (
    <div className="sidebar-container ">
      <div className="d-flex justify-content-between m-3">
        <div>
          <h3>Experiences</h3>
        </div>
        <div>
          <i
            className="bi bi-plus-lg  plus-icon m-2"
            onClick={() => {
              setModalShow(true);
              setContent(() => <h1>{"I am plus"}</h1>);
            }}
          ></i>

          <i
            className="bi bi-pencil  plus-icon m-2"
            onClick={() => {
              setModalShow(true);
              setContent(() => <h1>{"I am pen"}</h1>);
            }}
          ></i>
        </div>
      </div>
      <ExperiencesUser u={user} />
      <ProfileModal show={modalShow} onHide={() => setModalShow(false)} />
      <ProfileModal
        show={modalShow}
        content={content}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default ExperiencesCard;
