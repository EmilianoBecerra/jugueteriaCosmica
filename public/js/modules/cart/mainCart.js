import { cartTemplate } from "../../templates/fragments.templates.js"
import { cuadroCantidades } from "../../templates/fragments.templates.js"


const cart = localStorage.cart ? JSON.parse(localStorage.cart) : []

notificacion()
renderCart()

function renderCart() {
    const total = cart.reduce((acc, producto) => {
        return acc + producto.subtotal
    }, 0)
    document.querySelector("#modal").innerHTML = cartTemplate({ cart, total })

}

function notificacion() {
    var cantidades = cart.reduce((acc, producto) => {
        return acc + producto.cantidad
    }, 0)

    document.querySelector("#notificaciones").innerHTML = cuadroCantidades({ cantidades });
}


function updateStorage() {
    localStorage.cart = JSON.stringify(cart)
}

function updateState() {
    renderCart()
    updateStorage()
    notificacion()
}

document.body.addEventListener("click", async ev => {
    const element = ev.target.closest(".añadirAlCarrito")
    if (element) {

        ev.preventDefault()

        const idProduct = element.getAttribute("idproduct")
        const found = cart.find(producto => producto.id == idProduct)

        if (found) {
            found.cantidad++
            found.subtotal = found.precio * found.cantidad
        }

        else {
            const response = await fetch(`${process.env.APPROUTE}/api/productos/` + idProduct)
            const producto = await response.json()
            producto.cantidad = 1
            producto.subtotal = producto.precio
            cart.push(producto)
        }

        updateState()
    }
})

document.body.addEventListener("click", ev => {
    const element = ev.target.closest(".restarBtn")
    if (element) {

        ev.preventDefault()

        const idProduct = element.getAttribute("idproduct")

        const found = cart.find(producto => producto.id == idProduct)

        if (found) {
            found.cantidad = found.cantidad > 0 ? found.cantidad - 1 : 0
            found.subtotal = found.precio * found.cantidad
        }

        updateState()
    }
})

document.body.addEventListener("click", ev => {
    const element = ev.target.closest(".deleteProduct")
    if (element) {
        ev.preventDefault()

        const idProduct = element.getAttribute("idproduct")

        const found = cart.find(producto => producto.id == idProduct)

        if (found) {
            const findProductIndex = cart.indexOf(found)
            cart.splice(findProductIndex, 1)
        }

        updateState()
    }
})