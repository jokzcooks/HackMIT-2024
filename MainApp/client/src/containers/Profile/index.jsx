import { useEffect, useState } from "react"
import "./index.css"
import { useNavigate } from "react-router"
const Profile = ({}) => {
    const navigate = useNavigate()
    // const [profileData, setProfileData] = useState(null)
    // const [loading, setLoading] = useState(true);

    // console.log(profileData)

    // // const fetchProfileData = async () => {
    // //     try {
    // //         const response = await fetch('http://localhost:5000/getProfile');
    // //         console.log(response)
    // //         const data = await response.json();

    // //         if (data && data.entry) {
    // //             console.log(data)
    // //             setProfileData(data);
    // //             setLoading(false);
    // //             clearInterval(pollingInterval);
    // //         }
    // //     } catch (error) {
    // //         console.error('Error fetching profile data:', error);
    // //     }
    // // };

    // // useEffect(() => {
    // //     const pollingInterval = setInterval(fetchProfileData, 1000);

    // //     return () => clearInterval(pollingInterval);
    // // }, []);

    const profileData = `Name: Cole Nangle\nClass Year: December 2024\nExperience Level: Pro\nSkillset:\nLanguages: JavaScript, Python, C, Go, Java, R\nFrameworks: Express, Electron, Wails, Bootstrap, Angular.js, VueJS, jQuery\nDatabase: MongoDB, Redis, Cassandra, MSSQL, PostgreSQL\nOther: React, Forge, WASM, Webpack, JWT, Figma, CAD\nShort Bio: Cole Nangle is a detail-oriented software/web developer with over 4 years of experience, specializing in developing secure applications and exploiting vulnerabilities. He has led a successful consulting firm, won top national awards in web exploitation and competitive hacking, and currently pursues a Computer Science degree at the University of Georgia.`

    return (
        <div className="profileDataContainer">
                {
                    profileData.split(/\n/).map(
                        line => (
                        <div key={line}>{line}</div>
                    ))
                }

                <button onClick={() => {navigate("/people")}}>View your recommended teamates!</button>
        </div>
    )

}

export default Profile