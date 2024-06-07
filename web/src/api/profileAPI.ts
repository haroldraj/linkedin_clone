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
};

export default profileAPI;
