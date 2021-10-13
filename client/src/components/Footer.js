import React from 'react'
import '../css/Footer.css';

const Footer = () => {
    return (
        <div className="footer-main-div">
            <div className="footer-sub-div">
                <div className="container-left">
                    <h3>Ritik Jain</h3>
                    <p>I have keen interest in React.js and good experience working accross full-stack of web development with latest MERN technology.</p>
                </div>

                <div className="container-right">
                    <h3>SOCIAL</h3>
                    <div className="social-links">
                        <i className="fab fa-linkedin-in" style={{cursor:"pointer"}} onClick={() => window.open("https://www.linkedin.com/in/ritikjain09/", "_blank")}></i>
                        <i className="fab fa-instagram" style={{cursor:"pointer"}} onClick={() => window.open("https://www.instagram.com/_mr._who_/", "_blank")} ></i>
                        <i className="fab fa-facebook-f" style={{cursor:"pointer"}} onClick={() => window.open("", "_blank")} ></i>
                        <i className="fab fa-github" style={{cursor:"pointer"}} onClick={() => window.open("https://github.com/mr-who-0903", "_blank")} ></i>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <i className="far fa-copyright"></i>
                Copyright 2021. Made by <b><u>Ritik Jain</u></b>
            </div>
        </div>
    )
}

export default Footer
