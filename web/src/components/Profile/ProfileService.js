import apiClient from '../../utils/apiClient';

const ProfileService = {
    getProfile: (id) => {
        return apiClient.get(`/profiles/${id}`);
    },
    updateProfile: (id, profileData) => {
        return apiClient.put(`/profiles/${id}`, profileData);
    },
    getPostsByUser: (userId) => {
        return apiClient.get(`/posts/user/${userId}`);
    },
    deletePost: (postId) => {
        return apiClient.delete(`/posts/${postId}`);
    },
};

export default ProfileService;
