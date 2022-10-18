import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import '../components/Social.css';

const Social = () => {
  return (
    <div className="sub-social">
      <div className="social-down">
        <div className="social-component">
          <ul className="social-component-ul">
            <li className="linkedin-footer">
              <a
                className="social-component-a "
                target=" _blank"
                href="https://www.linkedin.com/in/razvan-pana-47470a244/"
              >
                <FaLinkedin size={20} />
              </a>
            </li>
          </ul>
          <ul className="social-component-ul">
            <li className="github-footer">
              <a
                className="social-component-a"
                target=" _blank"
                href="https://github.com/pana29"
              >
                <FaGithub size={20} />
              </a>
            </li>
          </ul>
          <ul className="social-component-ul ">
            <li className="email-footer">
              <Link to="contact" smooth={true} duration={500}>
                <a className="social-component-a" href="/">
                  <HiOutlineMail size={20} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Social;
