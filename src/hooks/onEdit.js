import { useState } from 'react';

const useEdit = () => {
    const [onEdit, setOnEdit] = useState('');

    return {
        onEdit,
        setOnEdit,
    }
};

export default useEdit;