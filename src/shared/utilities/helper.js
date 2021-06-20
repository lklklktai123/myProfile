export const ScrollToHandler = e => {
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
export const closeModal = () => {
  const overlay = document.querySelector('.overlay');
  overlay.classList.add('hidden');
  window.location.reload();
};
