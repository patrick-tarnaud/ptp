/**
 * Portfolio management
 */
import PortfolioFlexcolView from './porfolio-flexcol-view'
import PortfolioSvc from '../portfolio-svc/portfolio-svc'



export default class Portfolio {

  constructor(portfolioElement, modelApp) {
    this.portfolioElement = portfolioElement
    this.modelApp = modelApp
    this.portfolioFlexcolView = new PortfolioFlexcolView(portfolioElement, modelApp)
  }

  run() {
    // call to portofolio service
    let portfolioService = new PortfolioSvc()
    this.modelApp.portfolio = portfolioService.findPhotos()
    this.portfolioFlexcolView.display()
    return this
  }
}