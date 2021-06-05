import { React } from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs"
import Resume from "../assets/Resume.pdf"
import '../App.css';


function Home() {
    const onResume = () => {
        window.open(Resume, "__blank");
    }

    return (
        <div className="home-wrapper">
            <div className="home-profile">
                <div className="home-profile-info">
                    <p className="home-profile-info-name"> Ji Hyung, Kim </p>
                    <p className="home-profile-info-job"> FULL-STACK DEVELOPER </p>
                </div>
            </div>
            <div className="home-profile-info-links">
                <FaGithubSquare size={45} onClick={() => window.open("https://github.com/jiselectric", "__blank")}/>
                <FaLinkedin size={45} onClick={() => window.open("https://www.linkedin.com/in/ji-hyung-kim/", "__blank")}/>
                <BsPencilSquare size={45} onClick={() => window.open("https://velog.io/@jiselectric", "__blank")}/>
            </div>
            <div className="home-hello">
                <p className="home-hello-hi"> print('hello, world.') </p>
                <ul className="hello-stacks">
                    <li> #boston college </li>
                    <li> #computer science </li>
                    <li> #economics </li>
                    <li> #software engineer </li>
                </ul>

                <button className="resume-btn" onClick={onResume}> Download Resume </button>
            </div>
            <hr className="line-break"/>
        </div>
    )
}

export default Home;