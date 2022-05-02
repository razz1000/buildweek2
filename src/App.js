import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ProfilePage from "./components/ProfilePage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path={"/profilepage"} element={<ProfilePage />} />

      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
