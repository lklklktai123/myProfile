import Logo from './Logo/Logo';
import Menu from './Menus/Menus';
import React, { useEffect } from 'react';
const Navigation = () => {
  useEffect(() => {
    const header = document.querySelector('.header');
    const navigation = document.querySelector('.navigation');
    const allSections = document.querySelectorAll('section');
    const stickyNav = entries => {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        navigation.classList.remove('hidden');
      } else {
        navigation.classList.add('hidden');
      }
    };
    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0.9,
    });
    headerObserver.observe(header);

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.3,
    });
    allSections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }, []);
  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.add('move-in-left');
    observer.unobserve(entry.target);
  };
  return (
    <div className="navigation hidden">
      <Logo />
      <Menu />
    </div>
  );
};
export default Navigation;
