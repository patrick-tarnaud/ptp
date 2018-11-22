import { data } from './portfolio-data.js'
import axios from 'axios'

export default class PortfolioSvc {

  constructor() {

  }

  async findPhotos() {
    let photos = await axios.get('http://localhost:8080/photos')
    return photos.data
  }
}