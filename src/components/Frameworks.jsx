import '../style/languages.css';

const Languages = ({value}) => {
  return (
    <div className="language-section appear" ref={el => value.current[11] = el}>
      <div className="front-side">
        <p className='color-text'>Frameworks & Libraries</p>
        <div className="pics-of-skills">
          <img className="skill-pics" src="/pics/framework.jpeg" />
        </div>
        <div className="content2">
          <div className='image-container'>
            <img className='html' src="/logos/bootstrap-logo.png" />
            <p>Bootstrap</p>
          </div>
          <div className='image-container'>
            <img className='css' src="/logos/react-logo.png" />
            <p>React</p>
          </div>
          <div className='image-container'>
            <img className='js' src="/logos/nodejs-logo.png" />
            <p>Node JS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Languages;