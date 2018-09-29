// Imports JS
import App from "./app/app.js"

// Imports SCSS
import main_scss from "./app/main.scss"
import footer_scss from "./app/footer.scss"
import header_scss from "./app/header.scss"

document.addEventListener('DOMContentLoaded', ready())

let app = null

function ready() {
  app = new App()
}
