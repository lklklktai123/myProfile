import Menu from './Menu/Menu';

const menus = () => {
  const data = [
    {
      link: 'home',
      name: 'Home',
      idMenu: 'menu-home',
    },
    {
      link: 'about',
      name: 'About',
      idMenu: 'menu-about',
    },
    {
      link: 'experience',
      name: 'Experience',
      idMenu: 'menu-experience',
    },
    {
      link: 'education',
      name: 'Education',
      idMenu: 'menu-education',
    },
    {
      link: 'course',
      name: 'Course',
      idMenu: 'menu-course',
    },
    {
      link: 'contact',
      name: 'Contact',
      idMenu: 'menu-contact',
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
          idMenu={menu.idMenu}
          clicked={e => scrollToHandler(e)}
        />
      ))}
    </ul>
  );
};
export default menus;
