import '../styles/personalDetail.css';

const PersonalDetail = ({ personalDetail }) => {
    const { fullName, email, phone, address } = personalDetail;

    return (
        <div className="content">
            <h3>Fullname</h3>
            <span>{fullName}</span>

            <h3>Email</h3>
            <span>{email}</span>

            <h3>Phone</h3>
            <span>{phone}</span>

            <h3>Address</h3>
            <span>{address}</span>
        </div>
    );
};

export default PersonalDetail;