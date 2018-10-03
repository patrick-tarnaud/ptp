/**
 * Portfolio management
 */
import PortfolioFlexboxView from './porfolio-flexbox-view'
import PortfolioSvc from '../portfolio-svc/portfolio-svc'

export default class PortfolioFlexbox {

  constructor(portfolioElement, modelApp) {
    this.portfolioElement = portfolioElement
    this.modelApp = modelApp
    this.portfolioFlexboxView = new PortfolioFlexboxView(portfolioElement, modelApp)
  }

  run() {
    console.debug('Portfolio run()')
    // call to portofolio service
    let portfolioService = new PortfolioSvc()
    this.modelApp.portfolio = portfolioService.findPhotos()
    this.portfolioFlexboxView.display()
    return this
  }
}