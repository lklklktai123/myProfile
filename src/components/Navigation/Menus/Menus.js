import Menu from './Menu/Menu';

const menus = () => {
  const data = [
    {
      link: 'home',
      name: 'Home',
    },
    {
      link: 'about',
      name: 'About',
    },
    {
      link: 'experience',
      name: 'Experience',
    },
    {
      link: 'education',
      name: 'Education',
    },
    {
      link: 'course',
      name: 'Course',
    },
    {
      link: 'contact',
      name: 'Contact',
    },
  ];
  const scrollToHandler = e => {
    e.preventDefault();
    const idSection = document.querySelector(e.target.getAttribute('href'));
    // idSection.getBoundingClientRect();
    // Scrolling
    // window.scrollTo({
    //   left: idSection.left + window.pageXOffset,
    //   top: idSection.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });

    idSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <ul className="navigation__nav-bar">
      {data.map((menu, index) => (
        <Menu
          key={`menu${index}`}
          link={menu.link}
          name={menu.name}
          clicked={e => scrollToHandler(e)}
        />
      ))}
    </ul>
  );
};
export default menus;
