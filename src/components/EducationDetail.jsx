import style from '../styles/educationalDetail.module.css';

const EducationDetail = ({ data, onEdit, onDelete }) => {
    const { id, education, institution, city, startDate, endDate } = data;
    
    return (
        <div className={style.education}>
            <div className='education-detail'>
                <h3>
                    {education} |
                    <small className={style.timeline}>{` ( ${startDate} to ${endDate} )`}</small>
                </h3>
                <span>{`${institution}, ${city}`}</span>
            </div>

            <div className={style.toolContainer}>
                <iconify-icon
                    onClick={() => onDelete(id)} 
                    className={style.tool} 
                    icon='akar-icons:trash-can'
                    title='delete'
                >
                </iconify-icon>

                <iconify-icon
                    onClick={() => onEdit(id)} 
                    className={style.tool} 
                    icon='akar-icons:pencil'
                    title='edit'
                >
                </iconify-icon>
            </div>
        </div>
    );
};

export default EducationDetail;