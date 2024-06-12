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

export default function HomePage()
{
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Home Page</h1>
        </div>);
}

