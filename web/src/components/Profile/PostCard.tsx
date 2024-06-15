import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PostCard.module.css';

interface PostCardProps {
    post: {
        id: string;
        text: string;
        userId: string;
        userName: string;
        userSurname: string;
        userTitle: string;
        userImage: string;
        createdAt: string;
    };
    onEdit: (postId: string) => void;
    onDelete: (postId: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onEdit, onDelete }) => {
    return (
        <Card className="post-card">
            <Card.Body>
                <div className="d-flex align-items-center mb-3">
                    <img src={post.userImage} alt="User" className="post-user-image" />
                    <div className="ml-3">
                        <Card.Title>{post.userName} {post.userSurname}</Card.Title>
                        <Card.Text>{post.userTitle}</Card.Text>
                        <Card.Text><small className="text-muted">{new Date(post.createdAt).toLocaleString()}</small></Card.Text>
                    </div>
                </div>
                <Card.Text>{post.text}</Card.Text>
                <div className="d-flex justify-content-end">
                    <Button variant="outline-primary" className="mr-2" onClick={() => onEdit(post.id)}>Edit</Button>
                    <Button variant="outline-danger" onClick={() => onDelete(post.id)}>Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default PostCard;
