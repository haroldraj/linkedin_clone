import { UserInfo } from "../utils/user-info";

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
    registerUser: async (userData: UserInfo) => {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if (!response.ok) {
            throw new Error('Failed to register user');
        }
        return await response.json();
    },

    // User login
    loginUser: async (credentials: UserInfo) => {
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
};

export default userAPI;
