import React from 'react';
import './Skils.css';
import HTML from './../assets/html.png';
import CSS from './../assets/css.png';
import JS from './../assets/javascript.png';
import REACT from './../assets/react.png';
import GIT from './../assets/git.png';
import FIGMA from './../assets/figma.png';
import BOOTSTRAP from './../assets/bootstrap.png';
import WP from './../assets/wordpress.png';
import SASS from './../assets/sass.png';

const Skils = () => {
  return (
    <div name="skills" className="skills">
      <div className="container-skills" data-aos="fade-up">
        <div className="p1p2">
          <p className="p1-skills">Skills</p>
          <p className="p2-skills">
            These are the technologies I've worked with
          </p>
        </div>
        <div className="container-img">
          <div className="icon">
            <img className="img-skills" src={HTML} alt="HTML icon" />
            <p className="p3-skills">HTML</p>
          </div>
          <div className="icon">
            <img className="img-skills" src={CSS} alt="CSS icon" />
            <p className="p3-skills">CSS</p>
          </div>
          <div className="icon">
            <img className="img-skills" src={JS} alt="JS icon" />
            <p className="p3-skills">JAVASCRIPT</p>
          </div>
          <div className="icon">
            <img className="img-skills" src={REACT} alt="React.js icon" />
            <p className="p3-skills">REACT.JS</p>
          </div>
          <div className="icon">
            <img className="img-skills" src={GIT} alt="Git icon" />
            <p className="p3-skills">GIT</p>
          </div>
          <div className="icon">
            <img className="img-skills" id="sass" src={SASS} alt="SASS icon" />
            <p className="p3-skills">SASS</p>
          </div>
          <div className="icon">
            <img className="img-skills" src={WP} alt="WordPress icon" />
            <p className="p3-skills">WORDPRESS</p>
          </div>
          <div className="icon">
            <img
              className="img-skills"
              id="sass"
              src={FIGMA}
              alt="Figma icon"
            />
            <p className="p3-skills">FIGMA</p>
          </div>
          <div className="icon">
            <img
              className="img-skills-b"
              src={BOOTSTRAP}
              alt="Bootstrap icon"
            />
            <p className="p3-skills-b">BOOTSTRAP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
