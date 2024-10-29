import '../style/header.css';
import { useContext, useEffect, useRef } from 'react';
import PortFolioContext from '../context/PortFolioContext';

const Header = () => {
  const {scrollHome, scrollAbout, scrollSkills, scrollProjects, scrollContact} = useContext(PortFolioContext);

  return (
    <>
      <div className="header">
        <h2 className="portfolio-name" onClick={scrollHome}>WebDevWala</h2>
        <div className="header-options">
          <span onClick={scrollHome}>Home</span>
          <span onClick={scrollAbout}>About</span>
          <span onClick={scrollSkills}>Skills</span>
          <span onClick={scrollProjects}>Projects</span>
          <span onClick={scrollContact}>Contact</span>
        </div>
      </div>
    </>
  )
}

export default Header;