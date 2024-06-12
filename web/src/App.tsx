/*import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hello from './components/Hello';

const App: React.FC = () =>
{
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            {/* Main content could be added here if needed }
            <Footer />
            <Hello />
        </div>
    );
};

export default App;*/

import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostsPage from "./pages/PostsPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/home',
        element: <HomePage />,

    }
    ,
    {
        path: '/posts',
        element: <PostsPage />,
        children: [

            {
                path: '/posts/:postId',
                element: <PostPage />
            }
        ]
    }
]);

function App()
{
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    );
}
export default App;
