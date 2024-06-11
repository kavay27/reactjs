import profilePic from './assets/breathHold.jpg'

function Card(){
    return(
        <div className = "card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Kavay Gupta</h2>
            <p className="crad-text">I'am a 3rd year CSE student</p>
        </div>
    )
}

export default Card