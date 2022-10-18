import React from 'react';
import './About.css';
import me1 from './../assets/L015.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="sub-a" data-aos="fade-up">
        <div className="container-a">
          <div className="cont-padd">
            <div className="a-left">
              <div className="a-card bg"></div>
              <div className="a-card">
                <img src={me1} alt="" id="img-me" className="a-img" />
              </div>
            </div>
            <div className="a-right">
              <h1 className="a-title">About</h1>
              <p className="a-sub">
                Hi. I'm Razvan, nice to meet you. Please take a look around.
              </p>
              <p className="a-desc">
                I would describe myself as a person who thrives at the chance of
                learning new skills through hard work. I am a very organized
                person, careful to details and a team-player, being a good fit
                to any team because of my excellent communication and
                collaboration skills, confident in my abilities to come up with
                new ideas.I have strong technical skills as well as excellent
                interpersonal skills, enabling me to interact with a wide range
                of people. I am eager to be challenged in order to grow and
                further improve my IT skills. My greatest passion in life is
                using my technical know-how to benefit other people and
                organisations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
