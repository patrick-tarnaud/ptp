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
    this.imageLoadedCount = 0;
  }

  positionGridItems() {
    console.log('positionGridItems')
    let grid = this.portfolioElement.querySelector('.portfolio-grid')
    // grid-gap doesn't work in Firefox (value fixed to 4)
    let rowGap = parseInt(getComputedStyle(grid).getPropertyValue('grid-gap')) || 4
    let rowSize = parseInt(getComputedStyle(grid).getPropertyValue('grid-auto-rows'))

    /*
    * gridItem loop
    *   gridItem rowspan computing to fit image
    *   gridItem rowspan modification 
    */


    let gridItems = grid.querySelectorAll('.portfolio-grid-item')
    Array.from(gridItems).forEach(gridItem => {
      let img = gridItem.querySelector('img')
      //img.classList.remove("cover")

      const rowSpan = Math.ceil(
        (img.offsetHeight + rowGap) / (rowSize + rowGap)
      )
      gridItem.style.setProperty("--row-span", rowSpan)
      //img.classList.add("cover")
    })
  }

  display() {
    this.imageLoadedCount = 0;
    this.portfolioElement.innerHTML = this.template
    let grid = this.portfolioElement.querySelector('.portfolio-grid')

    let gridItem
    let img
    this.modelApp.portfolio.forEach(photo => {
      gridItem = this.makeGridItem(photo)
      grid.appendChild(gridItem)
    })

    window.addEventListener('resize', () => this.positionGridItems())
  }


  makeGridItem(photo) {
    let gridItem = document.createElement('div')
    gridItem.classList.add('portfolio-grid-item')
    let img = document.createElement("img");
    img.setAttribute('src', '../../assets/photos/' + photo.file)
    img.addEventListener('load', () => this.imageLoaded())
    //img.classList.add('cover')
    gridItem.appendChild(img)
    return gridItem
  }

  imageLoaded() {
    let imageToLoadCount = this.modelApp.portfolio.length
    this.imageLoadedCount++
    console.log('this.imageLoadedCount : ', this.imageLoadedCount)
    if (this.imageLoadedCount == imageToLoadCount) {
      setTimeout(() => window.dispatchEvent(new Event('resize')), 50)
    }
  }

}