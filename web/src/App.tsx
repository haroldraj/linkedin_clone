import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import PostPage from './pages/PostPage';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';  // Ensure you have a NotFoundPage component
import Header from './components/header/Header';
import CustomRoutes from './Routes';

const App: React.FC = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-6">
                   <CustomRoutes/>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
