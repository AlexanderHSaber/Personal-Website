import '../../styles/Home.css';
import profilePicture from '../../assets/images/profile.jpeg';
import NavBar from 

const Home = (props) => {
    return (
            <div className="home-wrapper centered col">
                <div className="top-wrapper centered">
                    <div className="top-left centered">
                        <img id='profile-picture' src={profilePicture} alt="Profile"></img>
                    </div>
                    <div className="pendulum">
                        <div class="graphic-1">
                        </div>
                    </div>
                    
                </div>
                <div className="footer centered"></div>
            </div>
    );
}

export default Home;