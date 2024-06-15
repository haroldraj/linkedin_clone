import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import PostPage from './pages/PostPage';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage';  // Ensure you have a NotFoundPage component

const App: React.FC = () => {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow container mx-auto px-4 py-6">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/new-post" element={<NewPostPage />} />
                        <Route path="/post/:id" element={<PostPage />} />
                        <Route path="/profile/:id" element={<UserProfilePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
