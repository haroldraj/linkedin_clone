import apiClient from './apiClient';

const authService = {
    login: async (credentials) => {
        const response = await apiClient.post('/auth/login', credentials);
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
        }
        return response;
    },
    logout: () => {
        localStorage.removeItem('token');
    },
    getCurrentUser: async () => {
        const response = await apiClient.get('/auth/me');
        return response.data;
    },
};

export default authService;
