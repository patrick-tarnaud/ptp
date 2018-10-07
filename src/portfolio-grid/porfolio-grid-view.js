/**
 * Portfolio view management
 * 
 * The portfolio is organized in a flex row and four columns
 */
// import scss
import portfolio_grid_scss from "./portfolio-grid.scss"

export default class PortfolioGridView {

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
       <div class='portfolio-grid'>
       </div>`
  }

  positionGridItems() {
    let grid = this.portfolioElement.querySelector('.portfolio-grid')
    // grid-gap doesn't work in Firefox (value fixed to 4)
    let gridGap = parseInt(getComputedStyle(grid).getPropertyValue('grid-gap')) || 4
    let gridRowSize = parseInt(getComputedStyle(grid).getPropertyValue('grid-auto-rows'))

    /*
    * gridItem loop
    *   gridItem rowspan computing to fit image
    *   gridItem rowspan modification 
    */

    let img
    let rowSpan = 0
    let gridItems = grid.querySelectorAll('.portfolio-grid-item')
    Array.from(gridItems).forEach(gridItem => {
      console.log(gridItem)
      img = gridItem.querySelector('img')
      img.classList.remove('cover')
      console.log(img)
      console.log('baseURI : ', img.baseURI)
      console.log('img.height', img.height)
      console.log('img.offsetHeight', img.offsetHeight)
      console.log('gridRowSize', gridRowSize)
      console.log('gridGap', gridGap)

      rowSpan = Math.ceil(img.offsetHeight + gridGap / (gridRowSize + gridGap))
      console.log('rowSpan', rowSpan)

      gridItem.style.setProperty('--rowspan', rowSpan)
      img.classList.add('cover')
    })

  }

  display() {
    this.portfolioElement.innerHTML = this.template
    let grid = this.portfolioElement.querySelector('.portfolio-grid')

    let gridItem
    let img
    this.modelApp.portfolio.forEach(photo => {
      gridItem = this.makeGridItem(photo)
      grid.appendChild(gridItem)
    })

    document.addEventListener('load', this.positionGridItems())

  }


  makeGridItem(photo) {
    let gridItem = document.createElement('div')
    gridItem.classList.add('portfolio-grid-item')
    let img = document.createElement("img");
    img.setAttribute('src', '../../assets/photos/' + photo.file)
    //img.classList.add('cover')
    gridItem.appendChild(img)
    return gridItem
  }

}