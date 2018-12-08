import { data } from './portfolio-data.js'
import axios from 'axios'

const urlPhoto = 'https://ptp-backend-224022.appspot.com/photos'

export default class PortfolioSvc {

  constructor() {

  }

  async findPhotos() {
    let photos = await axios.get(urlPhoto)
    return photos.data
  }
}