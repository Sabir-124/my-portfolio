import { useContext } from 'react';
import '../style/contact.css';
import PortFolioContext from '../context/PortFolioContext';

const Contacts = ({value}) => {
  const { Contacts } = useContext(PortFolioContext);

  const contact = "I’m always open to exciting new opportunities, collaborations, or simply connecting with like-minded individuals. Whether you have a project in mind, need help with web development, or just want to chat about the latest in tech, feel free to reach out. I’d love to hear from you!";

  const contacts = [
    {
      img: '/my-portfolio/logos/whatsapp.png'
    },
    {
      img: '/my-portfolio/logos/twitter.png'
    },
    {
      img: '/my-portfolio/logos/email.png'
    },
    {
      img: '/my-portfolio/logos/linkedin.png'
    }
  ]

  return (
    <>
      <div ref={Contacts}></div>
      <div className="contact-section">
        <div className="about-header" ref={el => value.current[15] = el}>
          <span className="text-header color-text">Contact</span>
        </div>
        <div className="contact-contents">
          <div className="contact-text appear" ref={el => value.current[16] = el}>
            <p>{contact}</p>
          </div>
          <div className="contacts appear" ref={el => value.current[17] = el}>
            <p className='color-text'>How to reach me :</p>
            <div className="contact-paths">
              {Object.values(contacts).map((each) => (
                <div className='each-contact'>
                  <a href='#'><img className='icon' src={each.img} alt='contact icon'/></a>
                </div>
              ))}
            </div>
          </div>
          <p className='last-message appear' ref={el => value.current[18] = el}>Looking forward to connecting and creating something amazing together!</p>
        </div>
      </div>
    </>
  )
}

export default Contacts;