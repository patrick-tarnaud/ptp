let menu = document.querySelector('div.menu')
menu.addEventListener('click', (e) => {
  if (menu.classList.contains('responsive')) {
    menu.classList.remove('responsive')
  } else {
    menu.classList.add('responsive')
  }
  console.log(menu.classList)
})
