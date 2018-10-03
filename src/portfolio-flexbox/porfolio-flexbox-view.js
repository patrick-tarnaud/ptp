/**
 * Portfolio view management
 * 
 * The portfolio is organized in a flex row and four columns
 */
// import scss
import portfolio_flexbox_scss from "./portfolio-flexbox.scss"

export default class PortfolioFlexboxView {

  /**
   * Constructor 
   * 
   * @param {} portfolioElement DOM element that will contain the portfolio
   * @param {*} modelApp model of the app in which the view will find the portfolio datas
   */
  constructor(portfolioElement, modelApp) {
    this.portfolioElement = portfolioElement
    this.modelApp = modelApp
    this.template = `
       <div class='portfolio-flexbox-container'>
       </div>`
  }

  display() {
    this.portfolioElement.innerHTML = this.template
    let pfc = document.querySelector('.portfolio-flexbox-container')
    let img
    this.modelApp.portfolio.forEach(photo => {
      img = document.createElement('img')
      img.setAttribute('src', './assets/photos/' + photo.file)
      pfc.appendChild(img)
    });

  }
}