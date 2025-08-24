import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Typewriter from "typewriter-effect";
export const Navbar = () => {
    const [isOpen, setisOpen] = useState(true)
    return (
        <header className="header">
            <div className="header__socials">
                <Link to={`mailto:${"osama.mohamad.salem@gmail.com"}?subject=${""}&body=${""}`}><i className="ri-mail-fill"></i></Link>
                <Link to={"https://github.com/osamaSale"} target="_blank" rel="noreferrer"><i className="ri-github-fill"></i></Link>
                <Link to={"https://www.linkedin.com/in/osama-salem-a94777258/"} target="_blank" rel="noreferrer"><i className="ri-linkedin-fill"></i></Link>
            </div>
            <nav>
                <div className="nav__bar">
                    <div className="nav__header">
                        <div className="nav__logo">
                            <Link to="#">O<span>.</span></Link>
                        </div>
                        {isOpen ? <div className="nav__menu__btn" id="menu-btn" onClick={() =>
                            setisOpen(false)}>
                            <span><i className={isOpen ? "ri-menu-3-line" : "ri-close-line"}></i></span>
                        </div> : <div className="nav__menu__btn" id="menu-btn" onClick={() =>
                            setisOpen(true)}>
                            <span><i className={isOpen ? "ri-menu-3-line" : "ri-close-line"}></i></span>
                        </div>}
                    </div>
                    <ul className={isOpen ? "nav__links" : "nav__links open"} id="nav-links">
                        <li className="link"><a href={"#Home"}>Home</a></li>
                        <li className="link"><a href={"#About"}>About</a></li>
                        <li className="link"><a href={"#Projects"}>Projects</a></li>
                        <li className="link"><a href={"#Service"}>Services</a></li>
                        <li className="link"><a href={"#Education"}>Education</a></li>
                        <li className="link"><a href={"#Skills"}>Skills</a></li>
                        <li className="link btn"><a href={"#Contact"}>Contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="section__container header__container" id="Home">
                <div className="header__image">
                    <img src="assets/image/header.png" alt="header" />
                </div>
                <div className="header__content">
                    <h4>
                        <Typewriter

                            options={{
                                strings: [
                                    "Full Stack Developer",
                                    "Front-end Development",
                                    "Back-end Development",
                                    "Website Design",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h4>

                    <h1 style={{ color: "orange" }}>Hi, I Am Osama Salem. <br />
                        This Is My Favotite Work!</h1>
                    <p>
                        I am a full stack developer, analytical and hardworking who enjoys  solving problems and coming up with interesting insights about what I  do. Being a fast-learner is one of my core skills that I'm proud of.
                    </p>
                    <a href='tel:+962776496149' className="btn">0776496149</a>
                </div>
            </div>
        </header>
    );
}

