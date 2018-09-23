import main from "./main.scss";
import header_scss from "./header.scss"
import header from "./header"
import footer_scss from "./footer.scss"

document.addEventListener('DOMContentLoaded', initialization())

/**
 * Hides all pages
 */
function hideAllPages() {
  let pages = document.querySelectorAll('.page')
  pages.forEach((page) => page.classList.remove('active'))
}

/**
 * Shows a page from its id
 * 
 * @param {String} pageId 
 */
function showPage(pageId) {
  // hides all pages and shows this designed by pageId
  hideAllPages();
  let page = document.querySelector(pageId)
  page.classList.add('active')
}

/**
 * Document initialization
 */
function initialization() {
  // clicks on menu items display pages
  let menuItems = document.querySelectorAll('nav a')
  menuItems.forEach((menuItem) => menuItem.addEventListener('click', (e) => {
    let page = e.target.getAttribute('href')
    showPage(page)
    // if menu is in responsive mode (vertically deployed), collapses it
    let menu = document.querySelector('.menu')
    if (menu.classList.contains('responsive')) {
      menu.classList.remove('responsive')
    }
  }))
  // home page showed firts
  showPage('#accueil')
}