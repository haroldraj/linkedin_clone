import { useState, useEffect } from 'react';

const useAuth = () => {
    const [auth, setAuth] = useState<boolean | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchAuthStatus = async () => {
            try {
                // Simulate an API call to check authentication status
                const response = await fetch('/api/auth/status');
                if (response.ok) {
                    const result = await response.json();
                    setAuth(result.isAuthenticated);
                } else {
                    setAuth(false);
                }
            } catch (error) {
                console.error('Failed to fetch auth status:', error);
                setAuth(false);
            } finally {
                setLoading(false);
            }
        };

        fetchAuthStatus();
    }, []);

    return { auth, loading };
};

export default useAuth;
