import React from 'react';

import About from './components/About/about';
import Contact from './components/Contact/contact';
import Courses from './components/Courses/Courses';
import Education from './components/Education/Education';
import Experience from './components/Experience/experience';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Parallax from './components/Parallax/parallax';
import Overlay from './components/Overlay/overlay';
import Navigation from './components/Navigation/navigation';
import ModeMobile from './components/Navigation/ModeMobile/ModeMobile';
import Modal from './components/Overlay/Modal/modal';
import { CourseContextProvider } from './Context/CourseContext';
function App() {
  return (
    <React.Fragment>
      <Overlay />
      <Modal />
      <Navigation />
      <ModeMobile />
      <div className="container">
        <Header />
        <About />
        <Parallax />
        <Experience />
        <Education />
        <CourseContextProvider>
          <Courses />
        </CourseContextProvider>
        <Contact />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
