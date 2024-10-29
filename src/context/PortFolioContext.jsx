import { createContext, useRef } from "react";

const PortFolioContext = createContext();

function Scroller({ children }) {
  const home = useRef(null)
  const about = useRef(null)
  const skills = useRef(null)
  const projects = useRef(null)
  const Contacts = useRef(null)

  const scrollHome = () =>{
    home.current.scrollIntoView({behavior: "smooth"});
  }
  const scrollAbout = () =>{
    about.current.scrollIntoView({behavior: "smooth"});
  }
  const scrollSkills = () =>{
    skills.current.scrollIntoView({behavior: "smooth"});
  }
  const scrollProjects = () =>{
    projects.current.scrollIntoView({behavior: "smooth"});
  }
  const scrollContact = () =>{
    Contacts.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <PortFolioContext.Provider value={{ home, about, skills, projects, Contacts, scrollHome, scrollAbout, scrollSkills, scrollProjects, scrollContact}}>
      {children}
    </PortFolioContext.Provider>
  )

}

export { Scroller };
export default PortFolioContext;