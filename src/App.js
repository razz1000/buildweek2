import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/navBar-stylesheet.css";

import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/profilepage"} element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
