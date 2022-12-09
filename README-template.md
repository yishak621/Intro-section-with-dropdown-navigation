# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor] by Yishak Abrham.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

these is basic dropdown menu practice including basic scripts of JS.

### Screenshot

![](./yisscreen.png.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

the process is simple grid and flex designs for the layout and the functionallity part is designed by JS ..selecting the classes from each nav links made it possible for reusable design

```js
const submenuContainer = [...navSlide.querySelectorAll('.nav-list_links')];
```

i use spread operator to convert the node lists in to array and after i use array iterator mehtod to apply properties for each of items. forEach method

```js
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
```

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex
- CSS Grid
- Mobile-first workflow
- javascript

### What I learned

nothing new it just good way to practice my JS skills

## Author

- Frontend Mentor - [@yishak621](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

thank you frontend mentor
