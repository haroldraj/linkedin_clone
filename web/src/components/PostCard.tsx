import React from 'react';
import { Link } from 'react-router-dom';

interface PostCardProps {
    post: {
        id: string;
        title: string;
        content: string;
    };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/posts/${post.id}`}>Read More</Link>
        </div>
    );
};

export default PostCard;
