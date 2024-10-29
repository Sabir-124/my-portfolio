import '../style/languages.css';

const Languages = ({value}) => {
  return (
    <div className="language-section appear" ref={el => value.current[10] = el}>
      <div className="front-side">
        <p className='color-text'>Languages</p>
        <div className="pics-of-skills">
          <img className="skill-pics" src="/pics/languages.png" />
        </div>
        <div className="content1">
          <div className='image-container'>
            <img className='html' src="/logos/html-logo.png" />
            <p>HTML</p>
          </div>
          <div className='image-container'>
            <img className='css' src="/logos/css-logo.png" />
            <p>CSS</p>
          </div>
          <div className='image-container'>
            <img className='js' src="/logos/js-logo.png" />
            <p>JS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Languages;