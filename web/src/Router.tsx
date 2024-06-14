import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import PostPage from "./pages/PostPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostsPage from "./pages/PostsPage";
import ProfilePage from "./pages/ProfilePage";
import NotificationsPage from "./pages/NotificationsPage";
import NetworkPage from "./pages/NetworkPage";
import JobsPage from "./pages/JobsPage";
import MessagingPage from "./pages/MessagingPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home" />,
    },
    {
        path: '/home',
        element: <HomePage />,

    },
    {
        path: '/network',
        element: <NetworkPage />,

    },
    {
        path: '/jobs',
        element: <JobsPage />,

    },
    {
        path: '/messaging',
        element: <MessagingPage />,

    },
    {
        path: '/notifications',
        element: <NotificationsPage />,

    },
    {
        path: '/profile',
        element: <ProfilePage />,
        children: [
            {
                path: '/profile/:profileId',
                element: <ProfilePage />
            }
        ]
    }
    ,
    {
        path: '/post',
        element: <PostsPage />,
        children: [

            {
                path: '/post/:postId',
                element: <PostPage />
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]);

export default router;