import '../styles/personalDetail.css';
import { useRef } from 'react';

const FormPersonalDetail = ({ personalInfo, handleSubmit }) => {
    const {
        fullName,
        email,
        phone,
        address
    } = personalInfo;

    const formRef = useRef(null);
    const getFormObj = () => Object.fromEntries(new FormData(formRef.current).entries());

    return (
        <form ref={formRef} onSubmit={(e) => handleSubmit(e, getFormObj())}>

            <div className='input-wrapper'>
                <label htmlFor='fullName'>Fullname</label>
                <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    required
                    defaultValue={fullName}
                />
            </div>

            <div className='input-wrapper'>
                <label htmlFor='email'>Email address</label>
                <input 
                    type='email'
                    id='email'
                    name='email'
                    required
                    defaultValue={email}
                />
            </div>

            <div className='input-wrapper'>
                <label htmlFor='phone'>Phone number</label>
                <input
                    type='tel'
                    id='phone'
                    name='phone'
                    required
                    defaultValue={phone}
                />
            </div>

            <div className='input-wrapper'>
                <label htmlFor='address'>Address</label>
                <input 
                    type='text'
                    id='address'
                    name='address'
                    defaultValue={address}
                />
            </div>

            <button type='submit' title='Submit'>Submit</button>
        </form>
    );
};

export default FormPersonalDetail;