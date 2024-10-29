import About from './components/About'
import Contacts from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { useRef, useEffect } from 'react'
import './App.css'

function App() {
  const activeRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, options);

    activeRef.current.forEach(section => observer.observe(section));

    return () => {
      activeRef.current.forEach(section => observer.unobserve(section));
    };

  }, []);

  return (
    <div className='whole'>
      <Header/>
      <Home value={activeRef}/>
      <About value={activeRef}/>
      <Skills value={activeRef}/>
      <Projects value={activeRef}/>
      <Contacts value={activeRef}/>
    </div>
  )
}

export default App
