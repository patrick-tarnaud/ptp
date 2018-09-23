/**
 * header menu management
 */

// access to icon hamburger element 
let hamburger = document.querySelector('.menu a.hamburger')

// when icon hamburger clicked, menu switches in responsive form, if clicked again menu swiches in normal mode (horizonal and ot displayed)
hamburger.addEventListener('click', (e) => {
  let menu = document.querySelector('nav div.menu')
  if (menu.classList.contains('responsive')) {
    menu.classList.remove('responsive')
  } else {
    menu.classList.add('responsive')
  }
  e.preventDefault();
})