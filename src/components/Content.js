import React from 'react';
import Blocks from './Blocks';
import jsIcon from '../img/js.png';
import reactIcon from '../img/react.png';
import htmlIcon from '../img/html.png';
import cssIcon from '../img/css.png';
import gitIcon from '../img/git.png';
import postgresqlIcon from '../img/postgresql.png';
import tailwindIcon from '../img/tailwind.png';
import nodeIcon from '../img/node.png';
import githubIcon from '../img/github.png';
import linkedinIcon from '../img/linkedin.png';
import leetcodeIcon from '../img/leetcode.png';


const Content = ({ activeTab }) => {
  const aboutBlocks = [
    { id: 1, title: 'JavaScript', bgImage: jsIcon },
    { id: 2, title: 'React', bgImage: reactIcon },
    { id: 3, title: 'HTML', bgImage: htmlIcon },
    { id: 4, title: 'CSS', bgImage: cssIcon },
    { id: 5, title: 'Git', bgImage: gitIcon },
    { id: 6, title: 'PostgreSQL', bgImage: postgresqlIcon },
    { id: 7, title: 'Tailwind', bgImage: tailwindIcon },
    { id: 8, title: 'Node.js', bgImage: nodeIcon },
  ];

  const contactBlocks = [
    { id: 1, title: 'GitHub', bgImage: githubIcon, link: 'https://github.com/DarrosHere' },
    { id: 2, title: 'LinkedIn', bgImage: linkedinIcon, link: 'https://www.linkedin.com/in/andrii-herasym-23a202346/' },
    { id: 3, title: 'LeetCode', bgImage: leetcodeIcon, link: 'https://leetcode.com/u/darrosHere/' },
  ];

  const containerStyle = "flex flex-col items-center text-center md:items-start md:text-left justify-start md:justify-center max-h-[430px] min-h-[430px] px-4 md:px-0 py-6";

  switch (activeTab) {
    case 'Home':
      return (
        <div className={containerStyle}>
          <h1 className="text-white text-4xl md:text-7xl uppercase font-bold leading-tight">
            building <br /> cool <br /> things
          </h1>
          <h2 className="text-white text-2xl md:text-4xl mt-4">Hi, I’m Andrew</h2>
          <p className="text-white text-lg md:text-2xl mt-4 max-w-xl">
            I'm a software engineer passionate about building modern, responsive web apps.
          </p>
        </div>
      );
    case 'About':
      return (
        <div className={containerStyle}>
          <h2 className="text-white text-4xl md:text-6xl font-bold">About Me</h2>
          <p className="text-white text-lg md:text-2xl mt-4 max-w-xl">
            I enjoy solving challenging problems and learning new technologies. My focus is on full-stack development with React and Node.js.
          </p>
          <Blocks blocks={aboutBlocks} />
        </div>
      );
    case 'Contact':
      return (
        <div className={containerStyle}>
          <h2 className="text-white text-4xl md:text-6xl font-bold">Contact</h2>
          <p className="text-white text-lg md:text-2xl mt-4 max-w-xl">
            I’m always open to connect and collaborate! <br />
            Feel free to reach out or check out my profiles below.
          </p>
          <Blocks blocks={contactBlocks} />
          <p className="text-white text-lg md:text-2xl mt-4 max-w-xl">
            Or simply email me at:{' '}
            <a
              href="mailto:andriicoding@gmail.com"
              className="text-blue-400 underline hover:text-blue-300"
            >
              andriicoding@gmail.com
            </a>
          </p>
        </div>
      );
    default:
      return null;
  }
};


export default Content;