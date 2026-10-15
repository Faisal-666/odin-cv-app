import style from '../styles/segmentControl.module.css';

const SegmentControl = ({ name, icon, form, content, onEdit, status }) => {
    const isEdit = status === name;

    return (
        <div className='segment-control'>
            <div className={style.header}>
                <h2>{name}</h2>

                <iconify-icon
                    onClick={() => onEdit(name)} 
                    className={style.edit} 
                    icon={icon}
                    >
                </iconify-icon>
            </div>

            <div className={style.content}>
                {isEdit ? form : content}
            </div>
        </div>
    );
};

export default SegmentControl;