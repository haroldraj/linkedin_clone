<<<<<<< HEAD
// profileAPI.ts
const API_URL = '/api/profiles';  // Base URL for the profile API

const profileAPI = {
    // Fetch a single profile by ID
    getProfileById: async (id: string) => {
        try {
            const response = await fetch(`${API_URL}/${id}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch profile with id ${id}`);
            }
            return await response.json();  // Parses the JSON returned by the server
        } catch (error) {
            console.error(`Error fetching profile with id ${id}:`, error);
            throw error;  // Re-throwing the error to be handled by the caller
        }
    },

    // Update profile details
    updateProfile: async (id: string, profileData: { name: string; email: string; etc: string }) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profileData)  // Converts the JavaScript object to a JSON string
            });
            if (!response.ok) {
                throw new Error(`Failed to update profile with id ${id}`);
            }
            return await response.json();  // Parses the JSON returned by the server
        } catch (error) {
            console.error(`Error updating profile with id ${id}:`, error);
            throw error;  // Re-throwing the error to be handled by the caller
        }
    },

    // Additional methods like deleteProfile, addExperience, addEducation, etc., can be added here
=======
const profileAPI = {
    async getProfileById(id: string) {
        const response = await fetch(`/api/profiles/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch profile with id ${id}`);
        }
        return response.json();
    },
    async getProfileConnections(id: string) {
        const response = await fetch(`/api/profiles/${id}/connections`);
        if (!response.ok) {
            throw new Error(`Failed to fetch connections for profile with id ${id}`);
        }
        return response.json();
    },
    async getProfileExperiences(id: string) {
        const response = await fetch(`/api/profiles/${id}/experiences`);
        if (!response.ok) {
            throw new Error(`Failed to fetch experiences for profile with id ${id}`);
        }
        return response.json();
    },
    async getProfileEducations(id: string) {
        const response = await fetch(`/api/profiles/${id}/educations`);
        if (!response.ok) {
            throw new Error(`Failed to fetch educations for profile with id ${id}`);
        }
        return response.json();
    },
    async getProfileSkills(id: string) {
        const response = await fetch(`/api/profiles/${id}/skills`);
        if (!response.ok) {
            throw new Error(`Failed to fetch skills for profile with id ${id}`);
        }
        return response.json();
    },
>>>>>>> feature/homepage
};

export default profileAPI;
