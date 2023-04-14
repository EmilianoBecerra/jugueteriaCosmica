import { addRoute } from "./modules/spaLibrary/index.js"
import {productosTemplate, altaTemplate, contactoTemplate} from "./templates/pages.template.js"
import {añadirEventosForm} from "./modules/events/form/eventosForm.js"
import "./modules/cart/eventoModal.js"
import "./modules/cart/mainCart.js"
import { required } from "./modules/events/form/eventosForm.js"

addRoute("/", async () => {
    const response = await fetch("http://localhost:8080/api/productos")
    const productos = await response.json()
    document.querySelector("main").innerHTML = productosTemplate({productos})
})

addRoute("/productos", async () => {
    const response = await fetch("http://localhost:8080/api/productos")
    const productos = await response.json()
    document.querySelector("main").innerHTML = productosTemplate({productos})
})

addRoute("/login", ()=>{
    document.querySelector("main").innerHTML = loginTemplate()
    validacionLogin()
})

addRoute("/alta", () => {
    document.querySelector("main").innerHTML = altaTemplate()
    required()
    añadirEventosForm()
})

addRoute("/contacto", () => {
    document.querySelector("main").innerHTML = contactoTemplate()
})

