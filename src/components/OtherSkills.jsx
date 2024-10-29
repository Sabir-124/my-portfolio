import '../style/otherSkills.css';

const OtherSkills = ({ value }) => {
  const otherSkills = [
    {
      className: 'html',
      image: "/my-portfolio/logos/design-logo.png",
      name: <p>Responsive<br />Design</p>
    },
    {
      className: 'css',
      image: "/my-portfolio/logos/API-logo.png",
      name: <p>API<br />Integeration</p>
    },
    {
      className: 'js',
      image: "/my-portfolio/logos/SEO-logo.png",
      name: <span>SEO</span>
    },
  ];

  return (
    <div className="language-section appear" ref={el => value.current[12] = el}>
      <div className="front-side">
        <p className='color-text'>Other Skills</p>
        <div className="pics-of-skills">
          <img className="otherSkill-pics" src="/my-portfolio/pics/otherSkills.png" />
        </div>
        <div className="skill-contents">
          {Object.values(otherSkills).map((otherSkill) => (
            <div className='image-container'>
              <img className={otherSkill.className} src={otherSkill.image} />
              <p>{otherSkill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OtherSkills;