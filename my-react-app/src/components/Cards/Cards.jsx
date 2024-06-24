import profilePicture from '../../assets/profile.jpeg';
import './Cards.css';

function Card () {
    return (
        <div className="card">
            <img alt="Profile Picture" src={profilePicture} class="profilePhoto"></img>
            <h2 className="card-title">Card Example</h2>
            <p className="card-text">I am a website developer and a rock climber.</p>
        </div>
    )
}

export default Card;