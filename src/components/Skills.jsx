import { useContext } from 'react';
import '../style/skills.css';
import FrameWorks from './Frameworks';
import Languages from './Languages';
import OtherSkills from './OtherSkills';
import PortFolioContext from '../context/PortFolioContext';

const Skills = ({value}) => {
  const { skills } = useContext(PortFolioContext);

  return (
    <>
      <div ref={skills}></div>
      <div className='skill-section'>
        <div className="about-header skill-header" ref={el => value.current[9] = el}>
          <span className="text-header color-text">Skills</span>
        </div>
        <Languages value={value}/>
        <FrameWorks value={value}/>
        <OtherSkills value={value}/>
      </div>
    </>
  )
}

export default Skills;