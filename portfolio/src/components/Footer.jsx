import React from 'react';
import { FaAt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  // Define a base style and conditionally change the background based on the route
  const textColor = location.pathname === "/"
    ? "text-white"
    : "text-red-700";

  return (
    <footer className={`${textColor} py-6`}>
      <div className="px-10 mx-auto flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex space-x-6">
          <a
            href="mailto:kamteprajwal@gmail"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send an email"
          >
            <FaAt className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/prajwal-kamte-428409389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/prajwal5065"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
        <div className='text-center md:text-end font-semibold'>
          <small>
            <p>&copy; {new Date().getFullYear()} Prajwal. All rights reserved.</p>
            <p>
              <i> Designed by Prajwal</i> <span>|</span> <i>Developed by Prajwal</i>
            </p>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;