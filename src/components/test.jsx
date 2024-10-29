import React, { useEffect, useRef } from 'react';
import '../style/test.css';

const App1 = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, options);

    sectionsRef.current.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach(section => observer.unobserve(section));
    };
  }, []);


}

export default App1;
