import { useState } from 'react';

const useFormData = (initialState: any) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormData(initialState);
    };

    return { formData, handleChange, resetForm };
};

export default useFormData;
