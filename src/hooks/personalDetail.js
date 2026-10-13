import { useState } from 'react';

const usePersonalDetails = () => {
    const [personalInfo, setPersonalInfo] = useState({
        fullName: 'John Doe',
        email: 'placeholder@gmail.com',
        phone: '19218818111',
        address: 'somewhere',
    });

    return {
        personalInfo,
        setPersonalInfo,
    };
};

export default usePersonalDetails;