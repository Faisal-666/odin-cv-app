import style from '../styles/segmentControl.module.css';

const SegmentControl = ({ name, form, content, onEdit, status }) => {
    const isEdit = status === name;

    return (
        <div className='segment-control'>
            <div className={style.header}>
                <h2>{name}</h2>

                <iconify-icon
                    onClick={() => onEdit(name)} 
                    className={style.edit} 
                    icon='akar-icons:edit'
                    title='edit'
                    >
                </iconify-icon>
            </div>

            <div>
                {isEdit ? form : content}
            </div>
        </div>
    );
};

export default SegmentControl;