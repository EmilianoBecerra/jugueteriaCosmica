import { addRoute } from "./modules/spaLibrary/index.js"
import {productosTemplate, altaTemplate, contactoTemplate, pagarTemplate} from "./templates/pages.template.js"
import {añadirEventosForm} from "./modules/events/form/eventosForm.js"
import "./modules/cart/eventoModal.js"
import "./modules/cart/mainCart.js"
import { required } from "./modules/events/form/eventosForm.js"
import {deleteStorage,addCartBD } from './modules/events/cart/eventosCart.js'

addRoute("/", async () => {
    const response = await fetch(`${process.env.URL_PAGE}/api/productos`)
    const productos = await response.json()
    document.querySelector("main").innerHTML = productosTemplate({productos})
})

addRoute("/productos", async () => {
    const response = await fetch(`${process.env.URL_PAGE}/api/productos`)
    const productos = await response.json()
    document.querySelector("main").innerHTML = productosTemplate({productos})
})

addRoute("/alta", () => {
    document.querySelector("main").innerHTML = altaTemplate()
    required()
    añadirEventosForm()
})

addRoute("/contacto", () => {
    document.querySelector("main").innerHTML = contactoTemplate()
})


addRoute("/pagar", ()=>{
    const cart = localStorage.cart ? JSON.parse(localStorage.cart) : []
    const total = cart.reduce((acc, producto)=>{
        return acc+producto.subtotal
    },0) 
    document.querySelector('main').innerHTML = pagarTemplate({cart, total});
    addCartBD()
    deleteStorage();
})
