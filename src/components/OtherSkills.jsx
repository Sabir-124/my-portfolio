import '../style/otherSkills.css';

const OtherSkills = ({value}) => {
  return (
    <div className="language-section appear" ref={el => value.current[12] = el}>
      <div className="front-side">
        <p className='color-text'>Other Skills</p>
        <div className="pics-of-skills">
          <img className="otherSkill-pics" src="/pics/otherSkills.png" />
        </div>
        <div className="skill-contents">
          <div className='image-container'>
            <img className='html' src="/logos/design-logo.png" />
            <p>Responsive</p><br /><p>Design</p>
          </div>
          <div className='image-container'>
            <img className='css' src="/logos/API-logo.png" />
            <p>API</p><br/><p>Integeration</p>
          </div>
          <div className='image-container'>
            <img className='js' src="/logos/SEO-logo.png" />
            <p>SEO</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherSkills;