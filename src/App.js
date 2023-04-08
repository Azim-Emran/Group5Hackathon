import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ProfilePage from './pages/ProfilePage';
import 'bootstrap/dist/js/bootstrap.min.js';
import ServicesPage from './pages/ServicesPage';
import React, { useState, useEffect } from 'react';
import {AuthProvider} from './AuthContext';
import Navbar from './Components/Navbar';
import UsersPage from './pages/UsersPage';


function App() {

  return (
    <AuthProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
