/**
 * Portfolio management
 */
import PortfolioGridView from './porfolio-grid-view'
import PortfolioSvc from '../portfolio-svc/portfolio-svc'

export default class PortfolioGrid {

  constructor(portfolioElement, modelApp) {
    this.portfolioElement = portfolioElement
    this.modelApp = modelApp
    this.portfolioGridView = new PortfolioGridView(portfolioElement, modelApp)
  }

  async run() {
    // call to portofolio service
    let portfolioService = new PortfolioSvc()
    this.modelApp.portfolio = await portfolioService.findPhotos()
    this.portfolioGridView.display()

    return this
  }
}