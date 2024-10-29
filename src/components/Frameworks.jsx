import '../style/languages.css';

const Languages = ({ value }) => {
  const frameworks = [
    {
      className: 'html',
      image: "/my-portfolio/logos/bootstrap-logo.png",
      name: 'Bootstrap'
    },
    {
      className: 'css',
      image: "/my-portfolio/logos/react-logo.png",
      name: 'React'
    },
    {
      className: 'js',
      image: "/my-portfolio/logos/nodejs-logo.png",
      name: 'Node JS'
    },
  ];

  return (
    <div className="language-section appear" ref={el => value.current[11] = el}>
      <div className="front-side">
        <p className='color-text'>Frameworks & Libraries</p>
        <div className="pics-of-skills">
          <img className="skill-pics" src="/my-portfolio/pics/framework.jpeg" alt='framework-pic' />
        </div>
        <div className="content2">
          {Object.values(frameworks).map((framework) => (
            <div className='image-container'>
              <img className={framework.className} src={framework.image} alt='framework' />
              <p>{framework.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Languages;