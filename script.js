import getElement from './components/module/getElement.js';
//DECLARATION
const menuIcon = getElement('.menu-icon');
const closeBtn = getElement('.close-menu');
const asideWrapper = getElement('.aside-wrapper');
//toogle sidebar
menuIcon.addEventListener('click', () => {
  asideWrapper.classList.remove('close_wrapper');
  asideWrapper.classList.add('open_wrapper');
});
closeBtn.addEventListener('click', () => {
  asideWrapper.classList.add('close_wrapper');
  asideWrapper.classList.remove('open_wrapper');
});

//NAV-SLIDE functionnality for mobile version
const navSlide = getElement('.nav-slide');
const submenuContainer = [...navSlide.querySelectorAll('.nav-list_links')];

submenuContainer.forEach((subContainers) => {
  //selecting from the subcontainers
  const submenu = subContainers.querySelector('.nav-list_lists');
  const arrowIcon = subContainers.querySelector('.arrow-down');
  subContainers.addEventListener('click', function () {
    if (submenu.classList.contains('close')) {
      submenu.classList.remove('close');
      submenu.classList.add('open');
      //rotate the arrow
      arrowIcon.classList.add('arrow-rotate');
    } else {
      submenu.classList.remove('open');
      submenu.classList.add('close');
      //rotate back
      arrowIcon.classList.remove('arrow-rotate');
    }
  });
});

//NAV-BAR functionallity for pc version
const navList = getElement('.nav-list');
const submenuNav = [...navList.querySelectorAll('.nav-list_links')];

submenuNav.forEach((submenuNav) => {
  //selecting from the subcontainers
  const submenu = submenuNav.querySelector('.nav-list_lists');
  const arrowIcon = submenuNav.querySelector('.arrow-down');

  submenuNav.addEventListener('click', function () {
    if (submenu.classList.contains('close')) {
      submenu.classList.remove('close');
      submenu.classList.add('open');
      //rotate the arrow
      arrowIcon.classList.add('arrow-rotate');
    } else {
      submenu.classList.remove('open');
      submenu.classList.add('close');
      //rotate back
      arrowIcon.classList.remove('arrow-rotate');
    }
  });
});
