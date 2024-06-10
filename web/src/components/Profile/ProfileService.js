import apiClient from '../utils/apiClient';

const ProfileService = {
    getProfile: (id) => {
        return apiClient.get(`/profiles/${id}`);
    },
    updateProfile: (id, profileData) => {
        return apiClient.put(`/profiles/${id}`, profileData);
    },
};

export default ProfileService;
