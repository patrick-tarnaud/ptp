/**
 * Portfolio view management
 * 
 * The portfolio is organized in a flex row and four columns
 */
export default class PortfolioView {

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
    <div class='portfolio-row'>
      <div id ='portfolio-col1' class='portfolio-column'></div> 
      <div id ='portfolio-col2' class='portfolio-column'></div> 
      <div id ='portfolio-col3' class='portfolio-column'></div> 
      <div id ='portfolio-col4' class='portfolio-column'></div> 
    </div>
    `
  }

  display() {
    // base template in portfolioNode
    this.portfolioElement.innerHTML = this.template

    // get DOM node for row and columns
    let row = document.querySelector('#portfolio-row')
    let col = []
    for (let i = 0; i < 4; i++) {
      col[i] = document.querySelector('#portfolio-col' + (i + 1))
      console.debug(col[i])
    }

    let index = 0
    this.modelApp.portfolio.forEach(photo => {
      index = (index == 4) ? 0 : index
      let img = document.createElement('img')
      img.setAttribute('src', '/assets/photos/' + photo.thumbnail.file)
      col[index].appendChild(img)
      index++
      //console.log(photo.image.file)
    });
  }
}