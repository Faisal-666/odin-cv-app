const submitHandler = (e, setter) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());

    setter(formData);
};

export default submitHandler;