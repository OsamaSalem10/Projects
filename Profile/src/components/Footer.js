import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="section__container footer__container">
                <div className="footer__col">
                    <h5><Link to="#">Osama Salem</Link></h5>
                    <p>
                        I am a full stack developer, analytical and hardworking who enjoys
                        solving problems and coming up with interesting insights about what I
                        do. Being a fast-learner is one of my core skills that I'm proud of.

                    </p>
                    <div className="footer__socials">
                        <Link to={`mailto:${"osama.mohamad.salem@gmail.com"}?subject=${""}&body=${""}`}><i className="ri-mail-fill"></i></Link>
                        <Link to={"https://github.com/osamaSale"} target="_blank" rel="noreferrer"><i className="ri-github-fill"></i></Link>
                        <Link to={"https://www.linkedin.com/in/osama-salem-a94777258/"} target="_blank" rel="noreferrer"><i className="ri-linkedin-fill"></i></Link>
                        <Link to={"https://twitter.com/OsamaSa01129752"} target="_blank" rel="noreferrer"><i className="ri-twitter-fill"></i></Link>
                        <Link to={"https://web.facebook.com/osama.salem.5203577"} target="_blank" rel="noreferrer"><i className="ri-facebook-fill"></i></Link>
                    </div>
                </div>
                <div className="footer__col">
                    <h4>Services</h4>
                    <div className="footer__links">
                        <Link to="#">Website Design</Link>
                        <Link to="#">Front-end Development</Link>
                        <Link to="#">Back-end Development</Link>
                    </div>
                </div>
                <div className="footer__col">
                    <h4>Support</h4>
                    <div className="footer__links">
                        <a href="#Contact">Contact</a>
                        <a href={"#Skills"}>Skills</a>
                        <Link to="#">Privacy Policy</Link>
                    </div>
                </div>
            </div>
            <div className="footer__bar">
                Copyright © 2024 Web Design Mastery. All rights reserved.
            </div>
        </footer>
    );
}

