import { data } from './portfolio-data.js'

export default class PortfolioSvc {

  constructor() {

  }

  findPhotos() {
    return JSON.parse(data)
  }
}