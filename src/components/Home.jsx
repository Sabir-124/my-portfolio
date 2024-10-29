import { useContext } from 'react';
import '../style/home.css';
import PortFolioContext from '../context/PortFolioContext';

const Home = ({value}) => {
  const {home} = useContext(PortFolioContext);
  return (
    <>
      <div ref={home} className='extra'></div>
      <div className="home-section">
        <div className="introduction-section" ref={el => value.current[0] = el}>
          <p className='greeting-line'>Hi there!</p>
          <p className='name-line'>I'm Sabir Hussain</p>
          <p className='introduction-line'>A dedicated <b className='bold'>Web developer</b> with a passion for creating impactful and innovative solutions. My goal is to bring ideas to life through my work, utilizing my skills in <b className='bold'>Web developement.</b></p>
        </div>
        <div className="profile-section" ref={el => value.current[1] = el}>
          <img className='profile' alt='profile-pic' src='/my-portfolio/pics/profile.jpeg' />
        </div>
      </div>
    </>
  )
}

export default Home;
