import { useState } from 'react';

const useEducationalDetails = () => {
    const [educationalDetail, setEducationalDetail] = useState([]);

    const addEducation = (data) => {
        setEducationalDetail((prev) => [
            ...prev,
            {
                ...data,
                id: crypto.randomUUID(),
            },
        ]);
    };

    const getDataById = id => educationalDetail.find(edu => edu.id === id);

    const updateEducation = (id, props) => {
        setEducationalDetail((prev) =>
            prev.map((edu) =>
                edu.id === id
                    ? { ...edu, ...props }
                    : edu
            )
        );
    };

    const removeEducation = (id) => {
        setEducationalDetail((prev) =>
            prev.filter((edu) => edu.id !== id)
        );
    };

    return {
        educationalDetail,
        getDataById,
        addEducation,
        updateEducation,
        removeEducation,
    };
};

export default useEducationalDetails;