import style from '../styles/experienceDetail.module.css';

const ExperienceForm = ({ data, handleSubmit, submitEdit }) => {
    const onEdit = data !== '';
    const { position, company, description, startDate, endDate } = data;

    return (
        <form onSubmit={onEdit ? submitEdit : handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="position">Position</label>
                <input
                    type="text"
                    id='position'
                    name='position'
                    required
                    defaultValue={position}
                    placeholder={position ?? 'e.g. Copy paste coder'}
                />
            </div>

            <div className="input-wrapper">
                <label htmlFor="company">Company name</label>
                <input
                    type="text"
                    id='company'
                    name='company'
                    required
                    defaultValue={company}
                    placeholder={company ?? 'Your company name'}
                />
            </div>

            <div className='input-wrapper'>
                <label htmlFor="expStartDate">Start date</label>
                <input
                    type="date"
                    name="startDate"
                    id="expStartDate"
                    required
                    defaultValue={startDate}
                />
            </div>

            <div className='input-wrapper'>
                <label htmlFor="expEndDate">End date</label>
                <input
                    type="date"
                    name="endDate"
                    id="expEndDate"
                    required
                    defaultValue={endDate}
                />
            </div>

            <div className="input-wrapper">
                <label htmlFor="description">Description</label>
                <textarea
                    className={style.description}
                    type="text"
                    id='description'
                    name='description'
                    defaultValue={description}
                    placeholder={description ?? 'Description for your relevant experience'}
                    maxLength={80}
                    rows={6}
                />
            </div>

            <button type='submit' title='Submit'>Submit</button>
        </form>
    );
};

export default ExperienceForm;