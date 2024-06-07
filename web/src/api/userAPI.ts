const userAPI = {
    async getUserById(id: string) {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch user with id ${id}`);
        }
        return response.json();
    },
    async registerUser(user: { username: string; email: string; password: string }) {
        const response = await fetch('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error('Failed to register user');
        }
        return response.json();
    },
    async updateUser(id: string, user: { username: string; email: string; password?: string }) {
        const response = await fetch(`/api/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error(`Failed to update user with id ${id}`);
        }
        return response.json();
    },
    async searchUsers(query: string) {
        const response = await fetch(`/api/users/search/${query}`);
        if (!response.ok) {
            throw new Error('Failed to search users');
        }
        return response.json();
    },
};

export default userAPI;
