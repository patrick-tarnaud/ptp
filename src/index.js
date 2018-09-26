// Imports JS
import App from "./js/app.js"

// Imports SCSS
import main from "./scss/main.scss"
import footer_scss from "./scss/footer.scss"
import header_scss from "./scss/header.scss"

document.addEventListener('DOMContentLoaded', initialization())

let app = null

function initialization() {
  app = new App()
}
