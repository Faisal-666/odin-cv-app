import './styles/App.css';
import SegmentControl from './components/SegmentControl';
import useSegmentControl from './hooks/useSegmentControl';
import FormPersonalDetail from './components/FormPersonalDetail';
import PersonalDetail from './components/PersonalDetail';
import usePersonalDetails from './hooks/personalDetail';
import submitHandler from './utils/submitHandler';

const App = () => {
    const { active, handleToggle } = useSegmentControl();
    const { personalInfo, setPersonalInfo } = usePersonalDetails();

    return (
        <section className='formDetails'>
            <SegmentControl 
                name='Personal Details'
                status={active}
                onEdit={(key) => handleToggle(key)}
                form={
                    <FormPersonalDetail 
                        personalInfo={personalInfo}
                        handleSubmit={(e, formObj) => {
                            submitHandler(e, setPersonalInfo, formObj);
                            handleToggle('Personal Details');
                        }}
                    />
                }
                content={
                    <PersonalDetail personalDetail={personalInfo}/>
                }
            />
        </section>
    );
};

export default App;