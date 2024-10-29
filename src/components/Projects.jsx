import { useContext } from 'react';
import '../style/projects.css';
import PortFolioContext from '../context/PortFolioContext';

const Projects = ({value}) => {
  const { projects } = useContext(PortFolioContext);

  const items = [
    {
      pic: '/my-portfolio/pics/youtube.png',
      name: 'Youtube Clone',
      link: 'https://sabir-124.github.io/youtube-clone/'
    },
    {
      pic: '/my-portfolio/pics/weather.png',
      name: 'Weather Forecast',
      link: 'https://sabir-124.github.io/weather-forecast/'
    },
    {
      pic: '/my-portfolio/pics/portfolio.png',
      name: 'My own portfolio',
      link: 'https://sabir-124.github.io/my-portfolio/'
    },
    {
      pic: '/my-portfolio/pics/account.png',
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
            <a className='each-project' href={item.link} target='_blank'>
              <div className="project">
                <div className="gradient-shadow"></div>
                <div className="front-card">
                  <img src={item.pic} alt='project-icon'/>
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