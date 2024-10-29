import { useContext } from 'react';
import '../style/projects.css';
import PortFolioContext from '../context/PortFolioContext';

const Projects = ({value}) => {
  const { projects } = useContext(PortFolioContext);

  const items = [
    {
      pic: '/pics/youtube.png',
      name: 'Youtube Clone',
    },
    {
      pic: '/pics/weather.png',
      name: 'Weather Forecast'
    },
    {
      pic: '/pics/portfolio.png',
      name: 'My own portfolio'
    },
    {
      pic: '/pics/account.png',
      name: 'Khata Manager',
      link: 'https://sabir-124.github.io/khata-manager/'
    }
  ]

  return (
    <>
      <div ref={projects}></div>
      <div className="project-section">
        <div className="about-header" ref={el => value.current[13] = el}>
          <span className="text-header color-text">Projects</span>
        </div>
        <div className="projects-contents appear" ref={el => value.current[14] = el}>
          {Object.values(items).map((item) => (
            <a className='each-project' href='#' target='_blank'>
              <div className="project">
                <div className="gradient-shadow"></div>
                <div className="front-card">
                  <img src={item.pic} />
                  <p className='color-text'>{item.name}</p>
                </div>
                <div className="back-card">
                  <p className='link'>Click to access the site</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects;