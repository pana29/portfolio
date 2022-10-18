import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import logo from '../assets/razvanpana.png';
import './../components/Navbar.css';
import { useEffect } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const [theme, setTheme] = useState('dark-theme');

  const toggleTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme');
    } else {
      setTheme('dark-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="navbar">
      <div className="container" data-aos="fade-down">
        <div className="logo">
          <Link to="home" smooth={true} duration={500}>
            <img className="logo-navbar" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="hamburger" onClick={handleNav}>
          {!nav ? (
            <FaBars className="icon" />
          ) : (
            <FaTimes className="icon" style={{ color: 'white' }} />
          )}
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          {/* <li>
                <button className='toggle' onClick={toggleTheme} >toggle</button>
            </li> */}
          <li className="nav-item">
            <Link onClick={handleNav} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={handleNav} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={handleNav} to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={handleNav} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={handleNav} to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="social" data-aos="fade-right">
        <ul className="social-ul">
          <li>
            <a
              className="social-a"
              target=" _blank"
              href="https://www.linkedin.com/in/razvan-pana-47470a244/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
        <ul className="social-ul s2">
          <li>
            <a
              className="social-a"
              target=" _blank"
              href="https://github.com/pana29"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
        </ul>
        <ul className="social-ul s3">
          <li>
            <Link to="contact" smooth={true} duration={500}>
              <a className="social-a" href="/">
                Email <HiOutlineMail size={30} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
