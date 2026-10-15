import style from '../styles/experienceDetail.module.css';

const ExperienceDetail = ({ data, onEdit, onDelete }) => {
    const { id, position, company, description, startDate, endDate } = data;

    return (
        <div className={style.experience}>
            <div className={style.header}>
                <h3 className={style.experienceDetail}>
                    {position} |
                    <small className={style.company}>{` ${company}`}</small>
                </h3>
                <p>{description ? description : null}</p>
                <span>{` ( ${startDate} to ${endDate} )`}</span>
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

export default ExperienceDetail;