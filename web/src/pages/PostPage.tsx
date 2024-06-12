/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postAPI from '../api/postAPI';

const PostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<any>(null);

    useEffect(() => {
        const fetchPost = async () => {
            const data = await postAPI.getPostById(id);
            setPost(data);
        };
        fetchPost();
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostPage;*/
// Mine

import { useParams } from "react-router-dom";


export default function PostPage()
{
    const params = useParams<{ postId: string }>();

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Post Page {params.postId}</h1>
        </div>);
}