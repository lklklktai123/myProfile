import React from 'react';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Courses from './components/Courses/Courses';
import Education from './components/Education/Education';
import Experience from './components/Experience/experience';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Parallax from './components/Parallax/parallax';
import Navigation from './components/Navigation/navigation';
import ModeMobile from './components/Navigation/ModeMobile/ModeMobile';
import { CourseContextProvider } from './Context/CourseContext';
import LangSelector from './components/Translate/LangSelector';
import useWindowDimensions from './hooks/useWindowDimensions';

const App = () => {
  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      {width >= 900 && <Navigation />}
      {width < 900 && <ModeMobile />}
      <LangSelector />

      <div className="container">
        <Header width={width} />
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
};

export default App;
