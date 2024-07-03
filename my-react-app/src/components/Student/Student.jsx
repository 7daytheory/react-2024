import './Student.css';

function Student(props) {
    //props - javascript object
    return (
        <>
        <div>
            <p>Name : {props.name}</p>
            <p>Email : {props.email}</p>
        </div>
        </>
    );
}

export default Student;