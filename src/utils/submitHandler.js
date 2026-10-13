const submitHandler = (e, setter, formData) => {
    e.preventDefault();
    
    setter(formData);
};

export default submitHandler;