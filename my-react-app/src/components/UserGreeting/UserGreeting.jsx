import './UserGreeting.css';

function UserGreeting(props) {
        if (props.isLoggedIn) {
            return (
                <h2>Welcome {props.username}</h2>
            )
        }

        //Doesn't require else statement because return statement exits
        return (
            <h2>Please login to continue.</h2>
        )
}

export default UserGreeting;