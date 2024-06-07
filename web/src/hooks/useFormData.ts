import { useState } from 'react';

type FormData = {
    [key: string]: string;
};

const useFormData = (initialState: FormData) => {
    const [formData, setFormData] = useState<FormData>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData: FormData) => ({
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
