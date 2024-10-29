import '../style/languages.css';

const Languages = ({ value }) => {
  const languages = [
    {
      className: 'html',
      image: "/my-portfolio/logos/html-logo.png",
      name: 'HTML'
    },
    {
      className: 'css',
      image: "/my-portfolio/logos/css-logo.png",
      name: 'CSS'
    },
    {
      className: 'js',
      image: "/my-portfolio/logos/js-logo.png",
      name: 'JS'
    },
  ];

  return (
    <div className="language-section appear" ref={el => value.current[10] = el}>
      <div className="front-side">
        <p className='color-text'>Languages</p>
        <div className="pics-of-skills">
          <img className="skill-pics" src="/my-portfolio/pics/languages.png" alt='languages'/>
        </div>
        <div className="content1">
          {Object.values(languages).map((language) => (
            <div className='image-container'>
              <img className={language.className} src={language.image} alt='language-icon'/>
              <p>{language.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Languages;