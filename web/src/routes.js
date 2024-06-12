import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import UserProfile from './components/Profile/UserProfile';
import NewPostForm from './components/NewPost/NewPostForm';

const AppRoutes = ({ userProfile, setUserProfile }) => (
    <Routes>
        <Route path="/" element={<Home userProfile={userProfile} setUserProfile={setUserProfile} />} />
        <Route path="/profile/:id" element={<UserProfile userProfile={userProfile} setUserProfile={setUserProfile} />} />
        <Route path="/new-post" element={<NewPostForm />} />
    </Routes>
);

export default AppRoutes;
