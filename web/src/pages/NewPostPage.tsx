import React, { useState } from 'react';
import postAPI from '../api/postAPI';

const NewPostPage: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await postAPI.createPost({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Create a New Post</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={{ display: 'block', width: '100%', padding: '8px' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        style={{ display: 'block', width: '100%', padding: '8px', height: '200px' }}
                    ></textarea>
                </div>
                <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
            </form>
        </div>
    );
};

export default NewPostPage;
