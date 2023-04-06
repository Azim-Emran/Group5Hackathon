import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ProfilePage from './pages/ProfilePage';
import 'bootstrap/dist/js/bootstrap.min.js';
import ServicesPage from './pages/ServicesPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
