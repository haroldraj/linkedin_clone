import apiClient from '../utils/apiClient';

const NewPostService = {
    createPost: (postData) => {
        return apiClient.post('/posts', postData);
    },
};

export default NewPostService;
