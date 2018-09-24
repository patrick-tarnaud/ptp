/**
 * Class App
 * 
 * Application management
 */

export default class App {

  /**
   * Constructor
   * 
   * Connect menu item clicks to pages display
   */
  constructor() {
    // clicks on menu items displays pages
    let menuItems = document.querySelectorAll('nav .menu-item')
    menuItems.forEach((menuItem) => menuItem.addEventListener('click', (e) => {
      let page = e.target.getAttribute('href')
      this.showPage(page)
      // if menu is in responsive mode (vertically deployed), collapses it
      let menu = document.querySelector('.menu')
      if (menu.classList.contains('responsive')) {
        menu.classList.remove('responsive')
      }
    }))
    // home page showed firts
    this.showPage('#accueil')
  }

  /**
 * Hide all pages
 */
  hideAllPages() {
    let pages = document.querySelectorAll('.page')
    pages.forEach((page) => page.classList.remove('active'))
  }

  /**
   * Show a page from its id
   * 
   * @param {String} pageId 
   */
  showPage(pageId) {
    // hides all pages and shows this designed by pageId
    this.hideAllPages();
    let page = document.querySelector(pageId)
    page.classList.add('active')
  }
}

