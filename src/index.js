// Imports JS
import header from "./header"
import App from "./app.js"

// Imports SCSS
import main from "./main.scss"
import footer_scss from "./footer.scss"
import header_scss from "./header.scss"

document.addEventListener('DOMContentLoaded', initialization())

let app = null

function initialization() {
  app = new App()
}
