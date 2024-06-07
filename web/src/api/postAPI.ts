const postAPI = {
    async getAllPosts() {
        const response = await fetch('/api/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return response.json();
    },
    async getPostById(id: string) {
        const response = await fetch(`/api/posts/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch post with id ${id}`);
        }
        return response.json();
    },
    async createPost(post: { title: string; content: string }) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });
        if (!response.ok) {
            throw new Error('Failed to create post');
        }
        return response.json();
    },
};

export default postAPI;
