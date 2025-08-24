import React from 'react';
import { Link } from "react-router-dom"
export const Projects = () => {

  return (
    <section className="section__container project__container" id="project">

      <div className="project__header">
        <h2 className="section__header">Our Projects</h2>
        <div className="project__nav">
          <button
            className="btn project__btn mixitup-control-active"
            data-filter="all"
          >
            All
          </button>
          <button className="btn project__btn" data-filter=".web">Web Apps</button>
          <button className="btn project__btn" data-filter=".design">
            Designs
          </button>
        </div>
      </div>

      <div className="project__grid">


        <div className="project__card mix web">
          <Link to={"https://store-mobile12.netlify.app/"} target="_blank" rel="noreferrer">
            <div className="blog__card">
              <img src="assets/image/mobile.webp" alt="project" />
              <p style={{textAlign:"left"}}>Store Mobile</p>
            <h4>Has 2 types of users (Admin, Customer)</h4>
            <Link to="#">Technologies ( HTML, CSS, React.js, Node.js, MySQL )</Link>
            </div>
          </Link>
        </div>
        <div className="project__card mix web">
          <Link to={"https://chatapplication12344.netlify.app/"} target="_blank" rel="noreferrer">
            <div className="blog__card">
              <img src="assets/image/chat.webp"  alt="project" />
              <p style={{textAlign:"left"}}>Chat</p>
            <h4> users to communicate with each other</h4>
            <Link to="#">Technologies ( HTML, CSS, React.js, Node.js, MySQL )</Link>
            </div>
          </Link>
        </div>
        <div className="project__card mix design">
          <Link to={"https://profileosamasalem.netlify.app"} target="_blank" rel="noreferrer">
            <div className="blog__card">
              <img src="assets/image/Profile.webp"  alt="project" />
              <p style={{textAlign:"left"}}>Profile</p>
            <h4>Profile Web Design</h4>
            <Link to="#">Technologies ( HTML, CSS, React.js )</Link>
            </div>
          </Link>
        </div>
      
        <div className="project__card mix design">
          <img src="assets/image/project-2.jpg" alt="project" />
        </div>
        <div className="project__card mix design">
          <img src="assets/image/project-3.jpg" alt="project" />
        </div>
        <div className="project__card mix design">
          <img src="assets/image/project-6.jpg" alt="project" />
        </div>
        
      </div>
    </section>
  );
}

