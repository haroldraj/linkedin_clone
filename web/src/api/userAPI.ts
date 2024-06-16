<<<<<<< HEAD
// userAPI.ts
const API_URL = '/api/users';  // Base URL for the user API

const userAPI = {
    // Fetch user details by ID
    getUserById: async (id: string) => {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch user with id ${id}`);
        }
        return await response.json();
    },

    // Register a new user
    registerUser: async (userData: any) => {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
=======
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
>>>>>>> feature/homepage
        });
        if (!response.ok) {
            throw new Error('Failed to register user');
        }
<<<<<<< HEAD
        return await response.json();
    },

    // User login
    loginUser: async (credentials: any) => {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) {
            throw new Error('Failed to log in');
        }
        return await response.json();
    },

    // Additional user-related methods could be added here
=======
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
>>>>>>> feature/homepage
};

export default userAPI;
