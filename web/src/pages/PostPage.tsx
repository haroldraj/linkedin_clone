import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postAPI from '../api/postAPI';

const PostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
            setError('Invalid post ID');
            return;
        }

        const fetchPost = async () => {
            try {
                const data = await postAPI.getPostById(id);
                setPost(data);
            } catch (err) {
                setError('Failed to fetch post');
            }
        };

        fetchPost();
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostPage;
