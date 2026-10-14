const FormEducational = ({ data, handleSubmit, submitEdit }) => {
    const { education, institution, city, startDate, endDate } = data;
    const onEdit = data !== '';

    return (
        <form onSubmit={onEdit ? submitEdit : handleSubmit}>
            <div className='input-wrapper'>
                <label htmlFor='education'>Education</label>
                <input
                    type='text'
                    id='education'
                    name='education'
                    required
                    defaultValue={education}
                    placeholder={education ?? 'e.g. Bachelors Degree'}
                />
            </div>

            <div className='input-wrapper'>
                <label htmlFor='institution'>Institution</label>
                <input 
                    type='text'
                    id='institution'
                    name='institution'
                    required
                    defaultValue={institution}
                    placeholder={institution ?? 'e.g. University of Indonesia'}
                />
            </div>

            <div className='input-wrapper'>
                <label htmlFor='city'>City</label>
                <input
                    type='text'
                    id='city'
                    name='city'
                    required
                    defaultValue={city}
                    placeholder={city ?? 'e.g. Jakarta'}
                />
            </div>

            <div className='input-wrapper'>
                <label htmlFor="startDate">Start date</label>
                <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    required
                    defaultValue={startDate}
                />
            </div>

            <div className='input-wrapper'>
                <label htmlFor="endDate">End date</label>
                <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    required
                    defaultValue={endDate}
                />
            </div>

            <button type='submit' title='Submit'>Submit</button>
        </form>
    );
};

export default FormEducational;