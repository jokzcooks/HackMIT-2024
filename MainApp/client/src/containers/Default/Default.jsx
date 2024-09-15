import { Link } from 'react-router-dom';
import "./Default.module.css";

const DefaultPage = () => {
    return (
        <div className="DefaultPageContainer">
            <div className="first">
                <div className="content">
                    <p className="title">AI-Powered Team Building</p>
                    <p className="subTitle">Let AI do the hard work of finding your ideal team.</p>
                    <p className="description">Our platform uses ... to match you with teammates who align with your goals and preferences</p>
                    <Link to="/login" className="callToAction">Get Started</Link>
                </div>
            </div>
        </div>
    );
}

export default DefaultPage;
