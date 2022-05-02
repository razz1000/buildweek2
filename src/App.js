import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import NavBar from "./components/NavBar";

import EducationCard from "./components/EducationCard"
import "./App.css";

import "./stylesheets/profile-jumbotron.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/profile-page"} element={<ProfilePage />} />
        </Routes>

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
