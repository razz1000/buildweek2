import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
// import NavBar from "./components/NavBar";

// import EducationCard from "./components/EducationCard"
import "./App.css";
import "./stylesheets/profile-jumbotron.css";
import NavBar from "./components/Navbar";
import Newsfeed from "./components/Newsfeed";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [profileData, setProfileData] = useState([]);

  const fetchProfileData = async (userId) => {
    const linkToFetch = `https://striveschool-api.herokuapp.com/api/profile/${
      userId || "me"
    }`;
    const response = await fetch(linkToFetch, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZmYzMwMzE3YzRlMDAwMTVkN2EwODIiLCJpYXQiOjE2NTE0OTE1ODgsImV4cCI6MTY1MjcwMTE4OH0.yS8YrZCAJfbhN7ye7OAqtaTyteCbwQsztG411czMp8s",
      },
    });

    const data = await response.json();

    setProfileData(data);
    console.log(data);
  };

  let params = useParams();

  useEffect(() => {
    if (params) {
      fetchProfileData(params.userId);
    } else {
      fetchProfileData();
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path={"/profile-page"}
            element={
              <ProfilePage
                profiledata={profileData}
                setprofiledata={setProfileData}
              />
            }
          />
          <Route path={"/profile-page/:userId"} element={<ProfilePage />} />
          <Route
            path={"/feed"}
            element={<Newsfeed profiledata={profileData} />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
