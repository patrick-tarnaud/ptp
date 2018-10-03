/**
 * Portfolio view management
 * 
 * The portfolio is organized in a flex row and four columns
 */
// import scss
import portfolio_flexcol_scss from "./portfolio-flexcol.scss"

export default class PortfolioFlexcolView {

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
    <div class='portfolio-flexcol-row'>
      <div id ='portfolio-flexcol-col1' class='portfolio-flexcol-column'></div> 
      <div id ='portfolio-flexcol-col2' class='portfolio-flexcol-column'></div> 
      <div id ='portfolio-flexcol-col3' class='portfolio-flexcol-column'></div> 
      <div id ='portfolio-flexcol-col4' class='portfolio-flexcol-column'></div> 
    </div>
    `
  }

  display() {
    // base template in portfolioNode
    this.portfolioElement.innerHTML = this.template

    // get DOM node for row and columns
    let row = document.querySelector('.portfolio-flexcol-row')
    let col = []
    for (let i = 0; i < 4; i++) {
      col[i] = document.querySelector('#portfolio-flexcol-col' + (i + 1))
    }

    let index = 0
    this.modelApp.portfolio.forEach(photo => {
      index = (index == 4) ? 0 : index
      let img = document.createElement('img')
      img.setAttribute('src', '/assets/photos/' + photo.file)
      col[index].appendChild(img)
      index++
    });
  }
}