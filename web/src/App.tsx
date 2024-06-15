import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/Common/Footer.jsx';
import NewPostForm from './components/NewPost/NewPostForm';
import UserProfile from './components/Profile/UserProfile';
import Home from './components/Home/Home';
import './App.module.css';

function App() {
    const [userProfile, setUserProfile] = useState({});

    return (
        <Router>
            <Header userProfile={userProfile} />
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Home userProfile={userProfile} setUserProfile={setUserProfile} />} />
                    <Route path="/profile/:id" element={<UserProfile userProfile={userProfile} setUserProfile={setUserProfile} />} />
                    <Route path="/new-post" element={<NewPostForm />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
