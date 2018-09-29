/**
 * Portfolio management
 */
import PortfolioView from './porfolio-view'
import PortfolioSvc from './portfolio-svc'

// import scss
import portfolio_scss from "./portfolio.scss"

export default class Portfolio {

  constructor(portfolioNode, modelApp) {
    this.portfolioNode = portfolioNode
    this.modelApp = modelApp
    this.portfolioView = new PortfolioView(portfolioNode, modelApp)
  }

  run() {
    console.debug('Portfolio run()')
    // call to portofolio service
    let portfolioService = new PortfolioSvc()
    this.modelApp.portfolio = portfolioService.findPhotos()
    this.portfolioView.display()
    return this
  }
}