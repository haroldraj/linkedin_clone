export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const validatePassword = (password: string): boolean => {
    // Example password validation: at least 8 characters, at least one letter and one number
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(password);
};

export const validateUsername = (username: string): boolean => {
    // Example username validation: only alphanumeric characters, between 3 and 20 characters
    const re = /^[a-zA-Z0-9]{3,20}$/;
    return re.test(username);
};
