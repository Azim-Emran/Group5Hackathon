import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ProfilePage from './pages/ProfilePage';
import 'bootstrap/dist/js/bootstrap.min.js';
import ServicesPage from './pages/ServicesPage';
import Navbar from './Components/Navbar';
import UsersPage from './pages/UsersPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/profile/:id" element={<ProfilePage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
