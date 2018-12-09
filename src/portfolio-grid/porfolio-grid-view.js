/**
 * Portfolio view management
 * 
 * The portfolio is organized in a grid
 */
// import scss
import portfolio_grid_scss from "./portfolio-grid.scss"

export default class PortfolioGridView {

  /**
   * Constructor 
   * 
   * @param {} portfolioElement DOM element that will contain the portfolio (div)
   * @param {*} modelApp model of the app in which the view will find the portfolio datas
   */
  constructor(portfolioElement, modelApp) {
    // porfolio div
    this.portfolioElement = portfolioElement
    // app model
    this.modelApp = modelApp
    // template for the view
    this.template = `
       <div class='portfolio-grid'>
       </div>`
    // counter for images loaded
    this.imageLoadedCount = 0;
  }

  /**
   * Position images correctly in the grid
   * 
   * When images are loaded in portfolio they recover other images due to a row size fixed to 1 px (grid-auto-rows: 1px in css)
   * The method calculate the rowspan to correctly display images and apply it to grid item divs
   */
  positionGridItems() {

    // initializations

    let grid = this.portfolioElement.querySelector('.portfolio-grid')
    // grid-gap doesn't work in Firefox (value fixed to 4)
    // grid-gap is the space between lines and columns
    let rowGap = parseInt(getComputedStyle(grid).getPropertyValue('grid-gap')) || 4
    let rowSize = parseInt(getComputedStyle(grid).getPropertyValue('grid-auto-rows'))

    /*
    * gridItem loop
    *   gridItem rowspan computing to fit image
    *   gridItem rowspan modification 
    */


    let gridItems = grid.querySelectorAll('.portfolio-grid-item')
    let img
    Array.from(gridItems).forEach(gridItem => {
      img = gridItem.querySelector('img')

      const rowSpan = Math.ceil((img.offsetHeight + rowGap) / (rowSize + rowGap))
      gridItem.style.setProperty("--row-span", rowSpan)
    })
  }

  /**
   * Display the view
   * 
   * Make grid items (div and image) from the model portfolio
   * Add a listener to resize event to call positionGridItems to correctly size images
   */
  display() {
    this.imageLoadedCount = 0;
    this.portfolioElement.innerHTML = this.template
    let grid = this.portfolioElement.querySelector('.portfolio-grid')

    let gridItem
    this.modelApp.portfolio.forEach(photo => {
      gridItem = this.makeGridItem(photo)
      grid.appendChild(gridItem)
    })

    window.addEventListener('resize', () => this.positionGridItems())
  }

  /**
   * Construct a grid item from a photo
   * 
   * @param {object} photo 
   */
  makeGridItem(photo) {

    // grid item construction
    let gridItem = document.createElement('div')
    gridItem.classList.add('portfolio-grid-item')

    let img = document.createElement("img");
    img.setAttribute('src', '/assets/photos/' + photo.file)
    gridItem.appendChild(img)

    let slider = document.createElement('div')
    slider.classList.add('slider')
    let title = document.createElement('p')
    title.classList.add('title')
    title.innerText = photo.title
    slider.appendChild(title)
    gridItem.appendChild(slider)

    // add an image loaded listener to count loaded images
    img.addEventListener('load', () => this.imageLoaded())

    gridItem.addEventListener('mouseover', (e) => {
      let title = e.target.parentElement.querySelector('.title')
      title.classList.add('visible')
      console.log(title.textContent)
    }
    )

    gridItem.addEventListener('mouseout', (e) => {
      let title = e.target.parentElement.querySelector('.title')
      title.classList.remove('visible')
    }
    )

    return gridItem
  }

  /**
   * Count images loaded
   * 
   * If all images are loaded then position grid items
   */
  imageLoaded() {
    let imageToLoadCount = this.modelApp.portfolio.length
    this.imageLoadedCount++

    if (this.imageLoadedCount == imageToLoadCount) {
      this.positionGridItems()
    }
  }

}