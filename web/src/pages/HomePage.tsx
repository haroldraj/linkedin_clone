import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard.tsx';
import postAPI from '../api/postAPI';  // Assuming this is correct

// Define the interface for posts
interface Post {
    author: string;
    date: string;
    content: string;
}

const HomePage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);  // Use the Post interface here

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const fetchedPosts = await postAPI.getAllPosts();
                setPosts(fetchedPosts);  // Assuming fetchedPosts is of type Post[]
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold text-gray-800 my-6">Latest Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post, index) => (
                    <PostCard key={index} author={post.author} date={post.date} content={post.content} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
