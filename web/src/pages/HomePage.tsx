/*import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import postAPI from '../api/postAPI';

const HomePage: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await postAPI.getAllPosts();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Home Page</h1>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default HomePage;*/
// Mine

import Header from "../components/header/Header";

//import Header from "../components/header/Header";

export default function HomePage()
{
    return (
        <div>
            <Header />
            <div className="text-3xl text-center">HomePage</div>
            {/* App Body */}
            {/* Sidebar */}
            {/* Feed */}
            {/* Widget */}
        </div>);
}

