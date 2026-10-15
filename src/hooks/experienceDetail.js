import { useState } from 'react';

const useExperienceDetails = () => {
    const [experienceDetails, setExperienceDetails] = useState([]);

    const addExperience = (data) => {
        setExperienceDetails((prev) => [
            ...prev,
            {
                ...data,
                id: crypto.randomUUID(),
            },
        ]);
    };

    const getById = id => experienceDetails.find(exp => exp.id === id);

    const updateExperience = (id, props) => {
        setExperienceDetails((prev) =>
            prev.map((exp) =>
                exp.id === id
                    ? { ...exp, ...props }
                    : exp
            )
        );
    };

    const removeExperience = (id) => {
        setExperienceDetails((prev) =>
            prev.filter((exp) => exp.id !== id)
        );
    };

    return {
        experienceDetails,
        getById,
        addExperience,
        updateExperience,
        removeExperience,
    };
};

export default useExperienceDetails;