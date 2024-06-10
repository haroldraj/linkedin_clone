import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import './App.module.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Home Page</h1>
            <p>This is a placeholder for the Home Page content.</p>
        </div>
    );
};

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default App;
