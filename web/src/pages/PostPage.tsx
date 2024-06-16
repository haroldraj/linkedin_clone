import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postAPI from '../api/postAPI'; 
import { PostInfo } from '../utils/post-info';

const PostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<PostInfo>();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const fetchedPost = await postAPI.getPostById(id ?? '');
                setPost(fetchedPost);
            } catch (error) {
                console.error('Failed to fetch post:', error);
            }
        };

        fetchPost();
    }, [id]);

    return (
        <div className="container mx-auto px-4">
            {post ? (
                <div className="bg-white p-6 rounded shadow">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <p className="text-gray-700 mt-4">{post.content}</p>
                </div>
            ) : (
                <p>Loading post...</p>
            )}
        </div>
    );
};

export default PostPage;