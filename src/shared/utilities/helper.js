export const ScrollToHandler = e => {
  e.preventDefault();
  // console.log(e.target.getAttribute('href'));
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
export const closeModal = () => {
  const overlay = document.querySelector('.overlay');
  const model = document.querySelector('.modal');
  const courseDetail = document.querySelector('.course-detail');
  const langContent = document.querySelector('.LangContent');
  overlay.classList.add('hidden');
  model.classList.add('hidden');
  courseDetail.classList.add('hidden');
  langContent.classList.add('hidden');
  // window.location.reload();
};
export const showmodal = () => {
  const overlay = document.querySelector('.overlay');
  const model = document.querySelector('.modal');

  overlay.classList.remove('hidden');
  model.classList.remove('hidden');
  // window.location.reload();
};

export const checkViewIntersection = (inView, entry) => {
  const navBar = document.querySelector('.navigation__nav-bar');
  const childBar = navBar ? navBar.childNodes : null;
  if (inView) {
    if (childBar) {
      childBar.forEach(menu => menu.classList.remove('border-bottom'));
      document
        .querySelector(`#${entry.target.dataset.idMenu}`)
        .classList.add('border-bottom');
    }
  }
};
export const threshold = (value = 0.3) => {
  return {
    /* Optional options */
    threshold: value,
  };
};
