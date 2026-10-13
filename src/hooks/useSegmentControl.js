import { useState } from 'react';

const useSegmentControl = () => {
    const [active, setActive] = useState(null);

    return {
        active,
        handleToggle: (name) => setActive(prev => prev === name ? null : name),
    };
};

export default useSegmentControl;