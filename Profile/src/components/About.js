import React from 'react';
import { Link } from 'react-router-dom';
import ExamplePdf from './Osama.pdf';
export const About = () => {
    return (
        <>
            <section className="section__container about__container" id="about">
                <div className="about__image">
                    <img src="assets/image/about.webp" alt="about" />
                </div>
                <div className="about__content">
                    <h2 className="section__header">Hi There I Am Osama</h2>
                    <p>
                        I am a full stack developer, analytical and hardworking who enjoys
                        solving problems and coming up with interesting insights about what I
                        do. Being a fast-learner is one of my core skills that I'm proud of.

                    </p>
                    <h4>
                        With a focus on user experience and a commitment to staying updated
                        with the latest industry trends, I'm dedicated to creating web
                        solutions that not only meet but exceed expectations.
                    </h4>
                    <div className="about__btns">
                        <Link to={ExamplePdf} target="_blank" download={'Osama'} className="download__btn">
                            Download CV
                        </Link>
                        <Link to={`mailto:${"osama.mohamad.salem@gmail.com"}?subject=${""}&body=${""}`}><i className="ri-mail-fill"></i></Link>
                        <Link to={"https://github.com/osamaSale"} ><i className="ri-github-fill"></i></Link>
                        <Link ><i className="ri-linkedin-fill"></i></Link>
                    </div>
                </div>
            </section>
            <section className="section__container banner__container">
                <div className="banner__card">
                    <span><i className="ri-pen-nib-line"></i></span>
                    <div>
                        <h4>Problem Solving</h4>
                        <p>
                            Strong analytical, problem-solving and troubleshooting skills
                        </p>
                    </div>
                </div>
                <div className="banner__card">
                    <span><i className="ri-layout-masonry-line"></i></span>
                    <div>
                        <h4>Autonomous learning</h4>
                        <p>
                            I combine my passion for usability and user experience with technical knowledge
                        </p>
                    </div>
                </div>
                <div className="banner__card">
                    <span><i className="ri-checkbox-line"></i></span>
                    <div>
                        <h4>Software Development</h4>
                        <p>
                            Activities dedicated to the process of creating, designing, deploying and supporting software
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

