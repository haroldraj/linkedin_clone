import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import NewPostPage from './pages/NewPostPage';
import UserProfilePage from './pages/UserProfilePage';

const App: React.FC = () => {
    return (
        <Router>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <main style={{ flex: '1' }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/posts/new" element={<NewPostPage />} />
                        <Route path="/posts/:id" element={<PostPage />} />
                        <Route path="/profile/:id" element={<UserProfilePage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
