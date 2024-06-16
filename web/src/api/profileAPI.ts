import { baseURL } from "./baseURL";

// profileAPI.ts
const API_URL = baseURL+'/api/profiles';  // Base URL for the profile API

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
};

export default profileAPI;
