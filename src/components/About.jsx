import { useContext } from 'react';
import '../style/about.css';
import PortFolioContext from '../context/PortFolioContext';

const About = ({value}) => {

  const {about} = useContext(PortFolioContext);

  const statement1 = "I've worked on various projects, including e-commerce websites, portfolios and web applications for several clients and companies, gaining expertise in both front-end and back-end development. I strive to craft seamless user experiences, combining technical skills with an understanding of user needs.";
  const statement2 = "I believe that great web development is about more than just writing code; it's about crafting seamless user experiences. My approach combines technical expertise with a deep understanding of user needs. I strive to create websites that are not only visually appealing but also functional and accessible. I enjoy collaborating with designers, product managers, and other developers to bring innovative ideas to life.";

  const interests = [
    {
      id: 1,
      name: 'Hiking',
      image: '/pics/hiking.jpeg',
      detail: "I love hiking because it lets me escape into nature, explore new trails, and feel a sense of peace and adventure with every step."
    },
    {
      id: 2,
      name: 'Painting',
      image: '/pics/painting.jpeg',
      detail: "I love painting because it allows me to express emotions and creativity through vibrant colors and brushstrokes, turning blank canvases into stories."
    },
    {
      id: 3,
      name: 'Learning about new tech',
      image: '/pics/newTech.jpeg',
      detail: "I love how technology constantly evolves, opening endless possibilities for creativity, connection, and problem-solving."
    },
  ]

  return (
    <>
      <div ref={about} className='extra'></div>
      <div className='about-section'>
        <div className="about-header" ref={el => value.current[2] = el}>
          <span className="text-header color-text">About</span>
        </div>
        <div className="about-contents">
          <div className="part">
            <div className="text-part" ref={el => value.current[3] = el}>
              <p className='about-headers color-text'>Biography</p>
              <p>Hello! I’m <b className='bold'>Sabir Hussain</b>, a web developer based in Quetta. Learned web dev from Youtube without having any degree, I specialize in creating dynamic, user-friendly web applications. My passion for web development began with my first website at <b>Youtube clone</b>.</p>
              <p>{statement1}</p>
            </div>
            <div ref={el => value.current[4] = el} className='appear'>
              <img className='pics' alt='pic' src='/pics/biography.jpeg' />
            </div>
          </div>
          <div className="part2">
            <div ref={el => value.current[5] = el} className='appear'>
              <img className='pics' alt='pic' src='/pics/professional.jpeg' />
            </div>
            <div className="text-part" ref={el => value.current[6] = el}>
              <p className='about-headers color-text'>Professional Philosophy</p>
              <p>{statement2}</p>
            </div>
          </div>
          <div className="third-part">
            <p className='about-headers color-text appear' ref={el => value.current[7] = el}>Personal Interests</p>
            <div className="interests appear" ref={el => value.current[8] = el}>
              {Object.values(interests).map((interest) => (
                <div class="card">
                  <div class="card-inner">
                    <div className="gradient-shadow"></div>
                    <div class="card-front">
                      <img className='interest-pics' alt={`${interest.name}pic`} src={interest.image} />
                    </div>
                    <div class="card-back">
                      <p className='interest-name'>{interest.name}</p>
                      <p className='interest-detail'>{interest.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;