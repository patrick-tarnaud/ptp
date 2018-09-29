/**
 * Class App
 * 
 * Application management
 */
import Portfolio from '../portfolio/portfolio.js'
import ModelApp from './model-app.js'


export default class App {

  /**
   * Constructor
   * 
   * Menu initialization
   * show home page
   */
  constructor() {
    this.initMenu()
    this.showPage('#accueil')
    this.modelApp = new ModelApp()
    this.portfolio = new Portfolio(document.querySelector('#portfolio'), this.modelApp)
    console.debug(this.portfolio)
  }

  /**
 * Hide all pages
 */
  hideAllPages() {
    let pages = document.querySelectorAll('.page')
    pages.forEach(page => page.classList.remove('active'))
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

    // TODO
    if (pageId == "#portfolio") {
      this.portfolio.run()
    }
  }

  /**
   * Menu Initialisation 
   * 
   * Link menu item to pages
   */
  initMenu() {
    // click on menu items displays pages
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

    // show or hide vertical menu in responsive mode
    let hamburger = document.querySelector('.menu a.hamburger')

    hamburger.addEventListener('click', (e) => {
      let menu = document.querySelector('nav div.menu')
      if (menu.classList.contains('responsive')) {
        menu.classList.remove('responsive')
      } else {
        menu.classList.add('responsive')
      }
      e.preventDefault()
    })
  }
}