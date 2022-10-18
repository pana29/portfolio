import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-scroll';
import Typical from 'react-typical';
import './../components/Home.css';

const Home = () => {
  return (
    <div name="home" className="home">
      <div
        className="container-home"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <p className="home-p">Hi, my name is</p>
        <h1 className="home-h1">Razvan Pana</h1>
        <h2 className="home-h2">
          I'm a
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              ' Web Developer.',
              1000,
              ' Front End Developer.',
              1000,
              ' React Developer.',
              1000,
            ]}
          />
        </h2>
        <p className="home-p2">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product.
        </p>
        <div className="btn-start">
          <a href="RazvanPana.pdf" download="CV RazvanPana.pdf">
            <button className="home-btn">
              Get Resume
              <span className="home-span-2">
                <MdOutlineFileDownload className="home-icon" />
              </span>
            </button>
          </a>
          <Link to="work" smooth={true} duration={500}>
            <button className="home-btn">
              View Work
              <span className="home-span">
                <HiArrowNarrowRight className="home-icon" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
