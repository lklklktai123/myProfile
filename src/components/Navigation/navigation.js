import Logo from './Logo/Logo';
import Menu from './Menus/Menus';
import React, { useEffect } from 'react';
const Navigation = () => {
  useEffect(() => {
    const header = document.querySelector('.header');
    const navigation = document.querySelector('.navigation');
    const allSections = document.querySelectorAll('section');
    const navBar = document.querySelector('.navigation__nav-bar');
    const menuHome = document.querySelector('#menu-home');
    const childBar = navBar.childNodes;

    const stickyNav = entries => {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        navigation.classList.remove('hidden');
        childBar.forEach(menu => menu.classList.remove('border-bottom'));
        menuHome.classList.add('border-bottom');
      } else {
        navigation.classList.add('hidden');
      }
    };
    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0.9,
    });
    const revealSection = function (entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      const menuId = document.querySelector(`#${entry.target.dataset.idMenu}`);

      childBar.forEach(menu => menu.classList.remove('border-bottom'));
      console.log(entry.target);
      entry.target.classList.remove('blur');
      menuId.classList.add('border-bottom');

      // observer.unobserve(entry.target);
    };
    headerObserver.observe(header);

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.2,
    });
    allSections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }, []);

  return (
    <div className="navigation hidden">
      <Logo />
      <Menu />
    </div>
  );
};
export default Navigation;
