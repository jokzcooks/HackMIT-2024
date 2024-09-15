import "./index.css"
import { useNavigate } from 'react-router-dom';

const LandingPage = ({}) => {
    const navigate = useNavigate()

    return (
        <div className="landingPageContainer">
            <div className="first">
                <div className="content">
                    <p className="title">AI-Powered Team Building</p>
                    <p className="subTitle">Let AI do the hard work of finding your ideal team.</p>
                    <p className="description">Our platform uses ... to match you with teammates who align with your goals and preferences</p>
                    <button className="callToAction" onClick={() => {navigate("/login")}}>Get Started</button>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )

}

export default LandingPage