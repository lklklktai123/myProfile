import About from './components/About/about';
import Contact from './components/Contact/contact';
import Courses from './components/Courses/Courses';
import Education from './components/Education/Education';
import Experience from './components/Experience/experience';
import Header from './components/Header/header';
import Parallax from './components/Parallax/parallax';
function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Parallax />
      <Experience />
      <Education />
      <Courses />
      <Contact />
    </div>
  );
}

export default App;
