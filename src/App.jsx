import './styles/App.css';
import SegmentControl from './components/SegmentControl';
import useSegmentControl from './hooks/useSegmentControl';

import FormPersonalDetail from './components/FormPersonalDetail';
import PersonalDetail from './components/PersonalDetail';
import usePersonalDetails from './hooks/personalDetail';

import FormEducational from './components/FormEducational';
import EducationDetail from './components/EducationDetail';
import useEducationalDetails from './hooks/educationalDetail';

import useEdit from './hooks/onEdit';
import submitHandler from './utils/submitHandler';

const App = () => {
    const { active, handleToggle } = useSegmentControl();
    const { onEdit: onEditData, setOnEdit } = useEdit();
    const { personalInfo, setPersonalInfo } = usePersonalDetails();
    const { 
        educationalDetail, 
        getDataById,
        addEducation, 
        updateEducation,
        removeEducation 
    } = useEducationalDetails();

    return (
        <section className='formDetails'>
            <SegmentControl 
                name='Personal Details'
                icon='akar-icons:edit'
                status={active}
                onEdit={(key) => handleToggle(key)}
                form={
                    <FormPersonalDetail 
                        personalInfo={personalInfo}
                        handleSubmit={(e) => {
                            submitHandler(e, setPersonalInfo);
                            handleToggle('Personal Details');
                        }}
                    />
                }
                content={
                    <PersonalDetail personalDetail={personalInfo}/>
                }
            />

            <SegmentControl 
                name='Educational Details'
                icon='akar-icons:circle-plus-fill'
                status={active}
                onEdit={(key) => handleToggle(key)}
                form={
                    <FormEducational
                        data={onEditData}
                        handleSubmit={(e) => {
                            submitHandler(e, addEducation);
                            handleToggle('Educational Details');
                        }}
                        submitEdit={(e) => {
                            submitHandler(e, (props) => {
                                updateEducation(onEditData.id, props);
                            });
                            handleToggle('Educational Details');
                        }}
                    />
                }
                content={
                    !educationalDetail.length
                        ? <h3 className='edu-empty-state'>Empty</h3>
                        : educationalDetail.map(data => (
                            <EducationDetail
                                key={data.id}
                                data={data} 
                                onEdit={(id) => {
                                    const current = getDataById(id);
                                    setOnEdit(current);
                                    handleToggle('Educational Details');
                                }}
                                onDelete={removeEducation}
                            />
                        ))
                }
            />
        </section>
    );
};

export default App;