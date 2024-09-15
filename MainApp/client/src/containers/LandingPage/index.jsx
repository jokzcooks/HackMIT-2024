import { useRef } from "react";
import "./index.css"
import { useNavigate } from 'react-router-dom';
import { AuthForm } from "../../components/AuthForm";

const LandingPage = ({}) => {
    const navigate = useNavigate()
    const containerRef = useRef()
    const loginFactor = window.innerHeight + (window.innerHeight/2 > 500 ? window.innerHeight/2 : 500)

    return (
        <div className="landingPageContainer" ref={containerRef}>
            <div className="first">
                <div className="content">
                    <p className="title">AI-Powered Team Building</p>
                    <p className="subTitle">Let <span className="nameDrop">Fetch AI</span> do the hard work of finding your ideal team.</p>
                    <p className="description">Our platform uses custom agents to match you with teammates who align with your goals and preferences</p>
                    <div className="buttons">
                        <button className="callToAction" onClick={() => {containerRef.current.scrollTo({  top: window.innerHeight, behavior: "smooth",})}}>Learn More</button>
                        <button className="callToAction" onClick={() => {containerRef.current.scrollTo({  top: loginFactor, behavior: "smooth",})}}>Get Started</button>
                    </div>
                </div>
            </div>
            <div className="second"> 
                <div className="features">
                    <p>Key Features</p>
                    <div>
                        <div>
                            <p><span>effortless</span> Event Participation</p>
                            <p>Join events like hackathons, startup projects, and competitions with just a few clicks. Specify your team preferences, and let the platform find the right people for you!</p>
                        </div>
                        <div>
                            <p><span>automated</span> Conversation Opener</p>
                            <p>Once a match is made, our AI bot will initiate a conversation to help you discuss roles, skills, and availability, ensuring smoother collaboration from the start.</p>
                        </div>
                        <div>
                            <p><span>personalize</span> User Profiles</p>
                            <p>Join events like hackathons, startup projects, and competitions with just a few clicks. Specify your team preferences, and let the platform find the right people for you!</p>
                        </div>
                    </div>
                </div>
                <p className="ctaMini" onClick={() => {containerRef.current.scrollTo({  top: loginFactor, behavior: "smooth",})}}>↓ Get Started ↓</p>
            </div>
            <div className="third">
                <p style={{"textAlign": "left"}}>Authentication,<br/> powered by <span className="nameDrop">Clerk</span></p>
                <AuthForm style={{"textAlign": "left !important"}}/>
            </div>
        </div>
    )

}

export default LandingPage