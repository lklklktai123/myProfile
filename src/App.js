import About from './components/About/about';
import Contact from './components/Contact/contact';
import Courses from './components/Courses/Courses';
import Education from './components/Education/Education';
import Experience from './components/Experience/experience';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Parallax from './components/Parallax/parallax';
import Overlay from './components/Overlay/overlay';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Overlay />
      <div className="container">
        <Header />
        <About />
        <Parallax />
        <Experience />
        <Education />
        <Courses />
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
