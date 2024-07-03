import './Student.css';
import PropTypes from 'prop-types';

function Student(props) {
    //props - javascript object
    return (
        <>
        <div className={`student ${props.isFirst ? 'clear' : ''}`}>
            <p>Name : {props.name}</p>
            <p>Email : {props.email}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
        </>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    student: PropTypes.bool,
    isFirst: PropTypes.bool, // New prop to indicate if this is the first student
}

export default Student;