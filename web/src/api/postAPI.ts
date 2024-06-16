import { baseURL } from "./baseURL";

// postAPI.ts
const API_URL = baseURL+'/api/posts';  // Base URL for the posts API

const postAPI = {
    // Fetch all posts
    getAllPosts: async () =>
    {
        try
        {
            const response = await fetch(API_URL);
            if (!response.ok)
            {
                throw new Error('Network response was not ok');
            }
            return await response.json();  // Parses the JSON returned by the server
        } catch (error)
        {
            console.error('Error fetching posts:', error);
            throw error;  // Re-throwing the error to be handled by the caller
        }
    },

    // Fetch a single post by ID
    getPostById: async (id: string) =>
    {
        try
        {
            const response = await fetch(`${API_URL}/${id}`);
            if (!response.ok)
            {
                throw new Error(`Failed to fetch post with id ${id}`);
            }
            return await response.json();  // Parses the JSON returned by the server
        } catch (error)
        {
            console.error(`Error fetching post with id ${id}:`, error);
            throw error;  // Re-throwing the error to be handled by the caller
        }
    },

    // Create a new post
    createPost: async (post: { title: string; content: string }) =>
    {
        try
        {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)  // Converts the JavaScript object to a JSON string
            });
            if (!response.ok)
            {
                throw new Error('Failed to create post');
            }
            return await response.json();  // Parses the JSON returned by the server
        } catch (error)
        {
            console.error('Error creating post:', error);
            throw error;  // Re-throwing the error to be handled by the caller
        }
    },
};

export default postAPI;
