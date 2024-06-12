import { useState, useEffect } from 'react';
import NewPostService from '../components/NewPost/NewPostService';

const usePostData = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await NewPostService.getPosts();
                if (response.status === 200) {
                    setPosts(response.data);
                } else {
                    setError('Error fetching posts');
                }
            } catch (error) {
                setError('Error fetching posts');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const createPost = async (postData) => {
        try {
            const response = await NewPostService.createPost(postData);
            if (response.status === 200) {
                setPosts((prevPosts) => [response.data, ...prevPosts]);
            } else {
                setError('Error creating post');
            }
        } catch (error) {
            setError('Error creating post');
        }
    };

    return { posts, loading, error, createPost };
};

export default usePostData;
