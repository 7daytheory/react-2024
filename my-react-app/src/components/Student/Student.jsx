import './Student.css';

function Student(props) {
    //props - javascript object
    return (
        <>
        <div>
            <p>Name : {props.name}</p>
            <p>Email : {props.email}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
        </>
    );
}

export default Student;